import {Post} from '../types';
import React, {createContext, useState} from 'react';
import PixelArt from '../data/feed.json';

export const PostContext = createContext<PostContext>({
  usersPixelArt: undefined!,
  setUsersPixelArt: undefined!,
});

interface PostContext {
  usersPixelArt: Post[];
  setUsersPixelArt: React.Dispatch<React.SetStateAction<Post[]>>;
}

export const PostProvider = ({children}: {children: React.ReactNode}) => {
  const dummyUsersPixelArt = PixelArt.filter(item => {
    return item.username === 'ghost';
  }); //filter out correct users posts
  const [usersPixelArt, setUsersPixelArt] = useState(dummyUsersPixelArt);
  console.log('yoooo', usersPixelArt);

  return (
    <PostContext.Provider value={{usersPixelArt, setUsersPixelArt}}>
      {children}
    </PostContext.Provider>
  );
};

export function usePostContext() {
  return React.useContext(PostContext);
}
