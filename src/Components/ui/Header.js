import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React ,{useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { SettingsInputCompositeRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appbar:{
    backgroundImage: 'linear-gradient(to right, #0D76A8, #073B54)',
    },
    title: {
      flexGrow: 1,
    },
  }));

  function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const Header = () => {
    const classes = useStyles();

  const [Counter,setCounter] =useState("");

  const timerHandler=()=>{
    var timer = localStorage.getItem('timer') == undefined ? 15*60 : localStorage.getItem('timer') ;
    setInterval(function () {
        var minutes = parseInt(timer / 60, 10);
        var seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
         setCounter(minutes + ":" + seconds);
         localStorage.setItem('timer',timer);

        if (--timer < 0) {
            timer = 15*60;
        }
    }, 1000);
}

useEffect(() => {
    timerHandler();
    if(localStorage.getItem('timer') == undefined)
        { 
            localStorage.setItem('timer',Counter);
        }
}, [])
    return (
        <div className={classes.root}>
        <ElevationScroll>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Class bridge
                    </Typography>
                    <Typography variant="h6">
                    {Counter} min left
                </Typography>
                </Toolbar>
            </AppBar>
            </ElevationScroll>
        </div>
    )
}

export default Header
