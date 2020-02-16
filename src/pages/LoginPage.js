import React from 'react';
import {Card, CardContent, withStyles, TextField, Grid, Button, FormControlLabel, Checkbox} from "@material-ui/core";
import {AccountCircle, Lock} from "@material-ui/icons";
import {LoginStyles, MaterialLoginStyles} from "../styles/LoginStyles";

class LoginPage extends React.Component {

    state = {
        username: '',
        password: '',
        rememberMe: false,
        incorrectDetails: false
    };

    updateUsername = (event) => {
        this.setState({username: event.target.value});
    };

    updatePassword = (event) => {
        this.setState({password: event.target.value});
    };

    updateRememberMe = () => {
        this.setState({rememberMe: !this.state.rememberMe});
    };

    updateError = () => {
        this.setState({incorrectDetails: true});
    };

    render() {
        let {username, password, rememberMe, incorrectDetails} = this.state;
        let {classes} = this.props;

        /* Programmatically navigate in case the user is already logged in
        if (loggedIn === true) {
            return <Redirect to='/dashboard' />
        }
        //Link btns
        <Link to='/panel'>Go To Panel!</Link>
         */

        return (
            <div className='body' style={LoginStyles.loginBody}>
                <Card className={classes.loginCard}>
                    <CardContent style={{textAlign: 'center'}}>
                        <img style={LoginStyles.logo} src='/assets/images/logo.png' alt='' />

                        <h2 style={LoginStyles.loginTitle}>Login</h2>
                        {incorrectDetails ? <h4 style={LoginStyles.invalidLogin}>Invalid Username or Password!</h4> : null}

                        <form autoComplete={false} className={classes.loginForm}>
                            <Grid container alignItems='flex-end' spacing={1}>
                                <Grid item><AccountCircle /></Grid>
                                <Grid item>
                                    <TextField
                                        className={classes.textField}
                                        error={incorrectDetails}
                                        id='standard-basic'
                                        label='Username or Email'
                                        value={username}
                                        onChange={this.updateUsername}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container alignItems='flex-end' spacing={1}>
                                <Grid item><Lock /></Grid>
                                <Grid item>
                                    <TextField
                                        className={classes.textField}
                                        error={incorrectDetails}
                                        id='standard-adornment-password'
                                        label='Password'
                                        type='password'
                                        value={password}
                                        onChange={this.updatePassword}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container justify='flex-start' style={{marginTop: 20}}>
                                <Grid item>
                                    <FormControlLabel
                                        label='Remember Me'
                                        control={
                                            <Checkbox
                                                checked={rememberMe}
                                                onChange={this.updateRememberMe}
                                                value='primary'
                                            />
                                        }
                                    />
                                </Grid>
                            </Grid>

                            <Button variant='contained' className={classes.loginBtn}>Login</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        );
    }

    /*
                <Grid className='body' container style={LoginStyles.loginBody} direction='column' alignItems='center' justify='center'>
                <Grid item className={classes.loginGridItem}>
                    <Card className={classes.loginCard}>
                        <CardHeader className={classes.loginTitle} title='Login' />

                        <CardContent>
                            <form autoComplete={false} className={classes.loginForm}>
                                <Grid container alignItems='flex-end' spacing={1}>
                                    <Grid item><AccountCircle /></Grid>
                                    <Grid item>
                                        <TextField
                                            className={classes.textField}
                                            id='standard-basic'
                                            label='Username or Email'
                                            value={username}
                                            onChange={this.updateUsername}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container alignItems='flex-end' spacing={1}>
                                    <Grid item><Lock /></Grid>
                                    <Grid item>
                                        <TextField
                                            className={classes.textField}
                                            id='standard-adornment-password'
                                            label='Password'
                                            type='password'
                                            value={password}
                                            onChange={this.updatePassword}
                                        />
                                    </Grid>
                                </Grid>

                                <Button variant='contained' className={classes.loginBtn}>Login</Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
     */
}

export default withStyles(MaterialLoginStyles)(LoginPage);