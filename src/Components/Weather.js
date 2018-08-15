import React from "react";
class Weather extends React.Component{
    render(){
        return(
            <div>
             {this.props.city && this.props.country && <p> <span className="label">Location: </span><span className="data">{this.props.city} , {this.props.country}</span></p>}
             {this.props.temperature && <p> <span className="label"> Temperature: </span><span className="data">{this.props.temperature}</span></p>}
             {this.props.humidity && <p>  <span className="label">Humidity: </span><span className="data"> {this.props.humidity}</span></p>}
             {this.props.description && <p> <span className="label"> Conditions:</span> <span className="data">{this.props.description}</span></p>}
             {this.props.error && <p><span className="label">{this.props.error}</span></p>}
            </div>

        );
    }
}
export default Weather;