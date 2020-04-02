import * as React from 'react';

export const DisplayMapFC = () => {
    // Create a reference to the HTML element we want to put the map on
    const mapRef = React.useRef(null);
    /**
     * Create the map instance
     * While `useEffect` could also be used here, `useLayoutEffect` will render
     * the map sooner
     */
    React.useLayoutEffect(() => {
        // `mapRef.current` will be `undefined` when this hook first runs; edge case that
        if (!mapRef.current) return;
        const H = window.H;
        const platform = new H.service.Platform({
            apikey: "6yVV19UnzzAMDFY6p6p_pf-SQXUX2zhWAACXnTVICzA"
        });
        const defaultLayers = platform.createDefaultLayers();
        const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
            center: {
                lat: -33.4282564,
                lng: -70.6194612,
                startingPoint: null,
                endingPoint: null, 
            },
            zoom: 18,
            pixelRatio: window.devicePixelRatio || 1
        });
        new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));
        H.ui.UI.createDefault(hMap, defaultLayers);
        // This will act as a cleanup to run once this hook runs again.
        // This includes when the component un-mounts
        return () => {
            hMap.dispose();
        };
    }, [mapRef]); // This will run this hook every time this ref is updated
    return <div className = "map"
    ref = { mapRef }
    style = {
        { height: "700px" }
    }
    />;
};

export default DisplayMapFC;