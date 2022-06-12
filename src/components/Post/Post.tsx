import { IPost } from './PostTypes';

const Post = ({ image, title }: IPost) => {
  return (
    <li className="w-80 bg-white flex flex-col rounded-3xl hover:scale-105 hover:drop-shadow-md">
      <div
        className="bg-cover bg-center h-80 w-80 rounded-t-3xl"
        style={{ backgroundImage: `url(http://localhost:3001/${image})` }}
      />
      <h2 className="py-2 px-4  truncate">{title}</h2>
    </li>
  );
};

export default Post;
