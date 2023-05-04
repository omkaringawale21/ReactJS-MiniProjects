import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home/Home';
import { AppProvider } from './Context/Context';

function App() {
  return (
    <Router>
      <AppProvider>
        <Home />
      </AppProvider>
    </Router>
  );
}

export default App;
