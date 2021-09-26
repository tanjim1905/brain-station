import React from 'react';
import './Cart.css';

const Cart = ({hiredDeveloper}) => {
    //calculate total cost for developers
    const totalCost = hiredDeveloper?.reduce((acc,current) => {
        return acc += current?.salary;
    },0)
    return (
        <div className="text-secondary">
            <h3>Developers Added : <span className="text-success">{hiredDeveloper?.length}</span></h3>
            <h3>Total Cost : <span className="text-success">${totalCost}</span></h3>

              {hiredDeveloper && hiredDeveloper.map((developer,index) => (
               <div className="cart d-flex justify-content-around align-items-center border border-1 border-muted py-2" key={index} >
                <h6>{developer.name}</h6>
                <img src={developer.img} alt="dev" className="cartimg" />
                <h6>${developer.salary}</h6>
               </div>
               ))}

            <button className="btn btn-warning px-3 px-lg-4 fw-bold mt-4 d-block mx-auto"><i className="fas fa-cart-plus me-2"></i>Review Hired List</button>
        </div>
    );
};

export default Cart;