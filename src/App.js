import './App.css';
import Home from './Components/Home';
import MenuBar from './Components/MenuBar';
import Navbar from './Components/Navbar';
import Sidebar from './Components/SideBar';

function App() {
  return (
    <>
        <Navbar />
        <MenuBar/>
        <Sidebar />
        <Home />
    </>
    
  );
}

export default App;
