import CatalogButton from '../../../common components/Button';

export default function TeaAndCoffee(){



    return (
        <div className='container' style={{marginTop:'100px' , position:'relative'}}>
         <div style={{width:'60%'}} className="info-coffee">
             <b style={{fontWeight:'900',fontSize:'56px'}}>Чай и кофейные напитки</b> 
             <div style={{fontSize:'25px'}}>
             <p>Чай напрямую из плантаций с Китая и кофейные<br/> напитки на основе кофе(какао и кофе растворимый). <br/><br/> </p>   
             </div>
             <div style={{marginTop:'112px'}}>  
                 <CatalogButton />
             </div>
             
         </div>
                 <img style={{position:'absolute',right: 0,top:0}} src={'/img/slider-tea-1.png'} alt="" />
                 
     </div>
    )
}