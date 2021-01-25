import React from 'react';
import '../css/ResturantDetail.css';
import {connect} from "react-redux";
import {setResturant} from "../actions/ResturantAction";
const MenuItem = ({ product,setOverlay,setShowModal,setResturant }) => {
  return (
    <div class='MenuItemCard card  col-md-5 m-1 col-sm-12' onClick={()=>{
      setShowModal(true);
      setOverlay(true);
      setResturant({
        name:"CategroyItem",
        value:product
      })
    }}>
      <div class='row '>
        <div class='col-8 px-3 py-2'>
          <div class='card-block'>
            <p>
              <b>{product.name}</b>
            </p>
            <p>{product.desc}</p>
            <p>
              <b>$ {product.price}</b>
            </p>
          </div>
        </div>
        <div class='col-4 p-0'>
          <img

            className="CategoryImage"
            src={require(`../assets/Resturants/${product.itemImage}`)}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default connect(null,{setResturant})(MenuItem);
