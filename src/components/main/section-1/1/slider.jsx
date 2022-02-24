import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import FreshCoffee from '../1.1/FreshCoffee';
import TeaAndCoffee from '../1.2/tea and coffee';
import ProductionForCoffee from '../1.3/productionForCoffee';
import HealthlyFoods from '../1.4/HealthlyFoods';




export default function Slider (){
  const styles = {
    background:'white',
    display:'block'
  }
    return(
  <AwesomeSlider mobileTouch = {true} mobileTouch= {true} bullets={false} >
      <div style={styles}><FreshCoffee/></div>
      <div style={styles}><TeaAndCoffee/></div>
      <div style={styles}><ProductionForCoffee/></div>
      <div style={styles}><HealthlyFoods/></div>
  </AwesomeSlider>
    )
}