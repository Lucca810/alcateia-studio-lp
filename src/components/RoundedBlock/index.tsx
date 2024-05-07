import { useNavigate } from "react-router-dom";
import { IRoundedBlock } from "../../interfaces/interfaces";

import './index.css'
import { useEffect, useState } from "react";

export function RoundedBlock(props: IRoundedBlock) {
    const { title, subheading, imgUrl, goTo, styles, animated, direction, scroll, startAnimation } = props
    const [curPosition, setCurPosition] = useState(600)
    const [animationStarted, setAnimationStarted] = useState(false)
    const navigate = useNavigate();


    useEffect(() => {
        if (!animated || animationStarted) return;

        if (scroll && startAnimation && scroll >= startAnimation) {
            setAnimationStarted(true)
            setCurPosition(0)
        }
    }, [scroll])

    return (
        <div className="rounded-block-relative-parent">
            <div className="rounded-block" style={{ ...styles, top: animated && direction === 'B' ? curPosition : undefined, left: animated && direction === 'R' ? curPosition : undefined, right: animated && direction === 'L' ? curPosition : undefined }}>
                <div className="rounded-block--image" style={{ cursor: goTo ? 'pointer' : undefined, backgroundImage: `url('/${imgUrl}')` }} onClick={goTo ? () => { navigate(`${goTo}`) } : undefined} />
                <h2>{title}</h2>
                {
                    subheading ?
                        <h3>{subheading}</h3>
                        :
                        undefined
                }
            </div>
        </div>

    )
}