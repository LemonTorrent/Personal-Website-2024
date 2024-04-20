import { useState } from "react"
import { send } from "emailjs-com"

function EmailForm(){
    const [toSend, setToSend] = useState({
        first_name: "",
        last_name: "",
        contact_email: "",
        message: "",
    });

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        send(
            'Service ID',
            'template ID',
            toSend,
            'USER_ID'
        )
        .then((response) => {
            console.log("SUCCESS! ", response.status, response.text);
        })
        .catch((error) => {
            console.log("FAILED! ", error)
        })
    }

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setToSend({...toSend, [e.target.name]: e.target.value})
    };

    return(
        <div className="email-app">
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={toSend.first_name}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={toSend.last_name}
                    onChange={handleChange}
                />    
                <input 
                    type="text"
                    name="contact_email"
                    placeholder="Your Email"
                    value={toSend.contact_email}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="message"
                    placeholder="Message"
                    value={toSend.message}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EmailForm 