
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

import { AnimatePresence, motion } from "framer-motion";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';




export default function Utilisation(props) {
  const [eclairage, seteclairage] = React.useState([
    {
      id: 1,
      designation: 'eclairage 1',
      quantite: 1,
      unite: 'm',
      bs: 1,
      ot: 0.5,
      ec: 0.5,
      lca: 0.5,
      lct: 0.5,
      lctg: 0
    }
  ]);


  const [openDiageclairage, setopenDiageclairage] = React.useState(false);
  const [item, setitem] = React.useState({
    id: '',
    designation: '',
    quantite: 0,
    unite: '',
    bs: 0,
    ot: 0,
    ec: 0,
    lca: 0,
    lct: 0,
    lctg: 0
  });

  const [itemChauffe, setitemChauffe] = React.useState([
    {
      designation: '',
      quantite: 0,
      unite: '',
      btua: 0,
      fc: 0,
      er: 0,
      btup: 0,
      whca: 0,
      whct: 0,
      whctg: 0
    }
  ]);

  const [itemFiltre, setitemFiltre] = React.useState({
    id: '',
    designation: '',
    quantite: 0,
    unite: '',
    cp: 0,
    aq: 0,
    fl: 0,
    rf: 0,
    k: 0,
    mbe: 0,
    ce: 0,
    cet: 0,
    cetg: 0

  });

  const [itemEquipement, setitemEquipement] = React.useState({
    id: '',
    designation: '',
    quantite: 1,
    unite: '',
    eca: 1,
    ect: 0,
    ectg: 0

  });


  const [appareil, setappareil] = React.useState([{
    id: '',
    designation: 'appareil 1',
    quantite: 1,
    unite: '',
    aqc: 1,
    ec: 1,
    fc: 1,
    fr: 1,
    lcct: 1,
    lcctg: 1

  }])

  const [itemAppareil, setitemAppareil] = React.useState({
    id: '',
    designation: '',
    quantite: 1,
    unite: '',
    aqc: 1,
    ec: 1,
    fc: 1,
    fr: 1,
    lcct: 1,
    lcctg: 1

  });

  const [chauffe, setchauffe] = React.useState([
    {
      id: 1,
      designation: 'chauffe 1',
      quantite: 1,
      unite: 'm',
      btua: 1,
      fc: 1,
      er: 1,
      btup: 1,
      whca: 1,
      whct: 1,
      whctg: 0
    }
  ]);
  const [openDiagchauffe, setopenDiagchauffe] = React.useState(false);

  const [filtre, setfiltre] = React.useState([
    {
      id: 1,
      designation: 'filtre 1',
      quantite: 1,
      unite: 'm',
      cp: 1,
      aq: 1,
      fl: 1,
      rf: 1,
      k: 1.173,
      mbe: 1,
      ce: 1,
      cet: 1,
      cetg: 0
    }
  ]);

  const [systeme, setsysteme] = React.useState([
    {
      id: 1,
      designation: 'system 1',
      quantite: 1,
      unite: 'm',
      ic: 1,
      eca: 1,
      NFOMCa: 1,
      m: 1,
      NFOMCpv: 1,
      NRCa: 1,
      n: 1,
      NRCpv: 1,
      LCCesg: 0
    }
  ]);

  const [itemSysteme, setitemSysteme] = React.useState(
    {
      id: 1,
      designation: '',
      quantite: 1,
      unite: '',
      ic: 1,
      eca: 1,
      NFOMCa: 1,
      m: 1,
      NFOMCpv: 1,
      NRCa: 1,
      n: 1,
      NRCpv: 1,
      LCCesg: 0
    }
  );

  const [openDiagfiltre, setopenDiagfiltre] = React.useState(false);

  const [equipement, setequipement] = React.useState([
    {
      id: '',
      designation: 'equipement 1',
      quantite: 1,
      unite: '',
      eca: 1,
      ect: 0,
      ectg: 0

    }
  ]);
  const [openDiagequipement, setopenDiagequipement] = React.useState(false);
  const [openDiagappareil, setopenDiagappareil] = React.useState(false);
  const [openDiagsysteme, setopenDiagsysteme] = React.useState(false);

  //deroulant
  const [openeclairage, setopeneclairage] = React.useState(false);
  const [openchauffe, setopenchauffe] = React.useState(false);
  const [openfiltre, setopenfiltre] = React.useState(false);
  const [openequipement, setopenequipement] = React.useState(false);

  const [openappareil, setopenappareil] = React.useState(false);
  const [opensysteme, setopensysteme] = React.useState(false);
  const [openenergie, setopenenergie] = React.useState(false);


  //notif
  const [openNotif, setOpenNotif] = React.useState(false);
  const [message, setmessage] = React.useState('');
  const [errorType, seterrorType] = React.useState('');


  //dialog
  const [openDiag, setopenDiag] = React.useState(false);


  //selectedElement
  const [selectedeclairage, setselectedeclairage] = React.useState([])
  const [selectedchauffe, setselectedchauffe] = React.useState([])
  const [selectedfiltre, setselectedfiltre] = React.useState([])
  const [selectedequipement, setselectedequipement] = React.useState([])

  const [selectedappareil, setselectedappareil] = React.useState([]);
  const [selectedsysteme, setselectedsysteme] = React.useState([]);
  const [selectedenergie, setselectedenergie] = React.useState([]);

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


  React.useEffect(() => {
    props.setdisableSidebar(false)
    props.setshowAppBar(true)
  }, [])


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



  const columns = [
    // { field: 'id', headerName: 'ID', width: 90 },
    { field: 'designation', headerName: 'Désignation', width: 130 },
    {
      field: 'quantite', headerName: 'Quantité', width: 70,
      type: 'number'
    },
    {
      field: 'unite', headerName: 'Unité', width: 70,
    },
    {
      field: 'bs',
      headerName: 'BS',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'ot',
      headerName: 'OT',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'ec',
      headerName: 'EC',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'lca',
      headerName: 'LCa',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
      valueGetter: (params) =>
        `${(params.row.quantite * params.row.bs * params.row.ot * params.row.ec) / 1000}`,
    },
    {
      field: 'lct',
      headerName: 'LCt',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'lctg',
      headerName: 'LCtg',
      // description: 'Prix toute Taxe Comprise',
      width: 75,
      valueGetter: (params) =>
        `${Actu(((params.row.quantite * params.row.bs * params.row.ot * params.row.ec) / 1000) * params.row.quantite, props.actualisation, props.actualisationReel / 100, props.persistance)}`,
    },
  ];


  const columnsChauffe = [
    // { field: 'id', headerName: 'ID', width: 90 },
    { field: 'designation', headerName: 'Désignation', width: 130 },
    {
      field: 'quantite', headerName: 'Quantité', width: 70,
      type: 'number'
    },
    {
      field: 'unite', headerName: 'Unité', width: 70,
    },
    {
      field: 'btua',
      headerName: 'BTUa',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'fc',
      headerName: 'FC',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'er',
      headerName: 'ER',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'btup',
      headerName: 'BTUp',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'whca',
      headerName: 'WHCa',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
      valueGetter: (params) =>
        `${(params.row.quantite * params.row.btua * params.row.fc) / (params.row.er * params.row.btup)}`,
    },
    {
      field: 'whct',
      headerName: 'WHCt',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'whctg',
      headerName: 'WHCtg',
      // description: 'Prix toute Taxe Comprise',
      width: 75,
      valueGetter: (params) =>
        `${Actu(((params.row.quantite * params.row.btua * params.row.fc) / (params.row.er * params.row.btup)) * params.row.quantite, props.actualisation, props.actualisationReel / 100, props.persistance)}`,
    },
  ];


  const columnsFiltre = [
    // { field: 'id', headerName: 'ID', width: 90 },
    { field: 'designation', headerName: 'Désignation', width: 130 },
    {
      field: 'quantite', headerName: 'Quantité', width: 70,
      type: 'number'
    },
    {
      field: 'unite', headerName: 'Unité', width: 70,
    },
    {
      field: 'cp',
      headerName: 'CP',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'aq',
      headerName: 'AQ',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'fl',
      headerName: 'FL',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'rf',
      headerName: 'RF',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'k',
      headerName: 'K',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'mbe',
      headerName: 'MBe',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'ce',
      headerName: 'Ce',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
      valueGetter: (params) =>
        `${(params.row.quantite * params.row.cp * params.row.aq * params.row.fl * params.row.rf * params.row.k) / (params.row.mbe * 10000)}`,
    },
    {
      field: 'cet',
      headerName: 'Cet',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'cetg',
      headerName: 'Cetg',
      // description: 'Prix toute Taxe Comprise',
      width: 75,
      valueGetter: (params) =>
        `${Actu(((params.row.quantite * params.row.cp * params.row.aq * params.row.fl * params.row.rf * params.row.k) / (params.row.mbe * 10000)) * params.row.quantite, props.actualisation, props.actualisationReel / 100, props.persistance)}`,

    },
  ];


  const columnsEquipement = [
    // { field: 'id', headerName: 'ID', width: 90 },
    { field: 'designation', headerName: 'Désignation', width: 130 },
    {
      field: 'quantite', headerName: 'Quantité', width: 130,
      type: 'number'
    },
    {
      field: 'unite', headerName: 'Unité', width: 90,
    },
    {
      field: 'eca',
      headerName: 'ECa',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 90,
    },
    {
      field: 'ect',
      headerName: 'Ect',
      // description: 'Prix Unitaire',
      width: 90,
      valueGetter: (params) =>
        `${params.row.eca * params.row.quantite * props.actualisation}`,

    },
    {
      field: 'ectg',
      headerName: 'ECtg',
      // description: 'Prix toute Taxe Comprise',
      width: 95,
      valueGetter: (params) =>
        `${Actu(params.row.eca * params.row.quantite, props.actualisation, props.actualisationReel / 100, props.persistance)}`,

    },
  ];


  const columnsAppareil = [
    // { field: 'id', headerName: 'ID', width: 90 },
    { field: 'designation', headerName: 'Désignation', width: 160 },
    {
      field: 'quantite', headerName: 'Quantité', width: 70,
      type: 'number'
    },
    {
      field: 'unite', headerName: 'Unité', width: 70,
    },
    {
      field: 'aqc',
      headerName: 'AQC',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'ec',
      headerName: 'EC',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70
    },
    {
      field: 'fc',
      headerName: 'FC',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70
    },
    {
      field: 'fr',
      headerName: 'FR',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70
    },
    {
      field: 'dr',
      headerName: 'DR',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,

      valueGetter: (params) =>
        `${props.actualisationReel / 100}`,

    },
    {
      field: 'lcca',
      headerName: 'LCCa',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
      valueGetter: (params) =>
        `${params.row.quantite * (params.row.aqc + params.row.ec * params.row.fc * (1 + params.row.fr / 100) / (1 + props.actualisationReel / 100))}`,
    },
    {
      field: 'lcct',
      headerName: 'LCCt',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70
    },
    {
      field: 'lcctg',
      headerName: 'LCCtg',
      // description: 'Prix toute Taxe Comprise',
      width: 70,
      valueGetter: (params) =>
        `${Actu((params.row.quantite * (params.row.aqc + params.row.ec * params.row.fc * (1 + params.row.fr / 100) / (1 + props.actualisationReel / 100))), props.actualisation, props.actualisationReel / 100, props.persistance)}`,

    },
  ];


  const columnsSysteme = [
    // { field: 'id', headerName: 'ID', width: 90 },
    { field: 'designation', headerName: 'Désignation', width: 130 },
    {
      field: 'quantite', headerName: 'Quantité', width: 70,
      type: 'number'
    },
    {
      field: 'unite', headerName: 'Unité', width: 70,
    },
    {
      field: 'ic',
      headerName: 'IC',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'eca',
      headerName: 'ECa',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'NFOMCa',
      headerName: 'NFOMCa',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'm',
      headerName: 'm',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'NFOMCpv',
      headerName: 'NFOMCpv',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
      valueGetter: (params) =>
        `${ActuMR(params.row.NRCa, props.actualisation, props.actualisationReel / 100, props.persistance, params.row.m)}`
    },
    {
      field: 'NRCa',
      headerName: 'NRCa',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'n',
      headerName: 'n',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
    },
    {
      field: 'NRCpv',
      headerName: 'NRCpv',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
      valueGetter: (params) =>
        `${ActuMR(params.row.NRCa, props.actualisation, props.actualisationReel / 100, props.persistance, params.row.n)}`,

    },
    {
      field: 'LCCesg',
      headerName: 'LCCesg',
      // description: 'Prix Unitaire',
      type: 'decimal',
      width: 70,
      valueGetter: (params) =>
        `${params.row.quantite * (params.row.ic + params.row.eca + ActuMR(params.row.NRCa, props.actualisation, props.actualisationReel / 100, props.persistance, params.row.m) + ActuMR(params.row.NRCa, props.actualisation, props.actualisationReel / 100, props.persistance, params.row.n))}`,
    }
  ];

  const handleClickOpen = (design) => {
    if (design === 'eclairage') {
      setopenDiageclairage(true);
    }
    else if (design === 'filtre') {
      setopenDiagfiltre(true)
    }
    else if (design === 'equipement') {
      setopenDiagequipement(true)
    }
    else if (design === 'chauffe') {
      setopenDiagchauffe(true)
    }
    else if (design === 'appareil') {
      setopenDiagappareil(true)
    }
    else if (design === 'systeme') {
      setopenDiagsysteme(true)
    }
  };

  const handleClose = () => {
    setopenDiageclairage(false);
    setopenDiagfiltre(false)
    setopenDiagequipement(false)
    setopenDiagchauffe(false)
    setopenDiagappareil(false)
    setopenDiagsysteme(false)
  };

  const handleCloseNotif = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenNotif(false);
  };


  React.useEffect(() => {
    props.seteclairage(eclairage);
    props.setchauffe(chauffe);
    props.setfiltre(filtre);
    props.setequipement(equipement)
    props.setappareil(appareil)
    props.setsysteme(systeme)
  }, [eclairage, chauffe, filtre, equipement, appareil, systeme])


  return (
    <div style={{ margin: 0}}>
      <div style={{ paddingTop: '100px', overflow: 'scroll', width: '400%', height: '650px',position:'relative' }}>
        <Notification open={openNotif} type={errorType} message={message} handleClose={handleCloseNotif} />
        <Card sx={{ width: '75%', marginLeft: '30px', marginBottom: '30px', height: '40px', marginBottom: '10px', boxShadow: '1px 1px 2px 1px gray' }}>
          <CardContent style={{ marginTop: '-10px' }}>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setopenenergie(!openenergie)}
            >
              {openenergie ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            <span>Energie</span>

          </CardContent>
        </Card>
        <Collapse in={openenergie} timeout="auto" unmountOnExit style={{ marginBottom: '30px' }}>
          <div style={{ marginLeft: '70px', width: '70%' }}>
            {/* Eclairage debut **********************************************************************************************************/}
            <Dialog open={openDiageclairage} onClose={handleClose}>
              <DialogTitle>Eclairage</DialogTitle>
              <DialogContent>

                <form onSubmit={(event) => {
                  event.preventDefault();
                  console.log('submit is ready!', item);
                  var tab = [];
                  tab = Object.assign([], eclairage);

                  tab.push({ ...item, id: item.designation });
                  seteclairage(tab)
                  handleClose()
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
                    value={item.bs}
                    onChange={(e) => setitem({ ...item, bs: e.target.value })}
                    required
                    id="bs"
                    label="bs"
                    type="decimal"
                    helperText='signification de bs'
                    fullWidth
                    variant="standard"
                  />

                  <TextField
                    autoFocus
                    margin="dense"
                    value={item.ot}
                    onChange={(e) => setitem({ ...item, ot: e.target.value })}
                    required
                    id="ot"
                    label="ot"
                    type="decimal"
                    helperText='signification de ot'
                    fullWidth
                    variant="standard"
                  />

                  <TextField
                    autoFocus
                    margin="dense"
                    value={item.ec}
                    onChange={(e) => setitem({ ...item, ec: e.target.value })}
                    required
                    id="ec"
                    label="ec"
                    type="decimal"
                    helperText='signification de ec'
                    fullWidth
                    variant="standard"
                  />

                  <TextField
                    autoFocus
                    margin="dense"
                    value={item.lct}
                    onChange={(e) => setitem({ ...item, lct: e.target.value })}

                    id="lct"
                    label="lct"
                    type="decimal"
                    helperText='signification de lct'
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


            <Card sx={{ width: '75%', marginLeft: '45px', marginBottom: '30px', height: '40px', marginBottom: '10px', boxShadow: '1px 1px 2px 1px gray' }}>
              <CardContent style={{ marginTop: '-10px' }}>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setopeneclairage(!openeclairage)}
                >
                  {openeclairage ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                <span>Eclairage</span>

              </CardContent>
            </Card>
            <Collapse in={openeclairage} timeout="auto" unmountOnExit style={{ marginBottom: '30px' }}>

              <Box sx={{ margin: 1, marginLeft: '20px' }}>
                <div style={{ height: 200, width: '90%', marginLeft: '45px' }}>
                  <Typography variant="h6" gutterBottom component="div">

                    <DeleteIcon color="primary" titleAccess={`supprimer un eclairage`} onClick={(designa) => {
                      seteclairage(eclairage.filter((elt) => !containsObject(elt, selectedeclairage)))
                      setOpenNotif(true);
                      seterrorType('success');
                      setmessage('Suppression effectué avec succes ')
                    }
                    } />
                    <AddCircleIcon color="primary" titleAccess={`Ajouter un eclairage`} style={{ marginLeft: '10px' }} onClick={() => {
                      //handleClickOpen(row.designation);
                      handleClickOpen('eclairage');
                      setitem({
                        id: '',
                        designation: '',
                        quantite: 0,
                        unite: '',
                        bs: 0,
                        ot: 0,
                        ec: 0,
                        lca: 0,
                        lct: 0,
                        lctg: 0
                      })
                      // console.log('fkjskdjflksjldfkjsnvlksdjnvlksjfd')

                    }
                    } />
                  </Typography>
                  <DataGrid
                    rows={eclairage}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onSelectionModelChange={(ids) => {
                      const selectedIDs = new Set(ids);
                      const selectedRows = eclairage.filter((row) =>
                        selectedIDs.has(row.id),
                        //  console.log('selectedIDs.has(row.id),',)
                      );

                      setselectedeclairage(selectedRows)



                    }}
                  />
                </div>


              </Box>
            </Collapse>
            {/*  Eclairage fin *********************************************************************************************************/}



            {/* chauffe debut **********************************************************************************************************/}
            <Dialog open={openDiagchauffe} onClose={handleClose}>
              <DialogTitle>Chauffe Eau</DialogTitle>
              <DialogContent>

                <form onSubmit={(event) => {
                  event.preventDefault();
                  console.log('submit is ready itemChauffe!', itemChauffe);
                  var tab = [];
                  tab = Object.assign([], chauffe);

                  tab.push({ ...itemChauffe, id: itemChauffe.designation });
                  setchauffe(tab)
                  handleClose()
                  setOpenNotif(true);
                  seterrorType('success');
                  setmessage('Ajout effectué avec succes ')

                  setitemChauffe({
                    designation: '',
                    quantite: 0,
                    unite: '',
                    btua: 0,
                    fc: 0,
                    er: 0,
                    btup: 0,
                    whca: 0,
                    whct: 0,
                    whctg: 0
                  })

                }}>

                  <TextField
                    autoFocus
                    margin="dense"
                    value={itemChauffe.designation}
                    onChange={(e) => { setitemChauffe({ ...itemChauffe, designation: e.target.value }) }}
                    required
                    id="Désignation"
                    label="Désignation"
                    type="text"
                    fullWidth
                    variant="standard"
                  />

                  <TextField
                    // autoFocus
                    margin="dense"
                    value={itemChauffe.quantite}
                    onChange={(e) => setitemChauffe({ ...itemChauffe, quantite: e.target.value })}
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
                    value={itemChauffe.unite}
                    onChange={(e) => setitemChauffe({ ...itemChauffe, unite: e.target.value })}
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
                    value={itemChauffe.btua}
                    onChange={(e) => setitemChauffe({ ...itemChauffe, btua: e.target.value })}
                    required
                    id="btua"
                    label="BTUa"
                    type="decimal"
                    helperText='signification de btua'
                    fullWidth
                    variant="standard"
                  />

                  <TextField
                    //    autoFocus
                    margin="dense"
                    value={itemChauffe.fc}
                    onChange={(e) => setitemChauffe({ ...itemChauffe, fc: e.target.value })}
                    required
                    id="fc"
                    label="FC"
                    type="decimal"
                    helperText='signification de fc'
                    fullWidth
                    variant="standard"
                  />

                  <TextField
                    //     autoFocus
                    margin="dense"
                    value={itemChauffe.er}
                    onChange={(e) => setitemChauffe({ ...itemChauffe, er: e.target.value })}
                    required
                    id="er"
                    label="ER"
                    type="decimal"
                    helperText='signification de er'
                    fullWidth
                    variant="standard"
                  />

                  <TextField
                    autoFocus
                    margin="dense"
                    value={itemChauffe.btup}
                    onChange={(e) => setitemChauffe({ ...itemChauffe, btup: e.target.value })}
                    required
                    id="btup"
                    label="BTUp"
                    type="decimal"
                    helperText='signification de btup'
                    fullWidth
                    variant="standard"
                  />

                  <TextField
                    autoFocus
                    margin="dense"
                    value={itemChauffe.whct}
                    onChange={(e) => setitemChauffe({ ...itemChauffe, whct: e.target.value })}

                    id="whct"
                    label="WHCt"
                    type="decimal"
                    helperText='signification de whct'
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


            <Card sx={{ width: '75%', marginLeft: '45px', height: '40px', marginBottom: '10px', boxShadow: '1px 1px 2px 1px gray' }}>
              <CardContent style={{ marginTop: '-10px' }}>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setopenchauffe(!openchauffe)}
                >
                  {openfiltre ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                <span>Chauffe Eau</span>

              </CardContent>
            </Card>
            <Collapse in={openchauffe} timeout="auto" unmountOnExit style={{ marginBottom: '30px' }}>

              <Box sx={{ margin: 1 }}>
                <div style={{ height: 200, width: '90%', marginLeft: '45px' }}>
                  <Typography variant="h6" gutterBottom component="div">

                    <DeleteIcon color="primary" titleAccess={`supprimer un eclairage`} onClick={(designa) => {
                      setchauffe(chauffe.filter((elt) => !containsObject(elt, selectedchauffe)))
                      setOpenNotif(true);
                      seterrorType('success');
                      setmessage('Suppression effectué avec succes ')
                    }
                    } />
                    <AddCircleIcon color="primary" titleAccess={`Ajouter un eclairage`} style={{ marginLeft: '10px' }} onClick={() => {
                      //handleClickOpen(row.designation);
                      handleClickOpen('chauffe');
                      // console.log('fkjskdjflksjldfkjsnvlksdjnvlksjfd')


                    }
                    } />
                  </Typography>
                  <DataGrid
                    rows={chauffe}
                    columns={columnsChauffe}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onSelectionModelChange={(ids) => {
                      const selectedIDs = new Set(ids);
                      const selectedRows = chauffe.filter((row) =>
                        selectedIDs.has(row.id),
                        //  console.log('selectedIDs.has(row.id),',)
                      );

                      setselectedchauffe(selectedRows)



                    }}
                  />
                </div>


              </Box>
            </Collapse>
            {/*  chauffe fin *********************************************************************************************************/}


            {/* filtre debut **********************************************************************************************************/}
            <Dialog open={openDiagfiltre} onClose={handleClose}>
              <DialogTitle>Filtre a air</DialogTitle>
              <DialogContent>

                <form onSubmit={(event) => {
                  event.preventDefault();
                  console.log('submit is ready itemFiltre!', itemFiltre);
                  var tab = [];
                  tab = Object.assign([], filtre);

                  tab.push({ ...itemFiltre, id: itemFiltre.designation });
                  setfiltre(tab)
                  handleClose()
                  setOpenNotif(true);
                  seterrorType('success');
                  setmessage('Ajout effectué avec succes ')

                  setitemFiltre({
                    id: '',
                    designation: '',
                    quantite: 0,
                    unite: '',
                    cp: 0,
                    aq: 0,
                    fl: 0,
                    rf: 0,
                    k: 0,
                    mbe: 0,
                    ce: 0,
                    cet: 0,
                    cetg: 0

                  })

                }}>

                  <TextField
                    autoFocus
                    margin="dense"
                    value={itemFiltre.designation}
                    onChange={(e) => { setitemFiltre({ ...itemFiltre, designation: e.target.value }) }}
                    required
                    id="Désignation"
                    label="Désignation"
                    type="text"
                    fullWidth
                    variant="standard"
                  />

                  <TextField
                    // autoFocus
                    margin="dense"
                    value={itemFiltre.quantite}
                    onChange={(e) => setitemFiltre({ ...itemFiltre, quantite: e.target.value })}
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
                    value={itemFiltre.unite}
                    onChange={(e) => setitemFiltre({ ...itemFiltre, unite: e.target.value })}
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
                    value={itemFiltre.cp}
                    onChange={(e) => setitemFiltre({ ...itemFiltre, cp: e.target.value })}
                    required
                    id="cp"
                    label="Cp"
                    type="decimal"
                    helperText='signification de cp'
                    fullWidth
                    variant="standard"
                  />

                  <TextField
                    //    autoFocus
                    margin="dense"
                    value={itemFiltre.aq}
                    onChange={(e) => setitemFiltre({ ...itemFiltre, aq: e.target.value })}
                    required
                    id="aq"
                    label="Aq"
                    type="decimal"
                    helperText='signification de aq'
                    fullWidth
                    variant="standard"
                  />

                  <TextField
                    //     autoFocus
                    margin="dense"
                    value={itemFiltre.fl}
                    onChange={(e) => setitemFiltre({ ...itemFiltre, fl: e.target.value })}
                    required
                    id="fl"
                    label="FL"
                    type="decimal"
                    helperText='signification de fl'
                    fullWidth
                    variant="standard"
                  />

                  <TextField
                    autoFocus
                    margin="dense"
                    value={itemFiltre.rf}
                    onChange={(e) => setitemFiltre({ ...itemFiltre, rf: e.target.value })}
                    required
                    id="rf"
                    label="Rf"
                    type="decimal"
                    helperText='signification de rf'
                    fullWidth
                    variant="standard"
                  />

                  <TextField
                    autoFocus
                    margin="dense"
                    value={itemFiltre.k}
                    onChange={(e) => setitemFiltre({ ...itemFiltre, k: e.target.value })}
                    required
                    id="k"
                    label="K"
                    type="decimal"
                    helperText='signification de k'
                    fullWidth
                    variant="standard"
                  />


                  <TextField
                    autoFocus
                    margin="dense"
                    value={itemFiltre.mbe}
                    onChange={(e) => setitemFiltre({ ...itemFiltre, mbe: e.target.value })}
                    required
                    id="mbe"
                    label="MBe"
                    type="decimal"
                    helperText='signification de mbe'
                    fullWidth
                    variant="standard"
                  />

                  <TextField
                    autoFocus
                    margin="dense"
                    value={itemFiltre.cet}
                    onChange={(e) => setitemFiltre({ ...itemFiltre, cet: e.target.value })}

                    id="cet"
                    label="Cet"
                    type="decimal"
                    helperText='signification de cet'
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


            <Card sx={{ width: '75%', marginLeft: '45px', height: '40px', marginBottom: '10px', boxShadow: '1px 1px 2px 1px gray' }}>
              <CardContent style={{ marginTop: '-10px' }}>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setopenfiltre(!openfiltre)}
                >
                  {openfiltre ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                <span>Filtre a air</span>

              </CardContent>
            </Card>
            <Collapse in={openfiltre} timeout="auto" unmountOnExit style={{ marginBottom: '30px' }}>

              <Box sx={{ margin: 1 }}>
                <div style={{ height: 200, width: '90%', marginLeft: '45px' }}>
                  <Typography variant="h6" gutterBottom component="div">

                    <DeleteIcon color="primary" titleAccess={`supprimer un filtre a air`} onClick={(designa) => {
                      setfiltre(filtre.filter((elt) => !containsObject(elt, selectedfiltre)))
                      setOpenNotif(true);
                      seterrorType('success');
                      setmessage('Suppression effectué avec succes ')
                    }
                    } />
                    <AddCircleIcon color="primary" titleAccess={`Ajouter un filtre a air`} style={{ marginLeft: '10px' }} onClick={() => {
                      //handleClickOpen(row.designation);
                      handleClickOpen('filtre');
                      // console.log('fkjskdjflksjldfkjsnvlksdjnvlksjfd')


                    }
                    } />
                  </Typography>
                  <DataGrid
                    rows={filtre}
                    columns={columnsFiltre}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onSelectionModelChange={(ids) => {
                      const selectedIDs = new Set(ids);
                      const selectedRows = filtre.filter((row) =>
                        selectedIDs.has(row.id),
                        //  console.log('selectedIDs.has(row.id),',)
                      );

                      setselectedfiltre(selectedRows)
                    }}
                  />
                </div>


              </Box>
            </Collapse>
            {/*  filtre fin *********************************************************************************************************/}


            {/* equipement debut **********************************************************************************************************/}
            <Dialog open={openDiagequipement} onClose={handleClose}>
              <DialogTitle>Autre equipement</DialogTitle>
              <DialogContent>

                <form onSubmit={(event) => {
                  event.preventDefault();
                  console.log('submit is ready itemEquipement!', itemEquipement);
                  var tab = [];
                  tab = Object.assign([], equipement);

                  tab.push({ ...itemEquipement, id: itemEquipement.designation });
                  setequipement(tab)
                  handleClose()
                  setOpenNotif(true);
                  seterrorType('success');
                  setmessage('Ajout effectué avec succes ')

                  setitemFiltre({
                    id: '',
                    designation: '',
                    quantite: 1,
                    unite: '',
                    eca: 1,
                    ect: 0,
                    ectg: 0

                  })

                }}>

                  <TextField
                    autoFocus
                    margin="dense"
                    value={itemEquipement.designation}
                    onChange={(e) => { setitemEquipement({ ...itemEquipement, designation: e.target.value }) }}
                    required
                    id="Désignation"
                    label="Désignation"
                    type="text"
                    fullWidth
                    variant="standard"
                  />

                  <TextField
                    // autoFocus
                    margin="dense"
                    value={itemEquipement.quantite}
                    onChange={(e) => setitemEquipement({ ...itemEquipement, quantite: e.target.value })}
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
                    value={itemEquipement.unite}
                    onChange={(e) => setitemEquipement({ ...itemEquipement, unite: e.target.value })}
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
                    value={itemEquipement.eca}
                    onChange={(e) => setitemEquipement({ ...itemEquipement, eca: e.target.value })}
                    required
                    id="eca"
                    label="ECa"
                    type="decimal"
                    helperText='signification de ECa'
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


            <Card sx={{ width: '75%', marginLeft: '45px', height: '40px', marginBottom: '10px', boxShadow: '1px 1px 2px 1px gray' }}>
              <CardContent style={{ marginTop: '-10px' }}>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setopenequipement(!openequipement)}
                >
                  {openequipement ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                <span>Autre equipement</span>

              </CardContent>
            </Card>
            <Collapse in={openequipement} timeout="auto" unmountOnExit style={{ marginBottom: '30px' }}>

              <Box sx={{ margin: 1 }}>
                <div style={{ height: 200, width: '90%', marginLeft: '45px' }}>
                  <Typography variant="h6" gutterBottom component="div">

                    <DeleteIcon color="primary" titleAccess={`supprimer un filtre a air`} onClick={(designa) => {
                      setequipement(equipement.filter((elt) => !containsObject(elt, selectedequipement)))
                      setOpenNotif(true);
                      seterrorType('success');
                      setmessage('Suppression effectué avec succes ')
                    }
                    } />
                    <AddCircleIcon color="primary" titleAccess={`Ajouter un filtre a air`} style={{ marginLeft: '10px' }} onClick={() => {
                      //handleClickOpen(row.designation);
                      handleClickOpen('equipement');
                      // console.log('fkjskdjflksjldfkjsnvlksdjnvlksjfd')


                    }
                    } />
                  </Typography>
                  <DataGrid
                    rows={equipement}
                    columns={columnsEquipement}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onSelectionModelChange={(ids) => {
                      const selectedIDs = new Set(ids);
                      const selectedRows = equipement.filter((row) =>
                        selectedIDs.has(row.id),
                        //  console.log('selectedIDs.has(row.id),',)
                      );

                      setselectedequipement(selectedRows)
                    }}
                  />
                </div>


              </Box>
            </Collapse>
            {/*  equipement fin *********************************************************************************************************/}

          </div>
        </Collapse>


        {/* CCV APPAREIL debut **********************************************************************************************************/}
        <Dialog open={openDiagappareil} onClose={handleClose}>
          <DialogTitle>CCV appareil</DialogTitle>
          <DialogContent>

            <form onSubmit={(event) => {
              event.preventDefault();
              console.log('submit is ready itemAppareil!', itemAppareil);
              var tab = [];
              tab = Object.assign([], appareil);

              tab.push({ ...itemAppareil, id: itemAppareil.designation });
              setappareil(tab)
              handleClose()
              setOpenNotif(true);
              seterrorType('success');
              setmessage('Ajout effectué avec succes ')

              setitemAppareil({
                id: '',
                designation: '',
                quantite: 1,
                unite: '',
                aqc: 1,
                ec: 1,
                fc: 1,
                fr: 1,
                lcct: 1,
                lcctg: 1

              })

            }}>

              <TextField
                autoFocus
                margin="dense"
                value={itemAppareil.designation}
                onChange={(e) => { setitemAppareil({ ...itemAppareil, designation: e.target.value }) }}
                required
                id="Désignation"
                label="Désignation"
                type="text"
                fullWidth
                variant="standard"
              />

              <TextField
                // autoFocus
                margin="dense"
                value={itemAppareil.quantite}
                onChange={(e) => setitemAppareil({ ...itemAppareil, quantite: e.target.value })}
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
                value={itemAppareil.unite}
                onChange={(e) => setitemEquipement({ ...itemAppareil, unite: e.target.value })}
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
                value={itemAppareil.aqc}
                onChange={(e) => setitemAppareil({ ...itemAppareil, aqc: e.target.value })}
                required
                id="aqc"
                label="AQC"
                type="decimal"
                helperText='signification de AQC'
                fullWidth
                variant="standard"
              />
              <TextField
                // autoFocus
                margin="dense"
                value={itemAppareil.ec}
                onChange={(e) => setitemAppareil({ ...itemAppareil, ec: e.target.value })}
                required
                id="ec"
                label="EC"
                type="decimal"
                helperText='signification de EC'
                fullWidth
                variant="standard"
              />

              <TextField
                // autoFocus
                margin="dense"
                value={itemAppareil.fc}
                onChange={(e) => setitemAppareil({ ...itemAppareil, fc: e.target.value })}
                required
                id="fc"
                label="FC"
                type="decimal"
                helperText='signification de FC'
                fullWidth
                variant="standard"
              />

              <TextField
                // autoFocus
                margin="dense"
                value={itemAppareil.fr}
                onChange={(e) => setitemAppareil({ ...itemAppareil, fr: e.target.value })}
                required
                id="fr"
                label="FR (%)"
                type="decimal"
                helperText='signification de FR'
                fullWidth
                variant="standard"
              />
              <TextField
                // autoFocus
                margin="dense"
                value={itemAppareil.lcct}
                onChange={(e) => setitemAppareil({ ...itemAppareil, lcct: e.target.value })}
                required
                id="lcct"
                label="LCCT"
                type="decimal"
                helperText='signification de LCCT'
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


        <Card sx={{ width: '75%', marginLeft: '30px', height: '40px', marginBottom: '10px', boxShadow: '1px 1px 2px 1px gray' }}>
          <CardContent style={{ marginTop: '-10px' }}>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setopenappareil(!openappareil)}
            >
              {openappareil ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            <span>CCV appareil</span>

          </CardContent>
        </Card>
        <Collapse in={openappareil} timeout="auto" unmountOnExit style={{ marginBottom: '30px' }}>

          <Box sx={{ margin: 1 }}>
            <div style={{ height: 200, width: '90%', marginLeft: '45px' }}>
              <Typography variant="h6" gutterBottom component="div">

                <DeleteIcon color="primary" titleAccess={`supprimer un Equipement`} onClick={(designa) => {
                  setappareil(appareil.filter((elt) => !containsObject(elt, selectedappareil)))
                  setOpenNotif(true);
                  seterrorType('success');
                  setmessage('Suppression effectué avec succes ')
                }
                } />
                <AddCircleIcon color="primary" titleAccess={`Ajouter un Equipement`} style={{ marginLeft: '10px' }} onClick={() => {
                  //handleClickOpen(row.designation);
                  handleClickOpen('appareil');
                  // console.log('fkjskdjflksjldfkjsnvlksdjnvlksjfd')


                }
                } />
              </Typography>
              <DataGrid
                rows={appareil}
                columns={columnsAppareil}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                onSelectionModelChange={(ids) => {
                  const selectedIDs = new Set(ids);
                  const selectedRows = appareil.filter((row) =>
                    selectedIDs.has(row.id),
                    //  console.log('selectedIDs.has(row.id),',)
                  );

                  setselectedappareil(selectedRows)
                }}
              />
            </div>


          </Box>
        </Collapse>
        {/*  CCV APPAREIL fin *********************************************************************************************************/}



        {/*  CCV systeme debut *********************************************************************************************************/}

        <Dialog open={openDiagsysteme} onClose={handleClose}>
          <DialogTitle>Filtre a air</DialogTitle>
          <DialogContent>

            <form onSubmit={(event) => {
              event.preventDefault();
              console.log('submit is ready itemSysteme!', itemSysteme);
              var tab = [];
              tab = Object.assign([], systeme);

              tab.push({ ...itemSysteme, id: itemSysteme.designation });
              setsysteme(tab)
              handleClose()
              setOpenNotif(true);
              seterrorType('success');
              setmessage('Ajout effectué avec succes ')

              setitemSysteme({
                id: 1,
                designation: '',
                quantite: 1,
                unite: '',
                ic: 1,
                eca: 1,
                NFOMCa: 1,
                m: 1,
                NFOMCpv: 1,
                NRCa: 1,
                n: 1,
                NRCpv: 1,
                LCCesg: 0
              })

            }}>

              <TextField
                autoFocus
                margin="dense"
                value={itemSysteme.designation}
                onChange={(e) => { setitemSysteme({ ...itemSysteme, designation: e.target.value }) }}
                required
                id="Désignation"
                label="Désignation"
                type="text"
                fullWidth
                variant="standard"
              />

              <TextField
                // autoFocus
                margin="dense"
                value={itemSysteme.quantite}
                onChange={(e) => setitemSysteme({ ...itemSysteme, quantite: e.target.value })}
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
                value={itemSysteme.unite}
                onChange={(e) => setitemSysteme({ ...itemSysteme, unite: e.target.value })}
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
                value={itemSysteme.ic}
                onChange={(e) => setitemSysteme({ ...itemSysteme, ic: e.target.value })}
                required
                id="ic"
                label="IC"
                type="decimal"
                helperText='signification de IC'
                fullWidth
                variant="standard"
              />

              <TextField
                //    autoFocus
                margin="dense"
                value={itemSysteme.eca}
                onChange={(e) => setitemSysteme({ ...itemSysteme, eca: e.target.value })}
                required
                id="eca"
                label="ECa"
                type="decimal"
                helperText='signification de ECa'
                fullWidth
                variant="standard"
              />

              <TextField
                //     autoFocus
                margin="dense"
                value={itemSysteme.NFOMCa}
                onChange={(e) => setitemSysteme({ ...itemSysteme, NFOMCa: e.target.value })}
                required
                id="NFOMCa"
                label="NFOMCa"
                type="decimal"
                helperText='signification de NFOMCa'
                fullWidth
                variant="standard"
              />

              <TextField
                autoFocus
                margin="dense"
                value={itemSysteme.m}
                onChange={(e) => setitemSysteme({ ...itemSysteme, m: e.target.value })}
                required
                id="m"
                label="m"
                type="decimal"
                helperText='signification de m'
                fullWidth
                variant="standard"
              />

              <TextField
                autoFocus
                margin="dense"
                value={itemSysteme.NRCa}
                onChange={(e) => setitemSysteme({ ...itemSysteme, NRCa: e.target.value })}
                required
                id="NRCa"
                label="NRCa"
                type="decimal"
                helperText='signification de NRCa'
                fullWidth
                variant="standard"
              />


              <TextField
                autoFocus
                margin="dense"
                value={itemSysteme.n}
                onChange={(e) => setitemSysteme({ ...itemSysteme, n: e.target.value })}
                required
                id="n"
                label="n"
                type="decimal"
                helperText='signification de n'
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


        <Card sx={{ width: '75%', marginLeft: '30px', height: '40px', boxShadow: '1px 1px 2px 1px gray' }}>
          <CardContent style={{ marginTop: '-10px' }}>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setopensysteme(!opensysteme)}
            >
              {opensysteme ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            <span>CCV SYSTÈME D'ENERGIE</span>

          </CardContent>
        </Card>
        <Collapse in={opensysteme} timeout="auto" unmountOnExit style={{ marginBottom: '30px' }}>

          <Box sx={{ margin: 1 }}>
            <div style={{ height: 200, width: '90%', marginLeft: '45px' }}>
              <Typography variant="h6" gutterBottom component="div">

                <DeleteIcon color="primary" titleAccess={`supprimer un filtre a air`} onClick={(designa) => {
                  setsysteme(systeme.filter((elt) => !containsObject(elt, selectedsysteme)))
                  setOpenNotif(true);
                  seterrorType('success');
                  setmessage('Suppression effectué avec succes ')
                }
                } />
                <AddCircleIcon color="primary" titleAccess={`Ajouter un systeme d'energie`} style={{ marginLeft: '10px' }} onClick={() => {
                  //handleClickOpen(row.designation);
                  handleClickOpen('systeme');
                  // console.log('fkjskdjflksjldfkjsnvlksdjnvlksjfd')


                }
                } />
              </Typography>
              <DataGrid
                rows={systeme}
                columns={columnsSysteme}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                onSelectionModelChange={(ids) => {
                  const selectedIDs = new Set(ids);
                  const selectedRows = systeme.filter((row) =>
                    selectedIDs.has(row.id),
                    //  console.log('selectedIDs.has(row.id),',)
                  );

                  setselectedsysteme(selectedRows)
                }}
              />
            </div>


          </Box>
        </Collapse>
        {/*  CCV systeme fin *********************************************************************************************************/}
      </div>
    </div>


  )
}
