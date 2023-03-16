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
                    <input type = "text" onInput={(e)=>{
                        setName(e.target.value);
                    }}></input>
                    {name.length < 3 ? 'name is required 3 or more simbols' : ''}
                </div>
                <div>
                    <label>Email</label>
                    <input type = "text" onInput={(e)=>{
                        setEmail(e.target.value);
                    }}></input>
                    {email.length < 1 ? 'email is required' : ''}
                </div>
                <div>
                    <label>Topic</label>
                    <input type = "text" onInput={(e)=>{
                        setTopic(e.target.value);
                    }}></input>
                    {topic.length < 10 ? 'topic required min 10 simbols' : ''}
                </div>
                <div>
                    <label >Message</label>
                    <textarea onInput={(e)=>{
                        setMessage(e.target.value);
                    }}></textarea>
                    {message.length < 1 ? 'message is required' : ''}
                </div>
                <div>
                    {name} <br/>
                    {email} <br/>
                    {topic} <br/>
                    {message}
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    );
};