import Page from "../components/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="w-screen flex flex-col items-center gap-4 mt-4">
            <Header />
            <Page/>
            <Footer />
        </div>
    )
}

export default Home;