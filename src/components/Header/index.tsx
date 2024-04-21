import { useEffect, useState } from 'react'
import './index.css'
import { useLocation } from 'react-router-dom';

import logo from 'logo.png'

interface IHeader {
    size: number[]
    header: boolean
}

export function Header(props: IHeader) {
    const location = useLocation();
    const [url, setUrl] = useState(window.location.href)
    const [mobMenuOp, setMobMenuOp] = useState(false)

    const { size, header } = props

    useEffect(() => {
        setUrl(window.location.href)
    }, [location])

    return (
        <header className='lp-head' style={{ backgroundColor: header ? 'rgb(0, 0, 0, 0.9)' : undefined }}>
            <div className='lp-head--logo-area'>
                <a href="/"><img src={require('../../images/logo.png')} alt="Logo" /></a>
            </div>
            {
                size[0] > 911 ?
                    <div className='lp-head--labels'>
                        {
                            url.includes('jogo') ?
                                <>
                                    <a href="#home"><h2>Home</h2></a>
                                    <a href="#sobre"><h2>Sobre</h2></a>
                                    <a href="#caracteristicas"><h2>Características</h2></a>
                                </>
                                :
                                <>
                                    <a href="#home"><h2>Home</h2></a>
                                    <a href="#servicos"><h2>Serviços</h2></a>
                                    <a href="#portifolio"><h2>Portifólio</h2></a>
                                    <a href="#contato"><h2>Contato</h2></a>
                                </>
                        }
                    </div>
                    :
                    <>
                        <img className='lp-head--mob-menu-button' src={require('../../images/menu-icon.svg').default} alt="menu" onClick={() => { setMobMenuOp(!mobMenuOp) }} />
                        <div className='lp-head--mobile-labels' style={{ display: mobMenuOp ? 'flex' : 'none' }}>
                            {
                                url.includes('jogo') ?
                                    <>
                                        <a href="#home" onClick={() => { setMobMenuOp(!mobMenuOp) }}><h2>Home</h2></a>
                                        <a href="#sobre" onClick={() => { setMobMenuOp(!mobMenuOp) }}><h2>Sobre</h2></a>
                                        <a href="#caracteristicas" onClick={() => { setMobMenuOp(!mobMenuOp) }}><h2>Características</h2></a>
                                    </>
                                    :
                                    <>
                                        <a href="#home" onClick={() => { setMobMenuOp(!mobMenuOp) }}><h2>Home</h2></a>
                                        <a href="#servicos" onClick={() => { setMobMenuOp(!mobMenuOp) }}><h2>Serviços</h2></a>
                                        <a href="#portifolio" onClick={() => { setMobMenuOp(!mobMenuOp) }}><h2>Portifólio</h2></a>
                                        <a href="#contato" onClick={() => { setMobMenuOp(!mobMenuOp) }}><h2>Contato</h2></a>
                                    </>
                            }
                        </div>
                    </>
            }
        </header>
    )
}