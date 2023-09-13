import Navbar from './component/Navbar'
import Content from './component/content'
const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {

  return (
    <>
    <div>
     <Navbar/> 
     <Content/>
    </div>
    </>
  )
}
export default Home
