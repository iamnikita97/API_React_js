import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { START_AUTHENTICATE } from '../actions/action_index';
import { setDataInLocalStorage } from '../api';
import Alert from '@material-ui/lab/Alert'; 

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '3px solid black',
        paddingBottom: '19px',
        paddingTop: '14px',
        paddingLeft: '26px',
        paddingRight: '26px',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: 'black',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Login(props) {
    const classes = useStyles();
    const [state, setState] = useState({
        userMobile: '7567608927',
        password: '123456'
    })

    const {
        access_token,
        dispatchauthenticate,
        isLoading,
        loggedInUserData,
        isLoggedIn,
        errorMessage,
        isError
    } = props;

    if (isLoggedIn) {
        setDataInLocalStorage('cesan_obike', loggedInUserData);
        setDataInLocalStorage('cesan_obike_token', loggedInUserData.token);
    }
    // console.log(loggedInUserData.token);

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatchauthenticate(state.userMobile, state.password);
        console.log(state);
    }

    return (
        access_token
            ?
            <Redirect to={'/dashboard'} />
            :
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="userMobile"
                                    label="User Mobile"
                                    name="userMobile"
                                    value={state.userMobile}
                                    onChange={handleChange}
                                    autoComplete="userMobile"
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={state.password}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        {isError &&
                            <div className="c-error" >
                                <Alert variant="filled" severity="error">
                                    {errorMessage}
                                </Alert>
                            </div>

                        }
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSubmit}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Please wait...' : 'Login'}
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <NavLink to='/registration'>
                                    Not have an account? Register here

                                </NavLink>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
    );
}

const mapStateToProps = (state) => ({
    access_token: state.user.loggedInUserData.token,
    isLoading: state.user.isLoading,
    loggedInUserData: state.user.loggedInUserData,
    isLoggedIn: state.user.isLoggedIn,
    errorMessage: state.user.errorMessage,
    isError: state.user.isError
})

const mapDispatchToProps = (dispatch) => ({
    dispatchauthenticate: (userMobile, password) => dispatch({
        type: START_AUTHENTICATE,
        userMobile,
        password,
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)