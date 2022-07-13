import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react'

const foot = createTheme();

function Copyright() {
    return(
        <Typography>
            {"Copyright "}
            <link href="https://training.mammothinteractive.com">
                Courses
            </link>
            {" " + new Date().getFullYear()}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer:{
        padding: theme.spacing(6)
    }
}));

export default function Footer() {

    const classes = useStyles();

    return(
        <ThemeProvider theme={foot}>
            <footer className={classes.footer}>
                    <Container>
                        <Typography variant="h6">
                            Mammoth Interactive
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Anyone can learn to code
                        </Typography>
                        <Copyright />
                    </Container>
            </footer>
        </ThemeProvider>
    );
}