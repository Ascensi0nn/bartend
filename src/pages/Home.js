import Header from "../components/Header";
import Page from "../components/Page";

function Home() {
    return (
        <div className="w-screen flex flex-col items-center gap-4 mt-4">
            <Header/>
            <Page/>
            <h2>bottom</h2>
        </div>
    )
}

export default Home;