import React, {useState} from "react";
import Form from "./components/Form";
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import View from "./components/View";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";
import {AuthContextProvider} from '../src/context/AuthContext'

function App() {
  const [model, setModel] = useState("");
  const [core, setCore] = useState("");
  const [drive, setDrive] = useState("");
  const [year, setYear] = useState("");
  const [system, setSystem] = useState("");
  const [userId, setUserId] = useState("");
  const [make, setMake] = useState("");
  const [serial, setSerial] = useState("");
  const [host, setHost] = useState("");
  const [gen, setGen] = useState("");
  const [ram, setRam] = useState("");
  const [pc, setPc] = useState("");
  const [busVer, setBusVer] = useState("");
  const [purYear, setPurYear] = useState("");
  const getUserIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setUserId(id);
  };
  const props = {
    model,
    setSystem,
    setModel,
    core,
    setCore,
    drive,
    setDrive,
    year,
    setYear,
    system,
    make, 
    setMake,
    serial,
    setSerial,
    host,
    setHost,
    gen, 
    setGen, 
    ram, 
    setRam, 
    pc,
    setPc  ,
    busVer,
    setBusVer,
    purYear,
    setPurYear
  }
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          
            <Route  path='add' element={<Form  
            model ={model} 
            setModel ={setModel} 
            core ={core} 
            setCore ={setCore} 
            drive={drive} setDrive ={setDrive} year = {year} setYear ={setYear} system ={system} setSystem={setSystem} id={userId} setUserId={setUserId} make ={make} setMake={setMake} serial={serial} setSerial={setSerial} host ={host} setHost={setHost}  gen={gen} setGen={setGen} ram={ram} setRam={setRam} pc ={pc} busVer={busVer} purYear={purYear} setPc={setPc} setBusVer={setBusVer} setPurYear={setPurYear} />}/>
            <Route  path='view' element={<View props={props} userId={getUserIdHandler}/>}/>
         
          <Route exact path='sign-up' element={<Signup/>}/>
        </Routes>
      </Router>
    </AuthContextProvider>
    
  );
}

export default App;
