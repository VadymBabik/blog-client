import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPost } from '../../components/Post/PostTypes';
import post from '../../components/Post/Post';

export const postApi = createApi({
  reducerPath: 'api/posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (build) => ({
    getPosts: build.query<IPost[], any>({ query: () => 'post' }),
    createPost: build.mutation<IPost, any>({
      query: (post) => ({
        url: `post`,
        method: 'POST',
        body: post
      })
    })
  })
});

export const { useGetPostsQuery, useCreatePostMutation } = postApi;
