import { ImagesGrid } from 'polotno/side-panel';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { InputGroup } from '@blueprintjs/core';
import { getImageSize } from 'polotno/utils/image';
import { useSelector } from 'react-redux';

export const PhotosPanel = observer(({ store }) => {
    const [images, setImages] = React.useState([]);
    const repo = useSelector((state) => state.github.repo);

    async function loadImages() {
        // here we should implement your own API requests
        setImages([]);

        let temp = [];
        for (let i = 0; i < repo.imagesUrl.length; i++) {
            temp.push({ url: repo.imagesUrl[i] });
        }
        setImages(temp);
    }

    React.useEffect(() => {
        loadImages();
    }, []);

    return (
        <div
            style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <InputGroup
                leftIcon="search"
                placeholder="Search..."
                onChange={(e) => {
                    loadImages();
                }}
                style={{
                    marginBottom: '20px',
                }}
            />
            {/* you can create yur own custom component here */}
            {/* but we will use built-in grid component */}
            <ImagesGrid
                images={images}
                getPreview={(image) => image.url}
                onSelect={async (image, pos) => {
                    const { width, height } = await getImageSize(image.url);
                    store.activePage.addElement({
                        type: 'image',
                        src: image.url,
                        width,
                        height,
                        // if position is available, show image on dropped place
                        // or just show it in the center
                        x: pos ? pos.x : store.width / 2 - width / 2,
                        y: pos ? pos.y : store.height / 2 - height / 2,
                    });
                }}
                rowsNumber={2}
                isLoading={!images.length}
                loadMore={false}
            />
        </div>
    );
});
