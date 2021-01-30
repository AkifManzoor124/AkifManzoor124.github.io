import React from 'react'
import ericssonGUI from '../img/portfolio/ericssonGUI.png'
import './Ericsson.css'

function Ericsson() {
    return (
        <div className="content">
            <h2>
                Ericsson
            </h2>
            <h4>
                TL;DR
            </h4>
            <p>
                •Awarded two "Act to Execute" awards for automating software uploading and reducing loading times from 8 hours to 10 minutes with Python. <br></br>
                • Utilized Python to download files and upload to phones with Qualcomm software's CLI commands. <br></br>
                • Improved user interaction by developing GUI with Eel.js, JavaScript, HTML and CSS. → akifmanzoor124.github.io/ericsson <br></br>
                • Automated logging of troubleshooting performed by the developers on devices using MongoDB.
            </p>

            <h5>
                My Adventures at Ericsson
            </h5>
            <p>
                • I was originally hired at Ericsson to assist my colleague in his duties. My team was to troubleshoot Qualcomm phones for developers who were trying to integrate Ericsson's infrastructure with Qualcomm's. <br></br>
            • A common problem was that developers were not uploading the newest software and files due to being cumbersome, manual and time extensive.<br></br>
            • I was able to automate this process using Python, HTML, CSS, JavaScript and MongoDB.<br></br>
            • I asked the user to input phone attributes such as type, serial number and RF variant of the phone, which could only be found on the back of the phone.<br></br>
            • This allowed for all of Ericsson to keep track of all the phones (through a unique IMEI found by using adb commands) and the corresponding attributes. <br></br>
            • Whenever developers used the software, it updated the database and built overtime. <br></br>
            • I used Python to retrieve the files from the server and integrated the CLI commands of the Qualcomm software to upload the files onto the phone. <br></br>
            • The software also logged action performed and upload to the database allowing my team to determine troubleshooting steps performed. <br></br>
            • I created a GUI using HTML, CSS, and JavaScript to display information and integrated using Eel.js.</p>

            <h5>
                The following picture shows the GUI which I developed during my time at Ericsson
            </h5>
            <img src={ericssonGUI} alt="ericssonGUI" />
            <h5>
                Some Awkward Stories
            </h5>
            <p>• I once spilled coffee all over my laptop as I was reaching for my mouse. I immediately turned off the laptop and ran to get some paper towels to clean the mess. Worried that I fried my laptop, I took it for repairs. The guy, after looking at me for a few seconds said: "Isn't this your first week at work?". <br></br>
            • I once went to work 30 minutes late and within an hour of interacting with colleagues, I looked down to find a massive laundry stain on my very white shirt. Embarrassed, I rushed to the washroom and tried to clean the stain with water to only see it smudge and grow larger. It was also my first day… Thankfully, my manager was kind enough laugh it off and tell me stories about his son. <br></br></p>
        </div>
    )
}

export default Ericsson
