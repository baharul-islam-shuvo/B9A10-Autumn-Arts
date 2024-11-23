import { useLoaderData } from "react-router-dom";
import ArtsCard from "../../Components/ArtsCard/ArtsCard";
import { useState } from "react";
import Hero from "../../Components/Hero/Hero";
import Support from "../../Components/Support/Support";

const Home = () => {
    const loadedArts = useLoaderData();
    const [arts, setArts] = useState(loadedArts);


    return (
        <div>
            <Hero></Hero>
            <Support></Support>
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