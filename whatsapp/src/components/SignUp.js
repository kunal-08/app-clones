import React, {useEffect, useState} from 'react';
import "../css/SignUp.css"
import {Button, Input} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Container from "@material-ui/core/Container";

function SignUp() {

    return (
        <div className="signup">
            <div className="signup__main">

                <Container>
                    <div className="signup__header">
                        <h2>Sign Up</h2>
                    </div>
                </Container>

                <form>

                    <Container className="signup__container">
                        <FormControl variant="outlined" color="primary">
                            <InputLabel htmlFor="component-outlined">Name</InputLabel>
                            <OutlinedInput id="component-outlined" label="Name"/>
                        </FormControl>
                    </Container>

                    <Container className="signup__container">
                        <FormControl variant="outlined" color="primary">
                            <InputLabel htmlFor="component-outlined">Mobile No.</InputLabel>
                            <OutlinedInput id="component-outlined" label="Mobile No."/>
                        </FormControl>
                    </Container>

                    <Container className="signup__container">
                        <FormControl variant="outlined" color="primary">
                            <InputLabel htmlFor="component-outlined">Password</InputLabel>
                            <OutlinedInput id="component-outlined" label="Password"/>
                        </FormControl>
                    </Container>

                    <Container className="signup__container">
                        <div className="signup__button">
                            <Button type="submit" variant="contained" color="primary">Sign Up</Button>
                        </div>
                    </Container>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
