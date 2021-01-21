import React, { Fragment } from 'react';
import '../css/Header.css';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { LogOut } from '../actions/AuthAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Header = ({ Auth: { LoggedInUser }, Resturant: { Cart }, LogOut }) => {
  let history = useHistory();
  return (
    <Fragment>
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link className='navbar-brand' to='/'>
              Dost
              <span className='green'>ava</span>
            </Link>
            <div className='AuthContainer'>
              <button
                type='button'
                className='btn btn-danger mr-2 CartButton'
                onClick={() => {
                  if (localStorage.getItem('token')) {
                    history.push('/checkout');
                  } else {
                    history.push('/login');
                  }
                }}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                &nbsp; Cart
              </button>
              <span className='NumberOfItems'>{Cart.length}</span>
              {localStorage.getItem('token') ? (
                <Fragment>
                  <div></div>
                  <button
                    className='btn btn-outline-primary'
                    onClick={() => {
                      LogOut();
                      history.push('/');
                    }}
                  >
                    Logout
                  </button>
                </Fragment>
              ) : (
                <Fragment>
                  <button
                    type='button'
                    className='btn btn-success'
                    onClick={() => history.push('/register')}
                  >
                    Register
                  </button>
                  <button
                    type='button'
                    className='btn btn-outline-primary ml-3'
                    onClick={() => history.push('/login')}
                  >
                    Login
                  </button>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
const MapStateToProps = (state) => ({
  Auth: state.Auth,
  Resturant: state.Resturant,
});
export default connect(MapStateToProps, { LogOut })(Header);
