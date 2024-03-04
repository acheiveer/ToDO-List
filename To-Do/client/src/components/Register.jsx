import React, { useEffect, useState } from 'react'
import { register } from '../services/api.js'
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Header from './partials/Header.jsx';

function Register() {
  const navigation = useNavigate();


  const [from, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const user=localStorage.getItem('user');
    if(user){
      return navigation('/');
    }
  }, []);

  const [errors, seterror] = useState(null);

  const handleInputChange = (e) => {
    setForm({ ...from, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
     const result = await register(from);
    if(result.status===200){
      if(result.data.status===201){
        seterror(result.data.data);
        toast(result.data.message)
        return;
      }
      if(result.data.status===200){
        localStorage.setItem('user', JSON.stringify(result.data.data));
        navigation("/");
        return;
      }
      if(result.data.status===202){
       toast(result.data.message);
        return;
      }
    }
    else{
      toast('Something went wrong, please try again')
      
    }
  }


  return (
    <>
    <Header/>
      <div className='container'>
      <ToastContainer />
        <div className='row justify-content-md-center mt-4'>
          <div className='col-lg-5 card border-primary mb-3'>
            <div className='card-header h4 text-center'>
              Register An Account
            </div>
            <div className='card-body'>

              <div className='form-group'>
                <label className='col-form-label mt-4'>
                  Name
                </label>
                <input type="text" name="name" onChange={handleInputChange} className='form-control' placeholder='Enter Your Name' />
              </div>
              {
                errors?.name && <small id="emailHelp" className="form-text text-danger">
                {errors.name.msg}
              </small>
              }

              <div className='form-group'>
                <label className='col-form-label mt-4'>
                  Username
                </label>
                <input type="text" name="username" onChange={handleInputChange} className='form-control' placeholder='Enter Your Username' />
              </div>
              {
                errors?.username && <small id="emailHelp" className="form-text text-danger">
                {errors.username.msg}
              </small>
              }

              <div className='form-group'>
                <label className='col-form-label mt-4'>
                  Email
                </label>
                <input type="text" name="email" onChange={handleInputChange} className='form-control' placeholder='Enter Your Email' />
              </div>
              {
                errors?.email && <small id="emailHelp" className="form-text text-danger">
                {errors.email.msg}
              </small>
              }

              <div className='form-group'>
                <label className='col-form-label mt-4'>
                  Password
                </label>
                <input type="text" name="password" onChange={handleInputChange} className='form-control' placeholder='Enter Your Password' />
              </div>
              {
                errors?.password && <small id="emailHelp" className="form-text text-danger">
                {errors.password.msg}
              </small>
              }

              <div className='row justify-content-md-center from-group mt-4'>
                <button type='button' onClick={handleSubmit} className='col-sm-6 btn btn-outline-secondary center '>
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Register