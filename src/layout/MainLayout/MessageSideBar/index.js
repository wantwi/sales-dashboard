import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles, useMediaQuery, useTheme, Divider, Drawer, Grid, Hidden } from '@material-ui/core';


import logo from './../../../assets/images/logo.svg';
import { drawerWidth } from './../../../store/constant';

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth +150,
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
        width: drawerWidth +150,
        background: theme.palette.common.black,
        color: theme.palette.text.primary,
    },
    drawerPaperLight: {
        width: drawerWidth +150,
        borderRight: 'none',
        borderLeft:"1px solid #cecece",
        // boxShadow: '0 0.15rem 1.75rem 0 rgba(33, 40, 50, 0.15)',
        top: '0px',
        [theme.breakpoints.down('sm')]: {
            top: 0,
        },
    },
    menuCaption: {
        ...theme.typography.menuCaption,
    },
    ScrollHeight: {
        height: 'calc(100vh )',
        padding: '10px',
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
                    
                </Grid>
            </Hidden>
            <Divider />
            <PerfectScrollbar className={classes.ScrollHeight}>
             
            </PerfectScrollbar>
        </React.Fragment>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Drawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="right"
                open={drawerOpen}
                elevation={0}
                onClose={drawerToggle}
                classes={{ paper: classes.drawerPaperLight }}
                ModalProps={{ keepMounted: true }}
               
            >
                {drawer}
            </Drawer>
        </nav>
    );
};

export default MainLayout;
