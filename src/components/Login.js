import React, {useState} from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';
import{Link} from 'react-router-dom';
import logo from '../img/logo.png';

export default (Login) =>{
    
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState ('');

    const firebase = useFirebaseApp();
    const user = useUser();
    console.log(user)
    const login = async(e)=>{
    e.preventDefault();

        if(email ==="" && password ===""){
            window.location.href='/';
            alert("Por favor ingresa tu email y contraseña para iniciar sesión")
        }else{    
        await firebase.auth().signInWithEmailAndPassword(email,password)
        window.location.href ='/Home';
        }
    }

    return(
        <div>
            { 
                !user && 
            <div className="container">
                
                <div>
                    <img src={logo} className="logo_login img-fluid" alt=""/>
                </div>
                    <div className="mt-5 form-group">
                    
                        <input className="form-control" type="email" id="email" name="correo" placeholder="Email" onChange={ (ev)=> setEmail(ev.target.value) } />
                    </div>

                    <div className="mt-2 form-group">
                        
                        <input className="form-control" type="password" id="password" name="pass" placeholder="******" onChange={ (ev)=> setPassword(ev.target.value) } />
                    </div>

                        
                        <button className="btn btn_registry col-12" onClick={login} type="submit">Iniciar sesión</button>
                        <div><label className="d-block text-center labels_login">¿Olvidó su clave? Click Aquí</label></div>

                        <div className="mt-4 row">
                            <hr className="col-2"/><label className="col-4 text-center labels_login">O ingresa con</label><hr className="col-2"/>
                        </div>
                        
                            <div className="row">
                                <label htmlFor="" className="col-4"/>
                                <button className="btn_google d-block text-center btn btn_registry col-4" type="submit"><i className="fab fa-google-plus-g"></i>Google</button><label htmlFor="" className="col-4"/>
                            </div>
                        

                        <div><label className="mt-4 d-block text-center labels_login">Si aún no tienes cuenta</label></div>
                        <Link to="/Crear_cuenta"><button className="btn btn_registry col-12">Regístrate</button></Link>
             </div>  
            }

        </div>
        
        );
    }





