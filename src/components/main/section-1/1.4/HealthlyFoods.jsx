import CatalogButton from "../../../common components/Button";

export default function HealthlyFoods() {
    return(
        <div className='container' style={{marginTop:'100px' , position:'relative',height:'100vh'}}>
         <div style={{width:'60%'}} className="info-coffee">
             <h1 style={{fontWeight:'900',fontSize:'56px'}}>Здоровое питание</h1> 
             <div style={{fontSize:'25px',width:'100%'}}>
            <div style={{width:'80%'}}>
              <p>Уникальные разработки нашего производства для здорового питания. Польза в <b>каждой грануле продукта.</b></p>
            </div> 
            <div style={{width:'70%'}}>
                <p>Толокняные каши, цикорий, ячменный напиток и многое другое.</p>
            </div>  
             </div>
             <div style={{marginTop:'112px'}}>  
                 <CatalogButton />
             </div>
             
         </div>
        <img style={{position:'absolute',right:0,top:0,width:'50%',height:'70%'}} src={'/img/casha.svg'} alt="espresso" />
     </div>
    )

}