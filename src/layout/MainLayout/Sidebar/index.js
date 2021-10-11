import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles, useMediaQuery, useTheme, Divider, Drawer, Grid, Hidden,Card } from '@material-ui/core';

import MenuList from './MenuList';
import star from "../../../assets/images/star.jpg"

import logo from './../../../assets/images/logo.svg';
import { drawerWidth } from './../../../store/constant';

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    toolbar: theme.mixins.toolbar,
    logoContainer: {
        lineHeight: 0,
        background: theme.palette.primary.main,
        // boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
    drawerPaper: {
        width: drawerWidth,
        background: theme.palette.common.black,
        color: theme.palette.text.primary,
    },
    drawerPaperLight: {
        width: drawerWidth,
        borderRight: 'none',
        borderRight:"1px solid #cecece",
        // boxShadow: '0 0.15rem 1.75rem 0 rgba(33, 40, 50, 0.15)',
        top: '0',
        [theme.breakpoints.down('sm')]: {
            top: 0,
        },
    },
    menuCaption: {
        ...theme.typography.menuCaption,
    },
    ScrollHeight: {
        height: 'calc(100vh )',
        padding: '15px',
    },
}));

const MainLayout = (props) => {
    const { drawerOpen, drawerToggle, window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const drawer = (
        <React.Fragment>
            <Hidden mdUp>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    elevation={0}
                    alignItems="center"
                    spacing={0}
                    className={[classes.toolbar, classes.logoContainer].join(' ')}
                >
                    <Grid item>
                        <img src={logo} alt="Logo" />
                    </Grid>
                </Grid>
            </Hidden>
            <Divider />
            <PerfectScrollbar className={classes.ScrollHeight}>
               <div style={{padding:40, marginTop:100}}>
               <MenuList />
               </div>
               
            </PerfectScrollbar>
        </React.Fragment>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Drawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                elevation={0}
                onClose={drawerToggle}
                classes={{ paper: classes.drawerPaperLight }}
                ModalProps={{ keepMounted: true }}
               
            >
                {drawer}

                <Card elevation={3} style={{width:"150px", height:"150px", margin:"0 auto 100px auto",padding:"20px 20px 50px 20px"}}>
                  
                   <img src={star} alt="star" style={{width:50,height:50, marginLeft:25}}/>
                   <p style={{fontSize:10.5,color:"#808080",lineHeight:1.5}}>Your rating would mean a lot to us!</p>
            </Card>
            </Drawer>

           
        </nav>
    );
};

export default MainLayout;
