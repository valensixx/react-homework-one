import React,{useState} from "react";

/*
create contact form with name( a must input, with at least 3 simbols),
email(a must input), Topic (a must input - at least 10 simbols),
message(text area, a must input) and a send button.
*/

export default function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [message, setMessage] = useState('');
    return(
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type = "text"></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type = "text"></input>
                </div>
                <div>
                    <label>Topic</label>
                    <input type = "text"></input>
                </div>
                <div>
                    <label>Message</label>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    );
};