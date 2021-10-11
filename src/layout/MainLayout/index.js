import React from 'react';
import clsx from 'clsx';
import { makeStyles, Grid, useMediaQuery, useTheme, AppBar, CssBaseline, Toolbar, Select,MenuItem } from '@material-ui/core';

import { drawerWidth } from './../../store/constant';
import Header from './Header';
import Sidebar from './Sidebar';
import MessageSideBar from './MessageSideBar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background:"#fff"
    },
    appBar: {
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    toolbar: theme.mixins.toolbar,
    content: {
        width: '100%',
        minHeight: '100vh',
        flexGrow: 1,
        /*padding: theme.spacing(3),*/
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
           
        },
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
       
    },
    main: {
        padding: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3),
            display:"none"
        },
    },
    header: {
        zIndex: 1201,
        height: 100,
        width: `calc(100% - ${drawerWidth+430}px)`,
        background: '#fff',
      
        marginRight:430
    },
    header2: {
        zIndex: 1201,
        height: 100,
        width: `calc(100% + ${430})`,
        background: '#fff',
    },
    selectOp:{
        display: "block",
    width: "100%",
    height: "34px",
    padding: "6px 12px",
    fontSize: "10px",
    lineHeight: 1.42857143,
    color: "#555",
    backgroundColor: "#fff",
   
    border: "1px solid #ccc",
    borderRadius: "4px",
  
    boxShadow: "inset 0 1px 1px rgb(0 0 0 / 8%)",
    webkitTransition: "border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s",
    oTransition: "border-color ease-in-out .15s,box-shadow ease-in-out .15s",
    transition: "border-color ease-in-out .15s,box-shadow ease-in-out .15s"
    }
}));

const MainLayout = ({ children }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    React.useEffect(() => {
        setDrawerOpen(matchUpMd);
    }, [matchUpMd]);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" elevation={0} className={drawerOpen ? classes.header : classes.header2}>
                <Toolbar>
                    <Header drawerOpen={drawerOpen} drawerToggle={handleDrawerToggle} />
                </Toolbar>
            </AppBar>
            <Sidebar drawerOpen={drawerOpen} drawerToggle={handleDrawerToggle} />
            <main className={clsx(classes.content, { [classes.contentShift]: drawerOpen })}>
                <div className={classes.toolbar} />
                <div className={classes.main}>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item lg={11} xs={12}>
                            <h1>Good Morning Alexandra!!</h1>
                            <p>Let's take a look at your sales progress.</p>
                        </Grid>
                        <Grid item lg={1} xs={12}>
                           <select

                                className ={classes.selectOp}
                           
                           >
                               <option>This week</option>
                           </select>
                        </Grid>
                    </Grid>

                    {children}
                </div>
            </main>
            <MessageSideBar />
        </div>
    );
};

export default MainLayout;
