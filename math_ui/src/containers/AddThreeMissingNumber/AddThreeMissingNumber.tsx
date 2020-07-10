import React from 'react';
import { connect } from 'react-redux';
import ProblemNumber from '../../components/ProblemNumber';
import SheetSelect from '../../components/SheetSelect';
import { updateProblemNumber, updateNumberOfDigits, updateSheetNumber } from '../../actions/addThreeNumbersMNActions';
import { typedAction } from '../../actions/types';
import { ApplicationState } from '../../reducers';
import NumberOfDigits from '../../components/NumberOfDigits';
import Button from '@material-ui/core/Button';
import { generateThreeMissingNumbers } from '../../utils/addThreeNumbersMNGenerator';
import axios from 'axios';
import config from '../../config.json';

interface AddThreeMissingNumberProps {
    updateProblemNumber: (value: string) => typedAction;
    updateNumberOfDigits: (value: string) => typedAction;
    problemValue: string;
    digitValue: string;
    sheetNumber: number;
    updateSheetNumber: (value: number) => typedAction;
}

const AddThreeMissingNumber: React.FC<AddThreeMissingNumberProps> = ({
    problemValue,
    digitValue,
    updateProblemNumber,
    updateNumberOfDigits,
    sheetNumber,
    updateSheetNumber,
}: AddThreeMissingNumberProps) => {
    const handleProblemNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateProblemNumber(event.target.value);
    };

    const handleDigitValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateNumberOfDigits(event.target.value);
    };

    const handleSheetNumberChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        updateSheetNumber(event.target.value as number);
    };

    const handleClickCreate = () => {
        const generateProblems = (all: string[]) => {
            const problems = generateThreeMissingNumbers(digitValue, parseInt(problemValue, 10));
            all = [...all, ...problems];
            return all;
        };
        const allProblems: string[] = Array.from(Array(sheetNumber).keys()).reduce(generateProblems, []);

        axios
            .post(config.PDFGeneratorEndpoint, {
                equations: allProblems,
                template: '3num',
                countPerPage: parseInt(problemValue, 10),
            })
            .then((resp) => {
                window.open(resp.data);
            });
    };

    return (
        <>
            <div className="mt-5">
                <ProblemNumber problemValue={problemValue} onProblemNumberChange={handleProblemNumberChange} />
            </div>

            <div className="mt-4">
                <NumberOfDigits digitValue={digitValue} onDigitChange={handleDigitValueChange} />
            </div>

            <div className="mt-4">
                <SheetSelect sheetValue={sheetNumber} onValueChange={handleSheetNumberChange} />
            </div>

            <div className="mt-4">
                {' '}
                <Button variant="contained" color="primary" onClick={handleClickCreate}>
                    Create
                </Button>
            </div>
        </>
    );
};

const mapStateToProps = (state: ApplicationState) => ({
    problemValue: state.addThreeNumbersMNData.problemNumber,
    digitValue: state.addThreeNumbersMNData.digitNumber,
    sheetNumber: state.addMinusThreeNumbersData.sheetNumber,
});

const mapDispatchToProps = {
    updateProblemNumber,
    updateNumberOfDigits,
    updateSheetNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddThreeMissingNumber);
