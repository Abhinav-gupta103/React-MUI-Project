import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignUp = () => {
    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: '2rem' }}>
                <Typography variant="h4" gutterBottom>
                    Sign Up
                </Typography>
                <form>
                    <TextField
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        margin="normal"
                        fullWidth
                    />
                    <Button variant="contained" color="primary" fullWidth>
                        Sign Up
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default SignUp;
