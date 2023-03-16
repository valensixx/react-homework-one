import React,{useState} from "react";

//create div - box with size 50x50
//4 buttons up, down, left, right
//by click on button the div moves

export default function Move(){
    const[leftRight, setLeftRight] = useState(0);
    const[topBottom, setTopBottom] = useState(0);
    return(
        <div>
            <div>
                <div style={{marginLeft:'25px'}}>
                    <button onClick={() =>{setTopBottom(topBottom - 10);}}>Up</button>
                </div>
                <div>
                    <button onClick={() =>{setLeftRight(leftRight - 10);}}>Left</button> 
                    <button onClick={() =>{setLeftRight(leftRight + 10);}} >Right</button>
                </div>
                <div style={{marginLeft:'15px'}}>
                    <button onClick={() =>{setTopBottom(topBottom + 10);}}>Down</button>
                </div>
            </div>
            <div style={{height:'300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{
                    width:'50px', 
                    height: '50px', 
                    background:'blueviolet',
                    marginTop: topBottom,
                    marginLeft: leftRight,
                }}>
                </div>
            </div>
        </div>
    );
};