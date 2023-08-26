import { useState } from 'react';
import emailjs from '@emailjs/browser';
import spinnerimg from "../images/spinner.png";
import img2 from "../images/bonete.webp";

const Invitacion = () => {

    const [name, setName] = useState('');
    const [showInv, setShowInv] = useState(false);
    const [showName, setShowName] = useState(false);
    const [spinner, setSpinner] = useState(false);

    const showInvitation = () => {
        return setShowInv(true)
    }

    const sendEmail = () => {

        setSpinner(true);

        const params = {
            name: name
        }

        emailjs.send('service_6con24h', 'template_8qb0c7r', params, 'F4640DpjT_pQg77Km')
            .then((result) => {
                setShowName(true)
                setSpinner(false);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                setSpinner(false);
            });
    }


    return (
        <div>
            {
                !showInv
                    ?
                    <div className="flex flex-col items-center">
                        <h1>Y vos quien chota sos</h1>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} className="shadow mt-2 appearance-none bg-slate-700 border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" />
                        <button onClick={showInvitation} className="rounded-md mt-3 p-3 bg-rose-900 btn">Siguiente</button>
                    </div>
                    : <div className="invitation grid grid-cols-1 gap-y-4 text-center px-2">
                        <img src={img2} className="absolute h-10 w-auto w-40 top-56 right-5 img opacity-80" alt="bonete"/>
                        <h1 className="text-7xl title bubble-font">Te invito a mi cumple</h1>
                        <h2 className="text-9xl number bubble-font">25</h2>
                        <span className="tracking-widest grid justify-items-center grid-cols-1 gap-y-5">
                            <p>COMIDITA, GIN & CERÁMICA</p>
                            <p className="text-4xl date bubble-font">Sabado 9 / 13 hs</p>
                            <p>LUGAR: MI CASA</p>
                            {spinner ? <img src={spinnerimg} alt="spinner" className='animate-spin h-5 w-5 self-center' /> : <button className="rounded-md mx-5 p-3 bg-rose-900 btn" onClick={sendEmail}> CONFIRMAR</button>}
                            {showName ? <p>Te espero, {name}!</p> : ''}
                        </span>
                    </div>
            }
        </div>
    )
}

export default Invitacion;