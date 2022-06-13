import React from 'react';
import NextLinkHelper from '../../helpers/lincs/NextLinkHelper/NextLinkHelper';
import { Constants } from '../../helpers/constants';
// import AddPostModalButton from '../AddPost/modalButtons/AddPostModalButton/AddPostModalButton';
import dynamic from 'next/dynamic';

const AddPostModalButton = dynamic(
  import('../AddPost/modalButtons/AddPostModalButton/AddPostModalButton'),
  {
    ssr: false
  }
);

const Header = () => {
  return (
    <>
      <div className="container mx-auto flex flex-row justify-between items-center">
        <NextLinkHelper
          href={Constants.routs.root}
          className="py-4 tracking-wider text-2xl text-cyan-600 font-bold antialiased hover:subpixel-antialiased"
        >
          BLOG
        </NextLinkHelper>
        <AddPostModalButton />
        <NextLinkHelper
          href={Constants.routs.addPost}
          className="text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-1 rounded-md border-2 border-transparent active:border-black"
        >
          Add post
        </NextLinkHelper>
      </div>
    </>
  );
};

export default Header;
