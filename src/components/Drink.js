import './Drink.css'

const Drink = (props) => {
    props = props.props;

    return (
        <div className={"w-1/2 h-32 flex flex-row items-center justify-between"}>
            <div className={"circle border-primary"}>
                <img className={"aspect-square h-full"} src={props.image} alt={'props.name'}/>
            </div>

            <h1>{props.name}</h1>
            <div className={"flex flex-col items-center"}>
                <p>{props.ingredients + '\n'}</p>
            </div>
        </div>
    )
}

export default Drink;