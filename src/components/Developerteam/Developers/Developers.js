import React from 'react';
import Singledeveloper from './Singeldeveloper/Singledeveloper';

const Developers = (props) => {
    const {developers, handleHire} = props;
    console.log(developers);
    return (
        <div className="developersContainer row row-cols-3 g-2">
            {
                developers.map((developer) => <Singledeveloper key={developer.key}
                developer={developer} handleHire={handleHire}
                ></Singledeveloper>
                
                )
            }
        </div>
    );
};

export default Developers;