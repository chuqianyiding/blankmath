import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        menuPaper: {
            maxHeight: 200,
        },
    }),
);

const pages: number[] = Array.from(Array(50), (_, i) => i + 1);

interface SheetSelectProps {
    sheetValue: number;
    onValueChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}
const SheetSelect: React.FC<SheetSelectProps> = ({ sheetValue, onValueChange }: SheetSelectProps) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <FormControl>
            <FormLabel component="legend">Number of Sheets</FormLabel>
            <Select
                labelId="controlled-open-select-label"
                id="controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={sheetValue}
                onChange={onValueChange}
                MenuProps={{ classes: { paper: classes.menuPaper } }}
            >
                {pages.map((item) => (
                    <MenuItem key={`mi_${item}`} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SheetSelect;
