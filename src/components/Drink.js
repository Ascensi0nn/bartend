import './Drink.css'
import { Link } from 'react-router-dom';
import Image from './Image'

const Drink = (props) => {
    props = props.props;

    return (
        <Link
            id={props.name}
            className={"container flex items-center bg-1 no-underline"}
            to={`/drink?name=${props.name}`}
        >
            <div className="flex flex-row justify-around items-center mx-4 px-4 gap-2">
                <div className={"border-primary aspect-square max-h-[100px]"}>
                    <Image
                        lowResSrc={`/images/low-${props.img}`}
                        highResSrc={`/images/${props.img}`}
                        alt={props.name}
                    />
                </div>
                <h1 className={"max-w-1/2 text-center m-0 decoration-0 text-4"}>{props.name}</h1>
            </div>
        </Link>
    )
}

export default Drink;