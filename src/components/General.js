import React from 'react';
import{Link} from 'react-router-dom';
import salud from '../img/salud.png';
import farmacias from '../img/farmacias.png';
import supermercados from '../img/supermercados.png';
import bancos from '../img/bancos.png';
import cajeros from '../img/cajeros.png';
import transporte from '../img/transporte.png';
import restaurantes from '../img/restaurantes.png';
import otros from '../img/otros.png';


const General = () => {

    return ( 
        <div className="container-fluid square">
            <div className="row">
            {/* nav para barrita de búsqueda */}
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline d-flex justify-content-between">
                        <p className="col-2 pt-3 weel">WheelGo</p>
                        <input className="form-control col-6" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button className="btn btn-outline col-2" type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </nav>
            </div>

        {/* div contenedor para cuadrados generales */}
        <div className="container-fluid">

            <div className="row d-flex justify-content-between">

                <div className="regular shadow square_general">
                    <Link to="/Mapa_dos" className="col-12">
                        <img src={salud} className="img-fluid w-50" alt=""/>
                        <span className="d-block titulos">Salud</span>
                    </Link>
                </div>

                <div className="regular shadow square_general">
                    <Link to="/Mapa_dos" className="col-12">
                        <img src={farmacias} className="img-fluid w-50" alt=""/>
                        <span className="d-block titulos">Farmacias</span>
                    </Link>
                </div>
            

           
                <div className="regular shadow square_general">
                    <Link to="/Mapa_dos" className="col-12">
                        <img src={supermercados} className="img-fluid w-50" alt=""/>
                        <span className="d-block titulos">Supermercados</span>
                    </Link>
                </div>

                <div className="regular shadow square_general">
                    <Link to="/Mapa_dos" className="col-12">
                        <img src={bancos} className="img-fluid w-50" alt=""/>
                        <span className="d-block titulos">Bancos</span>
                    </Link>
                </div>
            

           
                <div className="regular shadow square_general">
                    <Link to="/Mapa_dos" className="col-12">
                        <img src={cajeros} className="img-fluid w-50" alt=""/>
                        <span className="d-block titulos">Cajeros Automáticos</span>
                    </Link>
                </div>

                <div className="regular shadow square_general">
                    <Link to="/Mapa_dos" className="col-12">
                        <img src={transporte} className="img-fluid w-50" alt=""/>
                        <span className="d-block titulos">Transporte</span>
                    </Link>
                </div>
            

           
                <div className="regular shadow square_general">
                    <Link to="/Mapa_dos" className="col-12">
                        <img src={restaurantes} className="img-fluid w-50" alt=""/>
                        <span className="d-block titulos">Restaurantes</span>
                    </Link>
                </div>

                <div className="regular shadow square_general"> 
                    <Link to="/Otros" className="col-12">
                        <img src={otros} className="img-fluid w-50" alt=""/>
                        <span className="d-block titulos">Otros</span>
                    </Link>
                </div>
                

                {/* cierre de div contenedor row */}
            </div>


            {/* cierre de div contenedor para cuadrados generales */}
        </div>



            {/* Menú fijo para app */}
            <div className="container-fluid">
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


           {/* div cierre de nav barrita de busqueda  */}
        </div>
     );
}

export default General;