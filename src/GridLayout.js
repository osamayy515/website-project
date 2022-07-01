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
                    
                <Grid item lg={6} md={12} sm={12} xs={12}>
                    <GridItem 
                        title="Excel Masterclass"
                        image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4r1u3?ver=b726&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true"
                        description="In this 6-level eDegree, you'll learn how to use Excel from the very basics all thge way to VBA programming and machine learning. You'll also learn web automation, Python and Selenium."
                    />
                </Grid>

                <Grid item lg={6} md={12} sm={12} xs={12}>
                    <GridItem 
                        title="Learn to code and get hired"
                        image="https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/06/chris-ried-512801-unsplash.jpg"
                        description="Do you need a better career? Do you want to become an employed softwarte developer with a high paying job? Learn how to code and get hired in this coding interview questions course"
                    />
                </Grid>

                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem 
                        title="3D modeling Masterclass"
                        image="https://www.3dsourced.com/wp-content/uploads/2021/02/Best-free-3d-modeling-software.jpg"
                        description="3D modeling software lets you create your own models or import existing ones. You can then manipulate them using powerful tools like sculpting, painting, texturing, animation, rendering, and more."
                    />
                </Grid>

                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem 
                        title="Game Development Masterclass"
                        image="https://unity.com/sites/default/files/styles/16_9_s_scale_width/public/2020-02/common-words-and-phrases.jpg?itok=nNCHk86-"
                        description="The course covers topics such as programming languages, graphics, animation, and more. You will be able to create your own games using Unity3D, which is a free game engine used by many indie game developers."
                    />
                </Grid>

                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem 
                        title="Business and Side Hustles"
                        image="https://www.patriotsoftware.com/wp-content/uploads/2019/03/craft-financial-business-plan-1.jpg"
                        description="If you’re looking for ways to make money online, then you’ve come to the right place! This course will teach you how to start your own business or side hustle. You’ll learn about different types of businesses and how to get started with each one."
                    />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}