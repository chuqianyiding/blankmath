import React from 'react';
import { connect } from 'react-redux';
import ProblemNumber from '../../components/ProblemNumber';
import SheetSelect from '../../components/SheetSelect';
import {
    updateProblemNumber,
    updateNumberOfDigits,
    updateProblemDirection,
    updateSheetNumber,
} from '../../actions/multiplicationActions';
import { typedAction } from '../../actions/types';
import { ApplicationState } from '../../reducers';
import { Direction } from '../../constants/directions';
import NumberOfDigits from '../../components/NumberOfDigits';
import Button from '@material-ui/core/Button';
import { generateMultiplication } from '../../utils/multiplicationGenerator';
import ProblemDirection from '../../components/ProblemDirection';
import axios from 'axios';
import config from '../../config.json';

interface MultiplicationPageProps {
    problemValue: string;
    problemDirection: Direction;
    digitValue: string;
    updateProblemNumber: (value: string) => typedAction;
    updateProblemDirection: (value: Direction) => typedAction;
    updateNumberOfDigits: (value: string) => typedAction;
    sheetNumber: number;
    updateSheetNumber: (value: number) => typedAction;
}

const MultiplicationPage: React.FC<MultiplicationPageProps> = ({
    problemValue,
    problemDirection,
    digitValue,
    updateProblemNumber,
    updateProblemDirection,
    updateNumberOfDigits,
    sheetNumber,
    updateSheetNumber,
}: MultiplicationPageProps) => {
    const handleProblemNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateProblemNumber(event.target.value);
    };

    const handleDigitValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateNumberOfDigits(event.target.value);
    };

    const handleProblemDirectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateProblemDirection(event.target.value as Direction);
    };

    const handleSheetNumberChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        updateSheetNumber(event.target.value as number);
    };

    const handleClickCreate = () => {
        const generateProblems = (all: string[]) => {
            const problems = generateMultiplication(digitValue, parseInt(problemValue, 10));
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

    return (
        <>
            <div className="mt-5">
                <ProblemNumber problemValue={problemValue} onProblemNumberChange={handleProblemNumberChange} />
            </div>

            <div className="mt-4">
                <NumberOfDigits digitValue={digitValue} onDigitChange={handleDigitValueChange} />
            </div>

            <div className="mt-4">
                <ProblemDirection
                    problemDirection={problemDirection}
                    onDirectionchange={handleProblemDirectionChange}
                />
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
    problemValue: state.multiplicationData.problemNumber,
    problemDirection: state.multiplicationData.problemDirection!,
    digitValue: state.multiplicationData.digitNumber,
    sheetNumber: state.multiplicationData.sheetNumber,
});

const mapDispatchToProps = {
    updateProblemNumber,
    updateNumberOfDigits,
    updateProblemDirection,
    updateSheetNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiplicationPage);
