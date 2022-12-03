import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
    return (
        <div className="text-end mt-5 container">
            <Link className="btn btn-outline-primary" to="/login">Log in</Link>
            <Link className="btn btn-outline-primary" to="/logout">Log out</Link>
            <Link className="btn btn-outline-primary" to="/register-passenger">Registration</Link>
            <Link className="btn btn-outline-primary" to="/register-owner">Owner Registration</Link>
            <Link className="btn btn-outline-primary" to="/bus-list">bus list</Link>
            <Link className="btn btn-outline-primary" to="/Card-Punch">CardPunch</Link>
            <Link className="btn btn-outline-primary" to="/stations">stations</Link>
        </div>
    );
};

export default Head;