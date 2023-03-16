import React,{useState} from "react";

//create <div> with text 'hello' and text area.
//by typing Name in the text area it displays 'hello Name'.
//"Hello, Gosho!"

export default function Hello(){
    const[name, setName] = useState('');
    return (
        <div>
            <input type="text" 
            onInput={(e) => 
                {setName(e.target.value)}}
            />
            <div>Hello, {name}</div>
        </div>
    );
};