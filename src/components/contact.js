const Contact = () => {
    return ( 
        <>
            <section id="Contact" className="contact">
                <div className="sub-heading">
                <h2 className="heading-secondary">Contact me</h2>
                <p className="text-paragraph-16">Contact me for freelance/contract work, consulting, or if you want to chat! I'd be
                    happy to hear from you.</p>
                </div>
                <div className="contact-container">
                <form action="" className="form">
                    <div className="contact-row row">
                    <div className="contact-input col-md-6">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" id="name" className="form-control" placeholder="John Doe" required/>
                    </div>
                    <div className="contact-input col-md-6">
                        <label for="email" className="form-label">Email</label>
                        <input type="text" id="email" className="form-control" placeholder="test@test.com" required/>
                    </div>
                    </div>
                    <div className="contact-row row">
                    <div className="contact-input col-md-6">
                        <label for="number" className="form-label">Phone number</label>
                        <input type="number" id="number" className="form-control" placeholder="000-000-0000" required/>
                    </div>
                    <div className="contact-input col-md-6">
                        <label for="subject" className="form-label">Subject</label>
                        <input type="text" id="subject" className="form-control" placeholder="type here" required/>
                    </div>
                    </div>
                    <div className="contact-row row">
                    <div className="contact-input">
                        <label for="textares" className="form-label">Message</label>
                        <textarea type="text" id="textarea" className="form-control" rows="3" placeholder="type here"></textarea>
                    </div>
                    </div>
                    <div className="contact-row d-flex flex-row-reverse">
                    <a href="/" className="btn btn-primary justify-content-end">Submit</a>
                    </div>
                </form>
                </div>
            </section>
        </>
     );
}
 
export default Contact;