import React, { useState, useEffect } from 'react';

export default function GetImage() {
    const [pages, setPages] = useState([]);
    const chapterId = '0365f94d-4d54-4f2b-a6f2-3476f97279a7';

    useEffect(() => {
        async function fetchPages() {
            const pages = await getMangaPages(chapterId);
            setPages(pages);
        }

        fetchPages();
    }, [chapterId]);

    return (
        <div>
            {pages.length > 0 ? (
                pages.map((pageUrl, index) => (
                    <img key={index} src={pageUrl} alt={`Manga Page ${index + 1}`} />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

async function getMangaPages(chapterId) {
    const response = await fetch(`https://api.mangadex.org/at-home/server/${chapterId}`);
    const data = await response.json();

    const baseUrl = data.baseUrl;
    const hash = data.chapter.hash;
    const pages = data.chapter.data;

    const pageUrls = pages.map(page => `${baseUrl}/data/${hash}/${page}`);
    return pageUrls;
}
