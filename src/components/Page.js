import './Page.css';
import Drink from './Drink';
import margaritaImg from '../images/margarita.png';
import mojitoImg from '../images/mojito.png';
import cosmoImg from '../images/cosmo.png';
import ginTonicImg from '../images/gin-tonic.png';

function Page() {
    const marg = {
        'name': 'Margarita',
        'ingredients': {
            'tequila': '1.5oz',
            'cointreau': '0.75oz',
            'lime juice': '0.75oz'
        },
        'image': margaritaImg,
    }

    const mojito = {
        'name': 'Mojito',
        'ingredients': {
            'white rum': '2oz',
            'simple syrup': '0.5oz',
            'lime juice': '0.5oz',
            'club soda/sparkling water': ' to fill'
        },
        'image': mojitoImg,
    }

    const cosmo = {
        'name': 'Cosmo',
        'ingredients': {
            'vodka': '2oz',
            'contreau': '1oz',
            'lime juice': '0.5oz',
            'cranberry juice': ' a splash'
        },
        'image': cosmoImg,
    }

    const gintonic = {
        'name': 'Gin and Tonic',
        'ingredients': {
            'gin': '2oz',
            'tonic water': '4oz',
            'lime': 'squeeze'
        },
        'image': ginTonicImg,
    }

    return (
        <div className="w-full flex flex-col items-center py-4">
            <input
                type={"text"}
                className={"bg-2 rounded-full border-hidden text-color text-3xl text-text p-4"}
                placeholder={"Search..."}
            />
            <div className={"flex flex-col w-full items-center"}>
                <Drink props={marg} />
                <Drink props={mojito} />
                <Drink props={cosmo} />
                <Drink props={gintonic} />
            </div>
        </div>
    );
}

export default Page;