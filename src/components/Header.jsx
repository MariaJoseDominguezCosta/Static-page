import logo from '../assets/img/TXT-Logo.png'
import '../assets/style/header.css'
// import { useState } from "react";
const Header = () => {
    // const [search, setSearch] = useState("")//<- Valor predeterminado;
    return (
        <form onSubmit={ev => {
            ev.preventDefault();
            setSerach(ev.target.search.value);
        }}>
            <header>
                <img src={logo}></img>
                {/* <input
                    type='text'
                    name='search'
                    value={search}
                    autoComplete='off'
                    className='search'
                    onChange={ev => setSearch(ev.target.value)}></input> */}
                <button type='submit' className='search'>Buscar</button>
                <h1>TOMORROW BY TOGETHER</h1>
            </header>
        </form>


    );
}
export default Header;