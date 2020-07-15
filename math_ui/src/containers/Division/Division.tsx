import React from 'react';
import { connect } from 'react-redux';
import ProblemNumber from '../../components/ProblemNumber';
import SheetSelect from '../../components/SheetSelect';
import { updateProblemNumber, updateNumberOfDigits, updateSheetNumber } from '../../actions/divisionActions';
import { typedAction } from '../../actions/types';
import { ApplicationState } from '../../reducers';
import { Direction } from '../../constants/directions';
import NumberOfDigits from '../../components/NumberOfDigits';
import Button from '@material-ui/core/Button';
import { generateDivision } from '../../utils/divisionGenerator';
import axios from 'axios';
import config from '../../config.json';

interface DivisionPageProps {
    problemValue: string;
    problemDirection: Direction;
    digitValue: string;
    updateProblemNumber: (value: string) => typedAction;
    updateProblemDirection: (value: Direction) => typedAction;
    updateNumberOfDigits: (value: string) => typedAction;
    sheetNumber: number;
    updateSheetNumber: (value: number) => typedAction;
}

const DivisionPage: React.FC<DivisionPageProps> = ({
    problemValue,
    problemDirection,
    digitValue,
    updateProblemNumber,
    updateNumberOfDigits,
    sheetNumber,
    updateSheetNumber,
}: DivisionPageProps) => {
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
            const problems = generateDivision(digitValue, parseInt(problemValue, 10));
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
    problemValue: state.divisionData.problemNumber,
    problemDirection: state.divisionData.problemDirection!,
    digitValue: state.divisionData.digitNumber,
    sheetNumber: state.divisionData.sheetNumber,
});

const mapDispatchToProps = {
    updateProblemNumber,
    updateNumberOfDigits,
    updateSheetNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(DivisionPage);
