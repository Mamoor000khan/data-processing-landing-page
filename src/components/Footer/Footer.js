import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import Google from '../../assets/svg/Google.svg';
import Twitter from '../../assets/svg/Twitter.svg';
import Facebook from '../../assets/svg/Facebook.svg';
import FooterLink from './Footer.Link';

const useStyles = makeStyles((theme) => ({
  footer: {
    maxWidth:'100%',
    maxHeight:'500px',
    // display:'flex',
    // justifyContent:'center',
  },
  container:{
    width:'984px', 
    height:'171px', 
    display:'flex',
    justifyContent: 'space-between',
    marginBottom:'115px',
  },
  heading: {
    width:'35px',
    height:'18px',
    fontFamily:'Inter',
    fontWeight:700,
    fontSize: '15px',
    lineHeight: 'auto',
    marginBottom:'30px',
    color:'#FFFF',
  },
 pages:{
    width:'96px',
    height:'20px',
    fontFamily:'Inter',
    fontWeight:400,
    fontSize: '15px',
    lineHeight: '20px',
    marginBottom:'20px',
    color:'#FFFF',
  },
  logoBox:{
    width:'152px', 
    height:'40px', 
    marginLeft:'868px', 
    marginBottom:'100px'
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <section className={classes.footer}>
        {/* <img alt='' src={DOT} style={{width:'992px',height:'437px',}}/> */}
      <Grid style={{width:'1463px',height:'350px',display:'grid', justifyContent:'center'}}>
        <Grid item xs={12} className={classes.logoBox}>
          <img alt='' src={Google} style={{width:'40px', height:'40px'}}/>
          <img alt='' src={Twitter} style={{width:'40px', height:'40px', marginLeft:'13px'}}/>
          <img alt='' src={Facebook} style={{width:'40px', height:'40px', marginLeft:'13px'}}/>
        </Grid>
        <Grid item xs={12} className={classes.container}>
          <Grid style={{width:'96px', height:'171px'}} >
              <Typography className={classes.heading}>First</Typography>
              <Typography className={classes.pages}>First page</Typography>
              <Typography className={classes.pages}>Second page</Typography>
              <Typography className={classes.pages}>Third page</Typography>
              <Typography className={classes.pages}>Forth page</Typography>
          </Grid>

          <Grid>
              <Typography className={classes.heading}>Second</Typography>
              <Typography className={classes.pages}>First page</Typography>
              <Typography className={classes.pages}>Second page</Typography>
              <Typography className={classes.pages}>Third page</Typography>
              <Typography className={classes.pages}>Forth page</Typography>
          </Grid>

          <Grid>
              <Typography className={classes.heading}>Third</Typography>
              <Typography className={classes.pages}>First page</Typography>
              <Typography className={classes.pages}>Second page</Typography>
              <Typography className={classes.pages}>Third page</Typography>
              <Typography className={classes.pages}>Forth page</Typography>
         </Grid>

          <Grid>
              <Typography className={classes.heading}>Forth</Typography>
              <Typography className={classes.pages}>First page</Typography>
              <Typography className={classes.pages}>Second page</Typography>
              <Typography className={classes.pages}>Third page</Typography>
              <Typography className={classes.pages}>Forth page</Typography>
         </Grid>
        </Grid>

       <FooterLink/>

      </Grid>
    </section>
  );
}