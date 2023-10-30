import { Navbar } from './style';

export function Header() {
    return (
        <Navbar>
        <img src="./src/assets/gatinho.png" alt="Logo" className='logo'/>
        <h1>Aprendendo useEffect com Gatinhos</h1>    
       </Navbar>
    );
}