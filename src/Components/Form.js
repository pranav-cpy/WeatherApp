import React from "react";
class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input className="textfield" type="text" name="city" placeholder="city"/>
                <input className="textfield" type="text" name="country" placeholder="country"/>
                <button className="button">Get weather</button>
            </form>

        );
    }
}
export default Form;