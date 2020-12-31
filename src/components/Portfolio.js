import React, { useState } from 'react'
import PortfolioModal from './PortfolioModal'
import image1 from '../img/portfolio/cabin.png'
import image2 from '../img/portfolio/cake.png'
import image3 from '../img/portfolio/circus.png'
import image4 from '../img/portfolio/game.png'
import image5 from '../img/portfolio/safe.png'
import image6 from '../img/portfolio/submarine.png'


function Portfolio() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div id="portfolio" className='headbutt'>
            <div>
                <PortfolioModal open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} ></PortfolioModal> 
            </div>
            <section className="portfolio">
                <div className="container">
                    <h2 className="text-uppercase text-center text-secondary">Portfolio</h2>
                    <hr className="star-dark mb-5" />
                    <div className="row">
                        <div className="col-md-6 col-lg-4"><a className="d-block mx-auto portfolio-item" data-toggle="modal" onClick={handleClickOpen}>
                            <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                                <div className="my-auto portfolio-item-caption-content w-100 text-center text-white"><i className="fa fa-search-plus fa-3x" /></div>
                            </div><img className="img-fluid" src={image1} alt='' />
                        </a></div>
                        <div className="col-md-6 col-lg-4"><a className="d-block mx-auto portfolio-item" data-toggle="modal" onClick={handleClickOpen}>
                            <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                                <div className="my-auto portfolio-item-caption-content w-100 text-center text-white"><i className="fa fa-search-plus fa-3x" /></div>
                            </div><img className="img-fluid" src={image2} alt='' />
                        </a></div>
                        <div className="col-md-6 col-lg-4"><a className="d-block mx-auto portfolio-item" data-toggle="modal" onClick={handleClickOpen}>
                            <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                                <div className="my-auto portfolio-item-caption-content w-100 text-center text-white"><i className="fa fa-search-plus fa-3x" /></div>
                            </div><img className="img-fluid" src={image3} alt='' />
                        </a></div>
                        <div className="col-md-6 col-lg-4"><a className="d-block mx-auto portfolio-item" data-toggle="modal" onClick={handleClickOpen}>
                            <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                                <div className="my-auto portfolio-item-caption-content w-100 text-center text-white"><i className="fa fa-search-plus fa-3x" /></div>
                            </div><img className="img-fluid" src={image4} alt='' />
                        </a></div>
                        <div className="col-md-6 col-lg-4"><a className="d-block mx-auto portfolio-item" data-toggle="modal" onClick={handleClickOpen}>
                            <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                                <div className="my-auto portfolio-item-caption-content w-100 text-center text-white"><i className="fa fa-search-plus fa-3x" /></div>
                            </div><img className="img-fluid" src={image5} alt='' />
                        </a></div>
                        <div className="col-md-6 col-lg-4"><a className="d-block mx-auto portfolio-item" data-toggle="modal" onClick={handleClickOpen}>
                            <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                                <div className="my-auto portfolio-item-caption-content w-100 text-center text-white"><i className="fa fa-search-plus fa-3x" /></div>
                            </div><img className="img-fluid" src={image6} alt='' />
                        </a></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
