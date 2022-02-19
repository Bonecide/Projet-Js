
import './App.css';
import Header from './components/Header/Header';
import Catalog from './components/main/section-2/Section-Two';
import FreshCoffee from './components/main/section-1/1.1/FreshCoffee';
import Slider from './components/main/section-1/1/slider';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>      
      <Catalog/>
    </div>
  );
}

export default App;
