import React from 'react';
import './modal.css';

const Modal = ({ isOpen, onClose, chapters, onChapterSelect }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                <h2>Select a Chapter</h2>
                <div className="chapter-list">
                    {chapters.map(chapter => (
                        <div
                            key={chapter.id}
                            className="chapter-item"
                            onClick={() => onChapterSelect(chapter.id)}
                        >
                            {chapter.attributes.title || `Chapter ${chapter.attributes.chapter}`}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;
