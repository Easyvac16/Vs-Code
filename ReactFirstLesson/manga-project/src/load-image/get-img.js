import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./get-image.css";
import Modal from '../modal/modal-chapters';

export default function ChapterReader() {
    const { mangaId, chapterId } = useParams();
    const [chapter, setChapter] = useState(null);
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [chapters, setChapters] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchChapter() {
            const chapterResponse = await fetch(`https://api.mangadex.org/chapter/${chapterId}`);
            const chapterData = await chapterResponse.json();
            setChapter(chapterData.data);

            const serverResponse = await fetch(`https://api.mangadex.org/at-home/server/${chapterId}`);
            const serverData = await serverResponse.json();
            const baseUrl = serverData.baseUrl;
            const hash = serverData.chapter.hash;
            const pagesData = serverData.chapter.data;
            const pageUrls = pagesData.map(page => `${baseUrl}/data/${hash}/${page}`);

            setPages(pageUrls);

            const allChaptersResponse = await fetch(`https://api.mangadex.org/chapter?manga=${mangaId}&limit=100`);
            const allChaptersData = await allChaptersResponse.json();
            setChapters(allChaptersData.data);

            setLoading(false);
        }

        fetchChapter();
    }, [chapterId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!chapter) {
        return <p>No chapter data available.</p>;
    }

    const currentIndex = chapters.findIndex(ch => ch.id === chapterId);
    const previousChapterId = currentIndex > 0 ? chapters[currentIndex - 1].id : null;
    const nextChapterId = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1].id : null;

    const handleChapterSelect = (id) => {
        navigate(`/manga/${mangaId}/chapter/${id}`);
        setModalOpen(false);
    };

    const handlePreviousChapter = () => {
        if (previousChapterId) {
            navigate(`/manga/${mangaId}/chapter/${previousChapterId}`);
        }
    };

    const handleNextChapter = () => {
        if (nextChapterId) {
            navigate(`/manga/${mangaId}/chapter/${nextChapterId}`);
        }
    };

    return (
        <div className="reader">
            <h1>{chapter.attributes.title || `Chapter ${chapter.attributes.chapter}`}</h1>
            <div className="pages-container">
                {pages.map((url, index) => (
                    <img key={index} src={url} alt={`Page ${index + 1}`} className="page-image" />
                ))}
            </div>
            <div className="navigation-buttons">
                {previousChapterId && (
                    <button className="previous-chapter-button" onClick={handlePreviousChapter}>
                        Previous Chapter
                    </button>
                )}
                {nextChapterId && (
                    <button className="next-chapter-button" onClick={handleNextChapter}>
                        Next Chapter
                    </button>
                )}
            </div>
            <button className="select-chapter-button" onClick={() => setModalOpen(true)}>
                Select Another Chapter
            </button>
            <button className="back-to-manga-button" onClick={() => navigate(`/manga/${mangaId}`)}>
                Back to Manga Info
            </button>
            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                chapters={chapters}
                onChapterSelect={handleChapterSelect}
            />
        </div>
    );
}
