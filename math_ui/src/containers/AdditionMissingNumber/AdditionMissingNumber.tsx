import React from 'react';
import { connect } from 'react-redux';
import NumberRange from '../../components/NumberRange';
import {
    updateProblemNumber,
    updateFromValue,
    updateToValue,
    updateRestrictions,
    updateSheetNumber,
} from '../../actions/additionMNActions';
import { typedAction } from '../../actions/types';
import { ApplicationState } from '../../reducers';
import { Direction } from '../../constants/directions';
import { LOWER_RANGE, UPPER_RANGE } from '../../constants/ranges';
import ProblemNumber from '../../components/ProblemNumber';
import SheetSelect from '../../components/SheetSelect';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import * as filters from '../../constants/filters';
import { generateAdditionMN } from '../../utils/additionMNGenerator';
import { selectDisableCreateBtn } from '../../selectors/additionMNSelector';
import axios from 'axios';
import config from '../../config.json';

interface AdditionMNPageProps {
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

const AdditionMNPage: React.FC<AdditionMNPageProps> = ({
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
    updateRestrictions,
    updateSheetNumber,
    disableCreateBtn,
    restrictionsCheckedArr,
}: AdditionMNPageProps) => {
    const restrictions = [{ key: filters.SUBTRAHEND_LESSTHAN_10, label: 'Subtrahend less than 10' }];

    const handleFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateFromValue(event.target.value);
    };

    const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateToValue(event.target.value);
    };

    const handleProblemNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateProblemNumber(event.target.value);
    };

    const handleSheetNumberChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        updateSheetNumber(event.target.value as number);
    };

    const handleClickCreate = () => {
        const generateProblems = (all: string[]) => {
            const problems = generateAdditionMN(
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
    problemValue: state.additionMNData.problemNumber,
    problemDirection: state.additionMNData.problemDirection,
    fromValue: state.additionMNData.fromValue,
    toValue: state.additionMNData.toValue,
    isFromValueError: state.additionMNData.isFromValueError,
    isToValueError: state.additionMNData.isToValueError,
    restrictionsCheckedArr: state.additionMNData.restrictionsChecked,
    sheetNumber: state.additionMNData.sheetNumber,
    disableCreateBtn: selectDisableCreateBtn(state),
});

const mapDispatchToProps = {
    updateProblemNumber,
    updateFromValue,
    updateToValue,
    updateRestrictions,
    updateSheetNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionMNPage);
