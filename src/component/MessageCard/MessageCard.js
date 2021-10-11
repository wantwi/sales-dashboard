import React from 'react';
import { Card, Grid } from '@material-ui/core';
import user from '../../assets/images/users/avatar-1.jpg';

function MessageCard({name,message,time,image}) {
    return (
        <Card style={{  margin: '20px auto',background:"#f4f6f8", padding: "20px", border:"1px solid #cecece", position:"relative" }}>
            <Grid container spacing={2}>
                <Grid item>
                    <img src={image} style={{ width: 50, height: 50, borderRadius: 50 }} />
                </Grid>
                <Grid item style={{ border: '0px solid',padding:0 }}>
                  
                            <h4 >{name}</h4>
                            <div style={{ marginTop:-20 }}>
                            <span style={{ fontSize:12 }}>You: {message}</span>
                           
                            </div>
                          
                      
                </Grid>
            </Grid>
            <span style={{fontSize:12, position: 'absolute',right:10,bottom:20 }}>{time} ago</span>
        </Card>
    );
}

export default MessageCard;
