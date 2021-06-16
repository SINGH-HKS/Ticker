import logo from './logo.svg';
import './App.css';
import Store from './store'
import {Provider} from 'react-redux'
import Ticker from './component/ticker';
import 'bootstrap/dist/css/bootstrap.min.css';
const store=Store()
function App() {
  return (
    <Provider store={store}>
    <Ticker/>
    </Provider>
  );
}

export default App;
