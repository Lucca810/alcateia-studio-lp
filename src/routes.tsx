import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import React from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Game } from "./pages/Game";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jogo/:gameName" element={<Game />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
