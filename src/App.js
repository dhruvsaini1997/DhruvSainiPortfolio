import './App.css';
import AppContainer from './components/main/AppContainer';
import constantData from './Constants';

function App() {
  return (
    <div className="App">
      <AppContainer constantData={constantData}/>    
    </div>
  );
}

export default App;
