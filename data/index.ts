import { IRatingCard } from "@/@types";

export const ratingCardList: IRatingCard[] = [
  {
    id: 0,
    comment:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    rating: 5,
    user: {
      avatar: "/users/user1.png",
      name: "James K.",
      job: "Traveler",
    },
  },
  {
    id: 1,
    comment:
      "Items That I ordered were the best investment I ever made. I can't say enough about your quality service.",
    rating: 5,
    user: {
      avatar: "/users/user2.png",
      name: "Suzan B.",
      job: "UI Designer",
    },
  },
  {
    id: 2,
    comment:
      "Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.",
    rating: 5,
    user: {
      avatar: "/users/user3.png",
      name: "Megen W.",
      job: "UI Designer",
    },
  },
];
