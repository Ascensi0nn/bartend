import './Drink.css'

const Drink = (props) => {
    props = props.props;

    return (
        <div className={"container bg-1 w-1/2 flex flex-row justify-around items-center m-4"}>
            <div className={"image-holder border-primary"}>
                <img className={"aspect-square h-full"} src={props.image} alt={'props.name'}/>
            </div>

            <h1>{props.name}</h1>
            <div className={"flex flex-col items-center"}>
                {
                    Object.keys(props.ingredients).map((ingredient) => (
                    <div>{ingredient + ' : ' + props.ingredients[ingredient]}</div>
                    ))
                }
            </div>
            <button className={"bg-2 rounded-full aspect-square h-1/2 text-3xl border-none cursor-pointer"}>
                ...
            </button>
        </div>
    )
}

export default Drink;