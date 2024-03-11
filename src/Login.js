import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', {email, password })
            .then(result => {
                console.log(result);
                if(result.data === "Success"){
                  navigate('/home');
                }
                  
            })
            .catch(err => console.log(err));
    };
    

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
            <div className='container-fluid col-lg-4 col-sm-8 col-md-6'>
                <div className='container-fluid__contents'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='card-title'>
                                <h1>Login</h1>
                            </div>
                            <form onSubmit={handleSubmit}>                                
                                <div className='form-group'>
                                    <label htmlFor="email"><h5>Email</h5></label>
                                    <input type="text" autoComplete="off" className='form-control' placeholder='Enter your email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="password"><h5>Password</h5></label>
                                    <input type="text" autoComplete="off" className='form-control' placeholder='Enter your password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <button className='btn btn-primary btn-block' type="submit">Login</button>
                                <div className='row'>
                                    <div className='col'>
                                        <h6>Not a member Already</h6>
                                        <Link to="/register" className='btn btn-light btn-block'>Signup</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
