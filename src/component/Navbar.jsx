import { Link } from 'react-router-dom'
import style from './nav.module.css'
const Navbar = () => {

    return (
      <>
      <nav>
        <ul className={style.Navbar}>
        <li className={style.navitem}><Link to = {"/"}><a>Home</a></Link></li>
        <li className={style.navitem}><Link to = {"/Owner"}><a>Owner</a></Link></li>
        </ul>
      </nav>
      </>
    )
  }
  export default Navbar