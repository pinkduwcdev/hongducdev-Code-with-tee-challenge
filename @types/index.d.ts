interface IUser {
  avatar: string;
  name: string;
}

interface IBlogCard {
  category: string;
  title: string;
  description: string;
  user: IUser;
  time: string;
  image: string;
  backgroundColor: string[];
}
