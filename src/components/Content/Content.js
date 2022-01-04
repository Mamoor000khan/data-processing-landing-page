import React from 'react';


import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Img from '../../assets/img/content.png';
import ContentButton from './ContentButton';
import Classes from './content.module.css';

const useStyles = makeStyles((theme) => ({
  container: {
      width:'1442px',
      height:'700px',
      display:'flex',
      justifyContent:'end',
      alignItems:'center',
      margin:'auto',
    },
  textContainer: {
      width:'470px',
      height:'279px',
      textAlign:'start',
   // marginLeft:'168px',
    },
  heading: {
      width:'470px',
      height:'100px',
      fontFamily:'Inter',
      fontWeight:700,
      fontSize: '42px',
      lineHeight: '50px',
      marginBottom:'30px',
      color:'#99EFD0',
    },
  text: {
      width:'470px', 
      height: '56px',
      fontFamily:'Inter',
      color:'#8476AA',
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: '28px',
      textTransform: 'none',
      marginBottom:'75px',
    },
  link:{
      width:'89px',
      height:'22px',
      fontFamily:'DM Sans',
      color: '#5454D4',
      fontSize: '15px',
      cursor:'pointer',
  },
  }))

export default function Content() {
    const classes = useStyles();
  return (
    <section className={classes.container}>
      <div className={classes.textContainer} >
         <Typography className={classes.heading}>
           Increase your business <b style={{color:'#F2994A'}}>traffic</b>
          </Typography>
       
          <Typography className={classes.text}>
            We are committed to processing the information in 
            order to contact you and talk about your project. 
          </Typography>
     
          <ContentButton/>
      </div>

      <div className={Classes.img}>
         <img src={Img} alt="" style={{width:'348.5',height:'473px', }}/>
      </div>
    </section>
  );
};