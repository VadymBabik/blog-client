import type { NextPage } from 'next';

import { Header } from '../components/Header';
import { GalleryPosts } from '../components/GalleryPosts';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="bg-cyan-50">
        <div className="container mx-auto">
          <GalleryPosts />
        </div>
      </div>
    </>
  );
};

export default Home;
