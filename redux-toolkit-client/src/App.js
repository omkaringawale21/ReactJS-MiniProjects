import './App.css';
import Home from './components/Home/Home';
import { Provider } from "react-redux";
import { Store } from './store/Store';

function App() {
  return (
    <Provider store={Store}>
      <Home />
    </Provider>
  );
}

export default App;
