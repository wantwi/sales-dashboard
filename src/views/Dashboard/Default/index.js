import React from 'react';
import { makeStyles, Grid, Card, CardHeader, CardContent, Hidden, Typography, Divider, LinearProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import MonetizationOn from '@material-ui/icons/MonetizationOnTwoTone';
import DescriptionTwoTone from '@material-ui/icons/DescriptionTwoTone';
import ThumbUpAltTwoTone from '@material-ui/icons/ThumbUpAltTwoTone';
import CalendarTodayTwoTone from '@material-ui/icons/CalendarTodayTwoTone';
import * as BaIcon from 'react-icons/bs';
import SalesLineCard from './SalesLineCard';
import SalesLineCardData from './chart/sale-chart-1';

import RevenuChartCard from './RevenuChartCard';
import RevenuChartCardData from './chart/revenu-chart';

import ReportCard from './ReportCard';
import LatestorderCard from './LatestorderCard';

import { gridSpacing } from './../../../store/constant';
import * as FaIcons from 'react-icons/fa';
import ButtonIcon from '../../../component/Buttons/ButtonIcon';

const useStyles = makeStyles((theme) => ({
    arrowicon: {
        '& svg': {
            width: '20px',
            height: '20px',
            verticalAlign: 'top',
        },
    },
    flatcardbody: {
        padding: '0px !important',
        '& svg': {
            width: '40px',
            height: '40px',
        },
    },
    flatcardblock: {
        padding: '25px 25px',
        borderLeft: '1px solid' + theme.palette.background.default,
        [theme.breakpoints.down('xs')]: {
            borderLeft: 'none',
            borderBottom: '1px solid' + theme.palette.background.default,
        },
        [theme.breakpoints.down('sm')]: {
            borderBottom: '1px solid' + theme.palette.background.default,
        },
    },
    textsuccess: {
        color: theme.palette.success.main,
    },
    texterror: {
        color: theme.palette.error.main,
    },
}));

const Default = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} sm={6} xs={12}>
                        <ReportCard
                            primary="1,024"
                            secondary="All Earnings"
                            color="#6F29CC"
                            background="#c9c3ef"
                            footerData="15%"
                            iconPrimary={BaIcon.BsFillCartFill}
                            iconFooter={TrendingUpIcon}
                        />
                    </Grid>
                    <Grid item lg={4} sm={6} xs={12}>
                        <ReportCard
                            primary="$19,023.11"
                            secondary="Task"
                            background="#f0fbfe"
                            size="30px"
                            color={theme.palette.primary.main}
                            footerData="27%"
                            iconPrimary={MonetizationOn}
                            iconFooter={TrendingDownIcon}
                        />
                    </Grid>
                    <Grid item lg={4} sm={6} xs={12}>
                        <ReportCard
                            primary="$8,722.54"
                            secondary="Page Views"
                            background="#fee86aba"
                            size="30px"
                            color={theme.palette.warning.main}
                            footerData="8%"
                            iconPrimary={FaIcons.FaWallet}
                            iconFooter={TrendingUpIcon}
                        />
                    </Grid>
                    {/* <Grid item lg={3} sm={6} xs={12}>
                        <ReportCard
                            primary={500}
                            secondary="Downloads"
                            color={theme.palette.primary.main}
                            footerData="1k download in App store"
                            iconPrimary={ThumbUpAltTwoTone}
                            iconFooter={TrendingUpIcon}
                        />
                    </Grid> */}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} sm={6} lg={8}>
                                <RevenuChartCard chartData={RevenuChartCardData} />
                            </Grid>
                          
                            <Grid item xs={12} sm={6} lg={4}>
                               <Card  style={{padding:"20px 50px", border:"1px solid #cecece",height:460}}>
                                   <h3>Quick Actions</h3>
                                   <p>Perform quick and easy action from here</p>
                               <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12} sm={6} lg={12} style={{marginTop:25}}>
                                        <ButtonIcon icon={<FaIcons.FaWallet />} title="See Wallet" />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={12}>
                                        <ButtonIcon icon={<FaIcons.FaPhoneAlt />} title="Call support" />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={12}>
                                        <ButtonIcon icon={<FaIcons.FaGlobe />} title="Customer map" />
                                    </Grid>
                                </Grid>

                               </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid item lg={4} xs={12}>
                        <Card>
                            <CardHeader
                                title={
                                    <Typography component="div" className="card-header">
                                        Traffic Sources
                                    </Typography>
                                }
                            />
                            <Divider />
                            <CardContent>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={1}>
                                            <Grid item sm zeroMinWidth>
                                                <Typography variant="body2">Direct</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" align="right">
                                                    80%
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <LinearProgress variant="determinate" value={80} color="primary" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={1}>
                                            <Grid item sm zeroMinWidth>
                                                <Typography variant="body2">Social</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" align="right">
                                                    50%
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <LinearProgress variant="determinate" value={50} color="secondary" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={1}>
                                            <Grid item sm zeroMinWidth>
                                                <Typography variant="body2">Referral</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" align="right">
                                                    20%
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <LinearProgress variant="determinate" value={20} color="primary" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={1}>
                                            <Grid item sm zeroMinWidth>
                                                <Typography variant="body2">Bounce</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" align="right">
                                                    60%
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <LinearProgress variant="determinate" value={60} color="secondary" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={1}>
                                            <Grid item sm zeroMinWidth>
                                                <Typography variant="body2">Internet</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" align="right">
                                                    40%
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <LinearProgress variant="determinate" value={40} color="primary" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid> */}
                </Grid>
            </Grid>
            {/* <Grid item xs={12}>
                <LatestorderCard title="Latest Order" />
            </Grid> */}
        </Grid>
    );
};

export default Default;
