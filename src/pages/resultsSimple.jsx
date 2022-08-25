import React from 'react'
import '../styles/simpleResult.scss'

import { useNavigate } from "react-router-dom";


export default function ResultsSimple(props) {
    let navigate = useNavigate();
    //PROJET DE CONSTRUCTION D'UN R+2 A NSIMALEN

    return (
        <div style={{ paddingTop: '15px', overflow: 'overlay', height: '100%' }}>
            <div className="cardHeader">
                <div style={{ width: '600px', margin: '0 auto', alignItems: 'center', alignContent: 'center', textAlign: 'center' }}>    <h2 style={{ color: 'white', alignContent: 'center', alignItems: 'center' }}>{props.nom}</h2></div>
                <table>
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Type :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>

                            <td style={{ width: '870px' }} align='right'>{props.nature}</td>
                        </tr>
                        <tr>
                            <td style={{ width: '500px' }}><span>période de persistance :</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>

                            <td style={{ paddingLeft: '200px' }} align='right'>{props.persistance} ans</td>
                        </tr>
                        <tr>
                            <td>taux d'actualisation :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>

                            <td style={{ paddingLeft: '200px' }} align='right'>{props.actualisation}ans</td>
                        </tr>

                        <tr>
                            <td><h4 style={{ color: 'white' }}>COUT GLOBAL :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4></td>

                            <td style={{ paddingLeft: '150px' }} align='right'><h2 style={{ color: 'white' }}>{props.ccvs.toFixed(3)} XCFA</h2></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className="containerSimple">



                <div className="card1" onClick={() => navigate("/", { replace: true })}>
                    <h3> Le projet</h3>

                    {/* <p className="small">Card description with lots of great facts and interesting details.</p>
                 */}

                    <p>              Nom	:	{props.nom}</p>
                    <br />
                    <p>          Nature	:	{props.nature}</p>
                    <br />

                    <p>Date de livraison	:		{props.constructDate}</p>
                    <br />

                    <p>          Surface	:	{props.constructionArea} m²</p>
                    <br />

                    <p>  Mode d'analyse	:	{props.checkedSimple ? 'Global' : 'Détaille'}	</p>
                    <div className="go-corner" href="#">
                        <div className="go-arrow">
                            →
                        </div>
                    </div>
                </div>

                <div className="card2" onClick={() => navigate("/settings", { replace: true })}>
                    <h3>   Paramètres généraux</h3>
                    <p>   Période d'analyse	:	{props.persistance} ans</p>
                    <br />

                    <p>               Variation	:	{props.actualisation} ans</p>
                    <br />

                    <p> Taux d'actualisation reel :	{props.actualisationReel}%</p>
                    <br />

                    <p>Taux d'inflation général	:	{props.inflation}%</p>

                    <div className="go-corner" href="#">
                        <div className="go-arrow">
                            →
                        </div>
                    </div>
                </div>

                <div className="card3" onClick={() => navigate("/ccv/simple", { replace: true })}>
                    <h3>   Périmètre du projet (en XCFA)</h3>

                    {/* <p className="small">Card description with lots of great facts and interesting details.</p> */}

                    {/* <p className="small">Coût d'utilisation sur la période de persistance : {props.Cpersistance} </p>
                <br />

                <p className="small">                          Coût de dementellement : {props.Cdementellement} </p>
                <br /> */}

                    <p className="small">Investissement (XCFA) : {props.investissement.toFixed(3)} </p>
                    <br />

                    <p className="small">                 Coût de cycle de vie simplifiee : {props.ccvs}</p>
                    <br />


                    <p className="small">                 Coût Annuel d'utilisation : {props.utilisation}</p>
                    <br />

                    <p className="small">                 Coût de Dementellement : {props.dementellement}</p>
                    <br />

                    <div className="dimmer"></div>
                    <div className="go-corner" href="#">
                        <div className="go-arrow">
                            →
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
