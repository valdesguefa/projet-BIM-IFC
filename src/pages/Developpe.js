
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        borderRadius: '3px'
    },
    [`&.${tableCellClasses.body}`]: {

        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({

    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,

    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
        height: '10px',
    },
}));




export default function Developpe(props) {

    const [construction, setconstruction] = React.useState([
        {
            designation: 'INFRASTRUCTURE',
            id: 'A.1',
            quantite: 0,
            unite: '',
            pu: 0,
            ptc: 0

        },
        {
            designation: 'SUPERSTRUCTURE',
            id: 'A.2',
            quantite: 0,
            unite: '',
            pu: 0,
            ptc: 0

        },
        {
            designation: 'EQUPEMENTS',
            id: 'A.3',
            quantite: 0,
            unite: '',
            pu: 0,
            ptc: 0

        }
    ])

    const [compose, setcompose] = React.useState([
        // {
        //     designation: 'compose 1',
        //     id: 'A.1.1',
        //     quantite: 2,
        //     unite: 'm',
        //     pu: 10000,
        //     ptc: 20000

        // },
        // {
        //     designation: 'compose 2',
        //     id: 'A.1.2',
        //     quantite: 5,
        //     unite: 'km',
        //     pu: 7000,
        //     ptc: 35000

        // },
        // {
        //     designation: 'compose 3',
        //     id: 'A.2.1',
        //     quantite: 2,
        //     unite: 'm',
        //     pu: 10000,
        //     ptc: 20000

        // },
        // {
        //     designation: 'compose 4',
        //     id: 'A.2.2',
        //     quantite: 5,
        //     unite: 'km',
        //     pu: 7000,
        //     ptc: 35000

        // }
    ])


    const [fonction, setfonction] = React.useState([
        // {
        //     designation: 'fonction 1',
        //     id: 'A.1.1.1',
        //     quantite: 2,
        //     unite: 'm',
        //     pu: 10000,
        //     ptc: 20000

        // },
        // {
        //     designation: 'fonction 2',
        //     id: 'A.1.1.2',
        //     quantite: 3,
        //     unite: 'm',
        //     pu: 10000,
        //     ptc: 30000

        // },
        // {
        //     designation: 'fonction 3',
        //     id: 'A.1.2.1',
        //     quantite: 5,
        //     unite: 'km',
        //     pu: 7000,
        //     ptc: 35000

        // },
        // {
        //     designation: 'function 4',
        //     id: 'A.2.1.1',
        //     quantite: 2,
        //     unite: 'm',
        //     pu: 10000,
        //     ptc: 20000

        // },
        // {
        //     designation: 'function 5',
        //     id: 'A.2.1.2',
        //     quantite: 5,
        //     unite: 'km',
        //     pu: 7000,
        //     ptc: 35000

        // }
    ])


    const [prestation, setprestation] = React.useState([
        // {
        //     designation: 'prestation 1',
        //     id: 'A.2.1.2.1',
        //     quantite: 2,
        //     unite: 'm',
        //     pu: 10000,
        //     ptc: 20000

        // },
        // {
        //     designation: 'prestation 2',
        //     id: 'A.1.2.1.1',
        //     quantite: 5,
        //     unite: 'km',
        //     pu: 7000,
        //     ptc: 35000

        // },
        // {
        //     designation: 'prestation 3',
        //     id: 'A.1.1.1.1',
        //     quantite: 2,
        //     unite: 'm',
        //     pu: 10000,
        //     ptc: 20000

        // }
    ])

    React.useEffect(() => {
        props.setdisableSidebar(false)
        props.setshowAppBar(true)

        //  window.location.reload(false)

    }, [])


    React.useEffect(() => {
        props.setconstruction(construction);
        props.setcompose(compose);
        props.setfonction(fonction);
        props.setprestation(prestation)
    }, [construction, compose, fonction, prestation])

    //notif
    const [openNotif, setOpenNotif] = React.useState(false);
    const [message, setmessage] = React.useState('');
    const [errorType, seterrorType] = React.useState('');

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
            ptc: 0,
            pu: 0
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
                    obj.ptc = obj.ptc - montant
                }
            }
            for (let obj of tabCompose) {
                if (obj.id === idParent.compo) {
                    obj.ptc = obj.ptc - montant
                }
            }

            for (let obj of tabConstruction) {
                if (obj.id === idParent.constr) {
                    obj.ptc = obj.ptc - montant
                }
            }
            setconstruction(tabConstruction)
            setcompose(tabCompose)
            setfonction(tabFunct)

        }
        else if (name === 'fonction') {

            for (let obj of tabCompose) {
                if (obj.id === idParent.compo) {
                    obj.ptc = obj.ptc - montant
                }
            }

            for (let obj of tabConstruction) {
                if (obj.id === idParent.constr) {
                    obj.ptc = obj.ptc - montant
                }
            }
            setconstruction(tabConstruction)
            setcompose(tabCompose)
        }
        //---------------------------
        else if (name === 'compose') {


            for (let obj of tabConstruction) {
                if (obj.id === idParent.constr) {
                    obj.ptc = obj.ptc - montant
                }
            }
            setconstruction(tabConstruction)
        }

    }


    React.useEffect(() => {
        setitem({ ...item, ptc: item.pu * item.quantite })
    }, [item.pu, item.quantite])


    return (
        <div>
            <Notification open={openNotif} type={errorType} message={message} handleClose={handleCloseNotif} />
            <Dialog open={openDialog} onClose={handleClose}>
                <DialogTitle>{name}</DialogTitle>
                <DialogContent>

                    <form onSubmit={(event) => {
                        event.preventDefault();

                        var tab = [];
                        var tabFunct = fonction
                        var tabCompose = compose
                        var tabConstruction = construction
                        var len = 0
                        var val = 0
                        //  console.log('item.pu',item.pu)
                        //  console.log('item.quantite',item.quantite)
                        var a = parseInt(`${item.quantite}`)
                        var b = parseInt(`${item.pu}`)
                        var ptc1 = a * b;
                        // console.log('item.quantite',item.quantite);
                        // console.log('item.pu',item.pu);
                        // console.log('ptc',ptc1)
                        var it = {
                            designation: item.designation,
                            id: '',
                            ptc: ptc1,
                            pu: item.pu,
                            quantite: item.quantite,
                            unite: item.unite
                        }
                        setitem(it)
                        // console.log('submit is ready item!', item);
                        // console.log('submit is ready it!', it);

                        if (name === 'prestation') {
                            len = prestation.filter((elt) => elt.id.includes(idParent.fun)).length + 1
                            val = idParent.fun + '.' + len

                            console.log('taille des prestations ', len)
                            tab = Object.assign([], prestation);

                            tab.push({ ...item, id: val });
                            setprestation(tab)


                            for (let obj of tabFunct) {
                                if (obj.id === idParent.fun) {
                                    obj.ptc = obj.ptc + ptc1
                                }
                            }
                            for (let obj of tabCompose) {
                                if (obj.id === idParent.compo) {
                                    obj.ptc = obj.ptc + ptc1
                                }
                            }

                            for (let obj of tabConstruction) {
                                if (obj.id === idParent.constr) {
                                    obj.ptc = obj.ptc + ptc1
                                }
                            }
                            setconstruction(tabConstruction)
                            setcompose(tabCompose)
                            setfonction(tabFunct)

                        }
                        else if (name === 'fonction') {
                            len = fonction.filter((elt) => elt.id.includes(idParent.compo)).length + 1
                            val = idParent.compo + '.' + len

                            console.log('taille des fonctions ', len)
                            tab = Object.assign([], fonction);

                            tab.push({ ...item, id: val });
                            setfonction(tab)


                            for (let obj of tabCompose) {
                                if ((obj.id === idParent.compo) && (item.unite !== '')) {
                                    obj.ptc = obj.ptc + ptc1
                                }
                            }

                            for (let obj of tabConstruction) {
                                if ((obj.id === idParent.constr) && (item.unite !== '')) {
                                    obj.ptc = obj.ptc + ptc1
                                }
                            }
                            setconstruction(tabConstruction)
                            setcompose(tabCompose)
                        }
                        //---------------------------
                        else if (name === 'compose') {
                            len = compose.filter((elt) => elt.id.includes(idParent.constr)).length + 1
                            val = idParent.constr + '.' + len

                            console.log('taille des composes ', len)
                            tab = Object.assign([], compose);

                            tab.push({ ...item, id: val });
                            setcompose(tab)

                            for (let obj of tabConstruction) {
                                if ((obj.id === idParent.constr) && (item.unite !== '')) {
                                    obj.ptc = obj.ptc + ptc1
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
                            pu: 0,
                            ptc: 0
                        })

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
                            value={item.pu}
                            onChange={(e) => setitem({ ...item, pu: e.target.value })}
                            required={name === 'prestation' ? true : false}
                            id="pu"
                            label="Pu"
                            type="decimal"
                            helperText='Prix Unitaire'
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

                <TableContainer style={{ width: '145%', overflow: 'auto', height: '550px' }}>
                    <Table aria-label="collapsible table" style={{ width: '80%' }}>
                        <TableHead>
                            <StyledTableRow>
                                <TableCell align="left">ID1</TableCell>
                                <TableCell align="left">ID2</TableCell>
                                <TableCell align="left">ID3</TableCell>
                                <TableCell align="left">ID4</TableCell>
                                <TableCell align="left">ID5</TableCell>
                                <TableCell align="left">Designation</TableCell>
                                <TableCell align="left">Quantité</TableCell>
                                <TableCell align="left">Unité&nbsp;</TableCell>
                                <TableCell align="left">PU&nbsp;(XCFA)</TableCell>
                                <TableCell align="left">PTC&nbsp;(XCFA)</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
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
                            </StyledTableRow>
                            {construction.map((row) => (<React.Fragment key={row.id}>
                                <StyledTableRow >
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left">{row.id}</TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>

                                    <TableCell align="left">{row.designation}</TableCell>
                                    <TableCell align="left">{row.quantite}</TableCell>
                                    <TableCell align="left">{row.unite}</TableCell>
                                    <TableCell align="left">{row.pu}</TableCell>
                                    <TableCell align="left">{row.ptc}</TableCell>
                                    <TableCell align="left"><DeleteIcon color="primary" titleAccess={`supprimer un(e) ${row.designation}`} onClick={(designa) => {
                                        var tab = construction.filter((elt) => elt.id !== row.id)
                                        setconstruction(tab)

                                        var tab1 = compose.filter((elt) => !elt.id.includes(row.id))
                                        setcompose(tab1)

                                        var tab2 = fonction.filter((elt) => !elt.id.includes(row.id))
                                        setfonction(tab2)

                                        var tab3 = prestation.filter((elt) => !elt.id.includes(row.id))
                                        setprestation(tab3)

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
                                </StyledTableRow>

                                {
                                    compose.filter((elt) => elt.id.includes(row.id)).map((compo) => (<React.Fragment key={compo.id}>
                                        <StyledTableRow >
                                            <TableCell align="left"></TableCell>

                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left">{compo.id}</TableCell>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"></TableCell>

                                            <TableCell align="left">{compo.designation}</TableCell>
                                            <TableCell align="left">{compo.quantite}</TableCell>
                                            <TableCell align="left">{compo.unite}</TableCell>
                                            <TableCell align="left">{compo.pu}</TableCell>
                                            <TableCell align="left">{compo.ptc}</TableCell>
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

                                                reducePtc(compo.ptc)
                                            }
                                            } />
                                                <EditIcon color="primary" titleAccess={`Modifier un(e) ${compo.designation}`} style={{ marginLeft: '10px' }} onClick={() => {
                                                    // handleClickOpen(row.designation);

                                                }
                                                } /></TableCell>
                                        </StyledTableRow>

                                        {
                                            fonction.filter((elt) => elt.id.includes(compo.id)).map((fonct) => (<React.Fragment key={fonct.id}>
                                                <StyledTableRow >
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left">{fonct.id}</TableCell>
                                                    <TableCell align="left"></TableCell>

                                                    <TableCell align="left">{fonct.designation}</TableCell>
                                                    <TableCell align="left">{fonct.quantite}</TableCell>
                                                    <TableCell align="left">{fonct.unite}</TableCell>
                                                    <TableCell align="left">{fonct.pu}</TableCell>
                                                    <TableCell align="left">{fonct.ptc}</TableCell>
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
                                                        reducePtc(fonct.ptc)

                                                    }
                                                    } />
                                                        <EditIcon color="primary" titleAccess={`Modifier un(e) ${fonct.designation}`} style={{ marginLeft: '10px' }} onClick={() => {
                                                            // handleClickOpen(row.designation);

                                                        }
                                                        } /></TableCell>
                                                </StyledTableRow>

                                                {
                                                    prestation.filter((elt) => elt.id.includes(fonct.id)).map((prest) => (<React.Fragment key={prest.id}>
                                                        <StyledTableRow >
                                                            <TableCell align="left"></TableCell>

                                                            <TableCell align="left"></TableCell>
                                                            <TableCell align="left"></TableCell>
                                                            <TableCell align="left"></TableCell>
                                                            <TableCell align="left">{prest.id}</TableCell>

                                                            <TableCell align="left">{prest.designation}</TableCell>
                                                            <TableCell align="left">{prest.quantite}</TableCell>
                                                            <TableCell align="left">{prest.unite}</TableCell>
                                                            <TableCell align="left">{prest.pu}</TableCell>
                                                            <TableCell align="left">{prest.ptc}</TableCell>
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

                                                                reducePtc(prest.ptc)

                                                            }


                                                            } />
                                                                <EditIcon color="primary" titleAccess={`Modifier un(e) ${prest.designation}`} style={{ marginLeft: '10px' }} onClick={() => {
                                                                    // handleClickOpen(row.designation);

                                                                }
                                                                } /></TableCell>
                                                        </StyledTableRow>






                                                    </React.Fragment>
                                                    ))
                                                }

                                                <StyledTableRow>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                    <TableCell align="left">
                                                        <AddCircleIcon color="primary" titleAccess={`Ajouter une prestation`} style={{ marginLeft: '10px' }} onClick={() => {
                                                            //handleClickOpen(row.designation);
                                                            if (fonct.pu === 0) {
                                                                handleClickOpen();
                                                                // console.log('fkjskdjflksjldfkjsnvlksdjnvlksjfd')
                                                                setname('prestation')
                                                                setidParent({ constr: row.id, compo: compo.id, fun: fonct.id }
                                                                )

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
                                                </StyledTableRow>

                                            </React.Fragment>
                                            ))
                                        }

                                        <StyledTableRow>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left"><AddCircleIcon color="primary" titleAccess={`Ajouter une prestation`} style={{ marginLeft: '10px' }} onClick={() => {
                                                //handleClickOpen(row.designation);
                                                if (compo.pu === 0) {
                                                    handleClickOpen();
                                                    // console.log('fkjskdjflksjldfkjsnvlksdjnvlksjfd')
                                                    setname('fonction')
                                                    setidParent({ constr: row.id, compo: compo.id, fun: '' }
                                                    )
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
                                        </StyledTableRow>


                                    </React.Fragment>
                                    ))
                                }

                                <StyledTableRow>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"><AddCircleIcon color="primary" titleAccess={`Ajouter une prestation`} style={{ marginLeft: '10px' }} onClick={() => {
                                        //handleClickOpen(row.designation);
                                        if (row.pu === 0) {
                                            handleClickOpen();
                                            // console.log('fkjskdjflksjldfkjsnvlksdjnvlksjfd')
                                            setname('compose')
                                            setidParent({ constr: row.id, compo: '', fun: '' }
                                            )
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
                                </StyledTableRow>
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
