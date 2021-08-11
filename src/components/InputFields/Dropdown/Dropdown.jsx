import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Dropdown() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          id="demo-simple-select-outlined"
          label="Age"
          labelId="demo-simple-select-outlined-label"
          onChange={handleChange}
          value={age}
        >
          <MenuItem value="DEV">DEV</MenuItem>
          <MenuItem value="QA">QA</MenuItem>
          <MenuItem value="UAT">UAT</MenuItem>
          <MenuItem value="PROD">PROD</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Dropdown;
