import './Page.css';
import Drink from './Drink';
import margarita from '../images/margarita.png';

function Page() {
    const marg = {
        'name': 'Margarita',
        'ingredients': [
            'tequila',
            'cointreau',
            'lime juice'
        ],
        'image': margarita,
    }

    return (
        <div className="bg-background rounded-3xl w-full flex flex-col items-center py-4">
            <input
                type={"text"}
                className={"bg-primary rounded-full border-hidden text-color text-6xl text-text px-4"}
                placeholder={"Search..."}
            />
            <div className={"flex flex-col w-full items-center"}>
                <Drink props={marg} />
                <Drink props={marg} />
            </div>
        </div>
    );
}

export default Page;