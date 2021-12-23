import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import CogComponent from '../components/cogComponent';
import StylingComponent from '../components/stylingComponent';
import SectionsEdditor from '../components/stylingComponent/sectionEdditor';

import './mainPage.css';

const MainPage = observer(() => {
    const mainStore = useContext(Context);

    return (
        !mainStore.isClicked && !mainStore.isChosenSection ?
        <CogComponent /> :
        mainStore.isClicked && !mainStore.isChosenSection ?
        <StylingComponent /> :
        <SectionsEdditor />
    );
});

export default MainPage;