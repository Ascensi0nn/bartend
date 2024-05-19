import './Drink.css'
import { Link } from 'react-router-dom';

const Drink = (props) => {
    props = props.props;

    return (
        <Link
            id={props.name}
            className={"container bg-1"}
            to={`/drink?${props.name}`}
        >
            <div className="flex flex-row justify-around items-center mx-4 px-4 gap-2">
                <div className={"border-primary aspect-square h-5/6 max-h-[100px]"}>
                    <img className={"aspect-square h-full"} src={props.image} alt={'props.name'}/>
                </div>
                <h1 className={"max-w-1/2 text-center"}>{props.name}</h1>
            </div>

        </Link>
    )
}

export default Drink;