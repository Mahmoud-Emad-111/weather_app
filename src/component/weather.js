import React from "react";
const Weather=(props)=>{
    const data=props.data;
    return(
        <div className="data">
            {data.tempreature && <p>tempreature: {data.tempreature} </p>}
            {data.city && <p>city: {data.city}</p>}
            {data.country&& <p>country: {data.country}</p>}
            {data.humidity && <p>humidity: {data.humidity}</p>}
            {data.descrabtion && <p>descraption: {data.descrabtion}</p>}
            {data.error}

        </div>
    )
}
export default Weather