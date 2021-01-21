import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setResturant } from '../actions/ResturantAction';
const ResturantCard = ({ resturantItem, setResturant }) => {
  let history = useHistory();

  return (
    <Fragment>
      <div
        className='Resturant_Card'
        onClick={() => {
          setResturant({
            name: 'ResturantItem',
            value: resturantItem,
          });
          history.push('/resturantDetail');
        }}
      >
        <img
          alt='food'
          className='Resturant_Image'
          src={resturantItem.headerImage}
        />
        <div className='Resturant_Name'>{resturantItem.name}</div>
        <div className='Resturant_Niche'>{resturantItem.address}</div>
        <div className='Resturant_Distance'>{resturantItem.deliverytime}</div>
      </div>
    </Fragment>
  );
};
const MapStateToProps = (state, ownProps) => ({
  Resturant: state.Resturant,
  resturantItem: ownProps.resturantItem,
});
export default connect(MapStateToProps, { setResturant })(ResturantCard);
