
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



//ActuMR(item.cex*item.quantite,props.actualisation,props.actualisationReel/100,props.persistance,item.tex)
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

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

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

export default function Externalites(props) {

    React.useEffect(() => {
        props.setdisableSidebar(false)
        props.setshowAppBar(true)
    }, [])


    const columns = [
        // { field: 'id', headerName: 'ID', width: 90 },
        { field: 'designation', headerName: 'Désignation', width: 130 },
        {
            field: 'quantite', headerName: 'Quantité', width: 130,
            type: 'number'
        },
        {
            field: 'unite', headerName: 'Unité', width: 130,
        },
        {
            field: 'tex',
            headerName: 'TEx',
            description: 'signification de TEx',
            type: 'decimal',
            width: 130,
        },
        {
            field: 'cex',
            headerName: 'CEx',
            description: 'signification de CEx',
            type: 'decimal',
            width: 130,
        },
        {
            field: 'cextg',
            headerName: 'CEXtg',
            description: 'signification de CExtg',
            width: 90,
            valueGetter: (params) =>
                //  `${params.row.quantite * params.row.pu}`,
                `${ActuMR(params.row.cex * params.row.quantite, props.actualisation, props.actualisationReel / 100, props.persistance, params.row.tex)}`,
        },
    ];



    const [externalites, setexternalites] = React.useState([
        {
            id: 1,
            designation: 'externalite 1',
            quantite: 2,
            unite: 'm',
            tex: 4,
            cex: 2,
            cextg: 0
        },
        {
            id: 2,
            designation: 'externalite 2',
            quantite: 2,
            unite: 'km',
            tex: 2,
            cex: 2,
            cextg: 0
        },
        {
            id: 3,
            designation: 'externalite 3',
            quantite: 1,
            unite: 'ml',
            tex: 1,
            cex: 2,
            cextg: 0
        },
        {
            id: 4,
            designation: 'externalite 4',
            quantite: 2,
            unite: 'mm',
            tex: 4,
            cex: 2,
            cextg: 0
        }

    ]);
    const [openDiag, setopenDiag] = React.useState(false);
    const [item, setitem] = React.useState({
        id: '',
        designation: '',
        quantite: 0,
        unite: '',
        tex: 0,
        cex: 0,
        cextg: 0
    });

    const [openNotif, setOpenNotif] = React.useState(false);
    const [message, setmessage] = React.useState('');
    const [errorType, seterrorType] = React.useState('');

    const [persistance, setpersistance] = React.useState(25)
    const [actualisation, setactualisation] = React.useState(5)
    const [actualisationReel, setactualisationReel] = React.useState(4)

    React.useEffect(() => {
        // console.log('ActuMR(1,5,0.4/100,25,4)', ActuMR(1,5,0.4/100,25,4))
        setpersistance(props.persistance)
        setactualisation(props.actualisation)
        setactualisationReel(props.actualisationReel)
    }, [props])

    // React.useEffect(() => {
    //     // console.log('ActuMR(1,5,0.4/100,25,4)', ActuMR(1,5,0.4/100,25,4))
    //     var val = ActuMR(item.cex * item.quantite, actualisation, actualisationReel / 100, persistance, item.tex);
    //     setitem({ ...item, cextg: val })
    //     console.log('that is item ++++++++', item)
    // }, [item.cex, item.quantite, actualisation, actualisationReel, persistance, item.tex])




    const handleClickOpen = () => {
        setopenDiag(true);

    };

    const handleClose = () => {
        setopenDiag(false);
    };

    const handleCloseNotif = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenNotif(false);
    };


    const [selectedExt, setselectedExt] = React.useState([])

    React.useEffect(() => {
        props.setexternalites(externalites)
    }, [externalites])

    // React.useEffect(() => {


        
    //      var cmt = ActuMR(item.cex * item.quantite, props.actualisation, props.actualisationReel / 100, props.persistance, item.tex)
    //     // setitem({ ...item, cextg: cmt })
    //     console.log('that is item :)(: 1', cmt)
    // }, [item])//props.actualisation, props.actualisationReel, props.persistance])


    return (
        <div >

            <Notification open={openNotif} type={errorType} message={message} handleClose={handleCloseNotif} />
            <Dialog open={openDiag} onClose={handleClose}>
                <DialogTitle>Externalité</DialogTitle>
                <DialogContent>

                    <form onSubmit={(event) => {
                        event.preventDefault();
                        console.log('submit is ready!', item);
                        var tab = [];
                        tab = Object.assign([], externalites);

                        tab.push({ ...item, id: item.designation });
                        setexternalites(tab)

                        console.log('that is item :)(: 2 :))', item)
                        handleClose()

                        setitem({
                            id: '',
                            designation: '',
                            quantite: 0,
                            unite: '',
                            tex: 0,
                            cex: 0,
                            cextg: 0
                        })

                        setOpenNotif(true);
                        seterrorType('success');
                        setmessage('Ajout effectué avec succes ')
                    }}>

                        <TextField
                            autoFocus
                            margin="dense"
                            value={item.designation}
                            onChange={(e) => { console.log('Désignation', e.target.value); setitem({ ...item, designation: e.target.value }) }}
                            required
                            id="Désignation"
                            label="Désignation"
                            type="text"
                            fullWidth
                            variant="standard"
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            value={item.quantite}
                            onChange={(e) => setitem({ ...item, quantite: e.target.value })}
                            required
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
                            autoFocus
                            margin="dense"
                            value={item.tex}
                            onChange={(e) => setitem({ ...item, tex: e.target.value })}
                            required
                            id="pu"
                            label="TEx"
                            type="decimal"
                            helperText='signification de TEx'
                            fullWidth
                            variant="standard"
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            value={item.cex}
                            onChange={(e) => setitem({ ...item, cex: e.target.value })}
                            required
                            id="pu"
                            label="CEx"
                            type="decimal"
                            helperText='signification de CEx'
                            fullWidth
                            variant="standard"
                        />

                        {/* <TextField
                            autoFocus
                            margin="dense"
                            value={ActuMR(item.cex * item.quantite, props.actualisation, props.actualisationReel / 100, props.persistance, item.tex)}
                            disabled
                            id="pTC"
                            label="CExtg"
                            type="number"
                            helperText='signification de CExtg'
                            fullWidth
                            variant="standard"
                        /> */}

                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit' >Subscribe</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>



            <Box sx={{ margin: 1 }}>

                <div style={{ height: 400, width: '500%', marginLeft: '45px', marginTop: '100px' }}>
                    <Typography variant="h6" gutterBottom component="div">

                        <DeleteIcon color="primary" titleAccess={`supprimer une Externalité`} onClick={(designa) => {
                            setexternalites(externalites.filter((elt) => !containsObject(elt, selectedExt)))
                            setOpenNotif(true);
                            seterrorType('success');
                            setmessage('Suppression effectué avec succes ')
                        }
                        } />
                        <AddCircleIcon color="primary" titleAccess={`Ajouter une Externalité`} style={{ marginLeft: '10px' }} onClick={() => {
                            //handleClickOpen(row.designation);
                            handleClickOpen();
                            console.log('fkjskdjflksjldfkjsnvlksdjnvlksjfd')
                        }
                        } />
                    </Typography>
                    <DataGrid
                        rows={externalites}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        onSelectionModelChange={(ids) => {
                            const selectedIDs = new Set(ids);
                            const selectedRows = externalites.filter((row) =>
                                selectedIDs.has(row.id),
                                //  console.log('selectedIDs.has(row.id),',)
                            );

                            setselectedExt(selectedRows)



                        }}
                    />
                </div>

            </Box>

        </div>
    )
}
