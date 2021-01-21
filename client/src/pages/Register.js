import React, { Fragment, useEffect } from 'react';
import '../css/Auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { setAuth, RegisterUser } from '../actions/AuthAction';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
const Register = ({
  Auth: {
    Register_Name,
    Register_Email,
    Register_Password,
    Register_ConfirmPass,
    LoggedInUser,
  },
  setAuth,
  RegisterUser,
}) => {
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('token') || LoggedInUser.id) history.push('/');
    // eslint-disable-next-line
  }, [localStorage.getItem('token')]);
  const onChange = (e) => {
    setAuth({
      name: e.target.name,
      value: e.target.value,
    });
  };
  const onSubmit = (e) => {
    if (Register_Password !== Register_ConfirmPass) {
      Swal.fire({
        icon: 'error',
        title: 'Passwords do not match',
        text: 'Password and Confirm Password do not match',
      });
    }
    RegisterUser({
      Register_Name,
      Register_Email,
      Register_Password,
      Register_ConfirmPass,
    });
  };
  return (
    <Fragment>
      <div className='container my-5'>
        <div className='card'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <img
                alt='food'
                src={require('../assets/Home/Register.svg')}
                className='AuthImage'
              />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='AuthHeading RegisterHeading'>Register</div>
              <form className='mx-5'>
                <div className='form-group'>
                  <label className=''>Name</label>
                  <input
                    type='text'
                    className='form-control InputWithIcon'
                    name='Register_Name'
                    onChange={onChange}
                    value={Register_Name}
                  />
                  <div className='AuthIcon'>
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                </div>
                <div className='form-group'>
                  <label className=''>Email</label>
                  <input
                    type='email'
                    className='form-control InputWithIcon'
                    name='Register_Email'
                    onChange={onChange}
                    value={Register_Email}
                  />
                  <div className='AuthIcon'>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                </div>
                <div className='form-group'>
                  <label className=''>Password</label>
                  <input
                    type='password'
                    className='form-control InputWithIcon'
                    name='Register_Password'
                    onChange={onChange}
                    value={Register_Password}
                  />
                  <div className='AuthIcon'>
                    <FontAwesomeIcon icon={faLock} />
                  </div>
                </div>
                <div className='form-group'>
                  <label className=''>Confirm Password</label>
                  <input
                    type='password'
                    className='form-control InputWithIcon'
                    name='Register_ConfirmPass'
                    onChange={onChange}
                    value={Register_ConfirmPass}
                  />
                  <div className='AuthIcon'>
                    <FontAwesomeIcon icon={faLock} />
                  </div>
                </div>
                <div className='form-group'>
                  <button
                    className='btn btn-block btn-success'
                    onClick={onSubmit}
                    type='button'
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const MapStateToProps = (state) => ({
  Auth: state.Auth,
});
export default connect(MapStateToProps, { setAuth, RegisterUser })(Register);
