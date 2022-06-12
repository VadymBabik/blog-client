import type { NextPage } from 'next';
import { Header } from '../components/Header';
import AddPostForm from "../components/Post/Forns/AddpostForm/AddPostForm";

const AddPost: NextPage = () => {
  return (
    <>
      <Header />
      <div className="bg-cyan-50">
        <div className="container mx-auto">
          <AddPostForm/>
        </div>
      </div>
    </>
  );
};

export default AddPost;
