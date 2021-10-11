import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Card, Grid } from '@material-ui/core';

function ScheduleCard({images, title,day,time,background,type}) {
    return (
        <Card style={{ width: '85%', margin: '20px auto',background, padding: "20px", border:"1px solid #cecece", position:"relative" }}>
            <h4 style={{ padding: 0,margin:0 }}>{title}</h4>
            <span style={{ fontSize: 11,padding:0, color:"#808080",margin:0 }}>{day}, {time}</span>
            <div>
                <span style={{ float: 'left' }}></span>
                <span style={{ float: 'right' }}>
                    <AvatarGroup max={4}>
                        {
                        images.map((img,index)=> <Avatar style={{width:25,height:25}} key={index} alt="Remy Sharp" src={img} />)
                        }
                      
                    </AvatarGroup>
                </span>
            </div>
            <span style={{fontSize:11, position: 'absolute',left:20,bottom:20, color:"#808080" }}>{type}</span>
        </Card>
    );
}

export default ScheduleCard;
