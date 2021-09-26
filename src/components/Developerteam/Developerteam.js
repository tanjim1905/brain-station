import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Developers from './Developers/Developers';

const Developerteam = () => {
    const [developers, setDevelopers] = useState([]);
    const [hiredDeveloper, setHiredDeveloper] = useState([]);

    useEffect( () => {
        fetch('./developers.json')
        .then(res => res.json())
        .then(data => setDevelopers(data))
    }, [])

    const handleHire = developer => {
        setHiredDeveloper([...hiredDeveloper, developer])
    }
    return (
        <div className="container-fluid main-container">
            <div className="row">
            <div className="col-12 col-lg-9 developerContainer">
            <Developers developers={developers} handleHire={handleHire}></Developers>
            </div>
            <div className="col-10 col-md-6 mx-auto col-lg-3 mt-5 mt-lg-0 cartContainer">
            <Cart hiredDeveloper={hiredDeveloper}></Cart>
            </div>
            </div>
        </div>
    );
};

export default Developerteam;