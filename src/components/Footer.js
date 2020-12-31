import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div >
                            <h4 className="text-uppercase">Around the Web</h4>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a className="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="#"><i className="fa fa-facebook fa-fw" /></a></li>
                                <li className="list-inline-item"><a className="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="#"><i className="fa fa-linkedin fa-fw" /></a></li>
                                <li className="list-inline-item"><a className="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="#"><i className="fa fa-github fa-fw" /></a></li>
                                <li className="list-inline-item"><a className="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="#"><i className="fa fa-dribbble fa-fw" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright ©&nbsp;Akif Manzoor 2020</small></div>
            </div>
        </div>
    )
}

export default Footer
