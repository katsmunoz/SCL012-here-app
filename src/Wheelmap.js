import React from 'react';
import axios from 'axios';

export class Wheelmap extends React.Component {
    state = {
        wheelmaps: []
    };

    componentDidMount() {
        axios.get(`https://accessibility-cloud.freetls.fastly.net/disruptions.json?appToken=679f9f14fa4d3d2c1d8cbc2640e987d9&includeRelated=equipmentInfo&limit=1`)
            .then(res => {
                console.log(res.data);
                console.log(res.data.features);
                this.setState({ wheelmaps: res.data.features })
            });
    }



    render() {
        return (
            <span>
               {/* This will go through all the elements in arrayFromJson and
               render each one as a <SomeComponent /> with data from the object */}
              {this.state.wheelmaps.map(function(wheelmap) {
                return (
                  <li key={wheelmap.geometry} data={wheelmap}>{wheelmap.geometry.coordinates}</li>
                );
              })}
            </span>
          );
        // return <p>hola</p>
        // return this.state.wheelmaps.map((wheelmap) =>(
        //   <p>{wheelmap.geometry}</p>
        // ));
    }

}

