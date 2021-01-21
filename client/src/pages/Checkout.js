import React, { Fragment, useState } from 'react';
import '../css/Checkout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faCalendar,
  faCalendarAlt,
  faCheck,
  faCreditCard,
  faMapMarkerAlt,
  faPencilAlt,
  faPhoneAlt,
  faUser,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { setCheckout, createOrder } from '../actions/CheckoutAction';
import { clearCart } from '../actions/ResturantAction';
// import { LoginUser } from '../actions/AuthAction';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
const Checkout = ({
  Resturant: { Cart, products },
  Auth: { LoggedInUser },
  Checkout: { Location, Mobile, Account, Month, Year, CVC },
  setCheckout,
  createOrder,
  clearCart,
}) => {
  let SubTotal = 0;
  let Total = 0;
  let history = useHistory();
  const [ShippingAddress, setShippingAddres] = useState(false);
  const [Payment, setPayment] = useState(false);
  const onChange = (e) => {
    setCheckout({
      name: e.target.name,
      value: e.target.value,
    });
  };
  const validateMobile = (mobile) => {
    var phoneno = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (mobile.match(phoneno)) {
      return true;
    } else {
      return false;
    }
  };

  const validateCard = (creditCard) => {
    var phoneno = /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/;
    if (creditCard.match(phoneno)) {
      return true;
    } else {
      return false;
    }
  };
  const handleOrder = async () => {
    let response = await createOrder({
      userId: LoggedInUser.id,
      Location,
      Mobile,
      Account,
      Month,
      Year,
      CVC,
      products,
    });
    if (response) {
      Swal.fire({
        icon: 'success',
        title: 'Order Placed',
        text: 'Thank You! Your order has been placed',
      });

      clearCart();
      history.push('/');
    }
  };
  return (
    <Fragment>
      <div className='container'>
        <div className='card my-5'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='CheckoutText'>Checkout</div>
              <div className='container px-5 CheckoutContainer'>
                <div className='Checkout p-3 mt-4'>
                  <div className='Checkout_Heading'>User Checkout</div>
                  <div className='Checkout_Item mt-3'>
                    <FontAwesomeIcon icon={faUser} />
                    &nbsp; <span> {LoggedInUser.name}</span>
                  </div>
                  <div className='Checkout_Item'>
                    <FontAwesomeIcon icon={faAt} />
                    &nbsp; <span> {LoggedInUser.email}</span>
                  </div>
                </div>
                <div className='Checkout p-3 mt-4'>
                  <div className='Checkout_Heading Heading_Edit'>
                    <span>Shipping Address</span>
                    {ShippingAddress && (
                      <div
                        className='EditIcon'
                        onClick={() => setShippingAddres(false)}
                      >
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </div>
                    )}
                  </div>
                  <div className='Checkout_Item'>
                    {ShippingAddress ? (
                      <Fragment>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        &nbsp; <span>{Location}</span>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control InputWithIcon'
                            placeholder='Enter Location'
                            name='Location'
                            onChange={onChange}
                            value={Location}
                          />
                          <div className='CheckoutIcon'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                          </div>
                        </div>
                      </Fragment>
                    )}
                  </div>
                  <div className='Checkout_Item'>
                    {ShippingAddress ? (
                      <Fragment>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        &nbsp; <span> {Mobile}</span>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control InputWithIcon'
                            placeholder='Enter Mobile Phone (+923230551237)'
                            name='Mobile'
                            // pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                            onChange={onChange}
                            value={Mobile}
                          />
                          <div className='CheckoutIcon'>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                          </div>
                        </div>
                        <div
                          className='DoneButton'
                          onClick={() => {
                            if (Location === '') {
                              Swal.fire({
                                icon: 'error',
                                title: 'Location is Required',
                                text:
                                  'Location is Required to deliver the Food',
                              });
                              return;
                            }
                            if (Mobile === '') {
                              Swal.fire({
                                icon: 'error',
                                title: 'Mobile Phone is Required',
                                text:
                                  'Mobile Phone is Required to Contact the receiver',
                              });
                              return;
                            }
                            if (!validateMobile(Mobile)) {
                              Swal.fire({
                                icon: 'error',
                                title: 'Invalid Mobile Phone',
                                text: 'Mobile Phone is Invalid',
                              });
                              return;
                            }

                            setShippingAddres(true);
                          }}
                        >
                          <button className='btn btn-success'>
                            <FontAwesomeIcon icon={faCheck} /> &nbsp; Done
                          </button>
                        </div>
                      </Fragment>
                    )}
                  </div>
                </div>
                <div className='Checkout p-3 mt-4 mb-1'>
                  <div className='Checkout_Heading Heading_Edit'>
                    <span>Payment</span>
                    {Payment && (
                      <div
                        className='EditIcon'
                        onClick={() => setPayment(false)}
                      >
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </div>
                    )}
                  </div>
                  {Payment ? (
                    <Fragment>
                      <div className='Checkout_Item'>
                        <FontAwesomeIcon icon={faCreditCard} />
                        &nbsp;
                        <div className='Card_Details'>
                          <span> {Account}</span>
                          <span>
                            {' '}
                            {Month}/{Year}
                          </span>
                          <span> {CVC}</span>
                        </div>
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control InputWithIcon'
                          placeholder='Enter Account Number'
                          name='Account'
                          onChange={onChange}
                          value={Account}
                        />
                        <div className='CheckoutIcon'>
                          <FontAwesomeIcon icon={faUserAlt} />
                        </div>
                      </div>
                      <div className='form-group'>
                        <div className='row'>
                          <div className='col'>
                            <input
                              type='text'
                              className='form-control InputWithIcon'
                              placeholder='Expiry Month'
                              name='Month'
                              onChange={onChange}
                              value={Month}
                            />
                            <div className='CheckoutIcon ExpiryIcon'>
                              <FontAwesomeIcon icon={faCalendar} />
                            </div>
                          </div>
                          <div className='col'>
                            <input
                              type='text'
                              className='form-control InputWithIcon'
                              placeholder='Expiry Year'
                              name='Year'
                              onChange={onChange}
                              value={Year}
                            />
                            <div className='CheckoutIcon ExpiryIcon'>
                              <FontAwesomeIcon icon={faCalendarAlt} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control InputWithIcon'
                          placeholder='Enter CVC'
                          name='CVC'
                          onChange={onChange}
                          value={CVC}
                        />
                        <div className='CheckoutIcon'>
                          <FontAwesomeIcon icon={faUserAlt} />
                        </div>
                      </div>
                      <div
                        className='DoneButton'
                        onClick={() => {
                          if (Account === '') {
                            Swal.fire({
                              icon: 'error',
                              title: 'Account Number is Required',
                            });
                            return;
                          }
                          if (Month === '') {
                            Swal.fire({
                              icon: 'error',
                              title: 'Expiry Month is Required',
                            });
                            return;
                          }
                          if (Year === '') {
                            Swal.fire({
                              icon: 'error',
                              title: 'Expiry Year is Required',
                            });
                            return;
                          }
                          if (CVC === '') {
                            Swal.fire({
                              icon: 'error',
                              title: 'CVC',
                              text: 'CVC is required',
                            });
                            return;
                          }
                          if (!validateCard(Account)) {
                            Swal.fire({
                              icon: 'error',
                              title: 'Wrong Credit Card Number',
                              text: 'Credit Card Number is invalid',
                            });
                            return;
                          }

                          setPayment(true);
                        }}
                      >
                        <button className='btn btn-success'>
                          <FontAwesomeIcon icon={faCheck} /> &nbsp; Done
                        </button>
                      </div>
                    </Fragment>
                  )}
                </div>
                <div className='SubTotal_Container'>
                  <div className='SubTotal_Heading'>SubTotal</div>
                  <div className='SubTotal_Heading'>
                    {Cart.map((cart, index) => {
                      SubTotal += cart.cartItem.price;
                      if (index === Cart.length - 1)
                        return <div>${SubTotal}</div>;
                      return null;
                    })}
                  </div>
                </div>
                <div className='SubTotal_Container'>
                  <div className='SubTotal_Heading'>Taxes</div>
                  <div className='SubTotal_Heading'>Free</div>
                </div>

                <div className='Total_Container pb-3 '>
                  <div className='Total_Heading'>Total</div>
                  <div className='Total_Heading'>
                    {Cart.map((cart, index) => {
                      Total += cart.cartItem.price;
                      if (index === Cart.length - 1) return <div>${Total}</div>;
                      return null;
                    })}
                  </div>
                </div>
                <button
                  type='button'
                  className='btn btn-primary btn-block mb-3'
                  onClick={handleOrder}
                >
                  Checkout
                </button>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='ImageSection'>
                <div className='row'>
                  {Cart.map((cart) => {
                    return (
                      <Fragment>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                          <div className='CheckoutItem'>
                            <img
                              alt='food'
                              src={cart.cartItem.itemImage}
                              className='CheckoutImage'
                            />
                            <div className='CheckoutItem_Name'>
                              {cart.cartItem.name}
                            </div>
                            <div className='CheckoutItem_Amount'>
                              ${cart.cartItem.price * cart.quantity}
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const MapStateToProps = (state) => ({
  Resturant: state.Resturant,
  Auth: state.Auth,
  Checkout: state.Checkout,
});
export default connect(MapStateToProps, {
  setCheckout,
  createOrder,
  clearCart,
})(Checkout);
