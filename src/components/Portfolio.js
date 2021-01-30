import React, { useState } from 'react'
import PortfolioModal from './PortfolioModal'
import image1 from '../img/portfolio/cabin.png'
import image2 from '../img/portfolio/cake.png'
import image3 from '../img/portfolio/circus.png'
import image4 from '../img/portfolio/game.png'
import image5 from '../img/portfolio/safe.png'
import image6 from '../img/portfolio/submarine.png'

//Is there a way I can save the images in Onennote and then create a map which displays the image and creates a modal link which navigates to the name of the onenote page/section
//I need to setup the notebooks in a way so that I can create sections such as Professional/Hobby/Learning/Fun/Freelanse

function Portfolio() {
    const [open, setOpen] = useState(false);
    const [portfolio, setPortfolio] = useState('')

    const handleClickOpen = (name) => {
        setPortfolio(name)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //I can use a useEffect here to populate the PortfolioItems array with the image and the name of the item

    const portfolioItems = [
        [image1, "Ericsson"],
        [image2, "Dice Fiesta"],
        [image3, "MeaLabs"],
        [image4, "AcreEye"],
        [image5, "Learning Project"],
        [image6, "Recycle Sorter"],
        [image1, "Tyto Robotics"],
        [image2, "Smart Plug"],
        [image3, "Magic Mirror"],
        [image4, "FullStackOpen"],
        [image5, 'Automatic Wheelchair Braking System']
    ]

    return (
        <div id="portfolio" className='headbutt'>
            <div>
                <PortfolioModal open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} name={portfolio}></PortfolioModal>
            </div>
            <section className="portfolio">
                <div className="container">
                    <h2 className="text-uppercase text-center text-secondary">Portfolio</h2>
                    <hr className="star-dark mb-5" />
                    <div className="row">
                        {portfolioItems.map((item) => {
                            return <div className="col-md-6 col-lg-4"><a className="d-block mx-auto portfolio-item" data-toggle="modal" onClick={() => { handleClickOpen(item[1]) }} >
                                <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                                    <div className="my-auto portfolio-item-caption-content w-100 text-center text-white"><i className="fa fa-search-plus fa-3x" /></div>
                                </div><img className="img-fluid" src={item[0]} alt='' />
                            </a></div>
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
