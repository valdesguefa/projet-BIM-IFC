import React from 'react'
import '../styles/simpleResult.scss'

import { useNavigate } from "react-router-dom";


export default function ResultsSimple(props) {
    let navigate = useNavigate();


    return (
        <div class="container">
            <div class="card1"  onClick={()=> navigate("/", { replace: true })}>
                <h3> Le projet</h3>
                
                {/* <p class="small">Card description with lots of great facts and interesting details.</p>
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
                <div class="go-corner" href="#">
                    <div class="go-arrow">
                        →
                    </div>
                </div>
            </div>

            <div class="card2" onClick={()=> navigate("/settings", { replace: true })}>
                <h3>   Paramètres généraux</h3>
                <p>   Période d'analyse	:	{props.persistance} ans</p>
                <br />

                <p>               Variation	:	{props.actualisation} ans</p>
                <br />

                <p> Taux d'actualisation reel :	{props.actualisationReel}%</p>
                <br />

                <p>Taux d'inflation général	:	{props.inflation}%</p>

                <div class="go-corner" href="#">
                    <div class="go-arrow">
                        →
                    </div>
                </div>
            </div>

            <div class="card3" onClick={()=> navigate("/ccv/simple", { replace: true })}>
                <h3>   Périmètre du projet (en XCFA)</h3>
              
                {/* <p class="small">Card description with lots of great facts and interesting details.</p> */}

                <p class="small">Coût d'utilisation sur la période de persistance : {props.Cpersistance} </p>
                <br />

                <p class="small">                          Coût de dementellement : {props.Cdementellement} </p>
                <br />

                <p class="small">                 Coût de cycle de vie simplifiee : {props.ccvs}</p>
                <br />

                <div class="dimmer"></div>
                <div class="go-corner" href="#">
                    <div class="go-arrow">
                        →
                    </div>
                </div>
            </div>

            {/* <a class="card4" href="#">

                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                    <g id="Artboard-Copy-19" transform="translate(-874.000000, -1729.000000)" stroke-width="1.5">
                        <g id="Group-22" transform="translate(0.000000, 1672.000000)">
                            <g id="Group-46" transform="translate(688.000000, 33.000000)">
                                <g id="Group-42" transform="translate(166.000000, 0.000000)">
                                    <g id="Group-25" transform="translate(21.000000, 25.000000)">
                                        <g id="Group-9" transform="translate(0.000000, 17.666667)">
                                            <path d="M14,8.33306667 L14,12.3330667" id="Stroke-3" stroke="#CD3D73"></path>
                                            <polyline id="Stroke-1" stroke="#666666" points="18 4.33306667 18 12.3330667 10 12.3330667"></polyline>
                                            <polyline id="Stroke-5" stroke="#666666" points="10 5.1332 10 12.3332 2 12.3332 2 6.3332"></polyline>
                                            <polygon id="Stroke-7" stroke="#666666" points="9 6.33306667 14 0.333066667 5 0.333066667 0 6.33306667"></polygon>
                                        </g>
                                        <path d="M20,23.9997333 L14,17.9997333" id="Stroke-10" stroke="#666666"></path>
                                        <g id="Group-15" transform="translate(5.666667, 0.000000)" stroke="#666666">
                                            <polygon id="Stroke-11" points="9.28906667 7.99973333 16.3330667 -0.000266666667 7.33306667 -0.000266666667 0.289066667 7.99973333"></polygon>
                                            <path d="M24.3333333,7.99973333 L16.3333333,-0.000266666667" id="Stroke-13"></path>
                                        </g>
                                        <path d="M16,6.8148 L16,14.0001333" id="Stroke-16" stroke="#666666"></path>
                                        <polyline id="Stroke-17" stroke="#666666" points="28 5.99973333 28 23.9997333 24 23.9997333"></polyline>
                                        <path d="M8,13.9997333 L8,7.99973333" id="Stroke-19" stroke="#666666"></path>
                                        <path d="M20,8.99973333 L20,9.99973333" id="Stroke-20" stroke="#CD3D73"></path>
                                        <path d="M24,8.99973333 L24,9.99973333" id="Stroke-21" stroke="#CD3D73"></path>
                                        <path d="M20,13.9997333 L20,14.9997333" id="Stroke-22" stroke="#CD3D73"></path>
                                        <path d="M24,13.9997333 L24,14.9997333" id="Stroke-23" stroke="#CD3D73"></path>
                                        <path d="M24,18.9997333 L24,19.9997333" id="Stroke-24" stroke="#CD3D73"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>

                <h3>This is option 4</h3>
                <p class="small">Card description with lots of great facts and interesting details.</p>
                <div class="dimmer"></div>
                <div class="go-corner" href="#">
                    <div class="go-arrow">
                        →
                    </div>
                </div>
            </a> */}

        </div>
    )
}
