import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/Style.css';
import amblem from './amblem.png'

import SignUpPage from './SignUpPage'
import LoginPage from "./LoginPage";
import CitizenApp from "./CitizenApp";
import CityOfficialApp from "./CityOfficialApp";

import CityOfficialMapWrapper from './CityOfficialMapWrapper'
import HistoryWrapper from './HistoryWrapper'
import NewReportWrapper from './NewReportWrapper'
import FieldWorkerApp from "./FieldWorkerApp";
import CityMapWrapper from "./CityMapWrapper";
import ArrivedStatements from "./ArrivedStatements";
import ArrivedReports from "./ArrivedReports";
import Events from "./Events";
import Location from "./Location";
import NewAssignment from "./NewAssignment";

function App() {
    return (
        <Router>
            <div className="app">
                <div className="header">
                    <div className="amblem">
                        <img className="amblem_image" src={amblem} alt="grb Banjaluke"></img>
                    </div>
                    <div className="title">
                        <b>APLIKACIJA ZA PRIJAVU PROBLEMA<br />
                            Grad Banja Luka</b>
                    </div>
                </div>
                <div className="area">
                    <Routes>
                        <Route path="/" exact element={<LoginPage />}></Route>
                        <Route path="/SmartReportSystem/signUp" exact element={<SignUpPage />}></Route>
                        <Route path="/SmartReportSystem/citizenApp" exact element={<CitizenApp />}></Route>
                        <Route path="/SmartReportSystem/citizenApp/cityMap" exact element={<CityMapWrapper />}></Route>
                        <Route path="/SmartReportSystem/citizenApp/history" exact element={<HistoryWrapper />}></Route>
                        <Route path="/SmartReportSystem/citizenApp/newReport" exact element={<NewReportWrapper />}></Route>
                        <Route path="/SmartReportSystem/fieldWorkerApp" exact element={<FieldWorkerApp />}></Route>
                        <Route path="/SmartReportSystem/cityOfficialApp" exact element={<CityOfficialApp />}></Route>
                         <Route path="/SmartReportSystem/cityOfficialApp/cityMap" exact element={<CityOfficialMapWrapper/>}></Route>
                        <Route path="/SmartReportSystem/cityOfficialApp/arrivedReports" exact element={<ArrivedReports/>}></Route> 
                        <Route path="/SmartReportSystem/cityOfficialApp/events" exact element={<Events/>}></Route> 
                        <Route path="/SmartReportSystem/cityOfficialApp/arrivedStatements" exact element={<ArrivedStatements/>}></Route>
                        <Route path="/SmartReportSystem/cityOfficialApp/newAssignment" exact element={<NewAssignment/>}></Route>
                        <Route path="/SmartReportSystem/fieldWorkerApp/location" exact element={<Location/>}></Route> 

                    </Routes>
                </div>
                <div className="footer">ETF Banja Luka - Projektovanje softvera - avgust 2022
                </div>
            </div>
        </Router>
    );
}

export default App;