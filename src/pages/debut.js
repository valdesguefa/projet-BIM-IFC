import React, { useEffect } from 'react'

import { useNavigate } from "react-router-dom";
import profil from '../shared/profil.png';
import analysis from '../shared/analysis.png';
import '../styles/debut.css'

export default function Debut(props) {

  let navigate = useNavigate();
useEffect(() => {
  props.setdisableSidebar(true)
}, [])


  return (
    <div style={{ margin: '0', width: '100vw', height: '90vh' }}>

      <div
        style={{ alignContent: 'center', paddingTop: '40px', textAlign: 'center', justifyContent: 'center', alignSelf: 'center', }}

        onClick={() => {
          props.setdisableSidebar(false)
          navigate("/info", { replace: true });
        }}>
        <h1  >CALCUL DU COÛT GLOBAL (CCV)</h1>

        <div style={{ display: 'inline-flex', marginTop: '10%' }}>

          <div title='Connexion' className='elt' style={{ flexDirection: 'column', textAlign: 'center', alignContent: 'center', margin: '0', width: '200px', borderWidth: '1', backgroundColor: 'rgb(0, 7, 61)', borderRadius: '10px', borderStyle: 'unset',marginRight:'150px' }}>
            <img src={profil} alt="profil"   />
            <h3 style={{ color: 'white' }}>Connexion</h3>
          </div>

          <div className='elt' title='Commencer une Analyse' style={{ flexDirection: 'column', textAlign: 'center', alignContent: 'center', margin: '0', width: '200px', borderWidth: '1', backgroundColor: 'rgb(0, 7, 61)', borderRadius: '10px', borderStyle: 'unset' }}>
            <img src={analysis} alt="analysis"   />
            <h3 style={{ color: 'white' }}>Commencer une analyse</h3>
          </div>
          {/* <img className='imge' src={analysis} alt="analysis" title='Commencer une Analyse' /> */}
        </div>
      </div>
    </div>
  )
}
