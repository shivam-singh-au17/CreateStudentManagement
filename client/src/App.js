import './App.css';
// import AllConttestList from './components/AllConttestList';
// import AdminPannel from './components/AdminPannel';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AllConttestList/> */}
      <LoginPage/>
      {/* <AdminPannel/> */}
    </div>
  );
}

export default App;
