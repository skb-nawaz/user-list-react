import Userprofile from './components/Userprofile/index'
import './App.css'

const userDetailslist = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Easter Horward',
    role: 'Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Easter Horward',
    role: 'Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Easter Horward',
    role: 'Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Easter Horward',
    role: 'Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">users list</h1>
    <ul>
      {userDetailslist.map(eachItem => (
        <Userprofile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)
export default App
