import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '..';
import CogComponent from '../components/cogComponent';
import StylingComponent from '../components/stylingComponent';

import './mainPage.css';

const MainPage = observer(() => {
    const mainStore = useContext(Context);

    return (
       !mainStore.isClicked ?
       <CogComponent /> :
       <StylingComponent />
    );
});

export default MainPage;