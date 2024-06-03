export interface IUser {
  avatar: string;
  name: string;
  job: string;
}

export interface IRatingCard {
  id: number;
  comment: string;
  rating: number;
  user: IUser;
}