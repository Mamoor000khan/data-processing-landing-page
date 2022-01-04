import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardButton from './CardButton';

import Classes from './Card.module.css';

const useStyles = makeStyles({
  
  container:{
     width:'940px',
     height:'282px',
     backgroundColor:'#3C3D7A',
     display: 'grid',
     justifyContent: 'center',
     //marginLeft:'-1765px',
     
  },
 title: {
    width:'629px',
    height:'43px',
    fontFamily:'Ribik',
    fontWeight:600,
    fontSize:'36px',
    lineHeight:'43px',
    textAlign:'center',
    color:'#F2994A',
  },
 text:{
    width:'396px',
    height:'44px',
    fontFamily:'Ribik',
    fontWeight:400,
    fontSize:'16px',
    textAlign:'center',
    lineHeight:'22px',
    color:'#95A1BB',
    marginLeft: '101px',
  },
 paragraph:{
    width:'315px',
    height:'20px',
    fontFamily:'Ribik',
    fontWeight:400,
    fontSize:'14px',
    textAlign:'center',
    lineHeight:'20px',
    color:'#8476AA',
    marginLeft: '131px',  
},
});

export default function SimpleCard() {
  const classes = useStyles();
  
return (
    <section className={Classes.card}>
        <CardContent className={classes.container}>
        <Typography className={classes.title} >
        There are many reasons to get down
        </Typography>
        <Typography className={classes.text}>
        There are many reasons to get down and start 
        to get depressed about your situation. 
        </Typography>
         <CardButton/>
        <Typography className={classes.paragraph}>
        No spam. Only releases, updates and discounts
        </Typography>
      </CardContent>
     
    </section>
  );
}