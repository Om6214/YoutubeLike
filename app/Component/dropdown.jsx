"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import style from "../styles/tvseries.module.css"

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth>
        <InputLabel style={{color:"white"}} className={style.label} id="demo-simple-select-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          className={style.genrebox}
        >
          <MenuItem value={10}>Comedy</MenuItem>
          <MenuItem value={20}>Romance</MenuItem>
          <MenuItem value={30}>Thriller</MenuItem>
          <MenuItem value={40}>Horror</MenuItem>
          <MenuItem value={50}>Documentry</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
