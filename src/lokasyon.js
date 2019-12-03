import React from 'react';
import './lokasyon.css';
import kuzey from './image/kuzey.png';
import guney from './image/guney.png';

const lokasyonBilgi = {
    KuzeyYarimKure: {
        text: 'Kuzey Yarim Küredesiniz...',
        resim: kuzey
    },
    GuneyYarimKure: {
        text: 'Guney Yarim Küredesiniz...',
        resim: guney
    }
}

const Lokasyon = ({ latitude }) => {

    const lokasyon = latitude > 0 ? 'KuzeyYarimKure' : 'GuneyYarimKure'; //ternary operatörü
    const { text, resim } = lokasyonBilgi[lokasyon]

    return (
        <div className={lokasyon}>
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img src={resim} alt="lokasyon" />
                </div>
                <div className='ui teal bottom attached label'>
                    <h1>{text}</h1>
                </div>

            </div>

        </div>
    )
}

export default Lokasyon;