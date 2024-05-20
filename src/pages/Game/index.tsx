import { useNavigate, useParams } from 'react-router-dom';
import { cases } from '../../variables'
import './index.css'
import { useEffect } from 'react';

interface IGame {
    scroll: number
}

export function Game(props: IGame) {
    const game = useParams<{ gameName: string }>()
    const navigate = useNavigate();
    const caseSelected = cases.filter((c) => { if (c.game === game.gameName) return c })[0]

    const { scroll } = props

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div className='main'>
            <section id='home' className='index-game-section' style={{ backgroundImage: `url('/${caseSelected.imgUrl}')` }}>
                <div className='index-game-section--text-area'>
                    <h1>{caseSelected.title}</h1>
                </div>
            </section>
            {
                caseSelected.about && caseSelected.aboutImgUrl ?
                    <section id='sobre' className='about-game-section' style={{ backgroundImage: `url('/${caseSelected.aboutImgUrl}')` }}>
                        <div className='about-game-section--text-area'>
                            <h1>Sobre</h1>
                            <p>
                                {caseSelected.about}
                            </p>
                        </div>
                        <div className='about-game-section--shape' style={{ width: scroll > 30 ? `calc(70% - ${scroll * 1.4}%)` : '60%', borderRight: scroll > 30 ? undefined : 'none' }}>
                        </div>
                    </section>
                    :
                    undefined
            }

            {
                caseSelected.caracteristics && caseSelected.caracteristicsImgUrl ?
                    <section id='caracteristicas' className='caractaristics-game-section' style={{ backgroundImage: `url('/${caseSelected.caracteristicsImgUrl}')` }}>
                        <div className='caractaristics-game-section--text-area'>
                            <h1>Características</h1>
                            <ul>
                                {caseSelected.caracteristics.map((c, i) => { return (<li key={i}>{c}</li>) })}
                            </ul>
                        </div>
                        <div className='caractaristics-game-section--shape' style={{ width: scroll > 65 ? `calc(70% - ${(scroll - 35) * 1.3}%)` : '60%', borderLeft: scroll > 65 ? undefined : 'none' }}>
                        </div>
                    </section>
                    :
                    undefined
            }
        </div>
    )
}