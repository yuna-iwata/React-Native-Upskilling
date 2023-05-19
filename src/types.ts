export type TouchedPixels = {
  pixelColour: string;
}[][];

export type Post = {
  id: string;
  username: string;
  title: string;
  likes: string;
  comments: string;
  touchedPixels: TouchedPixels;
};
