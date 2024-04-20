import { useEffect, useState } from 'react'
import './index.css'
import { useLocation } from 'react-router-dom';

import logo from 'logo.png'

export function Header() {

    const location = useLocation();
    const [header, setHeader] = useState(false)
    const [url, setUrl] = useState(window.location.href)
    const [size, setSize] = useState([0, 0]);
    const [mobMenuOp, setMobMenuOp] = useState(false)

    const listenScrollEvent = () => {
        if (window.scrollY < 200) {
            return setHeader(false)
        } else if (window.scrollY > 70) {
            return setHeader(true)
        }
    }

    useEffect(() => {
        //Atualizar tamnho da página
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();

        //Pegar scroll da página
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

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
                        <img className='lp-head--mob-menu-button' src={require('../../images/menu-icon.svg')} alt="menu" onClick={()=>{setMobMenuOp(!mobMenuOp)}}/>
                        <div className='lp-head--mobile-labels' style={{display: mobMenuOp ? 'flex' : 'none'}}>
                            {
                                url.includes('jogo') ?
                                    <>
                                        <a href="#home" onClick={()=>{setMobMenuOp(!mobMenuOp)}}><h2>Home</h2></a>
                                        <a href="#sobre" onClick={()=>{setMobMenuOp(!mobMenuOp)}}><h2>Sobre</h2></a>
                                        <a href="#caracteristicas" onClick={()=>{setMobMenuOp(!mobMenuOp)}}><h2>Características</h2></a>
                                    </>
                                    :
                                    <>
                                        <a href="#home" onClick={()=>{setMobMenuOp(!mobMenuOp)}}><h2>Home</h2></a>
                                        <a href="#servicos" onClick={()=>{setMobMenuOp(!mobMenuOp)}}><h2>Serviços</h2></a>
                                        <a href="#portifolio" onClick={()=>{setMobMenuOp(!mobMenuOp)}}><h2>Portifólio</h2></a>
                                        <a href="#contato" onClick={()=>{setMobMenuOp(!mobMenuOp)}}><h2>Contato</h2></a>
                                    </>
                            }
                        </div>
                    </>
            }
        </header>
    )
}