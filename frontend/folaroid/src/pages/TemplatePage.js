import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Flex from '../components/template/flex/Flex';
import Gallery from '../components/template/gallery/Gallery';
import Music from '../components/template/music/Music';
import Space from '../components/template/space/Space';
import { getTemplateThunk } from '../modules/template';

const TemplatePage = () => {
    const { userNo, pfNo } = useParams();
    const dispatch = useDispatch();
    const { template } = useSelector((state) => state.template);
    const [items, setItems] = useState(null);

    useEffect(() => {
        dispatch(getTemplateThunk({ userNo, pfNo }));
    }, [dispatch, userNo, pfNo]);

    useEffect(() => {
        if (template) {
            let temp = [];
            const introObject = {
                pjtTitle: '자기소개',
                pjtOneImageLocation:
                    template.intro.introImage.introImageLocation,
                intro: template.intro,
            };
            temp.push(introObject);
            let j = 0;
            for (let i = 0; i < 7; i++) {
                temp.push(template.projects[j]);
                j = j < template.projects.length - 1 ? j + 1 : 0;
            }
            setItems(temp);
        }
    }, [template]);

    switch (template.portfolioTemplatesNo) {
        case 1:
            return <>{items && <Music items={items} />}</>;
        case 2:
            return <>{items && <Space items={items} />}</>;
        case 3:
            return <Flex intro={template.intro} items={items} />;
        case 4:
            return <Gallery intro={template.intro} items={items} />;
        default:
            return <div></div>;
    }
};

export default TemplatePage;
