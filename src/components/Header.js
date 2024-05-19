import logo from '../images/logo.png';
import './Header.css';

function Header() {
    return (
        <div className="flex flex-row justify-evenly items-center w-full">
            <div className="border-solid border-4 rounded-full w-16 p-1 bg-2">
                <img
                    src={logo} alt="logo"
                    className="max-w-full"
                />
            </div>

            <h1 className={"text-5xl m-0"}>Bar<i>tend</i></h1>
        </div>
    );
}

export default Header;