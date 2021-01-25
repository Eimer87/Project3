import React, { Fragment, useState } from 'react';
import '../css/OrderModal.css';
import 'rc-checkbox/assets/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../actions/ResturantAction';
import { connect } from 'react-redux';
const OrderModal = ({
  setOverlay,
  setShowModal,
  Resturant: { CategroyItem, ResturantItem },
  addToCart,
}) => {

  const [counter, setCounter] = useState(1);
  const IncrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    if (counter > 1) setCounter(counter - 1);
  };
  return (
    <Fragment>
      <div className='Modal'>
        <div className='ModalContent'>
          <div
            className='CloseModal'
            onClick={() => {
              setOverlay(false);
              setShowModal(false);
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <img 
          src={require(`../assets/Resturants/${CategroyItem.itemImage}`)}
           className='ModalImage'
           alt="ModalImage"
           />

          <div className='container mb-4'>
            <div className='MenuItemTitle'>{CategroyItem.name}</div>
            <div className='MenuItemTitleDesc'>{CategroyItem.desc}</div>
          </div>

         
          <div className='MenuOption'>
            <div className='MenuItemContainer'>
              <div className='MenuItem_Heading pb-3'>Special Instructions</div>
            </div>
            <div className=''>
              <textarea
                className='form-control'
                placeholder='Enter Special Instructions here'
                rows='4'
              ></textarea>
            </div>
          </div>
        </div>
        <div className='ModalFooter'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-sm-12'>
                <div className='QuantitiyIcons'>
                  <div className='MinusIcon' onClick={decrementCounter}>
                    <FontAwesomeIcon icon={faMinus} />
                  </div>
                  <div className='Quantity'>{counter}</div>
                  <div className='PlusIcon' onClick={IncrementCounter}>
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </div>
              </div>
              <div className='col-lg-8 col-sm-12'>
                <button
                  className='btn btn-success btn-block btn-lg pb-3 mt-1'
                  onClick={() => {
                    addToCart({
                      cartItem: CategroyItem,
                      quantity: counter,
                      resturantId: ResturantItem._id,
                    });
                    setOverlay(false);
                    setShowModal(false);
                  }}
                >
                  Add {counter} to Cart&nbsp; &nbsp; $
                  {CategroyItem.price * counter}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const MapStateToProps = (state, ownProps) => ({
  Resturant: state.Resturant,
  setOverlay: ownProps.setOverlay,
  setShowModal: ownProps.setShowModal,
});
export default connect(MapStateToProps, { addToCart })(OrderModal);
