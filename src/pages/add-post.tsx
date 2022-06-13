import dynamic from 'next/dynamic';
import { Fragment } from 'react';

import type { NextPage } from 'next';
import { Header } from '../components/Header';

const AddPostForm = dynamic(
  import('../components/Post/Forns/AddpostForm/AddPostForm'),
  {
    ssr: false
  }
);

const AddPost: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <div className="bg-cyan-50">
        <div className="container mx-auto">
          <AddPostForm />
        </div>
      </div>
    </Fragment>
  );
};

export default AddPost;
