import React from 'react';
import { Box, Grid, makeStyles, IconButton, Hidden, Card} from '@material-ui/core';

import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';

import SearchSection from './SearchSection';
import Customization from './Customization';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';
import * as FaIcon from 'react-icons/fa';
import user from './../../../assets/images/users/avatar-1.jpg';
import { drawerWidth } from './../../../store/constant';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
      
    },
    box:{
        width:45,
        height:45,
        borderRadius:10,
        border:"1px solid #cecece",
        marginTop:50,
        marginRight:15
    },
    menuButton: {
        marginRight: theme.spacing(1.25),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    menuIcon: {
        fontSize: '1.5rem',
    },
}));

const Header = (props) => {
    const { drawerToggle } = props;
    const classes = useStyles();

    return (
        <>
            <Box width={drawerWidth} >
                <Grid container spacing={6}>
                   
                        <Grid item xl={6} lg={6} sm={12} xs={12} >
                          
                              <SearchSection theme="dark" />
                            
                        </Grid>
                       
                   
                    {/* <Grid item>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={drawerToggle}
                        >
                            <MenuTwoToneIcon className={classes.menuIcon} />
                        </IconButton>
                    </Grid> */}
                </Grid>
                
            </Box>
            <div className={classes.grow} />

            {/* <SearchSection theme="light" /> */}
            <Card className={classes.box}>
                <FaIcon.FaBolt style={{margin:"15px", color:"#808080"}}/>
            </Card>
            <Card className={classes.box}>
                <img src={user} alt="user" style={{width:"100%",height:"100%"}} />
            </Card>
            {/* <Customization />
            <NotificationSection />
            <ProfileSection /> */}
        </>
    );
};

export default Header;
