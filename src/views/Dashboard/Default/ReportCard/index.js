import React from 'react';
import * as FaIcon from 'react-icons/fa';

import { makeStyles, Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    secondary: {
        marginTop: '.5rem',
    },
    footer: {
        textAlign: 'center',
        padding: theme.spacing(0.5),
        paddingLeft: '20px',
        paddingRight: '20px',
        color: theme.palette.common.white,
      
    },
    border:{
        border:"1px solid #cecece"
    },
    box:{
        width:35,
        height:35,
      
        borderRadius:"10px",
        padding:"0px 0 0 5px"
    }
}));

const ReportCard = (props) => {
    const { primary, secondary, iconPrimary, color,background, footerData, iconFooter } = props;
    const classes = useStyles();

    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary style={{fontSize:"23px"}}  /> : null;

    const IconFooter = iconFooter;
    const footerIcon = iconFooter ? <IconFooter /> : null;

    return (
        <Card  className={classes.border}>
            <CardContent>
                <Grid container justify="space-between" alignItems="center" >
                    <Grid item>
                    <Typography variant="h2" style={{ color: color,  background, }} className={classes.box}>
                            {primaryIcon}
                        </Typography>

                        <Typography variant="h3" style={{  marginTop:10 }}>
                            {primary}
                        </Typography>

                        <Grid item>
                        <Typography style={{ color: '#808080',  fontSize:"11px" }} variant="body2"><span style={{color: "#1dcc90"}}>{<FaIcon.FaCaretUp/>} {footerData} more </span>than last week</Typography>
                    </Grid>
                      
                        {/* <Typography variant="subtitle1" className={classes.secondary}>
                            {secondary}
                        </Typography> */}
                    </Grid>
                    <Grid item>
                   
                      
                    </Grid>
                </Grid>
            </CardContent>
            {/* <div >
                <Grid container justify="space-between" className={classes.footer}>
                    <Grid item>
                        <Typography style={{ color: '#808080',  fontSize:"11px" }} variant="body2">{footerData}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2">{footerIcon}</Typography>
                    </Grid>
                </Grid>
            </div> */}
        </Card>
    );
};

export default ReportCard;
