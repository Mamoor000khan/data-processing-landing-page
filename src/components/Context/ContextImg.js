import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import IMG from '../../assets/img/contextImg.png';
import Vector from '../../assets/img/contextimg1.png';

const useStyles = makeStyles((theme) => ({
  ContextImg: {
    maxWidth:'100%',
    maxHeight:'629px',
    display:'grid',
      justifyContent:'center',
      //marginTop:'200px',
  },
}));

export default function ContextImg() {
  const classes = useStyles();

  return (
    <div className={classes.ContextImg}>
      <Grid item xs={12} style={{width:'1203px', height:'492px', display:'flex'}}>
        <img alt='' src={IMG}  style={{width:'1203px', height:'687px'}} />
         <img alt='' src={Vector} style={{width:'823px', height:'457px', marginLeft: '-1000px'}}/>
        </Grid>
    </div>
  );
}