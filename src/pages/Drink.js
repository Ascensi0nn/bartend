import { Link } from 'react-router-dom';
import margaritaImg from "../images/margarita.png";

function DrinkPage() {

    const name = new URLSearchParams(window.location.search);

    const props = {
        'name': 'Margarita',
        'ingredients': {
            'tequila': '1.5oz',
            'cointreau': '0.75oz',
            'lime juice': '0.75oz'
        },
        'image': margaritaImg,
    }

    return (
        <div
            id={props.name + '-info'}
            className={'w-screen h-auto flex '}
        >
            <div className="flex flex-col items-center border-solid border-text border-8 rounded-3xl m-4 w-full bg-1">
                <div className="flex items-center justify-center w-[100px] fixed left-8 top-8">
                    <img
                        src={props.image}
                        alt={'props.name'}
                        className={'w-full h-full'}
                    />
                </div>

                <h1 className={'text-6xl'}>{props.name}</h1>
                <div className={'flex flex-row flex-wrap justify-evenly w-full'}>
                    <div className={'flex flex-col'}>
                        <h1 className={'text-center'}>Instructions</h1>
                    </div>
                    <div className={'flex flex-col'}>
                        <h1 className={'text-center'}>Ingredients</h1>
                        <ul className="mt-0">
                            {
                                Object.keys(props.ingredients).map((ingredient) => (
                                    <li className>{ingredient + ' : ' + props.ingredients[ingredient]}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={'flex flex-col'}>
                        <h1 className={'text-center'}>Preferred Glass</h1>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default DrinkPage;