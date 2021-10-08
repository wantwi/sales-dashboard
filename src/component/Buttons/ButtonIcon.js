import * as React from 'react';
import { Card, Button } from '@material-ui/core';
import * as FaIcon from 'react-icons/fa';

const ButtonIcon = ({ icon, title }) => {
    return (
        <Card style={{ borderRadius: '10px', height: '55px', padding: 20, background: '#31c5fe', }}>
            <div style={{color:"#fff"}}>
                {icon} 
                <span style={{marginLeft: 10, marginBottom:15}} >{title}</span>
            </div>
        </Card>
    );
};
export default ButtonIcon;
