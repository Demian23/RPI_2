import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';

function Gallery(props) {

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    return (
        <div>
            {props.photos.map((src, index) => (
                <img
                    src={ src }
                    onClick={ () => openImageViewer(index) }
                    width="500"
                    key={ index }
                    style={{ margin: '2px' }}
                    alt=""
                />
            ))}

            {isViewerOpen && (
                <ImageViewer
                    src={ props.photos }
                    currentIndex={ currentImage }
                    disableScroll={ false }
                    closeOnClickOutside={ true }
                    onClose={ closeImageViewer }
                />
            )}
        </div>
    );
}

export default Gallery;