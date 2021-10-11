import React,{useState} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles, useMediaQuery, useTheme, Divider, Drawer, Grid, Hidden,Button,Card } from '@material-ui/core';

import user1 from './../../../assets/images/users/avatar-2.jpg';
import user2 from './../../../assets/images/users/avatar-4.jpg';
import { drawerWidth } from './../../../store/constant';
import MessageCard from '../../../component/MessageCard/MessageCard';
import ScheduleCard from '../../../component/ScheduleCard/ScheduleCard';

import user3 from '../../../assets/images/users/avatar-3.jpg';
import user4 from '../../../assets/images/users/avatar-4.jpg';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import * as MuIcons from 'react-icons/md';

const data = [
    {
        title: 'Meeting with Susie',
        day: 'Today',
        time: '5:00pm',
        images: [user4, user3],
        background: '#f0f9ff',
        type: 'Google meeting',
    },
    {
        title: 'Marketing team call',
        day: 'Today',
        time: '5:00pm',
        images: [user4, user1, user2, user3],
        background: '#f9f2fe',
        type: 'Zoom call',
    },
];

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth + 150,
            flexShrink: 0,
        },
        [theme.breakpoints.down('sm')]: {
            width:"100%",
            flexShrink: 0,
        },
    },
    box:{
            width:45,
            height:45,
            marginTop:10,
            marginBottom:30,
           
            border: '1px solid #cecece',
      
    },
    active:{
        background:"#ffffff",
        color:"#81cedd",
        boxShadow: "7px 6px 36px -2px rgba(0,0,0,0.75)"

    },

    toolbar: theme.mixins.toolbar,
    logoContainer: {
        lineHeight: 0,
        background: theme.palette.primary.main,
        // boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
    drawerPaper: {
        width: drawerWidth + 150,
        background: theme.palette.common.black,
        color: theme.palette.text.primary,
    },
    drawerPaperLight: {
        width: drawerWidth + 150,
        borderRight: 'none',
        borderLeft: '1px solid #cecece',
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

const mess = [
    {
        name: 'Susuie William',
        message: 'Good idea',
        time: '1m',
        image: user2,
    },
    {
        name: 'Adams Sandler',
        message: 'Decent!',
        time: '4m',
        image: user1,
    },
];

const MainLayout = (props) => {
    const { drawerOpen, drawerToggle, window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const [isMeeting, setIsMeeting] = useState(true)

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
                ></Grid>
            </Hidden>
            <Divider />
            <PerfectScrollbar className={classes.ScrollHeight}>
            <Card elevation={0} style={{padding:30}}>
            <Card className={classes.box}>
                <MuIcons.MdOutlineClose style={{margin:"15px ", color:"#808080"}}/>
            </Card>
                <Box sx={{ flexGrow: 1 }} style={{padding:0,marginTop:-25}}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <h1>Messages</h1>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Friends</InputLabel>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value="" label="Friends" size="small">
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
                <div style={{marginTop:-30}}>
                {mess.map((value, index) => (
                    <MessageCard key={index} {...value} />
                ))}


                <div style={{padding:"0px "}}>
                    <h3>Your Schedule</h3>
                    <div style={{background:"#f3f5f7", padding:10,borderRadius:20}}>
                      
                       {
                           isMeeting? <><Button onClick={()=>setIsMeeting(true)}  style={{textTransform: 'none',background:"#fefefe",borderRadius:"10px", color:"#7cc8e1"}}  variant="contain">Meetings</Button>  <Button  onClick={()=>setIsMeeting(false)} style={{textTransform: 'none'}} variant="text">Other events</Button></> :
                                     <><Button  onClick={()=>setIsMeeting(true)}  style={{textTransform: 'none',}}  variant="contain">Meetings</Button>  <Button  onClick={()=>setIsMeeting(false)} style={{textTransform: 'none',background:"#fefefe",borderRadius:"10px", color:"#7cc8e1"}} variant="text">Other events</Button></>

                       } 
                       
                       
                    </div>
               
                </div>
                {
                
                isMeeting? data.map((value, index) => (
                    <ScheduleCard key={index} {...value} />
                ))
                :<h4 style={{marginLeft:0}}>No events</h4>
                }
                  <div style={{padding:"0px 0px 0 0px"}}>
                  <Button  style={{textTransform: 'none',background:"#e0f5fe",borderRadius:"10px", height:"50px", color:"#7cc8e1",width:"100%"}}  variant="contain">Add new event</Button>

                  </div>
               
                </div>
                </Card>
               
            </PerfectScrollbar>
        </React.Fragment>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
          
                {drawer}
          
        </nav>
    );
};

export default MainLayout;
