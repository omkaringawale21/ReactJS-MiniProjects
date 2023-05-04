import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBox from '@material-ui/core/Checkbox';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        '&$checked': {
            color: "#000",
        }
    },

    checked: {},

    wrap: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 0,
    },
    
    label: {
        fontSize: '0.8rem',
        fontFamily: "'Raleway', sans-serif",
    }
})

const CheckBoxProton = ({ cuisine, changedChecked }) => {
    const classes = useStyles();
    const { checked, label, id } = cuisine;
  return (
    <div>
        <FormControlLabel
            classes={{
                label: classes.label,
                root: classes.wrap,
            }}
            control={
                <CheckBox
                    classes={{
                        checked: classes.checked,
                        root: classes.root,
                    }}
                    size="small"
                    checked={checked}
                    onChange={() => changedChecked(id)}
                />
            }
            label={label}
        />
    </div>
  )
}

export default CheckBoxProton;