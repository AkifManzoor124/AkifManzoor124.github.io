import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 id="contact_title">Contact Me</h1>
            <div className="page" id="contact_page">
                <div id="container">
                    <form>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="First Name"></input>

                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Last Name"></input>

                        <label htmlFor="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact