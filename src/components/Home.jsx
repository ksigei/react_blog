// create a homepage component that imports header and blog component and displays them
import React from 'react';
import Header from './Header';
import Blog from './Blog';

const Home = () => {
    return (
        <div>
            <Header />
            <Blog />
        </div>
    );
}
// export component
export default Home;