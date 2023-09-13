import Navbar from './component/Navbar'
import Content from './component/content'
// import style from './Homeuser.module.css'
const Homeadmin = () => {

  return (
    <>
    <div>
     <Navbar/> 
     <Content/>
    </div>
    <form>
      <label>Create User <br />
        <input type="text" />
      </label>
      <label>
        <input type="text" />
      </label>
      <label>
        <input type="text" />
      </label>
      <button>Save</button>
    </form>
    </>
  )
}


export default Homeadmin