import { useEffect, useLayoutEffect, useRef, useState } from "react";

import './index.css'
import { wolfMembers } from "../../variables";
import { IWolfMember } from "../../interfaces/interfaces";

export function WolfMembersDisplay() {
    const [size, setSize] = useState([0, 0]);
    const [selectedWolf, setSelectedWolf] = useState<IWolfMember>()
    const [mouseCordinates, setMouseCordinates] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
    const [lockedCordinates, setLockedCordinates] = useState<{ x: number, y: number }>()
    const cursor = useRef()

    useLayoutEffect(() => {
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

        return () => {
            window.removeEventListener('resize', updateSize);
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    if (size[0] > 911) {
        return (
            <>
                {wolfMembers.map((wolf) => {
                    return (
                        <div className="wolf-member-container"
                            onMouseOver={() => { if (!lockedCordinates) setSelectedWolf(wolf) }}
                            onMouseLeave={() => { if (!lockedCordinates) setSelectedWolf(undefined) }}
                            onScroll={() => { setSelectedWolf(undefined) }}
                            onClick={() => {
                                setSelectedWolf(wolf)
                                if (lockedCordinates && selectedWolf?.name === wolf.name) {
                                    setLockedCordinates(undefined)
                                } else {
                                    setLockedCordinates(mouseCordinates)
                                }
                            }}
                        >
                            <div className="wolf-member" style={{ height: wolf.height, left: wolf.posX, top: wolf.posY, transform: wolf.mirrorImage ? 'scaleX(-1)' : undefined }} key={wolf.name}>
                                <img src={wolf.picture} alt={wolf.name} />
                            </div>
                        </div>
                    )
                })}


                <div className="wolf-member-description"
                    style={{
                        top: (lockedCordinates?.y ?? mouseCordinates.y) > size[1] / 2 ? (lockedCordinates?.y ?? mouseCordinates.y) - 80 : (lockedCordinates?.y ?? mouseCordinates.y) + 100,
                        left: (lockedCordinates?.x ?? mouseCordinates.x) < size[0] / 2 ? (lockedCordinates?.x ?? mouseCordinates.x) + 400 : (lockedCordinates?.x ?? mouseCordinates.x) - 350,
                        border: selectedWolf ? '5px solid #fff' : undefined,
                        backgroundColor: 'rgb(0,0,0,0.7)'
                    }}
                    onMouseLeave={()=>{
                        setLockedCordinates(undefined)
                        setSelectedWolf(undefined)
                    }}
                >
                    {selectedWolf?.name ? <p>Nome: {selectedWolf?.name}</p> : undefined}
                    {selectedWolf?.birthday ? <p>Aniversário: {selectedWolf?.birthday}</p> : undefined}
                    {selectedWolf?.role ? <p>Função: {selectedWolf?.role}</p> : undefined}
                    {selectedWolf?.description ? <p>Descrição: {selectedWolf?.description}</p> : undefined}
                    {selectedWolf?.favoriteGame ? <p>Jogo favorito: {selectedWolf?.favoriteGame}</p> : undefined}
                    {
                        selectedWolf?.instagram || selectedWolf?.linkedIn ?
                            <div className="wolf-member-description--social-media-area">
                                {selectedWolf?.linkedIn ? <a href={selectedWolf.linkedIn}><img src="linkedin-icon.svg" alt="" /></a> : undefined}
                                {selectedWolf?.instagram ? <a href={selectedWolf.instagram}><img src="instagram-icon.svg" alt="" /></a> : undefined}
                            </div>
                            :
                            undefined
                    }
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="wolf-member-description-mobile" style={{height: selectedWolf ? '200px': undefined, border: selectedWolf ? '3px solid' : undefined}}>
                    {selectedWolf?.name ? <p>Nome: {selectedWolf?.name}</p> : undefined}
                    {selectedWolf?.birthday ? <p>Aniversário: {selectedWolf?.birthday}</p> : undefined}
                    {selectedWolf?.role ? <p>Função: {selectedWolf?.role}</p> : undefined}
                    {selectedWolf?.description ? <p>Descrição: {selectedWolf?.description}</p> : undefined}
                    {selectedWolf?.favoriteGame ? <p>Jogo favorito: {selectedWolf?.favoriteGame}</p> : undefined}
                    {
                        selectedWolf?.instagram || selectedWolf?.linkedIn ?
                            <div className="wolf-member-description--social-media-area">
                                {selectedWolf?.linkedIn ? <a href={selectedWolf.linkedIn}><img src="linkedin-icon.svg" alt="" /></a> : undefined}
                                {selectedWolf?.instagram ? <a href={selectedWolf.instagram}><img src="instagram-icon.svg" alt="" /></a> : undefined}
                            </div>
                            :
                            undefined
                    }
                </div>
                <div className="wolf-member-area">
                {wolfMembers.map((wolf) => {
                    return (
                        <div className="wolf-member-mobile"
                            ref={cursor as any}
                            onClick={()=>{
                                if(selectedWolf && selectedWolf.name === wolf.name){
                                    setSelectedWolf(undefined)
                                }else{
                                    setSelectedWolf(wolf)
                                }
                            }}
                        >
                            <img src={wolf.picture} alt={wolf.name} />
                        </div>
                    )
                })}
            </div>
            </>
            
        )
    }
}