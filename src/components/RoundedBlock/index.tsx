import { useNavigate } from "react-router-dom";
import { IRoundedBlock } from "../../interfaces/interfaces";

import './index.css'

export function RoundedBlock(props: IRoundedBlock) {
    const { title, subheading, imgUrl, goTo, styles } = props
    const navigate = useNavigate();

    return (
        <div className="rounded-block" style={styles}>
            <div className="rounded-block--image" style={{ cursor: goTo ? 'pointer' : undefined, backgroundImage: `url('/${imgUrl}')` }} onClick={goTo ? () => { navigate(`${goTo}`) } : undefined} />
            <h2>{title}</h2>
            {
                subheading ?
                    <h3>{subheading}</h3>
                    :
                    undefined
            }
        </div>
    )
}