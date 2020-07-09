import React from 'react';
import { connect } from 'react-redux';
import NumberRange from '../../components/NumberRange';
import {
    updateProblemNumber,
    updateProblemDirection,
    updateFromValue,
    updateToValue,
    updateRestrictions,
    updateSheetNumber,
} from '../../actions/additionActions';
import { typedAction } from '../../actions/types';
import { ApplicationState } from '../../reducers';
import { LOWER_RANGE, UPPER_RANGE } from '../../constants/ranges';
import ProblemNumber from '../../components/ProblemNumber';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ProblemDirection from '../../components/ProblemDirection';
import SheetSelect from '../../components/SheetSelect';
import { Direction } from '../../constants/directions';
import * as filters from '../../constants/filters';
import { generateAddition } from '../../utils/additionGenerator';
import { selectDisableCreateBtn } from '../../selectors/additionSelector';
import axios from 'axios';
import config from '../../config.json';

interface AdditionPageProps {
    fromValue: string;
    toValue: string;
    updateFromValue: (value: string) => typedAction;
    updateToValue: (value: string) => typedAction;
    isFromValueError: boolean;
    isToValueError: boolean;
    problemValue: string;
    problemDirection: Direction;
    sheetNumber: number;
    updateProblemNumber: (value: string) => typedAction;
    updateProblemDirection: (value: Direction) => typedAction;
    updateRestrictions: (checkboxName: string, value: boolean) => typedAction;
    updateSheetNumber: (value: number) => typedAction;
    disableCreateBtn: boolean;
    restrictionsCheckedArr: string[];
}

const AdditionPage: React.FC<AdditionPageProps> = ({
    fromValue,
    toValue,
    updateFromValue,
    updateToValue,
    isFromValueError,
    isToValueError,
    problemValue,
    problemDirection,
    sheetNumber,
    updateProblemNumber,
    updateProblemDirection,
    updateRestrictions,
    updateSheetNumber,
    disableCreateBtn,
    restrictionsCheckedArr,
}: AdditionPageProps) => {
    const restrictions = [
        {
            key: filters.SMALL_ADDEND_LESSTHAN_10,
            label: 'Smaller addend less than 10',
        },
    ];

    const handleFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateFromValue(event.target.value);
    };

    const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateToValue(event.target.value);
    };

    const handleProblemNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateProblemNumber(event.target.value);
    };

    const handleProblemDirectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateProblemDirection(event.target.value as Direction);
    };

    const handleSheetNumberChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        updateSheetNumber(event.target.value as number);
    };

    const handleClickCreate = () => {
        const generateProblems = (all: string[]) => {
            const problems = generateAddition(
                parseInt(fromValue, 10),
                parseInt(toValue, 10),
                parseInt(problemValue, 10),
                restrictionsCheckedArr,
            );
            all = [...all, ...problems];
            return all;
        };
        const allProblems: string[] = Array.from(Array(sheetNumber).keys()).reduce(generateProblems, []);

        axios
            .post(config.PDFGeneratorEndpoint, {
                equations: allProblems,
                template: problemDirection,
                countPerPage: parseInt(problemValue, 10),
            })
            .then((resp) => {
                window.open(resp.data);
            });
    };

    const handleRestrictionsCheckboxChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        updateRestrictions(name, event.target.checked);
    };

    return (
        <>
            <NumberRange
                lower={LOWER_RANGE}
                upper={UPPER_RANGE}
                fromValue={fromValue}
                toValue={toValue}
                onFromChange={handleFromChange}
                onToChange={handleToChange}
                isFromValueError={isFromValueError}
                isToValueError={isToValueError}
            />

            <div className="mt-5">
                <ProblemNumber problemValue={problemValue} onProblemNumberChange={handleProblemNumberChange} />
            </div>

            <div className="mt-4">
                <ProblemDirection
                    problemDirection={problemDirection}
                    onDirectionchange={handleProblemDirectionChange}
                />
            </div>

            <div className="mt-4">
                <FormLabel component="legend">Restrictions</FormLabel>
                <FormGroup>
                    {restrictions.map((item) => (
                        <FormControlLabel
                            key={item.key}
                            control={
                                <Checkbox
                                    checked={restrictionsCheckedArr.includes(item.key)}
                                    onChange={handleRestrictionsCheckboxChange(item.key)}
                                    color="primary"
                                />
                            }
                            label={item.label}
                        />
                    ))}
                </FormGroup>
            </div>

            <div className="mt-4">
                <SheetSelect sheetValue={sheetNumber} onValueChange={handleSheetNumberChange} />
            </div>

            <div className="mt-4">
                {' '}
                <Button variant="contained" color="primary" disabled={disableCreateBtn} onClick={handleClickCreate}>
                    Create
                </Button>
            </div>
        </>
    );
};

const mapStateToProps = (state: ApplicationState) => ({
    problemValue: state.additionData.problemNumber,
    problemDirection: state.additionData.problemDirection,
    fromValue: state.additionData.fromValue,
    toValue: state.additionData.toValue,
    isFromValueError: state.additionData.isFromValueError,
    isToValueError: state.additionData.isToValueError,
    restrictionsCheckedArr: state.additionData.restrictionsChecked,
    sheetNumber: state.additionData.sheetNumber,
    disableCreateBtn: selectDisableCreateBtn(state),
});

const mapDispatchToProps = {
    updateProblemNumber,
    updateProblemDirection,
    updateFromValue,
    updateToValue,
    updateRestrictions,
    updateSheetNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionPage);
