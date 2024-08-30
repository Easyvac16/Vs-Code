import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./manga-info.css";

export default function MangaInfo() {
    const { mangaId } = useParams();
    const [manga, setManga] = useState(null);
    const [chapterCount, setChapterCount] = useState('N/A');
    const [chapters, setChapters] = useState([]);
    const [activeTab, setActiveTab] = useState('details');

    function getCoverUrl(manga) {
        const coverArt = manga.relationships?.find(rel => rel.type === 'cover_art');
        if (coverArt && coverArt.attributes && coverArt.attributes.fileName) {
            return `https://uploads.mangadex.org/covers/${manga.id}/${coverArt.attributes.fileName}`;
        }
        return '';
    }

    useEffect(() => {
        async function fetchManga() {
            const response = await fetch(`https://api.mangadex.org/manga/${mangaId}?includes[]=author&includes[]=artist&includes[]=cover_art&includes[]=tag`);
            const data = await response.json();
            setManga(data.data);

            const chapterData = await fetch(`https://api.mangadex.org/chapter?manga=${mangaId}&limit=100`);
            const chapterJson = await chapterData.json();

            const sortedChapters = chapterJson.data.sort((a, b) => {
                return new Date(a.attributes.createdAt) - new Date(b.attributes.createdAt);
            });


            setChapters(sortedChapters);
            setChapterCount(chapterJson.total);
        }

        fetchManga();
    }, [mangaId]);

    if (!manga) {
        return <p>Loading...</p>;
    }

    const description = manga.attributes.description.en || 'No description available for this manga.';

    return (
        <div className="info-container">
            <h1>{manga.attributes.title.en || 'Manga'}</h1>

            <div className="inner-container">
                <div className="img-container">
                    <img src={getCoverUrl(manga)} alt="Manga Cover" />
                </div>

                <div className="tabs-container">
                    <div className="tabs">
                        <div onClick={() => setActiveTab('details')} className={activeTab === 'details' ? 'active' : ''}><button >
                            Details
                        </button></div>

                        <div onClick={() => setActiveTab('chapters')} className={activeTab === 'chapters' ? 'active' : ''}><button >
                            Chapters
                        </button></div>

                    </div>

                    {activeTab === 'details' && (
                        <div className="detail-container">
                            <h1>Description</h1>
                            <h2>{description}</h2>
                            <p>Status: {manga.attributes.status}</p>
                            <p>Chapters: {chapterCount}</p>
                            <h2>Genres</h2>
                            <ul>
                                {manga.attributes.tags.map(tag => (
                                    <li key={tag.id}>{tag.attributes.name.en}</li>
                                ))}
                            </ul>
                            <h2>Author: {manga.relationships.find(rel => rel.type === 'author').attributes.name}</h2>
                            <h2>Artist: {manga.relationships.find(rel => rel.type === 'artist').attributes.name}</h2>
                        </div>
                    )}

                    {activeTab === 'chapters' && (
                        <div className="chapters">
                            <h1>Chapters</h1>
                            <ul>
                                {chapters.map((chapter, index) => (
                                    <li key={chapter.id}>
                                        <Link to={`/manga/${mangaId}/chapter/${chapter.id}`}>
                                            {chapter.attributes.title || `Chapter ${index + 1}`}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
