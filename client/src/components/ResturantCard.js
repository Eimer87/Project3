import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import {connect} from "react-redux";
import {setResturant} from "../actions/ResturantAction";
import ReactStars from 'react-stars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin,faHamburger, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
const ResturantCard = ({resturantItem,setResturant}) => {
  let history = useHistory();

  return (
    <Fragment>
      <div
        className='card Resturant_Card'
        onClick={() => {
        setResturant({
          name:"ResturantItem",
          value:resturantItem
        })
          history.push('/resturantDetail');
        }}
      >
        <img
          className='Resturant_Image'
          src={require(`../assets/Resturants/${resturantItem.headerImage}`)}
        />
        <div className="Resturant_Content">
            <div className='Resturant_Name'>{resturantItem.name}</div>
            <div className="Resturant_Rating">
            <ReactStars
                      count={5}
                      value={resturantItem.rating}
                      size={24}
                      color2={'#ffd700'} 
                      edit={false}
                      />
            </div>
            <div className='Resturant_Niche'>
              <span className="Resturant_Icon">
                 <FontAwesomeIcon icon={faHamburger} /> &nbsp;
              </span>
              {resturantItem.foodType}</div>
            <div className='Resturant_Address'>
            <span className="Resturant_Icon ">
                 <FontAwesomeIcon icon={faMapMarkedAlt} /> &nbsp;
              </span>
              {resturantItem.address}</div>
          
        </div>
      </div>
    </Fragment>
  );
};
const MapStateToProps = (state,ownProps) =>({
  Resturant:state.Resturant,
  resturantItem:ownProps.resturantItem
})
export default connect(MapStateToProps,{setResturant})(ResturantCard);
