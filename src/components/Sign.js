import React, { useState } from 'react'
import './Sign.css'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

function Sign() {
    const [rotation, setRotation] = useState(-90);

    useScrollPosition(({ prevPos, currPos }) => {
        var scrollMaxY = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)
        setRotation(-90 + ((currPos.y / -scrollMaxY) * 100) * 1.8)
    })

    return (
        <div>
            <div className="Frame1">
                <div className="outer_circle"></div>
                <div className="Ellipse2"></div>
                <div className="Rectangle1"></div>
                <div className="Rectangle2" style={{ transform: `rotate(${rotation}deg)` }}></div>
                <p className="P" >P</p>
                <p className="A" >A</p>
                <p className="R" >R</p>
                <p className="C" >C</p>
            </div>
        </div>
    )
}

export default Sign
