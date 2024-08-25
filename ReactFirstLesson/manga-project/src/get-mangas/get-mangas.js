import React, { useState, useEffect } from 'react';
import Slider from '../Slider/App';

export default function RandomMangaList() {
    const [mangaList, setMangaList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMangaList() {
            const response = await fetch('https://api.mangadex.org/manga?limit=100&includes[]=cover_art');
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
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (<Slider mangas={mangaList} />

            )}
        </div>
    );
}

