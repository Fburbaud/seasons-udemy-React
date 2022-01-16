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
        //initialize state with lat and a default value
        this.state = {lat: null};
    }

    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position), //success callback
            (err) => console.log(err) //erreur callback
        );
        return <div>Latitude : {this.state.lat}</div>
    }
}


ReactDOM.render(
    <App />,
    document.querySelector("#root")
)