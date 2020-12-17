import React, {useState} from 'react'
import "./ContactUs.css"

const ContactUs = () => {

    const contactData = 
    [
        {
            imgClass: "fas fa-map-marked-alt icon-class",
            heading: "ADDRESS",
            data: [{subhead: null, main: "ARTHASHASTRA INTELLIGENCE, Plot no P1-53, Shirdi Sai Colony, Bheermguda, Ameerpur Village, RC Puram, Hyderabad, Telangana, India, 502032"}]
        },
        {
            imgClass: "fas fa-phone icon-class",
            heading: "PHONE",
            // data: [{subhead: "Economics-", main: "+91 949494861,   +91 8500008625"}]
            data: [{subhead: null, main: "+91 949494861, +91 8500008625"}]
        },
        {
            imgClass:  "fas fa-paper-plane icon-class",
            heading: "EMAIL",
            // data: [{subhead: "Economics-", main: "lorem@gmail.com,  ipsum@gmail.com"}, {subhead: "Trade-", main: "lorem@gmail.com,   ipsum@gmail.com"}]
            data: [{subhead: null, main: "hr@aidatabases.in"}]
        }
    ]

    const clickHandler = (e) => {
        e.target.style.transform = "scale(0.95)"
        setTimeout(() => {
            e.target.style.transform = "scale(1)"
            e.target.blur()
        }, 250);
    }

    const formHandler = (Event) => {
        Event.preventDefault()
        console.log(Event.target.email.value)
    }

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    return (
        <div>
            <div className="contact-top-container">
                <h1 style={{margin: "0 auto 2em", fontSize: "2.5rem"}}>CONTACT US</h1>
                <div className="contacts-container">
                    {
                        contactData.map((item, i) => 
                        <div key={i} className="specific-type-contact">
                            <div className="img-circle"><i className={item.imgClass} style={{fontSize: "50px"}}></i></div>
                            <h2>{item.heading}</h2>
                            <ul className="contact-data-list">
                                {
                                    item.data.map((element, id) =>
                                    <>
                                    {element.subhead ? 
                                        <li key={id}>
                                            {element.subhead}
                                        </li> : null
                                    }                                        
                                        <li>
                                            {element.main}
                                        </li>
                                    </>)
                                }
                            </ul>
                        </div>
                        )
                    }
                </div>
            </div>
            <div className="message-and-form-container">
                <div className="message-container">
                    <h1>Message Us</h1>
                    <p>For any queries regarding our products and services, fill up the form and someone from our team will get in touch with you.</p>
                </div>
                <div className="form-container">
                    <form onSubmit={formHandler}>
                        <label>Name</label>
                        <input type="text" value={name} name = "name" onChange={Event => setName(Event.target.value)}/>
                        <label>Email</label>
                        <input type="text" value={email} name = "email" onChange={Event => setEmail(Event.target.value)}/>
                        <label>Comments</label>
                        <textarea style={{height: "5.5em", resize: "vertical"}} cols={5} value={comment} name="comment" onChange={Event => setComment(Event.target.value)}/>
                        <button className="feedback-button" type="submit" onClick={clickHandler}>SUBMIT</button>
                    </form>
                </div>
            </div>
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8250.737579608043!2d78.30383864709265!3d17.512552791805597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab5e728659b913d7!2sArthashastra%20Intelligence%20(AI%20Databases)!5e0!3m2!1sen!2sin!4v1607695864761!5m2!1sen!2sin" width="75%" height="500" frameBorder="1" style={{border: "2px solid black", marginTop: '2em'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
    )
}

export default ContactUs
