import './index.css'

export function Footer() {
    return (
        <footer className='lp-footer'>
            <h3>
                Studio Alcateia - Copyright © 2024. Todos os Direitos Reservados.
            </h3>
            <div className='lp-footer--social-media'>
                <a href=""><img src='linkedin-foot.svg' alt="" /></a>
                <a href=""><img src='github-foot.svg' alt="" /></a>
            </div>
        </footer>
    )
}