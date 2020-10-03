import React from 'react';


function Box(props){

    const [id]=React.useState(props.name);
    const [color] = React.useState (props.color);

    return(
        <div style={{marginTop: "30px", marginLeft: "30px", backgroundColor: color, color: "white", height: "100px", width: "200px", marginBottom: "30px"}}>
            {id}
        </div>
    )
}

export default Box;