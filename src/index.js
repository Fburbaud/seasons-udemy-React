import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Spinner from "./Spinner";
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
    // constructor(props){
    //     super(props);
    //     //first method to initialize state with lat and a default value and it's the only time
    //     // we do direct assignment to this.state
    //     this.state = {lat: null, errorMessage: ''};
    // }
    state = {lat: null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}), //success callback
            err => this.setState({errorMessage: err.message})//erreur callback
        );
    }

    //optional method for the conditions is better than put it into the render method
    //especially if we have a common component to all conditions
    renderContent(){
        //conditionnnal rendering
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message="Please accept location request"/>;
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)