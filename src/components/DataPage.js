import React from "react";
import Box from "./Box";


function DataPage (props){

    var [count, setCount] = React.useState(0);
    const [color, setColor] = React.useState ("black");
    const [data, setData] = React.useState([{id: "This is a box"}]);
    const [submit, setSubmit] = React.useState(false);

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

    React.useEffect(()=>{
        let ogData = data;
        ogData.push({id: "This is also a box..."});
        setData(ogData);
    }, [data, submit]);


    let boxEles = data.map((it, idx)=>
        <Box name={it.id}/>
    )
    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div>
            <h1>{props.match.params.id}</h1>
            <button onClick={()=>setCount(count +1)}>Increase by 1</button>
            <button onClick={()=>setSubmit(!submit)}>Add Item</button>
            <button onClick={()=>setCount(count = 0)}>Reset</button>
            <button onClick={refreshPage}>Reset</button>
            <h3>{count}</h3>
            <div>{boxEles}</div>
            <div style = {{backgroundColor:color, height: "100px", width: "100px"}}></div>
        </div>
    )
}
export default DataPage