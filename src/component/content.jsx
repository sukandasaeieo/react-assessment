import style from './content.module.css'
const Content = () => {

    return (
    <>
    <div>
     <h1 className={style.h1}>Generation Thailand <br /> React-Assesment</h1>
    </div>
    <div className={style.bigbt}>
    <a className={style.bt} href="/Homeuser">User Home Sector</a>
    <a className={style.bt} href="/Homeadmin">Admin Home Sector</a>
    </div></>
)
}
export default Content