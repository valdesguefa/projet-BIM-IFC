import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

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
    console.log('props.constructDate',props.constructDate)

    var a = 0
    var d = props.actualisationReel / 100
    a = Actu(props.utilisation, props.actualisation, d, props.persistance)
     console.log('setCpersistance', a)
    setCpersistance(a)


    var b = 0
     console.log('props.dementellement',props.dementellement)
     console.log('props.persistance',props.persistance)
     console.log('props.actuali0ationReel',props.actualisationReel)
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
    <div>

      <div >
        <div>
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

      </div>

    </div>
  )
}