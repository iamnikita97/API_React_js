import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import EventIcon from '@material-ui/icons/Event';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import { REGISTRATION_START, REGISTRATION_REDUX_CLEANUP } from '../actions/action_registration';
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
        backgroundColor: 'black'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),

    },
    submit: {
        margin: theme.spacing(3, 0, 2),

    },
}));

function Registration(props) {
    const classes = useStyles();
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        countrycode: '',
        userMobile: '',
        email: '',
        password: '',
    })

    const {
        dispatchregistrationcleanup,
        dispatchregistration,
        isLoading,
        registerUserData,
        isRegCompleted,
        errorMessage,
        isError,
        isBtndisabled
    } = props;

    useEffect((registerUserData) => {
        console.log("unmount")
        console.log('Init clean up process');
        setTimeout(() => {
            dispatchregistrationcleanup();
        }, 2050);
    }, [registerUserData]);

    //console.log(isRegCompleted, "Is reg completed?");
    console.log(isError);
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatchregistration(state.firstName,
            state.lastName,
            state.countrycode,
            state.userMobile,
            state.email,
            state.password);
    }

    if (isRegCompleted) {
        setTimeout(() => {
            props.history.push('/')
        }, 2000);
    }
    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <EventIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registration
        </Typography>
                <form className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="firstName"
                                label="First Name"
                                name="firstName"
                                autoComplete="firstName"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="lastName"
                                label="Last Name"
                                id="lastName"
                                autoComplete="lastName"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="countrycode"
                                label="Country Code"
                                id="countrycode"
                                autoComplete="countrycode"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="userMobile"
                                label="User Mobile"
                                id="userMobile"
                                autoComplete="userMobile"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="email"
                                label="Email"
                                id="email"
                                autoComplete="email"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="password"
                                label="Password"
                                id="password"
                                type="password"
                                autoComplete="password"
                                onChange={handleChange}
                            />

                        </Grid>

                        {/* isError */}
                        {errorMessage &&
                            <Grid item xs={12} sm={12}>
                                <div className="c-error" >
                                    <Alert variant="filled" severity={isError ? 'error' : 'success'}>
                                        {errorMessage}
                                    </Alert>
                                </div>
                            </Grid>
                        }
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                        disabled={isLoading || isBtndisabled}
                    >
                        {isLoading ? 'Please wait...' : 'Sign Up'}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <NavLink to='/'>
                                Already have an account? Log in
                            </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

//Data coming from reducer
const mapStateToProps = (state) => ({
    isLoading: state.registrationUser.isLoading,
    registerUserData: state.registrationUser.registerUserData,
    isRegCompleted: state.registrationUser.isRegCompleted,
    errorMessage: state.registrationUser.errorMessage,
    isError: state.registrationUser.isError,
    isBtndisabled: state.registrationUser.isBtndisabled
})

//Sending data to Reducer
const mapDispatchToProps = (dispatch) => ({

    dispatchregistration: (first_name, last_name, country_code, user_mobile, email, password) => dispatch({
        type: REGISTRATION_START,
        first_name,
        last_name,
        country_code,
        user_mobile,
        email,
        password,
    }),

    dispatchregistrationcleanup: () => dispatch({
        type: REGISTRATION_REDUX_CLEANUP
    })

})

export default connect(mapStateToProps, mapDispatchToProps)(Registration)