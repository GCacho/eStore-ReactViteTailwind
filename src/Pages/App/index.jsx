import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import './App.css'

function App() {
  return (
    <h1 className="bg-red-100">
      < Home />
      < MyAccount />
      < MyOrder />
      < NotFound />
      < SignIn />
    </h1>
  )
}

export default App
