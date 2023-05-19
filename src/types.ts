export type TouchedPixels = {
  pixelColour: string;
}[][];

export type Post = {
  id: string;
  username: string;
  title: string;
  likes: number;
  comments: number;
  touchedPixels: TouchedPixels;
};
