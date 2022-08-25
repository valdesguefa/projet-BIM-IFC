import React, { useEffect, useState } from 'react'
import '../styles/simple.css'
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

import Checkbox from '@mui/material/Checkbox';

export default function Simple(props) {
  let navigate = useNavigate();

  // const [ccvs, setccvs] = useState(0)
  // const [Cpersistance, setCpersistance] = useState(0)
  // const [Cdementellement, setCdementellement] = useState(0)

  /*
  function Actu(Ca, T, a, N) {
    var n0 = T
    var CaT = T * Ca
    var Act = 0
    while (n0 < N + 1) {
      var e = Math.pow(1 + a, n0)
      var Cta = CaT / (e)
      Act = Act + Cta
      n0 = n0 + T
    }
    return Act
  }
*/

useEffect(() => {
  props.setshowAppBar(false)
}, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
        console.log('props.utilisation', props.utilisation)
        console.log('props.actualisation', props.actualisation)
        console.log('props.actualisationReel', props.actualisationReel)
        console.log('props.persistance', props.persistance)
        var a = 0
        var d = props.actualisationReel / 100
        a = Actu(props.utilisation, props.actualisation, d, props.persistance)
        // console.log('setCpersistance', a)
        setCpersistance(a)
    
    
        var b = 0
        // console.log('props.dementellement',props.dementellement)
        // console.log('props.persistance',props.persistance)
        // console.log('props.actuali0ationReel)
        b = Actu(props.dementellement, props.persistance, d, props.persistance)
        b = b / (props.persistance)
        // console.log('setCdementellement', b)
        setCdementellement(b)
    
        var c = 0
        c = a + b + props.investissement
        // console.log('setccvs', c)
        setccvs(c)
    */

    navigate("/results", { replace: true });

  }

  return (
    <div className='backs'>

      <div className='forms'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="titleForms">
            Cycle de vie simplifié  (CCVs)
          </div>
          <div style={{ marginTop: '-30px' }}>
            <TextField
              className='textfields'
              required
              type={'number'}
              size='small'
              fullWidth
              //  error={nom === '' ? true : false}
              value={props.investissement}
              onChange={(e) => props.setinvestissement(e.target.value)}
              placeholder='XCFA'
              id="outlined-error-helper-text"
              label="Investissement"
            //  helperText={nom === '' ? "veuillez donner un nom a votre projet" : ''}
            />

            <TextField
              className='textfields'
              required
              type={'number'}
              size='small'
              fullWidth
              //  error={nom === '' ? true : false}
              value={props.utilisation}
              onChange={(e) => props.setutilisation(e.target.value)}
              placeholder='XCFA'
              id="outlined-error-helper-text"
              label="Coût annuel d'utilisation"
            //  helperText={nom === '' ? "veuillez donner un nom a votre projet" : ''}
            />

            <TextField
              className='textfields'
              required
              type={'number'}
              size='small'
              fullWidth

              //  error={nom === '' ? true : false}
              value={props.dementellement}
              onChange={(e) => props.setdementellement(e.target.value)}
              placeholder='XCFA'
              id="outlined-error-helper-text"
              label="Coût de démentellement"
            //  helperText={nom === '' ? "veuillez donner un nom a votre projet" : ''}
            />



            <Button variant="contained" fullWidth
              type='submit'
              style={{ marginTop: '25px' }}>
              Resulat
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
