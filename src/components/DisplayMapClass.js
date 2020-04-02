// src/DisplayMapClass.js
import * as React from 'react';

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
                center: {
                    lat: -33.4282564,
                    lng: -70.6194612,
                    startingPoint: null,
                    endingPoint: null, 
                },
                zoom: 18,
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
        return <div ref = { this.mapRef }
        style = {
            { height: "900px" }
        }
        />;
    }
}
export default DisplayMapClass;