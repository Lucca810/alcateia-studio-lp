import { ICases, IServices, IWolfMember } from "./interfaces/interfaces";


export const services: IServices[] = [
    {
        title: 'Desenvolvimento de jogos',
        imgUrl: 'imgservicos3.jpg'
    },
    {
        title: 'Arte e Design Gráfico',
        imgUrl: 'imgservicos2.jpg'
    },
    {
        title: 'Áudio',
        imgUrl: 'imgservicos3.jpg'
    }
]

export const cases: ICases[] = [
    {
        game: 'elementales',
        title: 'Elementales',
        subheading: 'Unity 2D RPG Game',
        about: 'Lorem ipsum dolor sit amet consectetur. Orci felis nunc et egestas. Montes feugiat ac arcu consequat donec cras viverra urna. Senectus quam interdum nisi sed leo ultrices orci aliquam. Congue eu habitant enim praesent adipiscing ac at consectetur interdum. Tellus est nisl vulputate pretium libero urna enim sed.',
        caracteristics: ['RPG', 'Jogo de turno', '8Bits'],
        imgUrl: 'imggame2.jpg',
        aboutImgUrl: 'imggame2-about.jpg',
        caracteristicsImgUrl: 'imggame2-caracteristics.jpg',
        goTo: '/jogo/elementales'
    },
    {
        game: 'true-city',
        title: 'True City',
        subheading: 'Unity Zombie Survival Game',
        imgUrl: 'imggame1.jpg',
        goTo: '/jogo/true-city'
    },
    {
        game: 'animunch',
        title: 'Animunch',
        subheading: 'Em desenvolvimento',
        imgUrl: 'imggame3.jpg',
        goTo: '/jogo/animunch'
    },
    {
        game: 'elementales-android',
        title: 'Elementales Mobile',
        subheading: 'Google play varsion of Elementales',
        imgUrl: 'imgassets3.jpg',
        goTo: '/jogo/elementales-android'
    },
    {
        game: 'background-levels',
        title: 'Background Levels',
        subheading: 'Different background levels for Animunch',
        imgUrl: 'imgassets2.jpg',
        goTo: '/jogo/background-levels'
    },
    {
        game: 'monster-girls',
        title: 'Monster Girls',
        subheading: 'Character concepts for the MonsterGirls mobile game',
        imgUrl: 'imgassets1.jpg',
        goTo: '/jogo/monster-girls'
    }
]

export const wolfMembers: IWolfMember[] = [
    {
        name: 'Andress',
        birthday: '10/07/2001',
        picture: 'black-wolf01.png',
        role: 'Líder da alcatéia',
        caracteristics: ['Caracteristica 1', 'Caracteristica 2'],
        favoriteGame: 'Hollow Knight',
        posX: '150px',
        posY: '650px',
        rotation: undefined,
        mirrorImage: false,
        height: '200px',
        linkedIn: 'www.google.com',
        instagram: 'google.com',
    },
    {
        name: 'Membro 01',
        birthday: '10/07/1970',
        picture: 'gray-wolf02.png',
        role: 'Membro da alcatéia',
        caracteristics: ['Caracteristica 1'],
        favoriteGame: 'League of legends',
        description: 'Descrição do membro da equipe...',
        posX: '80%',
        posY: '150px',
        rotation: undefined,
        mirrorImage: true,
        height: '200px',
        linkedIn: 'google.com',
        instagram: 'google.com',
    },
]