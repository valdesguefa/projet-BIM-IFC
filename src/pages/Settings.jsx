import React, { useState } from 'react'
import '../styles/FormSettings.css'
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function Settings(props) {

  let navigate = useNavigate();

  const nextPage=(e)=>{
    e.preventDefault();
    
    navigate("/ccv/simple", { replace: true });
  }

  return (
    <div className='back'>

      <div className='form'>
        <form onSubmit={(e) => nextPage(e)}>
          <div className="titleForm">
            Parametres
          </div>
          <div style={{ marginTop: '-30px' }}>
            <TextField
              className='textfield'
              required
              type={'number'}
              size='small'
              fullWidth
              //  error={nom === '' ? true : false}
              value={props.persistance}
              onChange={(e) => props.setpersistance(e.target.value)}
              placeholder='ans'
              id="outlined-error-helper-text"
              label="Durée de persistance"
            //  helperText={nom === '' ? "veuillez donner un nom a votre projet" : ''}
            />

            <TextField
              className='textfield'
              required
              type={'number'}
              size='small'
              fullWidth
              //  error={nom === '' ? true : false}
              value={props.actualisation}
              onChange={(e) => props.setactualisation(e.target.value)}
              placeholder='ans'
              id="outlined-error-helper-text"
              label="période d'actualisation"
            //  helperText={nom === '' ? "veuillez donner un nom a votre projet" : ''}
            />

            <TextField
              className='textfield'
              required
              type={'number'}
              size='small'
              fullWidth
              InputProps={{
                inputProps: {
                  max: 4, min: 0
                }
              }}
              //  error={nom === '' ? true : false}
              value={props.actualisationReel}
              onChange={(e) => props.setactualisationReel(e.target.value)}
              placeholder='%'
              id="outlined-error-helper-text"
              label="Taux d'actualisation réel"
            //  helperText={nom === '' ? "veuillez donner un nom a votre projet" : ''}
            />

            <TextField
              className='textfield'
              type={'number'}
              size='small'
              fullWidth
              InputProps={{
                inputProps: {
                  max: 100, 
                  min: 0,
                },
                
              }}
              //  error={nom === '' ? true : false}
              value={props.inflation}
              onChange={(e) => props.setinflation(e.target.value)}
              placeholder='%'
              id="outlined-error-helper-text"
              label="Taux d'inflation général"
            //  helperText={nom === '' ? "veuillez donner un nom a votre projet" : ''}
            />


            <Button variant="contained" fullWidth
              type='submit'
              style={{ marginTop: '25px' }}>
              Etape suivante
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
