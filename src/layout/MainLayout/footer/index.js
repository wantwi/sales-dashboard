import React, { useState } from 'react';
import { makeStyles, Grid, Card, useMediaQuery, useTheme, CssBaseline, Toolbar, Select, MenuItem } from '@material-ui/core';
import ReactFlagsSelect from 'react-flags-select';
import "./footer.css"

function Footer() {
    const [selected, setSelected] = useState('US');
  

    return (
        <Grid container spacing={6} style={{ paddingLeft: 0,paddingRight: 0, marginTop: 5 }}>
            <Grid item lg={8} xs={12}>
                <p style={{ fontSize: 11, color: '#808080' }}>osello - helping you sell digital products. Copyright 2021</p>
            </Grid>

            <Grid item xs={4} sm={12} lg={4}>
                <Grid container>
                    <Grid item xs={6} sm={6} lg={6}>
                        <p style={{fontSize:11,color:"#808080"}}>Privicy Policy</p>
                    </Grid>
                    <Grid item xs={6} sm={6} lg={6}>
                        <span style ={{fontSize:11,color:"#808080"}}>Language:</span>
                        <ReactFlagsSelect
                            selected={selected}
                            countries={['US', 'GB', 'FR', 'DE', 'IT']}
                            customLabels={{ US: 'EN', GB: 'EN-GB', FR: 'FR', DE: 'DE', IT: 'IT' }}
                            onSelect={(code) => setSelected(code)}
                            selectedSize={11}
                            optionsSize={11}
                            fullWidth={false}
                          
                            
                        />
                       
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Footer;
