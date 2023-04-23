import CartWidget from "./CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
    return(
        <nav className="NavBar" >
            <Link to='/'>
                <h1>Kurama Impresiones 3D</h1>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/soporte`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Soportes</NavLink>
            </div>
            <CartWidget/>
            
        </nav>
        
        
        
    )
}

export default NavBar