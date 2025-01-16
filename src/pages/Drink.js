// import { Link } from 'react-router-dom';

import useFetch from "react-fetch-hook";

function DrinkPage() {
    const name = new URLSearchParams(window.location.search).get('name');

    const { data: posts, isLoading, error } = useFetch(`http://15.204.235.67:8080/api/v1/drinks?query=${name}&strict=1}`);

    if (isLoading) {
        console.log("loading")
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error: {error}</h1>
    }

    console.log(posts);
    const props = posts[0];

    return (
        <div className={'w-full h-auto flex'}>
            <div className="flex flex-col items-center border-solid border-text border-8 rounded-3xl m-4 w-full bg-1">
                <div className={'flex flex-row gap-10 mt-4 flex-wrap items-center justify-center'}>
                    <h1 className={'text-6xl my-0 ml-2'}>{props.name}</h1>
                    <div
                        className="flex items-center justify-center w-[120px] aspect-square left-2 top-2 border-text border-8 rounded-full border-solid overflow-hidden z-10 bg-2 mr-2">
                        <img
                            src={`/images/${props.img}`}
                            alt={props.name}
                            className={'w-[90%]'}
                        />
                    </div>
                </div>
                <div className={'flex flex-row flex-wrap justify-evenly w-full'}>
                    <div className={'flex flex-col items-center w-[400px]'}>
                        <h1 className={'text-center'}>Instructions</h1>
                        {
                            props.instructions.split('\n').map((instruction, index) => (
                                <p key={index} className={'text-center text-xl w-1/2 mt-0'}>{instruction}</p>
                            ))
                        }
                    </div>
                    <div className={'flex flex-col w-[400px]'}>
                        <h1 className={'text-center'}>Ingredients</h1>
                        <ul className="inline-block text-center list-inside mt-0">
                            {
                                props.ingredients.map((ingredient, index) => (
                                    <li key={index} className={'text-xl'}>{ingredient.name + ' : ' + ingredient.quantity}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={'flex flex-col w-[400px]'}>
                        <h1 className={'text-center'}>Preferred Glass</h1>
                        <p className={'text-center text-xl m-0'}>{props.glass}</p>
                    </div>
                </div>

                <br />

            </div>
        </div>
    );
}

export default DrinkPage;