import React from  'react'
import './styles.css'

import{ FiLogIn} from 'react-icons/fi'



import herosImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg'

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src= {logo} alt="Logo"></img> 

                <form>
                    <h1>
                        Faça seu Login
                    </h1>
                    <input placeholder="Sua Id"></input>
                    <button className = "button" type="submit"> Entrar</button>
                    <a href = "/register"> <FiLogIn size={16} color = "#E02041" ></FiLogIn>Não tenho cadastro</a>
                </form>
            </section>
            <img src={herosImg} alt="Heroes"></img>
        </div>
    )
}