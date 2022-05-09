#!/bin/sh

PYTHON_VERION=3.9

SRC=/source
DEST_FILE=${SRC}/deploy.zip

rm -f ${DEST_FILE}

WORK_DIR=`mktemp -d -p /tmp`
cp ${SRC}/* ${WORK_DIR} -r 

PYENV_DIR=`mktemp -d -p /tmp`

# check if tmp dir was created
if [[ ! "$WORK_DIR" || ! -d "$WORK_DIR" ]]; then
    echo "Could not create temp dir"
    exit 1
fi

# deletes the temp directory
function cleanup { 
    rm -rf "$WORK_DIR"
    rm -rf "$PYENV_DIR"
}

# register the cleanup function to be called on the EXIT signal
trap cleanup EXIT

python3.9 -m venv ${PYENV_DIR}

cd ${WORK_DIR}

source $PYENV_DIR/bin/activate

rm -f ${SRC}/deploy.zip

# Install and copy dependencies, if any;
if [ -f ./requirements.txt ]; then
    if [ -z "$MINIMIZE" ]; then
        echo "Creating full package"
        pip install -r requirements.txt --disable-pip-version-check --no-cache-dir
    else 
        echo "Creating minimized package by removing boto3, pip, and setuptools"

        ## User wants to minimize the package.
        # Remove boto3 from the requirements because lambda runtime already
        # has it

        sed '/boto3/d' ./requirements.txt >/tmp/reduced_req.txt
        pip install -r /tmp/reduced_req.txt --disable-pip-version-check --no-cache-dir

        # Remove pip and setup_tools because user may not need
        # to further install packages at run time.

        rm -rf $PYENV_DIR/lib/python${PYTHON_VERION}/site-packages/pip
        rm -rf $PYENV_DIR/lib/python${PYTHON_VERION}/site-packages/setup_tools
    fi
    cd $PYENV_DIR/lib/python${PYTHON_VERION}/site-packages
    zip -r9q ${DEST_FILE} .
else
    echo "requirements.txt does not exist. Assuming no dependencies.."
fi

cd ${WORK_DIR}
zip -r9q ${DEST_FILE} ./*

echo "Finiishing generating deploy.zip"