import React, { Fragment, useState, useEffect } from 'react';
// import Header from '../components/Header';
import MenuNavbar from '../components/MenuNavbar';
import '../css/ResturantDetail.css';
import MenuItem from '../components/MenuItem';
import OrderModal from '../components/OrderModal';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
// let HeaderImage =
//   'https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';
const ResturantDetail = ({ setOverlay, Resturant: { ResturantItem } }) => {
  const [ShowModal, setShowModal] = useState(false);
  let history = useHistory();
  useEffect(() => {
    if (!ResturantItem.category) history.push('/');
    // eslint-disable-next-line
  }, []);
  // let category = [
  //   {
  //     id: 1,
  //     categoryName: 'Fast',
  //     products: [
  //       {
  //         name: 'Medium Iced Mocha',
  //         price: 3.5,
  //         desc:
  //           'crispy bacon, chilli jam, cheddar, gherkins, tomato ketchup,baco',
  //         itemImage:
  //           'https://images.unsplash.com/photo-1588419411826-cab44f3cdcc8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=80',
  //       },
  //       {
  //         name: 'Burger 1',
  //         price: 3.5,
  //         desc:
  //           'crispy bacon, chilli jam, cheddar, gherkins, tomato ketchup,baco',
  //         itemImage:
  //           'https://images.unsplash.com/photo-1606736692995-d03f14de3d3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
  //       },
  //       {
  //         name: 'Burger 2',
  //         price: 3.5,
  //         desc:
  //           'crispy bacon, chilli jam, cheddar, gherkins, tomato ketchup,baco',
  //         itemImage:
  //           'https://images.unsplash.com/photo-1550950158-d0d960dff51b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  //       },
  //       {
  //         name: 'Burger 3',
  //         price: 3.5,
  //         desc:
  //           'crispy bacon, chilli jam, cheddar, gherkins, tomato ketchup,baco',
  //         itemImage:
  //           'https://images.unsplash.com/photo-1572448862527-d3c904757de6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     categoryName: 'Drinks',
  //     products: [
  //       {
  //         name: 'Medium Iced Mocha',
  //         price: 3.5,
  //         desc:
  //           'crispy bacon, chilli jam, cheddar, gherkins, tomato ketchup,baco',
  //         itemImage:
  //           'https://images.unsplash.com/photo-1588419411826-cab44f3cdcc8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=80',
  //       },
  //       {
  //         name: 'Burger 1',
  //         price: 3.5,
  //         desc:
  //           'crispy bacon, chilli jam, cheddar, gherkins, tomato ketchup,baco',
  //         itemImage:
  //           'https://images.unsplash.com/photo-1606736692995-d03f14de3d3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
  //       },
  //       {
  //         name: 'Burger 2',
  //         price: 3.5,
  //         desc:
  //           'crispy bacon, chilli jam, cheddar, gherkins, tomato ketchup,baco',
  //         itemImage:
  //           'https://images.unsplash.com/photo-1550950158-d0d960dff51b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  //       },
  //       {
  //         name: 'Burger 3',
  //         price: 3.5,
  //         desc:
  //           'crispy bacon, chilli jam, cheddar, gherkins, tomato ketchup,baco',
  //         itemImage:
  //           'https://images.unsplash.com/photo-1572448862527-d3c904757de6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     categoryName: 'Icecream',
  //     products: [
  //       {
  //         name: 'Medium Iced Mocha',
  //         price: 3.5,
  //         desc:
  //           'crispy bacon, chilli jam, cheddar, gherkins, tomato ketchup,baco',
  //         itemImage:
  //           'https://images.unsplash.com/photo-1588419411826-cab44f3cdcc8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=80',
  //       },
  //       {
  //         name: 'Burger 1',
  //         price: 3.5,
  //         desc:
  //           'crispy bacon, chilli jam, cheddar, gherkins, tomato ketchup,baco',
  //         itemImage:
  //           'https://images.unsplash.com/photo-1606736692995-d03f14de3d3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
  //       },
  //       {
  //         name: 'Burger 2',
  //         price: 3.5,
  //         desc:
  //           'crispy bacon, chilli jam, cheddar, gherkins, tomato ketchup,baco',
  //         itemImage:
  //           'https://images.unsplash.com/photo-1550950158-d0d960dff51b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  //       },
  //       {
  //         name: 'Burger 3',
  //         price: 3.5,
  //         desc:
  //           'crispy bacon, chilli jam, cheddar, gherkins, tomato ketchup,baco',
  //         itemImage:
  //           'https://images.unsplash.com/photo-1572448862527-d3c904757de6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  //       },
  //     ],
  //   },
  // ];
  return (
    <Fragment>
      {ShowModal && (
        <OrderModal setOverlay={setOverlay} setShowModal={setShowModal} />
      )}

      <div
        className=''
        style={{
          height: '380px',
          background: `url(${ResturantItem.headerImage}) no-repeat center center`,
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className='RestaurantInfo'>
          <span className='title' size='30px'>
            {ResturantItem.name}
          </span>

          <div className='basic-info'>
            <p>$ &middot;15</p>
            <p>{ResturantItem.deliverytime} Delivery Fee</p>
          </div>

          <div className='address'>
            <p>{ResturantItem.address} </p>
          </div>
        </div>
      </div>
      {ResturantItem.category && (
        <MenuNavbar navlinks={ResturantItem.category} />
      )}
      <div className='my-5'>
        {ResturantItem.category &&
          ResturantItem.category.map((item) => {
            return (
              <div id={item.categoryName} className='container'>
                <h3>{item.categoryName}</h3>
                <div className='gridItems'>
                  {item.products.map((product) => {
                    return (
                      <MenuItem
                        product={product}
                        setOverlay={setOverlay}
                        setShowModal={setShowModal}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

const MapStateToProps = (state, ownProps) => ({
  Resturant: state.Resturant,
  setOverlay: ownProps.setOverlay,
});

export default connect(MapStateToProps, {})(ResturantDetail);
