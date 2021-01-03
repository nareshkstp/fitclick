import React from "react";
import Squad from "./exercises/assets/images/about0.jpg";
const Card=props=>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={Squad} alt="image1"className="card-img-top"/>
                <div className="card-body text-dark">
                    <a href="https://sandip-rocks.github.io/FitClickAi/exercises/squats/squats.html" className="btn-outline-primary">squarts</a>
                </div>

            </div>

        </div>
    )
}
export default Card;