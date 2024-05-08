import { RoundedBlock } from '../../components/RoundedBlock'
import './index.css'
import { cases, services } from '../../variables'
import { WolfMembersDisplay } from '../../components/WolfMembersDisplay'

interface IHome {
    size: number[]
    mouseCordinates: { x: number, y: number }
    scroll: number
}

export function Home(props: IHome) {
    const { size, mouseCordinates, scroll } = props

    return (
        <div className='main'>
            <section id="home" className='home-section' style={{ backgroundImage: "url('/Banner1.jpg')" }}>
                <div className='home-section--text-area'>
                    <h1>Alcateia Studio</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Eget arcu nec eget tincidunt. Massa scelerisque blandit felis non. Gravida cursus lorem ipsum consequat non amet eget sit blandit.
                    </p>
                </div>
            </section>
            <WolfMembersDisplay size={size} mouseCordinates={mouseCordinates} />
            <section id="servicos" className='servicos-section' style={{ backgroundImage: "url('/Banner2.jpg')" }}>
                <div className='servicos-section--text-area'>
                    <h1>Nossos Serviços</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Eget arcu nec eget tincidunt. Massa scelerisque blandit felis non. Gravida cursus lorem ipsum consequat non amet eget sit blandit.
                    </p>
                </div>
                <div className='servicos-section--blocs-area'>
                    {services.map((service, idx) => { return <RoundedBlock key={idx} imgUrl={service.imgUrl} title={service.title} animated={true} direction={size[0] > 911 ? 'B' : (idx % 2 === 0 ? 'L' : 'R')} startAnimation={size[0] > 911 ? 15 : 5} scroll={scroll} /> })}
                </div>
            </section>
            <section id="portifolio" className='portifolio-section' style={{ backgroundImage: "url('/Banner3.jpg')" }}>
                <div className='portifolio-section--text-area'>
                    <h1>Portifólio</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Eget arcu nec eget tincidunt. Massa scelerisque blandit felis non. Gravida cursus lorem ipsum consequat non amet eget sit blandit.
                    </p>
                </div>
                <div className='portifolio-section--blocs-area'>
                    {cases.map((caseSel, idx) => { return <RoundedBlock key={idx} imgUrl={caseSel.imgUrl} title={caseSel.title} subheading={caseSel.subheading} goTo={caseSel.goTo} animated={true} direction={size[0] > 911 ? 'B' : (idx % 2 === 0 ? 'L' : 'R')} startAnimation={size[0] > 911 ? 40 : 35} scroll={scroll} /> })}
                </div>
            </section>
            <section id="contato" className='contato-section' style={{ backgroundImage: "url('/Banner4.jpg')" }}>

                <div className='contato-section--text-area'>
                    <h1>Entre em contato</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Eget arcu nec eget tincidunt. Massa scelerisque blandit felis non. Gravida cursus lorem ipsum consequat non amet eget sit blandit.
                    </p>
                </div>

                <form action="" className='contato-section--form'>
                    <input type="text" id='name' className='contato-section--form-name' placeholder='Nome' />
                    <input type="text" id='email' className='contato-section--form-email' placeholder='E-Mail' />
                    <textarea className='contato-section--form-message' id='message' cols={30} rows={15} placeholder='Menssagem'></textarea>
                    <button className='contato-section--form-submit-button' onClick={() => { alert('Formulário enviado!') }}>Enviar</button>
                </form>
            </section>
        </div>
    )
}