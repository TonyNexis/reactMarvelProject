import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


<<<<<<< HEAD
// import { MainPage, ComicsPage, Page404 } from "../pages";
=======
import { MainPage, ComicsPage, Page404, SingleComicPage } from "../pages";
>>>>>>> b23104cbed82785127fb5283a7bf2af588747d0b
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));
const SinglePage = lazy(() => import('../pages/SinglePage'));

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                    <Routes>
<<<<<<< HEAD
                        <Route exact path='/' element={<MainPage/>}/>
                        <Route exact path='/comics' element={<ComicsPage/>}/>
                        <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType="comic" />} />
                        <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType="character" />} />
                        <Route exact path='*' element={<Page404/>}/>
=======
                        <Route end path='/' element={<MainPage/>}/>
                        <Route end path='/comics' element={<ComicsPage/>}/>
                        <Route end path='/comics/:comicId' element={<SingleComicPage/>}/>
                        <Route end path='*' element={<Page404/>}/>
>>>>>>> b23104cbed82785127fb5283a7bf2af588747d0b
                    </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;