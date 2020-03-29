import React from  'react'
import './styles.css'

import{ FiLogIn} from 'react-icons/fi'


import logoImg from '../../assets/logo.svg'
import herosImg from '../../assets/heroes.png';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src="{logoImg}" alt="Logo"/> 

                <form>
                    <h1>
                        Faça seu Login
                    </h1>
                    <input placeholder="Sua Id"></input>
                    <button type="submit"> Entrar</button>
                    <a href = "/register"> <FiLogIn size={16} color = "#E02041" ></FiLogIn>Não tenho cadastro</a>
                </form>
            </section>
            <img src={herosImg} alt="Heroes"></img>
        </div>
    )
}