import Header from './components/Header';
import Profile from './pages/Profile';
import './App.css';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile username="afeets" />
    </div>
  );
}

export default App;
