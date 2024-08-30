import React, { useState, useEffect } from 'react';
import Slider from '../Slider/App';
import './get-mangas.css';

const genreList = {
    Romance: '423e2eae-a7a2-4a8b-ac03-a8351462d71d',
    Isekai: 'ace04997-f6bd-436e-b261-779182193d3d',
    Fantasy: 'cdc58593-87dd-415e-bbc0-2ec27bf404cc',
    Reincarnation: '0bc90acb-ccc1-44ca-a34a-b9f3a73259d0'
};


export default function RandomMangaList({ genre }) {
    const [mangaList, setMangaList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMangaList() {
            let apiUrl = 'https://api.mangadex.org/manga?limit=100&includes[]=cover_art';

            const genreId = genreList[genre];

            if (genreId) {
                apiUrl += `&includedTags[]=${genreId}`;
            }

            let response = await fetch(apiUrl);
            const data = await response.json();


            const randomMangas = getRandomMangas(data.data, 20);
            setMangaList(randomMangas);
            setLoading(false);

        }

        fetchMangaList();
    }, []);

    function getRandomMangas(mangaArray, count) {
        return mangaArray.sort(() => 0.5 - Math.random()).slice(0, count);
    }


    return (
        <div class="manga-slider">
            <h1>{genre}</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (

                <Slider mangas={mangaList} />

            )}
        </div>
    );
}

