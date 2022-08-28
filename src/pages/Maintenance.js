
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import MenuItem from '@mui/material/MenuItem';

import Checkbox from '@mui/material/Checkbox';
import { DataGrid } from '@mui/x-data-grid';


import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

import DeleteIcon from '@mui/icons-material/Delete';

import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Notification from '../components/Notification';

import { AnimatePresence, motion } from "framer-motion";
import '../styles/maintenance.css'

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//         borderRadius: '3px'
//     },
//     [`&.${tableCellClasses.body}`]: {

//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({

//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,

//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//         border: 0,
//         height: '10px',
//     },
// }));




export default function Maintenance(props) {

    function Actu(p, o, i, u) {
        var Ca= parseFloat(p)
        var T= parseFloat(o)
       var  a= parseFloat(i)
       var  N= parseFloat(u)
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
    function ActuMR(p, o, i, u, y) {

        var Ca= parseFloat(p)
        var T= parseFloat(o)
       var  a= parseFloat(i)
       var  N= parseFloat(u)
       var TM = parseFloat(y)
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


    const [construction, setconstruction] = React.useState([
        {
            designation: 'INFRASTRUCTURE',
            id: 'A.1',
            quantite: 0,
            unite: '',
            tm: 1,
            txm: 0,
            cm: 0,
            cmg: 0,
            tr: 1,
            txr: 0,
            cr: 0,
            crg: 0,
            cmrtg: 0

        },
        {
            designation: 'SUPERSTRUCTURE',
            id: 'A.2',
            quantite: 0,
            unite: '',
            tm: 1,
            txm: 0,
            cm: 0,
            cmg: 0,
            tr: 1,
            txr: 0,
            cr: 0,
            crg: 0,
            cmrtg: 0

        },
        {
            designation: 'EQUIPEMENTS',
            id: 'A.3',
            quantite: 0,
            unite: '',
            tm: 1,
            txm: 0,
            cm: 0,
            cmg: 0,
            tr: 1,
            txr: 0,
            cr: 0,
            crg: 0,
            cmrtg: 0

        }
    ])

    const [compose, setcompose] = React.useState([
        // {
        //     designation: 'compose 1',
        //     id: 'A.1.1',
        //     quantite: 2,
        //     unite: 'm',
        //     tm: 7,
        //     txm: 20,
        //     cm: 1,
        //     cmg: 0,
        //     tr: 12,
        //     txr: 100,
        //     cr: 1,
        //     crg: 0,
        //     cmrtg: 0

        // },
        // {
        //     designation: 'compose 2',
        //     id: 'A.1.2',
        //     quantite: 5,
        //     unite: 'km',
        //     tm: 7,
        //     txm: 20,
        //     cm: 1,
        //     cmg: 0,
        //     tr: 12,
        //     txr: 100,
        //     cr: 1,
        //     crg: 0,
        //     cmrtg: 0

        // },
        // {
        //     designation: 'compose 3',
        //     id: 'A.2.1',
        //     quantite: 2,
        //     unite: 'm',
        //     tm: 7,
        //     txm: 20,
        //     cm: 1,
        //     cmg: 0,
        //     tr: 12,
        //     txr: 100,
        //     cr: 1,
        //     crg: 0,
        //     cmrtg: 0

        // },
        // {
        //     designation: 'compose 4',
        //     id: 'A.2.2',
        //     quantite: 5,
        //     unite: 'km',
        //     tm: 7,
        //     txm: 20,
        //     cm: 1,
        //     cmg: 0,
        //     tr: 12,
        //     txr: 100,
        //     cr: 1,
        //     crg: 0,
        //     cmrtg: 0

        // }
    ])


    const [fonction, setfonction] = React.useState([
        // {
        //     designation: 'fonction 1',
        //     id: 'A.1.1.1',
        //     quantite: 2,
        //     unite: 'm',
        //     tm: 7,
        //     txm: 20,
        //     cm: 1,
        //     cmg: 0,
        //     tr: 12,
        //     txr: 100,
        //     cr: 1,
        //     crg: 0,
        //     cmrtg: 0

        // },
        // {
        //     designation: 'fonction 2',
        //     id: 'A.1.1.2',
        //     quantite: 3,
        //     unite: 'm',
        //     tm: 7,
        //     txm: 20,
        //     cm: 1,
        //     cmg: 0,
        //     tr: 12,
        //     txr: 100,
        //     cr: 1,
        //     crg: 0,
        //     cmrtg: 0

        // },
        // {
        //     designation: 'fonction 3',
        //     id: 'A.1.2.1',
        //     quantite: 5,
        //     unite: 'km',
        //     tm: 7,
        //     txm: 20,
        //     cm: 1,
        //     cmg: 0,
        //     tr: 12,
        //     txr: 100,
        //     cr: 1,
        //     crg: 0,
        //     cmrtg: 0

        // },
        // {
        //     designation: 'function 4',
        //     id: 'A.2.1.1',
        //     quantite: 2,
        //     unite: 'm',
        //     tm: 7,
        //     txm: 20,
        //     cm: 1,
        //     cmg: 0,
        //     tr: 12,
        //     txr: 100,
        //     cr: 1,
        //     crg: 0,
        //     cmrtg: 0

        // },
        // {
        //     designation: 'function 5',
        //     id: 'A.2.1.2',
        //     quantite: 5,
        //     unite: 'km',
        //     tm: 7,
        //     txm: 20,
        //     cm: 1,
        //     cmg: 0,
        //     tr: 12,
        //     txr: 100,
        //     cr: 1,
        //     crg: 0,
        //     cmrtg: 0

        // }
    ])


    const [prestation, setprestation] = React.useState([
        // {
        //     designation: 'prestation 1',
        //     id: 'A.2.1.2.1',
        //     quantite: 2,
        //     unite: 'm',
        //     tm: 7,
        //     txm: 20,
        //     cm: 1,
        //     cmg: 0,
        //     tr: 12,
        //     txr: 100,
        //     cr: 1,
        //     crg: 0,
        //     cmrtg: 0

        // },
        // {
        //     designation: 'prestation 2',
        //     id: 'A.1.2.1.1',
        //     quantite: 5,
        //     unite: 'km',
        //     tm: 7,
        //     txm: 20,
        //     cm: 1,
        //     cmg: 0,
        //     tr: 12,
        //     txr: 100,
        //     cr: 1,
        //     crg: 0,
        //     cmrtg: 0

        // },
        // {
        //     designation: 'prestation 3',
        //     id: 'A.1.1.1.1',
        //     quantite: 2,
        //     unite: 'm',
        //     tm: 7,
        //     txm: 20,
        //     cm: 1,
        //     cmg: 0,
        //     tr: 12,
        //     txr: 100,
        //     cr: 1,
        //     crg: 0,
        //     cmrtg: 0

        // }
    ])

    React.useEffect(() => {
        props.setdisableSidebar(false)
        props.setshowAppBar(true)
    }, [])

    //notif
    const [openNotif, setOpenNotif] = React.useState(false);
    const [message, setmessage] = React.useState('');
    const [errorType, seterrorType] = React.useState('');
    const [operate, setoperate] = React.useState(false);


    const handleCloseNotif = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenNotif(false);
    };


    const [item, setitem] = React.useState(

        {
            designation: '',
            id: '',
            quantite: 0,
            unite: '',
            tm: 1,
            txm: 0,
            cm: 0,
            cmg: 0,
            tr: 1,
            txr: 0,
            cr: 0,
            crg: 0,
            cmrtg: 0
        }
    );

    const [openDialog, setopenDialog] = React.useState(false)
    const [name, setname] = React.useState('')
    const [idParent, setidParent] = React.useState({
        constr: '',
        compo: '',
        fun: ''
    })

    const handleClickOpen = () => {
        setopenDialog(true)
    };

    const handleClose = () => {
        setitem({
            designation: '',
            id: '',
            quantite: 0,
            unite: '',
            tm: 1,
            txm: 0,
            cm: 0,
            cmg: 0,
            tr: 1,
            txr: 0,
            cr: 0,
            crg: 0,
            cmrtg: 0
        })
        setopenDialog(false)
    };

    const currencies = [
        {
            value: 'm²',
            label: 'm²',
        },
        {
            value: 'carton',
            label: 'carton',
        },
        {
            value: 'kg',
            label: 'kg',
        },
        {
            value: 'barre',
            label: 'barre',
        }, {
            value: 'ml',
            label: 'ml',
        }, {
            value: 'mm',
            label: 'mm',
        }, {
            value: 'paquet',
            label: 'paquet',
        }, {
            value: 'piece',
            label: 'piece',
        }, {
            value: 'jour',
            label: 'jour',
        }, {
            value: 'km',
            label: 'km',
        }, {
            value: 'm',
            label: 'm',
        },
    ];

    const reducePtc = (montant) => {
        var tabFunct = fonction
        var tabCompose = compose
        var tabConstruction = construction
        if (name === 'prestation') {


            for (let obj of tabFunct) {
                if (obj.id === idParent.fun) {
                    obj.cmrtg = obj.cmrtg - montant
                }
            }
            for (let obj of tabCompose) {
                if (obj.id === idParent.compo) {
                    obj.cmrtg = obj.cmrtg - montant
                }
            }

            for (let obj of tabConstruction) {
                if (obj.id === idParent.constr) {
                    obj.cmrtg = obj.cmrtg - montant
                }
            }
            setconstruction(tabConstruction)
            setcompose(tabCompose)
            setfonction(tabFunct)

        }
        else if (name === 'fonction') {

            for (let obj of tabCompose) {
                if (obj.id === idParent.compo) {
                    obj.cmrtg = obj.cmrtg - montant
                }
            }

            for (let obj of tabConstruction) {
                if (obj.id === idParent.constr) {
                    obj.cmrtg = obj.ptc - montant
                }
            }
            setconstruction(tabConstruction)
            setcompose(tabCompose)
        }
        //---------------------------
        else if (name === 'compose') {


            for (let obj of tabConstruction) {
                if (obj.id === idParent.constr) {
                    obj.cmrtg = obj.cmrtg - montant
                }
            }
            setconstruction(tabConstruction)
        }

    }


    // React.useEffect(() => {
    //     var a = item.txm / 100
    //     var d = ActuMR(item.quantite * a * item.cm, props.actualisation, props.actualisationReel / 100, props.persistance, item.tm)
    //     console.log('that is value of item.cmg', item.cmg)
    //     setitem({ ...item, cmg: d })
    // }, [item.txm, item.quantite, item.cm, item.tm, props])

    // React.useEffect(() => {
    //    // if ((item.tr !== null) && (item.tr !== undefined) && (item.tr !== 0)) {
    //    if(operate){  
    //    var b = item.txr / 100

    //         var a = item.txm / 100
    //         var d = ActuMR(item.quantite * a * item.cm, props.actualisation, props.actualisationReel / 100, props.persistance, item.tm)

    //         setitem({ ...item, cmg: d, crg: ActuMR(item.quantite * b * item.cr, props.actualisation, props.actualisationReel / 100, props.persistance, item.tr) })
    //     }
    // }, [item.txr, item.quantite, item.cr, item.tr])

    // React.useEffect(() => {
    //     var a = item.txm / 100
    //     var b = item.txr / 100
    //     console.log('that is value of b', b)
    //     var c = ActuMR(item.quantite * b * item.cr, props.actualisation, props.actualisationReel / 100, props.persistance, item.tr)
    //     var f = ActuMR(item.quantite * a * item.cm, props.actualisation, props.actualisationReel / 100, props.persistance, item.tm)
    //     setitem({ ...item, cmrtg: c + f })
    // }, [item.cmg, item.crg])


    React.useEffect(() => {
        props.setconstruction(construction);
        props.setcompose(compose);
        props.setfonction(fonction);
        props.setprestation(prestation)
    }, [construction, compose, fonction, prestation])

    return (
        <div style={{overflow:'overlay',height:'95%',width:'100%'}}>
            <Notification open={openNotif} type={errorType} message={message} handleClose={handleCloseNotif} />
            <Dialog open={openDialog} onClose={handleClose}>
                <DialogTitle>{name}</DialogTitle>
                <DialogContent>

                    <form onSubmit={(event) => {
                        event.preventDefault();

                        setoperate(true)


                        var tab = [];
                        var tabFunct = fonction
                        var tabCompose = compose
                        var tabConstruction = construction
                        var len = 0
                        var val = 0

                        var a = item.txm / 100
                        var b = item.txr / 100
                        var ptc1 = ActuMR(item.quantite * b * item.cr, props.actualisation, props.actualisationReel / 100, props.persistance, item.tr) + ActuMR(item.quantite * a * item.cm, props.actualisation, props.actualisationReel / 100, props.persistance, item.tm)
                        //  console.log('item.pu',item.pu)
                        //  console.log('item.quantite',item.quantite)

                        // console.log('item.quantite',item.quantite);
                        // console.log('item.pu',item.pu);
                        // console.log('ptc',ptc1)
                        // var it = {
                        //     designation: item.designation,
                        //     id: '',
                        //     quantite: item.quantite,
                        //     unite: item.unite,
                        //     tm: 7,
                        //     txm: 20,
                        //     cm: 1,
                        //     cmg: 0,
                        //     tr: 12,
                        //     txr: 100,
                        //     cr: 1,
                        //     crg: 0,
                        //     cmrtg: 0
                        // }
                        // setitem(it)
                        // console.log('submit is ready item!', item);
                        // console.log('submit is ready it!', it);
                        // console.log('idParent snkdlfkv jldkfj vlskfj vls', idParent)
                        // console.log('name snkdlfkv jldkfj vlskfj vls', name)
                        // console.log('ptc1 snkdlfkv jldkfj vlskfj vls', ptc1)
                        // console.log('tabFunct snkdlfkv jldkfj vlskfj vls', tabFunct)
                        // console.log('tabCompose snkdlfkv jldkfj vlskfj vls', tabCompose)
                        // console.log('tabConstruction snkdlfkv jldkfj vlskfj vls', tabConstruction)
                        // // var tabFunct = fonction
                        // var tabCompose = compose
                        // var tabConstruction = construction
                        if (name === 'prestation') {
                            console.log('prestation')
                            len = prestation.filter((elt) => elt.id.includes(idParent.fun)).length + 1
                            val = idParent.fun + '.' + len

                            console.log('taille des prestations ', len)
                            tab = Object.assign([], prestation);


                            //-----------
                            var d = ActuMR(item.quantite * (item.txm / 100) * item.cm, props.actualisation, props.actualisationReel / 100, props.persistance, item.tm)

                            var c = ActuMR(item.quantite * ((item.txr / 100)) * item.cr, props.actualisation, props.actualisationReel / 100, props.persistance, item.tr)
                            var f = ActuMR(item.quantite * (item.txm / 100) * item.cm, props.actualisation, props.actualisationReel / 100, props.persistance, item.tm)
                            tab.push({ ...item, id: val, cmg: d, crg: ActuMR(item.quantite * b * item.cr, props.actualisation, props.actualisationReel / 100, props.persistance, item.tr), cmrtg: c + f })

 //----------------          

                            setprestation(tab)


                            for (let obj of tabFunct) {
                                if (obj.id === idParent.fun) {
                                    obj.cmrtg = obj.cmrtg + ptc1
                                }
                            }
                            for (let obj of tabCompose) {
                                if (obj.id === idParent.compo) {
                                    obj.cmrtg = obj.cmrtg + ptc1
                                }
                            }

                            for (let obj of tabConstruction) {
                                if (obj.id === idParent.constr) {
                                    obj.cmrtg = obj.cmrtg + ptc1
                                }
                            }

                            setconstruction(tabConstruction)
                            setcompose(tabCompose)
                            setfonction(tabFunct)

                        }
                        else if (name === 'fonction') {
                            console.log('fonction')
                            len = fonction.filter((elt) => elt.id.includes(idParent.compo)).length + 1
                            val = idParent.compo + '.' + len

                            console.log('taille des fonctions ', len)
                            tab = Object.assign([], fonction);


                            //-----------
                            var d = ActuMR(item.quantite * (item.txm / 100) * item.cm, props.actualisation, props.actualisationReel / 100, props.persistance, item.tm)

                            var c = ActuMR(item.quantite * ((item.txr / 100)) * item.cr, props.actualisation, props.actualisationReel / 100, props.persistance, item.tr)
                            var f = ActuMR(item.quantite * (item.txm / 100) * item.cm, props.actualisation, props.actualisationReel / 100, props.persistance, item.tm)
                            tab.push({ ...item, id: val, cmg: d, crg: ActuMR(item.quantite * b * item.cr, props.actualisation, props.actualisationReel / 100, props.persistance, item.tr), cmrtg: c + f })

 //----------------          

                            setfonction(tab)


                            for (let obj of tabCompose) {
                                if ((obj.id === idParent.compo) && (item.unite !== '')) {
                                    obj.cmrtg = obj.cmrtg + ptc1
                                }
                            }

                            for (let obj of tabConstruction) {
                                if ((obj.id === idParent.constr) && (item.unite !== '')) {
                                    obj.cmrtg = obj.cmrtg + ptc1
                                }
                            }
                            setconstruction(tabConstruction)
                            setcompose(tabCompose)
                        }
                        //---------------------------
                        else if (name === 'compose') {
                            console.log('compose')
                            len = compose.filter((elt) => elt.id.includes(idParent.constr)).length + 1
                            val = idParent.constr + '.' + len
                            // console.log('that is item', item);
                            console.log('taille des composes ', len)
                            tab = Object.assign([], compose);


         
                            var d = ActuMR(item.quantite * (item.txm / 100) * item.cm, props.actualisation, props.actualisationReel / 100, props.persistance, item.tm)

                            var c = ActuMR(item.quantite * ((item.txr / 100)) * item.cr, props.actualisation, props.actualisationReel / 100, props.persistance, item.tr)
                            var f = ActuMR(item.quantite * (item.txm / 100) * item.cm, props.actualisation, props.actualisationReel / 100, props.persistance, item.tm)
                            tab.push({ ...item, id: val, cmg: d, crg: ActuMR(item.quantite * b * item.cr, props.actualisation, props.actualisationReel / 100, props.persistance, item.tr), cmrtg: c + f })



                            setcompose(tab)
                            console.log('tab', tab);
                            console.log('that is compose.len', compose.len);

                            for (let obj of tabConstruction) {
                                console.log('termine !!!', obj)
                                if ((obj.id === idParent.constr) && (item.unite !== '')) {
                                    obj.cmrtg = obj.cmrtg + ptc1
                                }
                            }

                            setconstruction(tabConstruction)
                        }

                        handleClose()
                        setOpenNotif(true);
                        seterrorType('success');
                        setmessage('Ajout effectué avec succes ')

                        setitem({
                            designation: '',
                            id: '',
                            quantite: 0,
                            unite: '',
                            tm: 1,
                            txm: 0,
                            cm: 0,
                            cmg: 0,
                            tr: 1,
                            txr: 0,
                            cr: 0,
                            crg: 0,
                            cmrtg: 0
                        })
                        console.log('fin')
                    }}>

                        <TextField
                            autoFocus
                            margin="dense"
                            value={item.designation}
                            onChange={(e) => { setitem({ ...item, designation: e.target.value }) }}
                            required={name === 'prestation' ? true : false}
                            id="Désignation"
                            label="Désignation"
                            type="text"
                            fullWidth
                            variant="standard"
                        />

                        <TextField
                            // autoFocus
                            margin="dense"
                            value={item.quantite}
                            onChange={(e) => setitem({ ...item, quantite: e.target.value })}
                            required={name === 'prestation' ? true : false}
                            id="Quantité"
                            label="Quantité"
                            type="number"
                            fullWidth
                            variant="standard"
                        />

                        <TextField
                            id="standard-select-currency"
                            select
                            label="Select"
                            required={name === 'prestation' ? true : false}
                            fullWidth
                            value={item.unite}
                            onChange={(e) => setitem({ ...item, unite: e.target.value })}
                            helperText="unité"
                            variant="standard"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            // autoFocus
                            margin="dense"
                            value={item.tm}
                            onChange={(e) => setitem({ ...item, tm: e.target.value })}
                            required={name === 'prestation' ? true : false}
                            id="tm"
                            inputProps={{
                                min: 1
                            }}

                            label="TM"
                            type="decimal"
                            // helperText='Prix Unitaire'
                            fullWidth
                            variant="standard"
                        />

                        <TextField
                            // autoFocus
                            margin="dense"
                            value={item.txm}
                            onChange={(e) => setitem({ ...item, txm: e.target.value })}
                            required={name === 'prestation' ? true : false}
                            id="txm"
                            label="TXM (%)"
                            type="decimal"
                            // helperText='Prix Unitaire'
                            fullWidth
                            variant="standard"
                        />

                        <TextField
                            // autoFocus
                            margin="dense"
                            value={item.cm}
                            onChange={(e) => setitem({ ...item, cm: e.target.value })}
                            required={name === 'prestation' ? true : false}
                            id="cm"
                            label="CM"
                            type="decimal"
                            // helperText='Prix Unitaire'
                            fullWidth
                            variant="standard"
                        />

                        <TextField
                            // autoFocus
                            margin="dense"
                            value={item.tr}
                            onChange={(e) => setitem({ ...item, tr: e.target.value })}
                            required={name === 'prestation' ? true : false}
                            id="tr"
                            defaultValue={1}
                            inputProps={{
                                min: 1
                            }}
                            label="TR"
                            type="decimal"
                            // helperText='Prix Unitaire'
                            fullWidth
                            variant="standard"
                        />

                        <TextField
                            // autoFocus
                            margin="dense"
                            value={item.txr}
                            onChange={(e) => setitem({ ...item, txr: e.target.value })}
                            required={name === 'prestation' ? true : false}
                            id="txr"
                            label="TXR (%)"
                            type="decimal"
                            // helperText='Prix Unitaire'
                            fullWidth
                            variant="standard"
                        />

                        <TextField
                            // autoFocus
                            margin="dense"
                            value={item.cr}
                            onChange={(e) => setitem({ ...item, cr: e.target.value })}
                            required={name === 'prestation' ? true : false}
                            id="cr"
                            label="CR"
                            type="decimal"
                            // helperText='Prix Unitaire'
                            fullWidth
                            variant="standard"
                        />

                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit' >Subscribe</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>

            <div style={{ marginLeft: '1vw', marginTop: '10vh' }}>

                <TableContainer style={{ width: '100%' }}>
                    <Table aria-label="collapsible table" style={{ width: '100%' }}>
                        <TableHead style={{ backgroundColor: 'white' }}>
                            <TableRow style={{ height: '10px !important' }}>
                                <TableCell align="left" >ID1</TableCell>
                                <TableCell align="left">ID2</TableCell>
                                <TableCell align="left">ID3</TableCell>
                                <TableCell align="left">ID4</TableCell>
                                <TableCell align="left">ID5</TableCell>
                                <TableCell align="left">Designation</TableCell>
                                <TableCell align="left">Quantité</TableCell>
                                <TableCell align="left">Unité&nbsp;</TableCell>
                                <TableCell align="left">TM</TableCell>
                                <TableCell align="left">TXM</TableCell>
                                <TableCell align="left">CM</TableCell>
                                <TableCell align="left">CMg</TableCell>
                                <TableCell align="left">TR</TableCell>
                                <TableCell align="left">TXR</TableCell>
                                <TableCell align="left">CR</TableCell>
                                <TableCell align="left">CRg</TableCell>
                                <TableCell align="left">CMRtg</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{ marginTop: '280px', width: '90% !important' }}>
                            <TableRow style={{ height: '10px' }}>
                                <TableCell align="left">A</TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left">CONSTRUCTION</TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                            {construction.map((row) => (<React.Fragment key={row.id}>
                                <TableRow style={{ height: '10px' }}>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left">{row.id}</TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>

                                    <TableCell align="left">{row.designation}</TableCell>
                                    <TableCell align="left">{row.quantite}</TableCell>
                                    <TableCell align="left">{row.unite}</TableCell>
                                    <TableCell align="left">{row.tm}</TableCell>
                                    <TableCell align="left">{row.txm}</TableCell>
                                    <TableCell align="left">{row.cm}</TableCell>
                                    <TableCell align="left">{row.cmg.toFixed(3)}</TableCell>
                                    <TableCell align="left">{row.tr}</TableCell>
                                    <TableCell align="left">{row.txr}</TableCell>
                                    <TableCell align="left">{row.cr}</TableCell>
                                    <TableCell align="left">{row.crg.toFixed(3)}</TableCell>
                                    <TableCell align="left">{row.cmrtg.toFixed(3)}</TableCell>
                                    <TableCell align="left"><DeleteIcon color="primary" titleAccess={`supprimer un(e) ${row.designation}`} onClick={(designa) => {
                                        var tab = construction.filter((elt) => elt.id !== row.id)
                                        if(row.designation === 'INFRASTRUCTURE'){
                                            tab = [...tab, {
                                                designation: 'INFRASTRUCTURE',
                                                id: 'A.1',
                                                quantite: 0,
                                                unite: '',
                                                tm: 1,
                                                txm: 0,
                                                cm: 0,
                                                cmg: 0,
                                                tr: 1,
                                                txr: 0,
                                                cr: 0,
                                                crg: 0,
                                                cmrtg: 0
                                            }]
                                        }
                                       else if(row.designation === 'SUPERSTRUCTURE'){
                                            tab = [...tab, {
                                                designation: 'SUPERSTRUCTURE',
                                                id: 'A.2',
                                                quantite: 0,
                                                unite: '',
                                                tm: 1,
                                                txm: 0,
                                                cm: 0,
                                                cmg: 0,
                                                tr: 1,
                                                txr: 0,
                                                cr: 0,
                                                crg: 0,
                                                cmrtg: 0
                                            }]
                                        }
                                        else if(row.designation === 'EQUIPEMENTS'){
                                            tab = [...tab, {
                                                designation: 'EQUIPEMENTS',
                                                id: 'A.3',
                                                quantite: 0,
                                                unite: '',
                                                tm: 1,
                                                txm: 0,
                                                cm: 0,
                                                cmg: 0,
                                                tr: 1,
                                                txr: 0,
                                                cr: 0,
                                                crg: 0,
                                                cmrtg: 0
                                            }]
                                        }

                                        console.log('that is contruction tab',tab)
                                        setconstruction(tab)
//   designation: 'INFRASTRUCTUR
//   designation: 'SUPERSTRUCTUR
//   designation: 'EQUIPEMENTS',

                                        var tab = compose.filter((elt) => !elt.id.includes(row.id))
                                        setcompose(tab)

                                        tab = fonction.filter((elt) => !elt.id.includes(row.id))
                                        setfonction(tab)

                                        tab = prestation.filter((elt) => !elt.id.includes(row.id))
                                        setprestation(tab)

                                        setOpenNotif(true);
                                        seterrorType('success');
                                        setmessage('Suppression effectué avec succes ')
                                        console.log('table ++++++++', compose)
                                    }
                                    } />
                                        <EditIcon color="primary" titleAccess={`Modifier un(e) ${row.designation}`} style={{ marginLeft: '10px' }} onClick={() => {
                                            // handleClickOpen(row.designation);

                                        }
                                        } /></TableCell>
                                </TableRow>

                                {
                                    compose.filter((elt) => elt.id.includes(row.id)).map((compo) => (<React.Fragment key={compo.id}>
                                        <TableRow style={{ height: '10px' }}>
                                            <TableCell align="left"></TableCell>

                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left">{compo.id}</TableCell>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"></TableCell>

                                            <TableCell align="left">{compo.designation}</TableCell>
                                            <TableCell align="left">{compo.quantite}</TableCell>
                                            <TableCell align="left">{compo.unite}</TableCell>
                                            <TableCell align="left">{compo.tm}</TableCell>
                                            <TableCell align="left">{compo.txm}</TableCell>
                                            <TableCell align="left">{compo.cm}</TableCell>
                                            <TableCell align="left">{compo.cmg.toFixed(3)}</TableCell>
                                            <TableCell align="left">{compo.tr}</TableCell>
                                            <TableCell align="left">{compo.txr}</TableCell>
                                            <TableCell align="left">{compo.cr}</TableCell>
                                            <TableCell align="left">{compo.crg.toFixed(3)}</TableCell>
                                            <TableCell align="left">{compo.cmrtg.toFixed(3)}</TableCell>
                                            <TableCell align="left"><DeleteIcon color="primary" titleAccess={`supprimer un(e) ${compo.designation}`} onClick={(designa) => {

                                                setname('compose')
                                                setidParent({ constr: row.id, compo: '', fun: '' }
                                                )
                                                var tab = compose.filter((elt) => elt.id !== compo.id)
                                                setcompose(tab)

                                                tab = fonction.filter((elt) => !elt.id.includes(compo.id))
                                                setfonction(tab)
                                                tab = prestation.filter((elt) => !elt.id.includes(compo.id))
                                                setprestation(tab)

                                                setOpenNotif(true);
                                                seterrorType('success');
                                                setmessage('Suppression effectué avec succes ')
                                                //  console.log('table ++++++++', compose)

                                                reducePtc(compo.cmrtg)
                                            }
                                            } />
                                                <EditIcon color="primary" titleAccess={`Modifier un(e) ${compo.designation}`} style={{ marginLeft: '10px' }} onClick={() => {
                                                    // handleClickOpen(row.designation);

                                                }
                                                } /></TableCell>
                                        </TableRow>

                                        {
                                            fonction.filter((elt) => elt.id.includes(compo.id)).map((fonct) => (<React.Fragment key={fonct.id}>
                                                <TableRow style={{ height: '10px' }}>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left">{fonct.id}</TableCell>
                                                    <TableCell align="left"></TableCell>

                                                    <TableCell align="left">{fonct.designation}</TableCell>
                                                    <TableCell align="left">{fonct.quantite}</TableCell>
                                                    <TableCell align="left">{fonct.unite}</TableCell>
                                                    <TableCell align="left">{fonct.tm}</TableCell>
                                                    <TableCell align="left">{fonct.txm}</TableCell>
                                                    <TableCell align="left">{fonct.cm}</TableCell>
                                                    <TableCell align="left">{fonct.cmg.toFixed(3)}</TableCell>
                                                    <TableCell align="left">{fonct.tr}</TableCell>
                                                    <TableCell align="left">{fonct.txr}</TableCell>
                                                    <TableCell align="left">{fonct.cr}</TableCell>
                                                    <TableCell align="left">{fonct.crg.toFixed(3)}</TableCell>
                                                    <TableCell align="left">{fonct.cmrtg.toFixed(3)}</TableCell>
                                                    <TableCell align="left"><DeleteIcon color="primary" titleAccess={`supprimer un(e) ${fonct.designation}`} onClick={(designa) => {
                                                        setname('fonction')
                                                        setidParent({ constr: row.id, compo: compo.id, fun: '' }
                                                        )
                                                        var tab = fonction.filter((elt) => elt.id !== fonct.id)
                                                        setfonction(tab)

                                                        //for(let obj of prestation){}
                                                        tab = prestation.filter((elt) => !elt.id.includes(fonct.id))
                                                        setprestation(tab)
                                                        setOpenNotif(true);
                                                        seterrorType('success');
                                                        setmessage('Suppression effectué avec succes ')
                                                        // console.log('table ++++++++', fontion)
                                                        reducePtc(fonct.cmrtg)

                                                    }
                                                    } />
                                                        <EditIcon color="primary" titleAccess={`Modifier un(e) ${fonct.designation}`} style={{ marginLeft: '10px' }} onClick={() => {
                                                            // handleClickOpen(row.designation);

                                                        }
                                                        } /></TableCell>
                                                </TableRow>

                                                {
                                                    prestation.filter((elt) => elt.id.includes(fonct.id)).map((prest) => (<React.Fragment key={prest.id}>
                                                        <TableRow >
                                                            <TableCell align="left"></TableCell>

                                                            <TableCell align="left"></TableCell>
                                                            <TableCell align="left"></TableCell>
                                                            <TableCell align="left"></TableCell>
                                                            <TableCell align="left">{prest.id}</TableCell>

                                                            <TableCell align="left">{prest.designation}</TableCell>
                                                            <TableCell align="left">{prest.quantite}</TableCell>
                                                            <TableCell align="left">{prest.unite}</TableCell>
                                                            <TableCell align="left">{prest.tm}</TableCell>
                                                            <TableCell align="left">{prest.txm}</TableCell>
                                                            <TableCell align="left">{prest.cm}</TableCell>
                                                            <TableCell align="left">{prest.cmg.toFixed(3)}</TableCell>
                                                            <TableCell align="left">{prest.tr}</TableCell>
                                                            <TableCell align="left">{prest.txr}</TableCell>
                                                            <TableCell align="left">{prest.cr}</TableCell>
                                                            <TableCell align="left">{prest.crg.toFixed(3)}</TableCell>
                                                            <TableCell align="left">{prest.cmrtg.toFixed(3)}</TableCell>
                                                            <TableCell align="left"><DeleteIcon color="primary" titleAccess={`supprimer un(e) ${prest.designation}`} onClick={(designa) => {

                                                                setname('prestation')
                                                                setidParent({ constr: row.id, compo: compo.id, fun: fonct.id }
                                                                )
                                                                var tab = prestation.filter((elt) => elt.id !== prest.id)
                                                                setprestation(tab)
                                                                setOpenNotif(true);
                                                                seterrorType('success');
                                                                setmessage('Suppression effectué avec succes ')
                                                                // console.log('table ++++++++', fontion)

                                                                reducePtc(prest.cmrtg)

                                                            }


                                                            } />
                                                                <EditIcon color="primary" titleAccess={`Modifier un(e) ${prest.designation}`} style={{ marginLeft: '10px' }} onClick={() => {
                                                                    // handleClickOpen(row.designation);

                                                                }
                                                                } /></TableCell>
                                                        </TableRow>






                                                    </React.Fragment>
                                                    ))
                                                }

                                                <TableRow>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left">
                                                        <AddCircleIcon color="primary" titleAccess={`Ajouter une prestation`} style={{ marginLeft: '10px' }} onClick={() => {
                                                            //handleClickOpen(row.designation);
                                                            if (fonct.unite === '') {

                                                                // console.log('fkjskdjflksjldfkjsnvlksdjnvlksjfd')
                                                                setname('prestation')
                                                                setidParent({ constr: row.id, compo: compo.id, fun: fonct.id }
                                                                )
                                                                handleClickOpen();
                                                            }
                                                            else {
                                                                setOpenNotif(true);
                                                                seterrorType('info');
                                                                setmessage("vous ne pouvez pas effectuer d'Ajout")
                                                                // console.log('table ++++++++', fontion)

                                                            }

                                                        }
                                                        } />
                                                    </TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                </TableRow>

                                            </React.Fragment>
                                            ))
                                        }

                                        <TableRow>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"><AddCircleIcon color="primary" titleAccess={`Ajouter une prestation`} style={{ marginLeft: '10px' }} onClick={() => {
                                                //handleClickOpen(row.designation);
                                                if (compo.unite === '') {

                                                    // console.log('fkjskdjflksjldfkjsnvlksdjnvlksjfd')
                                                    setname('fonction')
                                                    setidParent({ constr: row.id, compo: compo.id, fun: '' }
                                                    )
                                                    handleClickOpen();
                                                }
                                                else {
                                                    setOpenNotif(true);
                                                    seterrorType('info');
                                                    setmessage("vous ne pouvez pas effectuer d'Ajout")
                                                    // console.log('table ++++++++', fontion)

                                                }

                                            }
                                            } /></TableCell>
                                            <TableCell align="left">

                                            </TableCell>
                                            <TableCell align="left"> </TableCell>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"></TableCell>
                                        </TableRow>


                                    </React.Fragment>
                                    ))
                                }

                                <TableRow>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"><AddCircleIcon color="primary" titleAccess={`Ajouter une prestation`} style={{ marginLeft: '10px' }} onClick={() => {
                                        //handleClickOpen(row.designation);
                                        if (row.unite === '') {

                                            // console.log('fkjskdjflksjldfkjsnvlksdjnvlksjfd')
                                            setname('compose')
                                            setidParent({ constr: row.id, compo: '', fun: '' }
                                            )
                                            handleClickOpen();
                                        }
                                        else {
                                            setOpenNotif(true);
                                            seterrorType('info');
                                            setmessage("vous ne pouvez pas effectuer d'Ajout")
                                            // console.log('table ++++++++', fontion)

                                        }
                                    }
                                    } /></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left">

                                    </TableCell>
                                    <TableCell align="left"> </TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                </TableRow>
                            </React.Fragment>
                            ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
