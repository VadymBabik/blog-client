export const enum PostFields {
  TITLE = 'title',
  CONTENT = 'content',
  IMAGE = 'image'
}

export type PostId = string;
export type PostTitle = string;
export type PostContent = string;
export type PostImage = string;

export interface IPost {
  id?: PostId;
  title: PostTitle;
  content?: PostContent;
  image: PostImage;
}
