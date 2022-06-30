import { ArrowForward } from '@mui/icons-material';
import { Card ,CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles(()=>({
    cardImage: {
        height: 300,
    }
}));

export default function GridItem(props) {
    const classes = useStyles();
    return (
        <Card>
            <CardHeader
                title= {props.title}
                subheader= "Recommended for you"
            />
            <CardMedia
                className={classes.cardImage}
                image={props.image}
                title= "Excel Masterclass"
            />
            <CardContent>
                <Typography>
                    {props.description}
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