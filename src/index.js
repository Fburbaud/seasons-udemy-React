import React from "react";
import ReactDOM from "react-dom";

//function component style:
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position), //success callback
//         (err) => console.log(err) //erreur callback
//     );

//     return <div>Latitude : </div>
// };

//class component style:
class App extends React.Component{
    constructor(props){
        super(props);
        //initialize state with lat and a default value and it's the only time
        // we do direct assignment to this.state
        this.state = {lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //we called setState
                this.setState({lat : position.coords.latitude});
            }, //success callback
            (err) => {
                this.setState({errorMessage: err.message});
            } //erreur callback
        );
    }

    render() {
        //conditionnnal rendering
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }
        return <div>Loading!</div>
    }
}


ReactDOM.render(
    <App />,
    document.querySelector("#root")
)