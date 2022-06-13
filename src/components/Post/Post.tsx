import { IPost } from './PostTypes';
import Image from 'next/image';

const Post = ({ image, title }: IPost) => {
  return (
    <li className="w-80 bg-white flex flex-col rounded-3xl hover:scale-105 hover:drop-shadow-md">
      <Image
        className="bg-cover bg-center h-80 w-80 rounded-t-3xl"
        src={`http://localhost:3001/${image}`}
        width={200}
        height={200}
        alt={title}
        placeholder={'empty'}
      />
      <h2 className="py-2 px-4  truncate">{title}</h2>
    </li>
  );
};

export default Post;
