
import { Grid } from '@mui/material'
import './sectionTwo.css'

export default function CatalogPosition ({position}) {
    return (
    <Grid key={position.id} item xs={3} sx={{padding: "0px !important"}}>
        <div style={{height: "380px", width: "270px", boxShadow: '0 0 21.2553px rgb(146 146 146 / 20%)', borderRadius: '10px'}}>
            <div className="section-two__position" style={{position: "relative", height: "100%", width: "90%", display: 'grid', gridTemplateRows: '60% 20% 20%', justifyContent: "center", alignItems: 'center', margin: '0 auto' }}>
                <img style={{width: "70%", justifySelf:"center"}} src={position.img} alt="Кофе-машинка" />
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>{position.name}</p>
                <button style={{width: '80%', maxHeight: '40px', justifySelf:"center", }}>Купить</button>
            </div>
        </div>
    </Grid>
    )
}