import { useLoaderData } from "react-router-dom";
import ArtsCard from "../../Components/ArtsCard/ArtsCard";
import { useState } from "react";

const Home = () => {
    const loadedArts = useLoaderData();
    const [arts, setArts] = useState(loadedArts);


    return (
        <div>
            <h2 className="text-3xl text-center font-bold">arts length: {arts?.length}</h2>

            <div className="grid md:grid-cols-3 w-full place-items-center min-h-screen">
                {
                    arts.map(art => <ArtsCard key={art._id} art={art} arts={arts} setArts={setArts}></ArtsCard>)
                }
            </div>
        </div>
    );
};

export default Home;