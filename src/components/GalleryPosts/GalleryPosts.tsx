import { useGetPostsQuery } from '../../store/product/product';

import { Post } from '../Post';

const GalleryPosts = () => {
  const { data } = useGetPostsQuery('');
  return (
    <>
      <ul className="flex flex-row flex-wrap gap-6 justify-between py-6 h-full min-h-max">
        {data?.map(({ image, title, id }) => (
          <Post key={id} title={title} image={image} />
        ))}
      </ul>
    </>
  );
};

export default GalleryPosts;
