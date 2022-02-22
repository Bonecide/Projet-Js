import Grid from '@mui/material/Grid';
import CatalogPosition from './CatalogPosition';


export default function Catalog () {

    const positions = [{
        id : 1,
        name: 'Свежеобжаренный Кофе',
        img: '/img/coffee-stain.png'
        },
        {
            id : 2,
            name: 'Чай и кофейные напитки',
            img: '/img/tea.png'
        },
        {
            id : 3,
            name: 'Продукция для вендинга',
            img: '/img/coffee-machine.png'
        },
        {
            id : 4,
            name: 'Здоровое питание',
            img: '/img/kasha.png'
        }
    ]

    return (
        <div className="container">
            <h2>Каталоги нашей продукции</h2>
            <Grid container
            columns={{xs: 3, sm: 6, md: 12}}
            spacing={3}
            sx={{margin:"0 auto"}}
            >
            {positions.map((position) =>(
                     <CatalogPosition position={position} />
            ))}
            </Grid>
        </div>
    );
}