import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../styles/ifcConfig.css'


export default function IfcConfig(props) {
    const [open, setopen] = useState(false)

    useState(()=>{
        props.setdisableSidebar(false)
    },[])

    return (
        <div style={{ width:'200%', height:'100%',zIndex:'2' }} className='cont'>
            <div style={{ marginLeft: '40%',zIndex:'3' }} >
                <a href='https://ifcjs.github.io/web-ifc-viewer/example/index' target="_blank" onClick={() => setopen(!open)} >
                    <Button variant="contained"
                        type='submit'
                        style={{ marginTop: '25px', marginLeft: '20%', width: '230px' }}>
                        Uploade le fichier Ifc
                    </Button>
                </a>
                {/* 
                <div className="cardHeaderDev">
                    <h3 style={{ marginLeft: '35%' }}><strong>projet: {props.nom}</strong></h3>
                    <table>
                        <thead>
                            <th>type&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            <th>coût global</th>
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
                                <td>{props.totalProjects} XCFA</td>
                            </tr>

                        </tbody>
                    </table>
                </div> */}

                <div className="cardHeader" style={{ marginTop: '90px',marginLeft:'-20%' }}>
                    <div style={{ width: '600px', margin: '0 auto', alignItems: 'center', alignContent: 'center', textAlign: 'center' }}>    <h2 style={{ color: 'white', alignContent: 'center', alignItems: 'center' }}>{open ? props.nom : ''}</h2></div>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Type :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>

                                <td style={{ width: '870px' }} align='right'>{open ? props.nature : ''}</td>
                            </tr>
                            <tr>
                                <td style={{ width: '500px' }}><span>période de persistance :</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>

                                <td align='right'>{open ? props.persistance : 0} ans</td>
                            </tr>
                            <tr>
                                <td>taux d'actualisation :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>

                                <td align='right'>{open ? props.actualisation : 0} ans</td>
                            </tr>

                            <tr>
                                <td><h4 style={{ color: 'white' }}>COUT GLOBAL :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4></td>

                                <td align='right'><h2 style={{ color: 'white' }}>{open ? props.totalProjects : 0} XCFA</h2></td>
                            </tr>

                        </tbody>
                    </table>
                </div>


            </div>


        </div>
    )
}
