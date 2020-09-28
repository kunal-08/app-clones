import React, {useEffect, useState} from 'react';
import "../css/SignUp.css"
import {Button, Input} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function SignUp() {

    return (
        <div className="signup">
            <div className="signup__main">

                <div className="row signup__header">
                    <h2>Sign Up</h2>
                </div>

                <form>
                    <FormControl variant="outlined" color="primary">
                        <InputLabel htmlFor="component-outlined">Mobile No.</InputLabel>
                        <OutlinedInput id="component-outlined" label="Mobile No."/>
                    </FormControl>

                    <FormControl variant="outlined" color="primary">
                        <InputLabel htmlFor="component-outlined">Password</InputLabel>
                        <OutlinedInput id="component-outlined" label="Password"/>
                    </FormControl>

                    <div className="signup__footer">
                        <Button>Sign Up</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
