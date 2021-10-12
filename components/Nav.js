import navStles from '../styles/Nav.module.css';
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className= {navStles.nav}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </nav>
    )
}

export default Nav
