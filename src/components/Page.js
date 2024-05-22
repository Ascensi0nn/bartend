import './Page.css';
import Drink from './Drink';
import {useEffect, useState} from "react";

function Page() {
    const [props, setProps] = useState([]);

    function ReloadDrinks() {
        const search = document.getElementById('search');
        let searchVal = "";

        if (search != null && search.value !== "") {
            searchVal = `?query=${search.value}&strict=1`;
        }

        fetch(`http://localhost:8080/api/v1/drinks${searchVal}`).then(res => res.json()).then(data => { setProps(data) });
    }

    useEffect(() => {
        ReloadDrinks();
    }, []);

    return (
        <div className="w-full flex flex-col items-center py-4">
            <input
                id={'search'}
                type={"text"}
                className={"bg-2 rounded-full border-hidden text-color text-3xl text-text p-4"}
                placeholder={"Search..."}
                onChange={ReloadDrinks}
            />
            <div className={"flex flex-row flex-wrap gap-4 w-full items-start justify-center my-4"}>
                {
                    props.map((prop, index) => (
                        <Drink key={index} props={prop} />
                    ))
                }
            </div>
        </div>
    );
}

export default Page;