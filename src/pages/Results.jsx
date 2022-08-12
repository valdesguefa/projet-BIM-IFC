import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { bounce } from 'react-animations';
import 'animate.css';
import '../styles/result.scss'

import Radium, { StyleRoot } from 'radium';
import ResultsSimple from './resultsSimple';

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}


// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function Results(props) {



  let navigate = useNavigate();

  const [ccvs, setccvs] = useState(0)
  const [Cpersistance, setCpersistance] = useState(0)
  const [Cdementellement, setCdementellement] = useState(0)

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

  useEffect(() => {
    console.log('props.constructDate', props.constructDate)

    var a = 0
    var d = props.actualisationReel / 100
    a = Actu(props.utilisation, props.actualisation, d, props.persistance)
    console.log('setCpersistance', a)
    setCpersistance(a)


    var b = 0
    console.log('props.dementellement', props.dementellement)
    console.log('props.persistance', props.persistance)
    console.log('props.actuali0ationReel', props.actualisationReel)
    b = Actu(props.dementellement, props.persistance, d, props.persistance)
    b = b / (props.persistance)
    console.log('setCdementellement', b)
    setCdementellement(b)

    var c = 0
    c = a + b + props.investissement
    console.log('setccvs', c)
    setccvs(c)



  }, [props])



  return (
    // <StyleRoot>
    <div style={styles.bounce}>

      {/* <div >
        <div className='content'>
          Le projet
        </div>
        <span>              Nom	:	{props.nom}</span>
        <span>          Nature	:	{props.nature}</span>
        <span>Date de livraison	:		{props.constructDate}</span>
        <span>          Surface	:	{props.constructionArea}</span>
        <span>  Mode d'analyse	:	{props.checkedSimple ? 'Global' : 'Detaille'}	</span>

      </div>

      <div >
        <div>
          Paramètres généraux
        </div>
        <span>        Période d'analyse	:	{props.persistance}</span>
        <span>               Variation	:	{props.actualisation}</span>
        <span>Taux d'actualisation reel :	{props.actualisationReel}</span>
        <span>Taux d'inflation général	:	{props.inflation}</span>

      </div >
      <div >
        <div>
          Périmètre du projet (en XCFA)
        </div>
        <div>
          <strong  >Coût d'utilisation sur la période de persistance : {Cpersistance} </strong>

          <strong  >                          Coût de dementellement : {Cdementellement} </strong>

          <strong  >                 Coût de cycle de vie simplifiee : {ccvs}</strong>
        </div>
      </div>

      <div>

      </div> */}


      <ResultsSimple checkedDeveloppe={props.checkedDeveloppe} checkedSimple={props.checkedSimple} nom={props.nom} constructDate={props.constructDate} constructionArea={props.constructionArea} nature={props.nature}
        actualisation={props.actualisation} inflation={props.inflation} persistance={props.persistance} actualisationReel={props.actualisationReel}
        dementellement={props.dementellement} utilisation={props.utilisation} investissement={props.investissement}
        Cpersistance={Cpersistance} Cdementellement={Cdementellement} ccvs={ccvs}
      />


    </div>
    // </StyleRoot>
  )
}
