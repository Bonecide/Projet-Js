import CatalogButton from '../../../common components/Button';

export default function ProductionForCoffee(){
    return(
        <div className='container' style={{marginTop:'100px' , position:'relative',height:'100vh'}}>
         <div style={{width:'60%'}} className="info-coffee">
             <h1 style={{fontWeight:'900',fontSize:'56px'}}>Продукция для вендинга</h1> 
             <div style={{fontSize:'25px',width:'100%'}}>
            <div style={{width:'80%'}}>
              <p><span><strong>Оптом.</strong></span> Продукция для вендинга и оптовых закупок  нефасованного сырья.</p>
            </div> 
            <div>
            </div>  
               <p>Кофейные напитки, смеси, топинги и т.д.</p>
             </div>
             <div style={{marginTop:'112px'}}>  
                 <CatalogButton />
             </div>
             
         </div>
        <img style={{position:'absolute',right:0,top:0,width:'60%',height:'70%'}} src={'/img/machine-for-slider.svg'} alt="espresso" />
     </div>
    )
}