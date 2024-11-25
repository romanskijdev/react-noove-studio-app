import './App.scss';
import {Scrollbar} from 'smooth-scrollbar-react';

import Header from "./pages/header.jsx";
import Main from "./pages/main_page"
import Footer from "./pages/footer"
import {Outlet, Route, Routes, useLocation} from "react-router-dom";
import {Switch} from "react-router-dom";
import Brief from "./pages/brief";
import Privacy from "./pages/privacy";
import { motion, AnimatePresence } from 'framer-motion';

/*
    -- Web Server --
    login: romanzabolotskij0@gmail.com
    pass: 4pdlVXatda\eAq
 */

const PageOne = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Page One</h1>
        </motion.div>
    );
};

const PageTwo = () => {
    return (
        <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
            <h1>Page Two</h1>
        </motion.div>
    );
};


function App() {
    let location = useLocation();

    return (
            <Routes>
                <Route path='/' element={<Template/>}>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/brief' element={<Brief/>}/>
                    <Route path='/privacy' element={<Privacy/>}/>
                </Route>
            </Routes>
    );
}

function Template() {
    return(
        <div className='App'>
            <Scrollbar
                className='scrollbar'
                damping={0.06}
                thumbMinSize={20}
                renderByPixels={true}
                alwaysShowTracks={false}
                continuousScrolling={true}
                plugins={{
                    overscroll: {
                        effect: 'bounce',
                    },
                }}
            >
                <Header/>
                <Outlet/>
                <Footer></Footer>
            </Scrollbar>
        </div>
    );
}


export default App;
