import { createContext } from 'react';
import './App.css';
import WrapperA from './component/wrapperA';

export const GlobalContext = createContext();

function App() {
  const localObj = {fruit:"mango"}
  return (
    <div className="App">
      <GlobalContext.Provider value = {localObj}>
      <WrapperA />
      </GlobalContext.Provider>
      
    </div>
  );
}

export default App;
