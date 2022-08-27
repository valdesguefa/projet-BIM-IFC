import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";

import InfoProject from "./pages/InfoProject";
import Settings from "./pages/Settings";
import LifeCycle from "./pages/LifeCycle";
import Simple from "./pages/Simple";
import Developpe from "./pages/Developpe";
import Save from "./pages/Results";
import Results from "./pages/Results";
import React, { useEffect, useState } from 'react'
import Notfound from "./pages/Notfound";
import AppComp from "./pages/AppComp";
import Externalites from "./pages/Externalites";
import Demmentellement from "./pages/Dementellement";
import Utilisation from "./pages/Utilisation";
import Maintenance from "./pages/Maintenance";
import IfcConfig from "./pages/IfcConfig";
import Debut from "./pages/debut";

var todaysDate = new Date();

function convertDate(date) {
  var yyyy = date.getFullYear().toString();
  var mm = (date.getMonth() + 1).toString();
  var dd = date.getDate().toString();

  var mmChars = mm.split('');
  var ddChars = dd.split('');

  return (ddChars[1] ? dd : "0" + ddChars[0]) + '-' + (mmChars[1] ? mm : "0" + mmChars[0]) + '-' + yyyy;
}

function App() {


  //projet
  const [nom, setnom] = useState('')
  const [constructDate, setconstructDate] = useState('')
  const [constructionArea, setconstructionArea] = useState(0)
  const [nature, setnature] = useState('')
  const [checkedSimple, setcheckedSimple] = useState(false)
  const [checkedDeveloppe, setcheckedDeveloppe] = useState(false)


  //parametre generaux
  const [persistance, setpersistance] = useState(25)
  const [actualisation, setactualisation] = useState(5)
  const [actualisationReel, setactualisationReel] = useState(4)
  const [inflation, setinflation] = useState('')

  //simple
  const [investissement, setinvestissement] = useState(1)
  const [utilisation, setutilisation] = useState(0.03)
  const [dementellement, setdementellement] = useState(0.01)



  // useEffect(() => {
  //   //   console.log('voici le nom', nom)
  //   console.log('voici le constructDate', constructDate)
  //   //   console.log('voici le constructionArea', constructionArea)
  //   //   console.log('voici le nature', nature)

  // }, [constructDate])

  const [showSideBar, setshowSideBar] = useState(false)

  const [showAppBar, setshowAppBar] = useState(false)




  // useEffect(() => {
  //   console.log('voici le checkedSimple', checkedSimple)
  //   console.log('checkedDeveloppe', checkedDeveloppe)
  // }, [checkedDeveloppe, checkedSimple])

  //construction
  const [construction, setconstruction] = useState([])
  const [compose, setcompose] = useState([])
  const [fonction, setfonction] = useState([])
  const [prestation, setprestation] = useState([])

  // React.useEffect(() => {
  //   console.log('props.setconstruction ----', construction);
  //   console.log(' props.setcompose ----', compose);
  //   console.log(' props.setfonction ----', fonction);
  //   console.log('  props.setprestation ----', prestation)
  // }, [construction, compose, fonction, prestation])

  //utilisation
  const [eclairage, seteclairage] = React.useState([])
  const [chauffe, setchauffe] = React.useState([])
  const [filtre, setfiltre] = React.useState([])
  const [equipement, setequipement] = React.useState([])
  const [appareil, setappareil] = React.useState([])
  const [systeme, setsysteme] = React.useState([])

  // React.useEffect(() => {
  //   console.log('props.seteclairage', eclairage);
  //   console.log(' props.setchauffe', chauffe);
  //   console.log(' props.setfiltre', filtre);
  //   console.log('  props.setequipement', equipement)
  //   console.log('  props.setappareil', appareil)
  //   console.log('  props.setsysteme', systeme)
  // }, [eclairage, chauffe, filtre, equipement, appareil, systeme])

  //maintenance et remplacement
  const [constructionMaintenance, setconstructionMaintenance] = useState([])
  const [composeMaintenance, setcomposeMaintenance] = useState([])
  const [fonctionMaintenance, setfonctionMaintenance] = useState([])
  const [prestationMaintenance, setprestationMaintenance] = useState([])

  // React.useEffect(() => {
  //   console.log('props.setconstructionMaintenance', constructionMaintenance);
  //   console.log(' props.setcomposeMaintenance', composeMaintenance);
  //   console.log(' props.setfonctionMaintenance', fonctionMaintenance);
  //   console.log('  props.setprestationMaintenance', prestationMaintenance)
  // }, [constructionMaintenance, composeMaintenance, fonctionMaintenance, prestationMaintenance])

  //dementellement
  const [externalitesDementellement, setexternalitesDementellement] = React.useState([])
  // React.useEffect(() => {
  //   console.log('props.setexternalitesDementellement', externalitesDementellement);
  // }, [externalitesDementellement])


  //externalites
  const [externalites, setexternalites] = React.useState([])

  const [totalProjects, settotalProjects] = React.useState(0)
const [disableSidebar, setdisableSidebar] = React.useState(true)


  return (

    <HashRouter>


      <SideBar showAppBar={showAppBar} disableSidebar={disableSidebar} >
        <Routes>

          <Route path="/" element={<Debut setdisableSidebar={setdisableSidebar}/>} />

          {/* <Route path="/" element={<AppComp />} /> */}
          <Route path="/info" element={<InfoProject setdisableSidebar={setdisableSidebar} setshowAppBar={setshowAppBar} checkedDeveloppe={checkedDeveloppe} setcheckedDeveloppe={setcheckedDeveloppe} checkedSimple={checkedSimple} setcheckedSimple={setcheckedSimple} nom={nom} setnom={setnom} constructDate={constructDate} setconstructDate={setconstructDate} constructionArea={constructionArea} setconstructionArea={setconstructionArea} nature={nature} setnature={setnature} />} />

          <Route path="/settings" element={<Settings setdisableSidebar={setdisableSidebar} checkedDeveloppe={checkedDeveloppe} setshowAppBar={setshowAppBar} actualisation={actualisation} setactualisation={setactualisation} setinflation={setinflation} inflation={inflation} persistance={persistance} setpersistance={setpersistance} actualisationReel={actualisationReel} setactualisationReel={setactualisationReel} />} />

          {/* <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} /> 
          */}
          <Route path="/ccv" element={<LifeCycle />} />

          <Route path="/ccv/simple" element={<Simple setdisableSidebar={setdisableSidebar} setshowAppBar={setshowAppBar} persistance={persistance} actualisationReel={actualisationReel} actualisation={actualisation} dementellement={dementellement} setdementellement={setdementellement} utilisation={utilisation} setutilisation={setutilisation} investissement={investissement} setinvestissement={setinvestissement} />} />

          <Route path="/ccv/developpe/Construction" element={<Developpe setdisableSidebar={setdisableSidebar} setshowAppBar={setshowAppBar} setconstruction={setconstruction} setfonction={setfonction} setcompose={setcompose} setprestation={setprestation} />} />

          {/*
console.log('props.seteclairage', eclairage);
    console.log(' props.setchauffe', chauffe);
    console.log(' props.setfiltre', filtre);
    console.log('  props.setequipement', equipement)
    console.log('  props.setappareil', appareil)
    console.log('  props.setsysteme', systeme)
        */}
        
          <Route path="/ccv/developpe/Utilisation" element={<Utilisation setdisableSidebar={setdisableSidebar} setsysteme={setsysteme} setappareil={setappareil} setequipement={setequipement} setfiltre={setfiltre} setchauffe={setchauffe} seteclairage={seteclairage} setshowAppBar={setshowAppBar} persistance={persistance} actualisation={actualisation} actualisationReel={actualisationReel} />} />

          <Route path="/ccv/developpe/maintenance_remplacement" element={<Maintenance setdisableSidebar={setdisableSidebar} setconstruction={setconstructionMaintenance} setfonction={setfonctionMaintenance} setcompose={setcomposeMaintenance} setprestation={setprestationMaintenance} setshowAppBar={setshowAppBar} persistance={persistance} actualisation={actualisation} actualisationReel={actualisationReel} />} />

          <Route path="/ccv/developpe/Externalite" element={<Externalites setdisableSidebar={setdisableSidebar} setexternalites={setexternalites} setshowAppBar={setshowAppBar} persistance={persistance} actualisation={actualisation} actualisationReel={actualisationReel} />} />

          <Route path="/ccv/developpe/Dementellement" element={<Demmentellement setdisableSidebar={setdisableSidebar} setexternalitesDementellement={setexternalitesDementellement} setshowAppBar={setshowAppBar} persistance={persistance} actualisation={actualisation} actualisationReel={actualisationReel} />} />



          <Route path="/ccv/developpe/ifcConfig" element={<IfcConfig setdisableSidebar={setdisableSidebar} setshowAppBar={setshowAppBar} checkedDeveloppe={checkedDeveloppe} checkedSimple={checkedSimple} nom={nom} constructDate={constructDate} constructionArea={constructionArea} nature={nature}
            actualisation={actualisation} inflation={inflation} persistance={persistance} actualisationReel={actualisationReel}
            dementellement={dementellement} utilisation={utilisation} investissement={investissement}

            compose={compose} fonction={fonction} prestation={prestation}

            constructionMaintenance={constructionMaintenance} fonctionMaintenance={fonctionMaintenance} composeMaintenance={composeMaintenance} prestationMaintenance={prestationMaintenance}

            externalites={externalites}

            externalitesDementellement={externalitesDementellement}

            systeme={systeme} appareil={appareil} equipement={equipement} filtre={filtre} chauffe={chauffe} eclairage={eclairage}
            totalProjects={totalProjects}
          />} />

          <Route path="/results" element={<Results setdisableSidebar={setdisableSidebar} setshowAppBar={setshowAppBar} checkedDeveloppe={checkedDeveloppe} checkedSimple={checkedSimple} nom={nom} constructDate={constructDate} constructionArea={constructionArea} nature={nature}
            actualisation={actualisation} inflation={inflation} persistance={persistance} actualisationReel={actualisationReel}
            dementellement={dementellement} utilisation={utilisation} investissement={investissement}

            construction={construction} compose={compose} fonction={fonction} prestation={prestation}

            constructionMaintenance={constructionMaintenance} fonctionMaintenance={fonctionMaintenance} composeMaintenance={composeMaintenance} prestationMaintenance={prestationMaintenance}

            externalites={externalites}

            externalitesDementellement={externalitesDementellement}

            systeme={systeme} appareil={appareil} equipement={equipement} filtre={filtre} chauffe={chauffe} eclairage={eclairage}
            settotalProjects={settotalProjects}

          />} />

          <Route path="*" element={<Notfound setshowAppBar={setshowAppBar} setdisableSidebar={setdisableSidebar} />} />

        </Routes>
      </SideBar>
    </HashRouter>
  );
}

export default App;
