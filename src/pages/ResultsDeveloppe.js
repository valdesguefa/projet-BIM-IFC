import React, { useEffect, useState } from 'react'
import '../styles/simpleDeveloppe.scss'

import { useNavigate } from "react-router-dom";


export default function ResultsDeveloppe(props) {
    let navigate = useNavigate();
    const [totalConstruction, settotalConstruction] = useState(0)
    const [totalMaintenance, settotalMaintenance] = useState(0)
    const [totalDementellement, settotalDementellement] = useState(0)
    const [totalExternalite, settotalExternalite] = useState(0)
    const [totalSysteme, settotalSysteme] = useState(0)
    const [totalAppareil, settotalAppareil] = useState(0)

    const [totalEnergie, settotalEnergie] = useState(0)
    const [totalEquipement, settotalEquipement] = useState(0)
    const [totalFiltre, settotalFiltre] = useState(0)
    const [totalChauffe, settotalChauffe] = useState(0)
    const [totalEclairage, settotalEclairage] = useState(0)
    const [totalUtilisation, settotalUtilisation] = useState(0)

    const [totalProject, settotalProject] = useState(0)

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
    function ActuMR(Ca, T, a, N, TM) {
        var m = 0
        var Nm = 0
        var ActuMR = 0
        if (Math.floor(TM / T) === TM / T) {
            ActuMR = Actu(Ca, TM, a, N)
        }
        else {
            while (m < N + 1) {
                if (Math.floor((m - 1) / T) === ((m - 1) / T)) {
                    Nm = 0
                }
                if (Math.floor(m / TM) === m / TM) {
                    Nm = Nm + 1
                }
                if (0 < Math.floor(m / T)) {
                    ActuMR = ActuMR + Nm * Ca / (Math.pow(1 + a, m))
                }
                m = m + 1
            }
        }
        return ActuMR
    }


    // React.useEffect(() => {
    //     console.log('props.setconstructionMaintenance', props.constructionMaintenance);
    //     console.log(' props.setcomposeMaintenance', props.composeMaintenance);
    //     console.log(' props.setfonctionMaintenance', props.fonctionMaintenance);
    //     console.log('  props.setprestationMaintenance', props.prestationMaintenance)
    //   }, [props.constructionMaintenance, props.composeMaintenance, props.fonctionMaintenance, props.prestationMaintenance])



    useEffect(() => {
        var a = 0
        for (let obj of props.compose) {
            if (obj.pu !== 0) {
                a = a + obj.ptc
            }

        }

        for (let obj of props.fonction) {
            if (obj.pu !== 0) {
                a = a + obj.ptc
            }
        }
        for (let obj of props.prestation) {
            if (obj.pu !== 0) {
                a = a + obj.ptc
            }
        }
        settotalConstruction(a.toFixed(3))
      //  settotalProject(totalProject + a)
    }, [props.construction, props.compose, props.fonction, props.prestation])


    useEffect(() => {
        var a = 0
        // for (let obj of props.composeMaintenance) {
        //     if (obj.unite !== '') {
        //         a = a + obj.cmrtg
        //     }

        // }

        // for (let obj of props.fonctionMaintenance) {
        //     if (obj.unite !== '') {
        //         a = a + obj.cmrtg
        //     }
        // }
        // for (let obj of props.prestationMaintenance) {
        //     if (obj.unite !== '') {
        //         a = a + obj.cmrtg
        //     }
        // }
        for (let obj of props.constructionMaintenance) {
            a = a + obj.cmrtg
        }
        settotalMaintenance(a)
     //   settotalProject(totalProject + a)

    }, [props.constructionMaintenance])

    //[props.constructionMaintenance, props.composeMaintenance, props.fonctionMaintenance, props.prestationMaintenance])


    useEffect(() => {
        var a = 0
        for (let obj of props.externalitesDementellement) {

            a = a + Actu((obj.dc - obj.vr) * obj.quantite, props.actualisation, props.actualisationReel / 100, props.persistance) / (props.persistance)
            //ActuMR(obj.cex * obj.quantite, props.actualisation, props.actualisationReel / 100, props.persistance, obj.tex)
        }
        settotalDementellement(a.toFixed(3))
      //  settotalProject(totalProject + a)
    }, [props.externalitesDementellement])

    useEffect(() => {
        var a = 0
        for (let obj of props.externalites) {

            a = a + ActuMR(obj.cex * obj.quantite, props.actualisation, props.actualisationReel / 100, props.persistance, obj.tex)
        }
     //   settotalProject(totalProject + a)
        settotalExternalite(a.toFixed(3))

    }, [props.externalites])


    useEffect(() => {
        //  console.log('eclairage ------',props.eclairage)
        var a = 0
        for (let obj1 of props.eclairage) {
            a = a + Actu(((obj1.quantite * obj1.bs * obj1.ot * obj1.ec) / 1000) * obj1.quantite, props.actualisation, props.actualisationReel / 100, props.persistance)
        }
        settotalEclairage(a)
        // console.log('voici le settotalEclairage',totalEclairage)
    }, [props.eclairage])

    useEffect(() => {
        console.log('filtre ------', props.filtre)
        var a = 0
        for (let obj2 of props.filtre) {
            a = a + Actu(((obj2.quantite * obj2.cp * obj2.aq * obj2.fl * obj2.rf * obj2.k) / (obj2.mbe * 10000)) * obj2.quantite, props.actualisation, props.actualisationReel / 100, props.persistance)
        }
        settotalFiltre(a)

    }, [props.filtre])

    useEffect(() => {
        console.log('chauffe ------', props.chauffe)
        var a = 0
        for (let obj3 of props.chauffe) {
            a = a + Actu(((obj3.quantite * obj3.btua * obj3.fc) / (obj3.er * obj3.btup)) * obj3.quantite, props.actualisation, props.actualisationReel / 100, props.persistance)
        }
        settotalChauffe(a)

    }, [props.chauffe])

    useEffect(() => {
        console.log('equipement ------', props.equipement)
        var a = 0
        for (let obj4 of props.equipement) {
            a = a + Actu(obj4.eca * obj4.quantite, props.actualisation, props.actualisationReel / 100, props.persistance)
        }
        settotalEquipement(a)

    }, [props.equipement])

    useEffect(() => {
        console.log('systeme ------', props.systeme)
        var a = 0
        for (let obj5 of props.systeme) {
            a = a + obj5.quantite * (obj5.ic + obj5.eca + ActuMR(obj5.NRCa, props.actualisation, props.actualisationReel / 100, props.persistance, obj5.m) + ActuMR(obj5.NRCa, props.actualisation, props.actualisationReel / 100, props.persistance, obj5.n))

        }
        settotalSysteme(a)
    }, [props.systeme])

    useEffect(() => {
        console.log('appareil ------', props.appareil)
        var a = 0
        for (let obj6 of props.appareil) {
            a = a + Actu((obj6.quantite * (obj6.aqc + obj6.ec * obj6.fc * (1 + obj6.fr / 100) / (1 + props.actualisationReel / 100))), props.actualisation, props.actualisationReel / 100, props.persistance)
        }
        settotalAppareil(a)
    }, [props.appareil])

    useEffect(() => {
        settotalEnergie(totalChauffe + totalEclairage + totalFiltre + totalEquipement)
    }, [totalChauffe, totalEclairage, totalFiltre, totalEquipement])

    useEffect(() => {
      //  settotalProject(totalProject + totalEnergie + totalAppareil + totalSysteme)
        settotalUtilisation(totalEnergie + totalAppareil + totalSysteme)

    }, [totalEnergie, totalAppareil, totalSysteme])

    useEffect(() => {
        var b = 0
        b = parseFloat(totalDementellement) + parseFloat(totalExternalite) + parseFloat(totalUtilisation) + parseFloat(totalConstruction) +  parseFloat(totalMaintenance)
       
            props.settotalProjects(b.toFixed(3))//(parseFloat(b).toFixed(3))
            settotalProject(b.toFixed(3))//(parseFloat(b).toFixed(3))
  
    
        // console.log('totalDementellement', totalDementellement)
        // console.log('totalExternalite', totalExternalite)
        // console.log('totalUtilisation', totalUtilisation)
        // console.log('totalConstruction', totalConstruction)
        // console.log('totalMaintenance', totalMaintenance)
    }, [totalDementellement, totalExternalite, totalUtilisation, totalConstruction, totalMaintenance])


    useEffect(() => {
        props.settotalProjects(totalProject)
        console.log('props.settotalProjects(totalProject)',totalProject)
    }, [totalProject])

    return (
        <div className="container">
            {/* <div className="cardHeaderDev" >
                <h3 style={{ marginLeft: '35%',backgroundColor:'#00838d',color:'white' }}><strong>projet: {props.nom}</strong></h3>
                <table>
                    <thead>
                        <th>type : {}</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>période de persistance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>{props.persistance} ans</td>
                        </tr>
                        <tr>
                            <td>taux d'actualisation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>{props.actualisation}ans</td>
                        </tr>

                        <tr>
                            <td>Coût de cycle de vie simplifiee&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>{totalProject} XCFA</td>
                        </tr>

                    </tbody>
                </table>
            </div> */}

            <div className="cardHeader" style={{ marginLeft: '23%' }}>
                <div style={{ width: '600px', margin: '0 auto', alignItems: 'center', alignContent: 'center', textAlign: 'center' }}> <h2 style={{ color: 'white', alignContent: 'center', alignItems: 'center' }}>{props.nom}</h2></div>
                <table>
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Type :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>

                            <td style={{ width: '870px' }} align='right'>{props.nature}</td>
                        </tr>
                        <tr>
                            <td style={{ width: '500px' }}>période de persistance :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>

                            <td align='right'>{props.persistance} ans</td>
                        </tr>
                        <tr>
                            <td>taux d'actualisation :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>

                            <td align='right'>{props.actualisation}ans</td>
                        </tr>

                        <tr>
                            <td><h4 style={{ color: 'white' }}>COUT GLOBAL :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4></td>

                            <td align='right'><h2 style={{ color: 'white' }}>{totalProject} XCFA</h2></td>
                        </tr>

                    </tbody>
                </table>
            </div>


            <div className="card1Dev" onClick={() => navigate("/", { replace: true })}>
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

            <div className="card2Dev" onClick={() => navigate("/settings", { replace: true })}>
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

            <div className="card3Dev" onClick={() => navigate("/ccv/developpe/Construction", { replace: true })}>
                <h3>   Construction</h3>

                {/* <p className="small">Card description with lots of great facts and interesting details.</p> */}

                <div style={{ overflow: 'auto' }}>
                    <table>
                        <thead>
                            <th>Désignation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            <th>PT</th>
                        </thead>
                        <tbody>
                            {
                                props.construction.map((elt) => {

                                    return (
                                        <tr>
                                            <td className="small">{elt.designation}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td className="small">{elt.ptc.toFixed(3)}</td>
                                        </tr>
                                    )
                                })
                            }

                            {/* 
                            {
                                props.fonction.filter((elt) => elt.pu !== 0).map((elt) => {

                                    return (
                                        <tr>
                                            <td className="small">{elt.designation}</td><td className="small">{elt.ptc.toFixed(3)}</td>
                                        </tr>
                                    )
                                })
                            }

                            {
                                props.prestation.filter((elt) => elt.pu !== 0).map((elt) => {

                                    return (
                                        <tr>
                                            <td className="small">{elt.designation}</td><td className="small">{elt.ptc.toFixed(3)}</td>
                                        </tr>
                                    )
                                })
                            } */}
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td className="small">{<strong>Total</strong>}</td>
                                <td className="small"><strong>{totalConstruction}</strong></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div className="dimmer"></div>
                <div className="go-corner" href="#">
                    <div className="go-arrow">
                        →
                    </div>
                </div>
            </div>

            <div className="card3Dev" onClick={() => navigate("/ccv/developpe/maintenance_remplacement", { replace: true })}>
                <h3 style={{ display: 'inline' }}>   Maintenance ET Remplacement</h3>

                {/* <p className="small">Card description with lots of great facts and interesting details.</p> */}
                <div style={{ overflow: 'auto' }}>
                    <table>
                        <thead>
                            <th>Désignation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            {/* <th>CMRtg</th> */}
                            <th>PT</th>
                        </thead>
                        <tbody>
                            {
                                props.constructionMaintenance.map((elt) => {

                                    return (
                                        <tr>
                                            <td className="small">{elt.designation}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td className="small">{elt.cmrtg.toFixed(3)}</td>
                                        </tr>
                                    )
                                })
                            }


                            {/* {
                                props.fonctionMaintenance.filter((elt) => elt.unite !== '').map((elt) => {

                                    return (
                                        <tr>
                                            <td className="small">{elt.designation}</td><td className="small">{elt.cmrtg}</td>
                                        </tr>
                                    )
                                })
                            }

                            {
                                props.prestationMaintenance.filter((elt) => elt.unite !== '').map((elt) => {

                                    return (
                                        <tr>
                                            <td className="small">{elt.designation}</td><td className="small">{elt.cmrtg}</td>
                                        </tr>
                                    )
                                })
                            } */}


                        </tbody>
                    </table>
                </div>
                <strong>Total : {totalMaintenance.toFixed(3)}</strong>
                <div className="dimmer"></div>
                <div className="go-corner" href="#">
                    <div className="go-arrow">
                        →
                    </div>
                </div>
            </div>

            <div className="card3Dev" onClick={() => navigate("/ccv/developpe/Dementellement", { replace: true })}>
                <h3 style={{ display: 'inline' }}>   Démentellement</h3>

                {/* <div style={{ overflow: 'overlay', height: '230px', marginTop: '5px' }}>
                    <table>
                        <thead>
                            <th>Désignation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            <th>DCtg</th>
                        </thead>
                        <tbody>
                            {
                                props.externalitesDementellement.map((elt) => {

                                    return (
                                        <tr>
                                            <td className="small">{elt.designation}</td><td className="small">{Actu((elt.dc - elt.vr) * elt.quantite, props.actualisation, props.actualisationReel / 100, props.persistance) / (props.persistance)
                                            }</td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div> */}
                <table>
                    <thead>
                        <th>  <strong>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></th>
                        <th>  <strong>{totalDementellement}</strong></th>
                    </thead>
                </table>

                <div className="dimmer"></div>
                <div className="go-corner" href="#">
                    <div className="go-arrow">
                        →
                    </div>
                </div>
            </div>

            <div className="card3Dev" onClick={() => navigate("/ccv/developpe/Externalite", { replace: true })}>
                <h3 style={{ display: 'inline' }}>   Externalité</h3>

                {/* <p className="small">Card description with lots of great facts and interesting details.</p> */}
                {/* <div style={{ overflow: 'overlay', height: '230px', marginTop: '5px' }}>
                    <table>
                        <thead>
                            <th>Désignation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            <th>CExtg</th>
                        </thead>
                        <tbody>
                            {
                                props.externalites.map((elt) => {

                                    return (
                                        <tr>
                                            <td className="small">{elt.designation}</td><td className="small">{ActuMR(elt.cex * elt.quantite, props.actualisation, props.actualisationReel / 100, props.persistance, elt.tex)}</td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div> */}
                <table>
                    <thead>
                        <th>
                            <strong>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                        </th>
                        <th>
                            <strong>{totalExternalite}</strong>
                        </th>
                    </thead>
                </table>
                { }
                <div className="dimmer"></div>
                <div className="go-corner" href="#">
                    <div className="go-arrow">
                        →
                    </div>
                </div>
            </div>

            <div className="card5" onClick={() => navigate("/ccv/developpe/Utilisation", { replace: true })}>
                {/* <h3 style={{ display: 'inline' }}>   Energie</h3>

                <div style={{ overflow: 'overlay', height: '230px', marginTop: '10px' }}>
                    <h4>Eclairage</h4>
                    <table>
                        <thead>
                            <th>Désignation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            <th>LCtq</th>
                        </thead>
                        <tbody>
                            {
                                props.eclairage.map((elt) => {
                                    var b = (elt.quantite * elt.bs * elt.ot * elt.ec) / 1000
                                    return (
                                        <tr>
                                            <td className="small">{elt.designation}</td><td className="small">{Actu(((elt.quantite * elt.bs * elt.ot * elt.ec) / 1000) * elt.quantite, props.actualisation, props.actualisationReel / 100, props.persistance)}</td>
                                        </tr>
                                    )
                                })
                            }

                          
                        </tbody>
                    </table>
                </div>

                <div style={{ overflow: 'overlay', height: '230px', marginTop: '10px', marginLeft: '10px' }}>
                    <h4>Chauffe Eau</h4>
                    <table>
                        <thead>
                            <th>Désignation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            <th>WHCtg</th>
                        </thead>
                        <tbody>
                            {
                                props.chauffe.map((elt) => {

                                    return (
                                        <tr>
                                            <td className="small">{elt.designation}</td><td className="small">{Actu(((elt.quantite * elt.btua * elt.fc) / (elt.er * elt.btup)) * elt.quantite, props.actualisation, props.actualisationReel / 100, props.persistance)}</td>
                                        </tr>
                                    )
                                })
                            }

                          
                        </tbody>
                    </table>
                </div>

                <div style={{ overflow: 'overlay', height: '230px', marginTop: '10px', marginLeft: '10px' }}>
                    <h4>Filtre a Air</h4>
                    <table>
                        <thead>
                            <th>Désignation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            <th>Cetg</th>
                        </thead>
                        <tbody>
                            {
                                props.filtre.map((elt) => {

                                    return (
                                        <tr>
                                            <td className="small">{elt.designation}</td><td className="small">{Actu(((elt.quantite * elt.cp * elt.aq * elt.fl * elt.rf * elt.k) / (elt.mbe * 10000)) * elt.quantite, props.actualisation, props.actualisationReel / 100, props.persistance)}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>

                <div style={{ overflow: 'overlay', height: '230px', marginTop: '10px', marginLeft: '10px' }}>
                    <h4>Autre Equipement</h4>
                    <table>
                        <thead>
                            <th>Désignation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            <th>ECtg</th>
                        </thead>
                        <tbody>
                            {
                                props.equipement.map((elt) => {

                                    return (
                                        <tr>
                                            <td className="small">{elt.designation}</td><td className="small">{Actu(elt.eca * elt.quantite, props.actualisation, props.actualisationReel / 100, props.persistance)}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>

                <div style={{ overflow: 'overlay', height: '230px', marginTop: '10px', marginLeft: '10px' }}>
                    <h4>CCV Appareil</h4>
                    <table>
                        <thead>
                            <th>Désignation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            <th>LCCtg</th>
                        </thead>
                        <tbody>
                            {
                                props.appareil.map((elt) => {

                                    return (
                                        <tr>
                                            <td className="small">{elt.designation}</td><td className="small">{Actu((elt.quantite * (elt.aqc + elt.ec * elt.fc * (1 + elt.fr / 100) / (1 + props.actualisationReel / 100))), props.actualisation, props.actualisationReel / 100, props.persistance)}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>

                <div style={{ overflow: 'overlay', height: '230px', marginTop: '10px', marginLeft: '10px' }}>
                    <h4>CCV Systeme d'energie</h4>
                    <table>
                        <thead>
                            <th>Désignation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            <th>LCCesg</th>
                        </thead>
                        <tbody>
                            {
                                props.systeme.map((elt) => {

                                    return (
                                        <tr>
                                            <td className="small">{elt.designation}</td><td className="small">{elt.quantite * (elt.ic + elt.eca + ActuMR(elt.NRCa, props.actualisation, props.actualisationReel / 100, props.persistance, elt.m) + ActuMR(elt.NRCa, props.actualisation, props.actualisationReel / 100, props.persistance, elt.n))}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div> */}
                <table>
                    <thead>
                        <th style={{ paddingLeft: '-20px' }}>type</th>

                        <th>PT (XCFA)</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><h4>Energie</h4></td>

                            <td>{totalEnergie.toFixed(3)}</td>
                        </tr>
                        <tr>

                            <td style={{ paddingLeft: '25px' }}>Eclairage</td>
                            <td>{totalEclairage.toFixed(3)}</td>
                        </tr>
                        <tr>

                            <td style={{ paddingLeft: '25px' }}>Chauffe Eau</td>
                            <td>{totalChauffe.toFixed(3)}</td>
                        </tr>
                        <tr>

                            <td style={{ paddingLeft: '25px' }}>Filtre a Air</td>
                            <td>{totalFiltre.toFixed(3)}</td>
                        </tr>
                        <tr>

                            <td style={{ paddingLeft: '25px' }}>Autre Equipement</td>
                            <td>{totalEquipement.toFixed(3)}</td>
                        </tr>

                        <tr>
                            <td ><h4>Appareil</h4></td>

                            <td>{totalAppareil.toFixed(3)}</td>
                        </tr>

                        <tr>
                            <td><h4>Systeme d'energie</h4></td>

                            <td>{totalSysteme.toFixed(3)}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td><h4>Total</h4></td>
                            <td>{totalUtilisation}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="dimmer"></div>
                <div className="go-corner" href="#">
                    <div className="go-arrow">
                        →
                    </div>
                </div>
            </div>


        </div >
    )
}
