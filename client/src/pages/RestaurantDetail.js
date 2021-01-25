import React, { Fragment, useState,useEffect } from 'react';
import Header from '../components/Header';
import MenuNavbar from '../components/MenuNavbar';
import '../css/ResturantDetail.css';
import MenuItem from '../components/MenuItem';
import OrderModal from '../components/OrderModal';
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import ReactStars from 'react-stars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin,faHamburger,faPhoneAlt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
const ResturantDetail = ({setOverlay,Resturant:
  {
    ResturantItem
  }
}) => {
  const [ShowModal, setShowModal] = useState(false);
  let history = useHistory();
  let ResturantImage=ResturantItem.headerImage;
  useEffect(() => {
    if(!ResturantItem.category)
    history.push("/")
  }, [])

  return (
    <Fragment>
      {
        ShowModal&&
        <OrderModal
          setOverlay={setOverlay}
          setShowModal={setShowModal}
        />
      }
 
      <div className='' style={{
            height: "380px",
            background: `url("/${ResturantItem.headerImage}") no-repeat center center`,
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
      }}>
        <div className='RestaurantInfo'>
          <span className='title' size='30px'>
            {ResturantItem.name}
          </span>

          <div className='basic-info'>  
            <p><ReactStars
                  count={5}
                  value={ResturantItem.rating}
                  size={24}
                  color2={'#ffd700'} 
                  edit={false}
                  />
            </p>
              <p>
              <span className="Resturant_Icon">
                 <FontAwesomeIcon icon={faHamburger} /> &nbsp;
              </span>
                {ResturantItem.foodType}</p>
          </div>

          <div className='address'>
            <p>
            <span className="Resturant_Icon">
                 <FontAwesomeIcon icon={faMapMarkedAlt} /> &nbsp;
              </span>
              {ResturantItem.address} </p>
            <p>
            <span className="Resturant_Icon">
                 <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp;
              </span>
              {ResturantItem.phone}</p>
      
          </div>
          <div className='address'>
            <p>{ResturantItem.description} </p>
          </div>
        </div>
      </div>{
      ResturantItem.category&&
      <MenuNavbar navlinks={ResturantItem.category} />
     }<div className="my-5">        
      {ResturantItem.category
      &&
      ResturantItem.category.map((item) => {
        return (
          <div id={item.categoryName} className='container'>
            <h3>{item.categoryName}</h3>
            <div className='gridItems'>
              {item.products.map((product) => {
                return <MenuItem product={product}
                setOverlay={setOverlay}
                setShowModal={setShowModal}
                />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  
    </Fragment>
  );
};


const MapStateToProps  = (state,ownProps) =>({
  Resturant:state.Resturant,
  setOverlay:ownProps.setOverlay
});

export default  connect(MapStateToProps,{})(ResturantDetail);
