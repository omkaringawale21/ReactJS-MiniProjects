import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: '3rem'
    },
    thumb: {
        color: '#000',
    },
    rail: {
        color: 'rgba(0, 0, 0, 0.26)',
    },
    track: {
        color: '#000',
    }
})

const SliderProton = ({ value, changePrice }) => {
    const classes = useStyles();
  return (
    <div className={classes.root} >
        <Slider 
            value={value}
            onChange={changePrice}
            valueLabelDisplay="on"
            min={1000}
            max={5000}
            classes={
                {
                    thumb: classes.thumb,
                    rail: classes.rail,
                    track: classes.track
                }
            }
        />
    </div>
  )
}

export default SliderProton;