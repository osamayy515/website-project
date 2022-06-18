import { Toolbar, Typography, Container, Box, Link} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

const menu = createTheme();

const useStyles = makeStyles((theme) => ({
    siteTitle:{
        fontWeight: 'bold',
        letterspacing: 1.5
    },
    toolbar:{
        display: 'flex',
        flexDirection: 'column',
        [menu.breakpoints.up('md')]: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between'
        }
    },
    menuBox: {
        display: 'flex',
        flexDirection: 'column',
        [menu.breakpoints.up('md')]: {
            flexDirection: 'row'
        }
    },
    menuOption: {
        padding: menu.spacing(1),
        [menu.breakpoints.up('md')]: {
            paddingleft: menu.spacing(10)
        }
    }
}));

export default function NavigationBar() {
    
    const classes = useStyles();
    
    return (
        <ThemeProvider theme={menu}>
            <Container>
                <Toolbar className={classes.toolbar}>
                    <Typography 
                    component='h1'
                    variant='h4'
                    className={classes.siteTitle}>
                        Mammoth Interactive
                    </Typography>
                    <Box className={classes.menuBox}>
                        {['home','courses','sign up'].map((menuOption) => (
                        <Link
                        variant='body1'
                        className={classes.menuOption}
                        >
                            {menuOption.toUpperCase()}
                        </Link>   
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </ThemeProvider>
    );
}