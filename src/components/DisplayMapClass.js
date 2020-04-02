// src/DisplayMapClass.js
import * as React from 'react';
import{Link} from 'react-router-dom';

class DisplayMapClass extends React.Component {
    mapRef = React.createRef();
    state = {
        map: null
    };

    componentDidMount() {
        const H = window.H;
        const platform = new H.service.Platform({
            apikey: "gQ2xoeeDN1C0vXBT6A8Us08CLQj1wsQMAgfQeqlz1oY"
        });

        const defaultLayers = platform.createDefaultLayers();

        const map = new H.Map(
            this.mapRef.current,
            defaultLayers.vector.normal.map, {
                center: { lat: -33.4282564, lng: -70.6194612 },
                zoom: 20,
                pixelRatio: window.devicePixelRatio || 1
            }
        );

        // MapEvents enables the event system
        // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
        // This variable is unused and is present for explanatory purposes
        new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

        // Create the default UI components to allow the user to interact with them
        // This variable is unused
        H.ui.UI.createDefault(map, defaultLayers);

        this.setState({ map });
    }

    componentWillUnmount() {
        this.state.map.dispose();
    }

    render() {
        return (
            <div className="container-fluid square">
            <div className="row">
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline d-flex justify-content-between">
                    <Link to= "/Home">
                        <i className="arrow fas fa-arrow-left"></i>
                    </Link>
                        <p className="col-2 pt-3 weel">Farmacias</p>
                        <input className="form-control col-6 ml-4" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button className="btn btn-outline col-2" type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </nav>
            </div>
            <div ref = { this.mapRef }
                style = { { height: "700px" }}/>

            
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
                

        )
    }


}
export default DisplayMapClass;