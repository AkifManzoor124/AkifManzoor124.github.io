import React from 'react'
import './Resume.css'
import '../App.css'
import { pdfjs, Document, Page } from 'react-pdf';
import resumePDF from '../resources/resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    return (
        <div id="resume" className='headbutt'>
            <section className='resume-container' >
                <div className="container" >
                    <h2 className="text-uppercase text-center text-white" > Resume </h2>
                    <hr className="star-white" />
                    <div className="row" >
                        <div>
                            <Document file={resumePDF} onLoadSuccess={null}>
                                <Page pageNumber={1} height={1000} width={1000} />
                            </Document>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Resume