import React, { useEffect, useState, useMemo, useRef } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet'
import Event from "./Event";
import configuration from './configuration.json'
import mapImg from './map.png'
import historyImg from './history.png'
import assignmentImg from './assignment2.png'
import logoutImg from './logout.png'
import eventImg from './event.png'
import plusimg from './plus.png'
import './styles/CityOfficialApp.css';

function Events() {

  const temp = useLocation();
  const [username, changeUsername] = useState("guest")
  const [password, changePassword] = useState("guest")
  const [id, changeId] = useState(-1)
  const [data, changeData] = useState(null)
  const [title, changeTitle] = useState("")
  const [desc, changeDesc] = useState("")
  const [type, changeType] = useState("")
  const [message, changeMessage] = useState("")
  const [coord, changeCoord] = useState({ x: 0, y: 0 })
  const [position, setPosition] = useState([44.78798121640895, 17.201115245677336])
  const navigate = useNavigate();

  useEffect(() => {
    if (temp.state !== null) {
      changeUsername(temp.state.username);
      changePassword(temp.state.password);
      changeId(temp.state.id)
    }
  }, [])

  useEffect(() => {
    if (id !== -1) {
      var credentials = btoa(username + ":" + password)
      axios.get(configuration.serverBaseURL + "/events",
        { headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + credentials } }).then((response) => {
          changeData(response.data)
          console.log(data);
        }).catch((error) => {
        })
    }
  }, [id])

  const logout = () => {
    changeUsername("guest")
    changePassword("guest");
    changeId(-1);
    navigate('/SmartReportSystem')
  }

  function map_click() {
    console.log(username)
    navigate('/SmartReportSystem/cityOfficialApp/cityMap', { state: { username: username, password: password, id: id } })
  }
  function reports_click() {
    navigate('/SmartReportSystem/cityOfficialApp/arrivedReports', { state: { username: username, password: password, id: id } })
  }
  function arrived_click() {
    navigate('/SmartReportSystem/cityOfficialApp/arrivedStatements', { state: { username: username, password: password, id: id } })
  }
  function events_click() {
    navigate('/SmartReportSystem/cityOfficialApp/events', { state: { username: username, password: password, id: id } })
  }
  const [newEvent, change] = useState("false");

  const addNewEvent_click = () => {
    change(!newEvent)
  }
  const titleChange = event => {
    changeTitle(event.target.value)
  }
  const infoChange = event => {
    changeDesc(event.target.value)
  }
  const typeChange = event => {
    changeType(event.target.value)
  }
  const add = () => {

    if (title !== "" && desc !== "" && type !== "") {
      var credentials = btoa(username + ":" + password)
      axios.post(configuration.serverBaseURL + "/events",
        {
          "type": type,
          "description": desc,
          "title": title,
          "creator": id,
          "x": coord.x,
          "y": coord.y
        }
        ,
        { headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + credentials } }).then((response) => {
          changeMessage("Poslato!")

        }).catch((error) => {
          changeMessage("Problem sa serverom!")
        })
    }
    else
      changeMessage("Morate unijeti sve podatke!")

  }

  const polygon = [
    [44.8726118, 17.2588105],
    [44.8689621, 17.2461076],
    [44.8621487, 17.2385545],
    [44.8606886, 17.2323747],
    [44.8541176, 17.2303148],
    [44.8511969, 17.2200151],
    [44.8463288, 17.2158952],
    [44.8448683,
      17.210402],
    [44.8397562, 17.2100587],
    [44.8380521,
      17.200789], [44.832209,
      17.1966691], [44.8307481, 17.1846528],
    [44.8149196, 17.1908326],
    [44.8119969, 17.1801896],
    [44.8078562, 17.1867128],
    [44.7981123, 17.1846528],
    [44.7983559,
      17.16783], [44.8059076, 17.1654268],
    [44.8039589, 17.1592469],
    [44.7990867, 17.1568437],
    [44.7942142,
      17.16886], [44.7883667, 17.1637101],
    [44.7932397, 17.1537538],
    [44.7676518, 17.1609636],
    [44.7620453, 17.1578737],
    [44.7608264, 17.1637101],
    [44.7557069, 17.1637101],
    [44.7544879, 17.1568437],
    [44.7493678, 17.1527238],
    [44.744491,
      17.1489473], [44.7271754, 17.1530671],
    [44.7266875, 17.1619935],
    [44.7318097, 17.1623369],
    [44.7435156, 17.1551271],
    [44.7481486, 17.1623369],
    [44.7464418, 17.1788163],
    [44.750343,
      17.1829362], [44.7483924, 17.1894594],
    [44.7547317, 17.1966691],
    [44.7505869, 17.2313447],
    [44.7454664, 17.2392411],
    [44.751806,
      17.255034], [44.750343,
      17.2673936], [44.7376629, 17.2800966],
    [44.7415648, 17.2821565],
    [44.747661,
      17.2739167], [44.7547317,
      17.265677], [44.7544879, 17.2567506],
    [44.7591199,
      17.256064], [44.7700892, 17.2471376],
    [44.7752075, 17.2344346],
    [44.7795942,
      17.233748], [44.7769135, 17.2402711],
    [44.7815438, 17.2481675],
    [44.7771572,
      17.254004], [44.785199,
      17.2526307], [44.7886103, 17.2423311],
    [44.7932397, 17.2416444],
    [44.7939706, 17.2344346],
    [44.7961633, 17.2282548],
    [44.8010356, 17.2310014],
    [44.8078562, 17.2241349],
    [44.8127276, 17.2227617],
    [44.8212515, 17.2241349],
    [44.8256347, 17.223105],
    [44.8353741, 17.2244783],
    [44.8446249, 17.2399278],
    [44.8487629, 17.2461076],
    [44.8643388, 17.2529741],
    [44.8679888, 17.2598405],
    [44.8726118, 17.2588105],
  ]
  const limeOptions = { color: 'lime' }

  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          const pos = marker.getLatLng()
          setPosition([pos.lat, pos.lng])
          changeCoord({ x: pos.lat, y: pos.lng })
        }
      },
    }),
    [],
  )

  return (
   
    <div className="mainArea">
      <div className="menu1">
        <div className="buttonDiv">
          <button className="menu_button" onClick={map_click}><img src={mapImg} alt="report" className="menu_button_img" /></button>
          <div className="button_label">Mapa grada</div>
        </div>
        <div className="buttonDiv">
          <button className="menu_button" onClick={reports_click}><img src={assignmentImg} alt="report" className="menu_button_img" /></button>
          <div className="button_label">Pristigle prijave</div>
        </div>
        <div className="buttonDiv">
          <button className="menu_button" onClick={arrived_click}><img src={historyImg} alt="report" className="menu_button_img" /></button>
          <div className="button_label">Zadaci i izvještaji</div>
        </div>
        <div className="buttonDiv">
          <button className="menu_button" onClick={events_click}><img src={eventImg} alt="report" className="menu_button_img" /></button>
          <div className="button_label">Dešavanja</div>
        </div>
        <div className="buttonDiv">
          <button className='menu_button' onClick={logout}><img className="menu_button_img" src={logoutImg} alt="logout"></img></button>
          <div className="button_label">Kraj</div>
        </div>
      </div>
      <div id="contentArea" className="contentArea">
        <div className="eventsDiv">

          {newEvent === true ?
            <div className='newEventExtended'>
              <button className="newEventBtn2" id="button2" onClick={addNewEvent_click}>Povratak</button>
              <textarea className="eventTitle" placeholder='Naziv dešavanja' onChange={titleChange}></textarea>
              <textarea className="eventInfo" placeholder='Informacije o dešavanju' onChange={infoChange}></textarea>
              <div className="mapAreaPick">
                <MapContainer center={[44.78798121640895, 17.201115245677336]} zoom={12} scrollWheelZoom={true} style={{ width: '100%', minHeight: '100%', margin: '0px' }}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Polygon pathOptions={limeOptions} positions={polygon}></Polygon>
                  <Marker
                    draggable={true}
                    eventHandlers={eventHandlers}
                    position={position}
                    ref={markerRef}>
                  </Marker>
                </MapContainer>

              </div>
              <div className="infoMsgDiv">{message}</div>
              <div className='helpDiv'>
                <select name="markerType" id="type" className="combo" onChange={typeChange}>
                  <option value="INFORMACIJE">INFORMACIJE</option>
                  <option value="RADOVI">RADOVI</option>
                  <option value="OPASNOST">OPASNOST</option>
                </select>
                <button className="newEventBtn2" id="submitId" onClick={add}>Dodaj dešavanje</button>
              </div>
            </div>
            :
            <div className="newEvent">
              <button className="newEventBtn" onClick={addNewEvent_click}><img src={plusimg} className="plusImg" alt="plus" /></button>
              <div className="labelForNewEventBtn">Kreiraj</div>
            </div>
          }
          { data && data.map((event) => {
            return <Event username={username} password={password} id={id} event={event} />
          })}
        </div>
      </div>
    </div>
  );
}

export default Events;
