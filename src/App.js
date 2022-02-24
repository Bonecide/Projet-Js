
import './App.css';
import Header from './components/Header/Header';
import Catalog from './components/main/section-2/Section-Two';
import Slider from './components/main/section-1/1/slider';
import SalesGoods from './components/main/section-sale/SalesGoods';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>     
      <Catalog/> 
      <SalesGoods/>
    </div>
  );
}

export default App;
