import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import InfoProject from "./pages/InfoProject";
import Settings from "./pages/Settings";
import LifeCycle from "./pages/LifeCycle";
import Simple from "./pages/Simple";
import Developpe from "./pages/Developpe";
import Save from "./pages/Results";
import Results from "./pages/Results";
import React, { useEffect, useState } from 'react'
import Notfound from "./pages/Notfound";

var todaysDate = new Date();

function convertDate(date) {
  var yyyy = date.getFullYear().toString();
  var mm = (date.getMonth()+1).toString();
  var dd  = date.getDate().toString();

  var mmChars = mm.split('');
  var ddChars = dd.split('');

  return (ddChars[1]?dd:"0"+ddChars[0]) + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + yyyy ;
}

function App() {



  //projet
  const [nom, setnom] = useState('')
  const [constructDate, setconstructDate] = useState(convertDate(todaysDate))
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
  //   console.log('voici le nom', nom)
  //   console.log('voici le constructDate', constructDate)
  //   console.log('voici le constructionArea', constructionArea)
  //   console.log('voici le nature', nature)

  // }, [nom, constructDate, constructionArea, nature])

  // useEffect(() => {
  //   console.log('voici le persistance', persistance)
  //   console.log('voici le actualisation', actualisation)
  //   console.log('voici le actualisationReel', actualisationReel)
  //   console.log('voici le inflation', inflation)

  // }, [persistance, actualisation, actualisationReel, inflation])


  return (

    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<InfoProject checkedDeveloppe={checkedDeveloppe} setcheckedDeveloppe={setcheckedDeveloppe} checkedSimple={checkedSimple} setcheckedSimple={setcheckedSimple}  nom={nom} setnom={setnom} constructDate={constructDate} setconstructDate={setconstructDate} constructionArea={constructionArea} setconstructionArea={setconstructionArea} nature={nature} setnature={setnature} />} />
          <Route path="/settings" element={<Settings actualisation={actualisation} setactualisation={setactualisation} setinflation={setinflation} inflation={inflation} persistance={persistance} setpersistance={setpersistance} actualisationReel={actualisationReel} setactualisationReel={setactualisationReel} />} />
          {/* <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} /> 
          */}
          <Route path="/ccv" element={<LifeCycle />} />
          <Route path="/ccv/simple" element={<Simple persistance={persistance} actualisationReel={actualisationReel} actualisation={actualisation} dementellement={dementellement} setdementellement={setdementellement} utilisation={utilisation} setutilisation={setutilisation} investissement={investissement} setinvestissement={setinvestissement} />} />
          <Route path="/ccv/developpe" element={<Developpe />} />
          <Route path="/results" element={<Results checkedDeveloppe={checkedDeveloppe} checkedSimple={checkedSimple}   nom={nom}  constructDate={constructDate} constructionArea={constructionArea} nature={nature} 
           actualisation={actualisation}  inflation={inflation} persistance={persistance}  actualisationReel={actualisationReel} 
           dementellement={dementellement}  utilisation={utilisation}  investissement={investissement} 
           />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
