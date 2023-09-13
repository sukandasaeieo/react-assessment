import Navbar from './component/Navbar'
import Content from './component/content'
import style from './Homeuser.module.css'
const Homeuser = () => {

  return (
    <>
    <div>
     <Navbar/> 
     <Content/>
    </div>
    <table className={style.bighead}>
    <thead>
        <tr className={style.tablerowhead}>
            <td className={style.tablehead}>Name</td>
            <td className={style.tablehead}>Last Name</td>
            <td className={style.tablehead}>Position</td>
        </tr>
    </thead>
    <tbody className={style.bigbody}>
        <tr>
            <td className={style.tablebody}>sukanda</td>
            <td className={style.tablebody}>saeieo</td>
            <td className={style.tablebody}>none</td>
        </tr>
    </tbody>
    </table>
    </>
  )
}
export default Homeuser