import './Drink.css'
import {useState} from "react";

const Drink = (props) => {
    props = props.props;

    const [state, setState] = useState('closed');

    function expand() {
        const drink = document.getElementById(props.name);
        const info = document.getElementById(props.name + '-info');

        if (state === 'closed') {
            setState('open');

            drink.classList.add('drink-open');
            info.classList.add('info-open');
        }
        else {
            setState('closed');

            drink.classList.remove('drink-open');
            info.classList.remove('info-open');
        }
    }

    return (
        <div
            id={props.name}
            className={"container bg-1"}
            onClick={expand}
        >
            <div className="flex flex-row justify-around items-center mx-4 px-4 gap-2">
                <div className={"border-primary aspect-square h-5/6 max-h-[100px]"}>
                    <img className={"aspect-square h-full"} src={props.image} alt={'props.name'}/>
                </div>
                <h1 className={"max-w-1/2 text-center"}>{props.name}</h1>
            </div>
            <div
                id={props.name + '-info'}
                className={'flex flex-col items-center'}
            >
                <h3 className={'text-center'}>Ingredients</h3>
                <ul className="mt-0">
                    {
                        Object.keys(props.ingredients).map((ingredient) => (
                            <li className>{ingredient + ' : ' + props.ingredients[ingredient]}</li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

export default Drink;