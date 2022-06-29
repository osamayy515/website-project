import { Grid, ThemeProvider, Typography, createTheme} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react';

const MainGrid = createTheme();

const useStyles = makeStyles(theme =>({
    mainContainer:{
        height: 400,
        backgroundImage: "url(https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
        color: theme.palette.common.white
    },
    mainItem: {
        padding: MainGrid.spacing(3),
        textAlign: 'left',
        paddingTop: 100
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center'
    }

}));

export default function MainGridItem() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={MainGrid}>
        <Grid container className={classes.mainContainer}>
            <Grid item className={classes.mainItem} md={6}>
                <Typography component='h2' variant='h4'>
                    Hello Coding
                </Typography>
                <Typography variant='body1' paragraph>
                    Do you want to learn coding?? Smash your career goals. Build websites, games, apps and artificial intelligence project in 30 days.
                </Typography>
            </Grid>
        </Grid>
        </ThemeProvider>
    );
}