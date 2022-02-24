import SalesGoodsCatalog from "./SalesGoodsCatalog";
import Grid from '@mui/material/Grid';
export default function SalesGoods(){


    const positions = [{
        id : 1,
        name: 'Matcha (чай зеленый матча)',
        oldPrice: '350р',
        price:'250р',   
        img: '/img/packet-of-tea.svg'
        },
        {
            id : 2,
            name: 'MILK OOLONG',
            oldPrice: '350р',
            price:'250р', 
            img: '/img/packet-of-tea.svg'
        },
        {
            id : 3,
            name: 'Peru GR1 1000 г',
            oldPrice: '350р',
            price:'250р', 
            img: '/img/packet-of-tea.svg'
        },
        
    ]

    return(
        <div className="container">

            <div style={{textAlign:'end'}}>
                <h2>Товары со скидкой</h2>
                <p>Наша компания предлагает покупать товар со скидкой не только в дни распродаж <br/>   
                или в течение действия ограниченных предложений, но и пользоваться скидками постоянно!</p>
            </div>
            
        <div>
            <Grid justifyContent='center' container spacing={3}>
            {positions.map((position) =>(
                <Grid flexWrap='wrap' key={position.id} item   >
                     <SalesGoodsCatalog position={position} />
                </Grid>
            ))}
            </Grid>
        </div>
    

        </div>
    )
}