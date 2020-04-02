import React, {useState} from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';
import logo from '../img/logo.png';


export default (Registry) =>{

  
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState ('');
    const [password2, setPassword2]= useState ('');

    const firebase = useFirebaseApp();
    const user = useUser();

    const submit= async(e)=>{
        e.preventDefault();

        if(email ==="" && password ===""){
            window.location.href='/Crear_cuenta';
            alert("Por favor ingresa los datos solicitados para registrarte")
        }else{
            
            if(password===password2){
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            window.location.href ='/Home';
            alert("Te has registrado con éxito")

            }else{
                alert("Por favor comprueba que las contraseñas sean iguales")
            }
        }
    }


    return(
        <div>
            {
                !user &&

                <div className="container">
                
                    <div>
                        <img src={logo} className="logo_registry img-fluid" alt=""/>
                    </div>
                    <div className="mt-5 form-group">
                        <label htmlFor="email" className="labels">Email</label>
                        <input className="form-control" type="email" id="email" placeholder="nombre@ejemplo.com" onChange={ (ev)=> setEmail(ev.target.value) } />
                    </div>
                    <div className="mt-2 form-group">
                        <label htmlFor="password" className="labels">Clave</label>
                        <input className="form-control" type="password" id="password" onChange={ (ev)=> setPassword(ev.target.value) } />
                     </div>
                     <div className="mt-2 form-group">
                        <label htmlFor="password" className="labels">Confirme clave</label>
                        <input className="form-control" type="password" id="password2" onChange={ (ev)=> setPassword2(ev.target.value) } />
                    </div>
                    <button className="btn btn_registry col-12" onClick={submit}>Regístrate</button>
                    
                </div>
                
            }
            
        </div>
    );
}

