import './SalesGoods.css'

export default function SalesGoodsCatalog({position}){
        return (
            
            <div className="sales__Goods" style={{height: "500px", width: "350px", boxShadow: '0 0 21.2553px rgb(146 146 146 / 20%)', borderRadius: '10px'}}>
                <div  style={{position: "relative", height: "100%", width: "90%", display:'flex', flexDirection:'column', margin: '0 auto',paddingTop:'20px'  }}>
                    <div>
                        <img  src={position.img} alt="" />
                    </div> 
                  <div className='midle-part'>  
                            <b style={{fontSize:'20px'}}>{position.name}</b> <br/>
                            <del aria-hidden='true' style={{fontSize:'25px',color:'#c6c6c6'}}>{position.oldPrice}</del>
                            <div>
                            <b style={{fontSize:'20px'}}>{position.price}</b> 
                            <button style={{position:'absolute',right:0,cursor:'pointer'}}>Подробнее</button>
                            </div>
                  </div>
                  
                   
                </div> 
            </div>
        )
    
}