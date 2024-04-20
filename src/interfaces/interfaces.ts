export interface IServices{
    title: string
    imgUrl: string
}

export interface ICases{
    game: string
    title: string
    subheading: string
    imgUrl: string
    about?: string
    aboutImgUrl?: string
    caracteristics?: string[]
    caracteristicsImgUrl?: string
    goTo: string
}

export interface IRoundedBlock{
    title: string
    subheading?: string
    imgUrl: string
    goTo?: string
}

export interface IWolfMember{
    name: string,
    birthday: string,
    picture: string,
    role: string,
    caracteristics?: string[],
    favoriteGame?: string,
    description?: string,
    posX: string,
    posY: string,
    rotation?: string,
    mirrorImage?: boolean
    height: string,
    linkedIn?: string,
    instagram?: string,
}