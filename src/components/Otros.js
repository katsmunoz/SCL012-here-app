import React from 'react';
import{Link} from 'react-router-dom';

const Otros = () => {
    return ( 
        <div className="container-fluid">
            <div className="row mt-4 ml-3">
                <Link to= "/Home">
                    <i className="arrow fas fa-arrow-left mr-2"></i>
                </Link>
                <p>Otros filtros</p>
            </div>

        <div className="square">
            <table class="table table-sm">
                <thead>
                    <tr>
                        <td>
                            <i className="gps fas fa-map-marker-alt mr-2"></i>
                        </td>
                        <td className="titulos_otros">Bares</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <i className="gps fas fa-map-marker-alt mr-2"></i>
                        </td>
                        <td className="titulos_otros">Cafeterías</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <i className="gps fas fa-map-marker-alt mr-2"></i>
                        </td>
                        <td className="titulos_otros">Entregas</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <i className="gps fas fa-map-marker-alt mr-2"></i>
                        </td>
                        <td className="titulos_otros">Parques</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <i className="gps fas fa-map-marker-alt mr-2"></i>
                        </td>
                        <td className="titulos_otros">Gimnasios</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <i className="gps fas fa-map-marker-alt mr-2"></i>
                        </td>
                        <td className="titulos_otros">Arte</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <i className="gps fas fa-map-marker-alt mr-2"></i>
                        </td>
                        <td className="titulos_otros">Atracciones</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <i className="gps fas fa-map-marker-alt mr-2"></i>
                        </td>
                        <td className="titulos_otros">Música en vivo</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <i className="gps fas fa-map-marker-alt mr-2"></i>
                        </td>
                        <td className="titulos_otros">Cines</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <i className="gps fas fa-map-marker-alt mr-2"></i>
                        </td>
                        <td className="titulos_otros">Museos</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <i className="gps fas fa-map-marker-alt mr-2"></i>
                        </td>
                        <td className="titulos_otros">Bibliotecas</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <i className="gps fas fa-map-marker-alt mr-2"></i>
                        </td>
                        <td className="titulos_otros">Hoteles</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <i className="gps fas fa-map-marker-alt mr-2"></i>
                        </td>
                        <td className="titulos_otros">Salones de belleza</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <i className="gps fas fa-map-marker-alt mr-2"></i>
                        </td>
                        <td className="titulos_otros">Tintorerías</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <i className="gps fas fa-map-marker-alt mr-2"></i>
                        </td>
                        <td className="titulos_otros">Estacionamientos</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <i className="gps fas fa-map-marker-alt mr-2"></i>
                        </td>
                        <td className="titulos_otros">Gasolineras</td>
                    </tr>
                </thead>
                <td/><td/>
            </table>
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
 
export default Otros;