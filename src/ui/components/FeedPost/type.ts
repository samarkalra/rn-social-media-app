export type User = {
  id: string;
  image: string;
  name: string;
};

export type Post = {
  id: string;
  createdAt: string;
  User: User;
  description: string;
  image: string;
  numberOfLikes: number;
  numberOfShares: number;
};
