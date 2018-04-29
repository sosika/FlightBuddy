import React from "react";

const TailView = (props) => (


    <div>
        <p>Graph goes here</p>
        <p>"this is working on the front-end"</p>
        <div>
        {props.planes.map(plane => {
            return plane.tail
        })
        }
        </div>
    </div>
);

export default TailView;
