import { Toolbar, Typography, Container, Box, Link, AppBar, IconButton, Drawer, MenuItem} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import MenuIcon from '@mui/material/Icon';

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
        padding: menu.spacing(3),
        [menu.breakpoints.up('md')]: {
            paddingleft: menu.spacing(10)
        },
        color: 'white'
    },
    menuIcon: {
        color:'white'
    }
}));

export default function NavigationBar() {
    
    const [state, setState] = useState({
        toggleMenu: false,
        toggleMenuOpen: false
    });

    const { toggleMenu, toggleMenuOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 960
             ? setState((prevState) => ({...prevState, toggleMenu: true }))
             : setState((prevState) => ({...prevState, toggleMenu: false }))
            };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const classes = useStyles();
    
    const displayToggleMenu = () => {
        const handleToggleMenuOpen = () => setState((prevState)=> ({
            ...prevState, toggleMenuOpen: true 
        }));
        const handleToggleMenuClose = () => setState((prevState)=> ({
            ...prevState, toggleMenuOpen: false 
        }));
        return(
            <Toolbar>
                <IconButton
                    {...{
                        onClick: handleToggleMenuOpen
                    }}
                >
                    <MenuIcon className={classes.menuIcon}/>
                </IconButton>
                <Drawer
                    {...{
                        anchor:'left',
                        open: toggleMenuOpen,
                        onClose: handleToggleMenuClose
                    }}
                >
                    <div>
                        { getToggleMenuOptions() }
                    </div>
                </Drawer>
            </Toolbar>
        );
    }
    const getToggleMenuOptions = () => {
        return(
            <Box>
                {['home','courses','sign up'].map((menuOption) => (
                   <MenuItem>
                        {menuOption}
                   </MenuItem> 
                ))}
            </Box>
        );
    }
    const displayLargeMenu = () => {
        return (
            <Toolbar className={classes.toolbar}>
                <Typography 
                        component='h1'
                        variant='h6'
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
        );
    }

    return (
        <ThemeProvider theme={menu}>
            <Container>
                <AppBar>
                    {toggleMenu ? displayToggleMenu() : displayLargeMenu() }
                </AppBar>
            </Container>
        </ThemeProvider>
    );
}