import React from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';
import{Link} from 'react-router-dom';

const Ajustes = () => {

    const firebase = useFirebaseApp();
    const user = useUser();

    const logout = async()=>{ 
    await firebase.auth().signOut()
    }




    return ( 
        <div className="container-fluid">
            <div className="row mt-4 ml-3">
                <Link to= "/Home">
                    <i className="arrow fas fa-arrow-left mr-2"></i>
                </Link>
                <p>Ajustes</p>
            </div>

            <div className="mt-2">
                <p>Usuario</p>
            </div>
            <div>
                <p className="subtitulos mb-0">Perfil usuario</p>
            </div>
            <div className="mb-3">
                {user &&
                <Link to= "/">
                    <a href onClick={logout} className="cerrar_sesion">Cerrar sesión</a>
                </Link>
                }
            </div>
            <div>
                <p>Contribuir</p>
            </div>
            <div>
                <p className="subtitulos mb-0">Escribe algún comentario</p>
            </div>
            <div>
                <p className="subtitulos">Sube una foto</p>
            </div>
            <div>
                <p>General</p>
            </div>
            <div>
                <p className="subtitulos mb-0">Idioma y región</p>
            </div>
            <div>
                <p className="subtitulos">Activar modo oscuro</p>
            </div>

            {/* Menú fijo para app */}
            <div className="container">
                <div className="row d-flex justify-content-around mt-3 mb-2 menu pt-3 pr-4">

                    <Link to="/Home">
                        <div className="icons">
                            <i className="icono_menu fas fa-map-marker-alt"></i>
                            <p className="titulo_menu">Explorar</p>
                        </div>
                    </Link>

                    <div className="icons">
                        <i className="icono_menu fas fa-star"></i>
                        <p className="titulo_menu">Favoritos</p>
                    </div>

                    <Link to="/Ajustes">
                        <div className="icons">
                            <i className="icono_menu fas fa-cog"></i>
                            <p className="titulo_menu">Ajustes</p>
                        </div>
                    </Link>

                </div>
            </div>

        </div>
     );
}
 
export default Ajustes;