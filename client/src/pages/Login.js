import React, { Fragment, useEffect } from 'react';
import '../css/Auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginUser, setAuth } from '../actions/AuthAction';
const Login = ({
  Auth: { LoggedInUser, Login_Email, Login_Password },
  LoginUser,
  setAuth,
}) => {
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('token') || LoggedInUser.id) {
      history.push('/');
    }
    // eslint-disable-next-line
  }, [localStorage.getItem('token')]);
  const onChange = (e) => {
    setAuth({
      name: e.target.name,
      value: e.target.value,
    });
  };
  const onSubmit = (e) => {
    LoginUser({
      Login_Email,
      Login_Password,
    });
  };
  return (
    <Fragment>
      <div className='container my-5'>
        <div className='card'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='AuthHeading LoginHeading'>Login</div>
              <form className='mx-5 mt-5'>
                <div className='form-group'>
                  <label className=''>Email</label>
                  <input
                    type='text'
                    className='form-control InputWithIcon'
                    name='Login_Email'
                    onChange={onChange}
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
                    name='Login_Password'
                    onChange={onChange}
                  />
                  <div className='AuthIcon'>
                    <FontAwesomeIcon icon={faLock} />
                  </div>
                </div>
                <div className='form-group'>
                  <button
                    className='btn btn-block btn-primary'
                    type='button'
                    onClick={onSubmit}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12'>
              <img
                alt='food'
                src={require('../assets/Home/Login.svg')}
                className='AuthImage'
              />
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
export default connect(MapStateToProps, { LoginUser, setAuth })(Login);
