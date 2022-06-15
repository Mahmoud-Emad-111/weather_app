import React from "react";

const Form=(props)=>{
    return(
        <div className="form">
            <form onSubmit={props.get_weather}>
                <input type="text" name="cuntry" defaultValue="" placeholder="cuntry..."/>
                <input type="text" name="city" defaultValue="" placeholder="city..."/>
                <button className="btn btn-primary">Sent</button>
            </form>
        </div>
    )
}
export default Form