import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Game } from "./pages/Game";

export function AppRoutes() {
    const [size, setSize] = useState([0, 0]);
    const [mouseCordinates, setMouseCordinates] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
    const [header, setHeader] = useState(false)
    const [scroll, setScrolll] = useState(0)

    useEffect(() => {
        //Atualizar tamnho da página
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();

        //Atulizar posição do mouse
        const updateMousePosition = (ev: any) => {
            setMouseCordinates({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);

        //Pegar scroll da página
        const listenScrollEvent = () => {
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;
            const currentPosition = window.scrollY;
            const scrollPercentage = (currentPosition / (fullHeight - windowHeight)) * 100;

            setScrolll(Math.floor(scrollPercentage))

            if (window.scrollY < 200) {
                return setHeader(false)
            } else if (window.scrollY > 70) {
                return setHeader(true)
            }

        }
        window.addEventListener('scroll', listenScrollEvent);

        return () => {
            window.removeEventListener('resize', updateSize);
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('scroll', updateMousePosition);
        };
    }, []);

    return (
        <BrowserRouter>
            <Header header={header} size={size} />
            <Routes>
                <Route path="/" element={<Home mouseCordinates={mouseCordinates} size={size} scroll={scroll} />} />
                <Route path="/jogo/:gameName" element={<Game scroll={scroll} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
