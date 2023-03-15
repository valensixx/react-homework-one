import React from "react";

//create div - box with size 50x50
//4 buttons up, down, left, right
//by click on button the div moves

export default function Move(){
    return(
        <div>
            <div>
                <div style={{marginLeft:'25px'}}><button>Up</button></div>
                <div><button>Left</button> <button>Right</button></div>
                <div style={{marginLeft:'15px'}}><button>Down</button></div>
            </div>
            <div style={{height:'300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width:'50px', height: '50px', background:'blueviolet'}}></div>
            </div>
        </div>
    );
};