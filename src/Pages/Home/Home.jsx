import { useLoaderData } from "react-router-dom";
import ArtsCard from "../../Components/ArtsCard/ArtsCard";

const Home = () => {
    const arts = useLoaderData();

    return (
        <div>
            <h2 className="text-3xl text-center font-bold">arts length: {arts?.length}</h2>

            <div className="grid md:grid-cols-3 w-full place-items-center min-h-screen">
                {
                    arts.map(art => <ArtsCard key={art._id} art={art}></ArtsCard>)
                }
            </div>
        </div>
    );
};

export default Home;