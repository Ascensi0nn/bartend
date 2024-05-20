import './Page.css';
import Drink from './Drink';

import useFetch from "react-fetch-hook";

function Page() {
    const { data: posts, isLoading, error } = useFetch('http://localhost:8080/api/v1/drinks');

    if (isLoading) {
        console.log("loading")
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <div className="w-full flex flex-col items-center py-4">
            <input
                type={"text"}
                className={"bg-2 rounded-full border-hidden text-color text-3xl text-text p-4"}
                placeholder={"Search..."}
            />
            <div className={"flex flex-row flex-wrap gap-4 w-full items-start justify-center my-4"}>
                {
                    posts.map((post) => (
                        <Drink props={post} />
                    ))
                }
            </div>
        </div>
    );
}

export default Page;