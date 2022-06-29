import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import MainGridItem from "./MainGridItem";
import GridItem from "./Griditem";

const GridItems = createTheme();

const useStyles = makeStyles(theme => ({
    mainGridItems: {
        backgroundColor: 'blue'
    },
    secondRow: {
        backgroundColor: 'green'
    },
    secondRowSecondItem: {
        backgroundColor: 'orange'
    },
    thirdROw: {
        backgroundColor: "pink"
    }
}))

export default function GridLayout() {

    const classes = useStyles();

    return (
        <ThemeProvider theme={GridItems}>
            <Grid container spacing={3}>
                <Grid item lg={12} sm={12} xs={12}>
                    <MainGridItem/>
                </Grid>
                    
                <Grid item sm={6} xs={12}>
                    <GridItem/>
                </Grid>

                <Grid item sm={6} xs={12}>
                    <Typography className={classes.secondRowSecondItem}>
                        Second Row, Second Item
                    </Typography>
                </Grid>

                <Grid item  sm={4} xs={12}>
                    <Typography className={classes.thirdROw}>
                        Third Row
                    </Typography>
                </Grid>

                <Grid item  sm={4} xs={12}>
                    <Typography className={classes.thirdROw}>
                        Third Row
                    </Typography>
                </Grid>

                <Grid item  sm={4} xs={12}>
                    <Typography className={classes.thirdROw}>
                        Third Row
                    </Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}