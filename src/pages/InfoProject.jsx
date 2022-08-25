import React, { useEffect, useState } from 'react'
import '../styles/Form.css'
import TextField from '@mui/material/TextField';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Notification from '../components/Notification';
import moment from 'moment';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={12} ref={ref} variant="filled" {...props} />;
});

var todaysDate = new Date();
function convert(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [day, mnth, date.getFullYear()].join("-");
}

export default function InfoProject(props) {
  let navigate = useNavigate();

  const [open, setopen] = useState(false)

  const [myDate, setmyDate] = useState(null)
  // const [nom, setnom] = useState('')
  // const [constructDate, setconstructDate] = useState('')
  // const [constructionArea, setconstructionArea] = useState('')
  // const [nature, setnature] = useState('')

  const handleChange = (newValue) => {
    // console.log('props.setconstructDate(newValue);',new Date(newValue).toISOString())
    //console.log('props.setconstructDate(newValue);',convert(`${newValue}`))
    props.setconstructDate(convert(`${newValue}`));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setopen(false);
  };

  useEffect(() => {
    props.setshowAppBar(false)
  }, [])


  const natures = [
    {
      value: 'Logement (surface en m² habitable)',
      label: 'Logement (surface en m² habitable)',
    },
    {
      value: 'Bureau (surface en m² SUB)',
      label: 'Bureau (surface en m² SUB)',
    },
    {
      value: 'Enseignement (surface en m² SHON)',
      label: 'Enseignement (surface en m² SHON)',
    },
    {
      value: 'Santé (surface en m² SDO)',
      label: 'Santé (surface en m² SDO)',
    },
    {
      value: 'Autres (surface en m² SHON)',
      label: 'Autres (surface en m² SHON)',
    },
  ];

  useEffect(() => {
    props.setconstructDate(convert(`${myDate}`))
  }, [myDate])


  const nextPage = (e) => {
    e.preventDefault();
    if (props.checkedSimple || props.checkedDeveloppe) {
      navigate("/settings", { replace: true });
    }
    else {
      setopen(true)
    }

  }

  function convertDate(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate().toString();

    var mmChars = mm.split('');
    var ddChars = dd.split('');

    return (ddChars[1] ? dd : "0" + ddChars[0]) + '-' + (mmChars[1] ? mm : "0" + mmChars[0]) + '-' + yyyy;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='back'>
        <Notification open={open} type="error" message="veuillez choisir le mode d'analyse" handleClose={handleClose} />

        <div className='form'>
          <form onSubmit={(e) => nextPage(e)}>
            <div className="titleForm">
              projet
            </div>
            <div style={{ marginTop: '-30px' }}>
              <TextField
                className='textfield'
                required
                size='small'
                fullWidth
                //  error={nom === '' ? true : false}
                value={props.nom}
                onChange={(e) => props.setnom(e.target.value)}
                placeholder='entrer un Nom'
                id="outlined-error-helper-text"
                label="Nom"
              //  helperText={nom === '' ? "veuillez donner un nom a votre projet" : ''}
              />

              <TextField
                id="outlined-select-currency"
                className='textfield'
                size='small'
                select
                fullWidth
                //  error={nature === '' ? true : false}
                label="Nature"
                value={props.nature}
                onChange={(e) => props.setnature(e.target.value)}
              //  helperText={nature === '' ? "Veuiller choisir la nature de votre projet" : ''}
              >
                {natures.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              {/* 
              <DatePicker
        label="Date de construction"
        // inputFormat="dd/MM/yyyy"
         className='textfield'
        value={value}
        onChange={(newValue) => {
          handleChange(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      /> */}

              <DesktopDatePicker
                label="Date de construction"
                // inputFormat="dd/MM/yyyy"
                className='textfield'

                placeholder='entrer une date'
                //  value={props.constructDate !== ''? props.constructDate : null}//`${convertDate(todaysDate)}`}
                // value={props.constructDate}
                // onChange={(date)=>{console.log('that is date',date);handleChange(date)}}
                value={myDate}
                onChange={(date) => setmyDate(date)}
                renderInput={(params) => <TextField
                  // error={constructDate === '' ? true : false }

                  //  helperText={nom === '' ? "veuillez entrer un nom a votre projet" : ''}

                  size='small'
                  fullWidth
                  {...params} />}
              />

              <TextField

                required
                size='small'
                type={'number'}
                fullWidth
                style={{ marginTop: '20px' }}

                //  error={constructionArea === '' ? true : false}
                value={props.constructionArea}
                onChange={(e) => props.setconstructionArea(e.target.value)}
                placeholder='m²'
                id="outlined-error-helper-text"
                label="Surface de construction"
              //  helperText={constructionArea === '' ? "veuillez donner la surface de construction" : ''}
              />

              <div style={{ display: 'block' }}>
                <div style={{ float: 'left', }}>
                  Simplifie

                  <Checkbox
                    checked={props.checkedSimple}
                    disabled={props.checkedDeveloppe}
                    onChange={(e) => props.setcheckedSimple(e.target.checked)}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </div>

                <div style={{ float: 'right', }}>
                  Detaille
                  <Checkbox

                    checked={props.checkedDeveloppe}
                    disabled={props.checkedSimple}
                    onChange={(e) => props.setcheckedDeveloppe(e.target.checked)}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </div>

              </div>


              <Button variant="contained" fullWidth
                type='submit'
                style={{ marginTop: '25px' }}>
                Etape suivante
              </Button>
            </div>
          </form>
        </div>
      </div>
    </LocalizationProvider>
  )
}
