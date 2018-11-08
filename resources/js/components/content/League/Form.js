import React from "react";

import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";



import { FilePond, File, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
// Import the plugin code
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

// Import the plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';


registerPlugin(FilePondPluginImagePreview);



const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});


export const Form = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;




    const styles = theme => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        formControl: {
            margin: theme.spacing.unit,
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing.unit * 2,
        },
    });


    return <form onSubmit={props.handleSubmit}>
        <TextField
            id="name"
            name="name"
            label="Name"
            value={props.getLeagueData().name || ""}
            onChange={props.handleChange} fullWidth
            data-texttype='Text'
        />
        <FilePond server="api/uploadLeagueImage" />

        <FormControl style={styles.formControl}
            fullWidth
        >
            <InputLabel htmlFor="age-helper">League DB</InputLabel>
            <Select id="playerDatabase" onChange={props.handleChange} value={props.getLeagueData().age || ""} input={<Input name="age" id="age-helper" />}>
                <MenuItem>
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>This is the player DB</FormHelperText>
        </FormControl>


        <FormControlLabel
            control={
                <Checkbox name="salaryCap"
                    onChange={props.handleChange}
                    value={(props.getLeagueData().salaryCap = true ? "1" : "0")}
                />
            }
            label="Salary Cap?"
        />
        <FormControl
            fullWidth
        >
            <InputLabel htmlFor="adornment-amount">Cap Ceiling</InputLabel>
            <Input
                name="salaryCapCeiling"
                id=""
                data-texttype='Currency'
                value={props.getLeagueData().salaryCapCeiling || ""}
                onChange={props.handleChange}

            />
        </FormControl>
        <FormControl
            fullWidth
        >
            <InputLabel htmlFor="adornment-amount">Cap Floor</InputLabel>
            <Input
                name="salaryCapFloor"
                id=""
                data-texttype='Currency'
                value={props.getLeagueData().salaryCapFloor || ""}
                onChange={props.handleChange}

            />
        </FormControl>


        <Button type="submit" fullWidth variant="raised" color="primary">
            Submit
            </Button>
    </form>;
};