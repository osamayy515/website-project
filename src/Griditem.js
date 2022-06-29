import { ArrowForward } from '@mui/icons-material';
import { Card ,CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyle = makeStyles(()=>({
    cardImage: {
        height: 300,
    }
}));

export default function GridItem() {
    const classes = useStyle();
    return (
        <Card>
            <CardHeader
                title= "Excel Masterclass"
                subheader= "Recommended for you"
            />
            <CardMedia
                className={classes.cardImage}
                image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4r1u3?ver=b726&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true"
                title= "Excel Masterclass"
            />
            <CardContent>
                <Typography>
                    In this 6-level eDegree, you'll learn how to use Excel from the very basics all thge way to VBA programming and machine learning. You'll also learn web automation, Python and Selenium.
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="Visit page">
                    <ArrowForward/>
                </IconButton>
            </CardActions>
        </Card>
    );
}