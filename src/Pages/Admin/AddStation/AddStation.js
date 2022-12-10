import { queryAllByAttribute } from '@testing-library/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import AdminNav from '../AdminNav/AdminNav';

const AddStation = () => {

    const [stationName, setStationName] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const addStation = (e) => {
        e.preventDefault();

        axios.post("http://127.0.0.1:8000/api/add-station", {
            stationName,
            latitude,
            longitude
        }).then(response => {
            console.log(response.data);
            if (response.data === "add success") {
                alert("add success");
            }
        }).catch(error => console.log(error))

    }

    return (
        <div>
            <AdminNav></AdminNav>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <input type="text" value={stationName} onChange={(e) => setStationName(e.target.value)} className="form-control" placeholder="StationName" aria-label="StationName" />
                    </div>
                    <div className="col">
                        <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} className="form-control" placeholder="Latitude" aria-label="Latitude" />
                    </div>
                    <div className="col">
                        <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} className="form-control" placeholder="Longitude" aria-label="Longitude" />
                    </div>
                </div>
                <div>
                    {/* <button type="submit" className="btn btn-primary mt-3 mx-5">Add Another</button> */}
                    <button onClick={addStation} className="btn btn-primary mt-3">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default AddStation;