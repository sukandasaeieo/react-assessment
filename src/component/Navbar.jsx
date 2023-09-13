import style from './nav.module.css'
const Navbar = () => {

    return (
      <>
      <nav>
        <ul className={style.Navbar}>
        <li className={style.navitem}><a href="#">Home</a></li>
        <li className={style.navitem}><a href="#">Owner</a></li>
        </ul>
      </nav>
      </>
    )
  }
  export default Navbar