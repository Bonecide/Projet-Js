import CatalogButton from '../../../Header/Button';
import coffee from '../../../../img/espresso.svg';
import seeds from '../../../../img/coffee seeds.svg'

export default function FreshCoffee(){




    return(
        <div className='container' style={{marginTop:'100px' , position:'relative',height:'100vh'}}>
         <div style={{width:'60%'}} className="info-coffee">
             <h1 style={{fontWeight:'900',fontSize:'56px'}}>Свежеобжаренный кофе</h1> 
             <div style={{fontSize:'25px'}}>
             <p >Кофе Калининградской обжарки из разных стран<br/> произрастания с доставкой на дом. <br/><br/>
                    Мы обжариваем кофе <span><b>каждые выходные.</b></span> </p>
                 
             </div>
             <div style={{marginTop:'112px'}}>  
                 <CatalogButton />
             </div>
             
         </div>
                 <img style={{position:'absolute',right: 0,top:0}} src={seeds} alt="" />
                 <img style={{position:'absolute',right: 0,top:0}} src={coffee} alt="espresso" />
     </div>
    )
}