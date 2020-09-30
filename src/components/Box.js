import React from 'react';
import DataPage from "./DataPage";

function Box(props){

    const [id]=React.useState(props.name);
    //const [color]=React.useState("#00FF00");
    //const [items]=React.useState(["Cool", "Stuff", "Things"])



    /*const thingEles = items.map((it, idx)=>
        <h3 key={idx}>{it}</h3>
    );*/

    var [count, setCount] = React.useState(0);
    const [color, setColor] = React.useState ("black");

    const colors = ["blue","green","orange"];
    const randColor = colors[Math.floor(Math.random() * colors.length)];

    React.useEffect(()=>{
        if (count === 0){
            setColor("black")
        }
        else if(count % 5 ===0){
            setColor(randColor)
        }
        else{
            setColor("black")
        }

    }, [color, randColor, count]);


    return(
        <div style={{color: "white", backgroundColor: color, height: "200px", width: "200px", marginTop: "20px", marginBottom: "20px"}}>
            {id}
        </div>
    )
}

export default Box;