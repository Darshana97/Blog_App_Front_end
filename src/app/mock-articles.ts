import { Article } from "./article";

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "My first article",
    content: "",
    description: "This is my first article!. It's great. Please read it. :)",
    key: "my-first-article",
    date: new Date(),
    // imageUrl: "http://angular.io/asserts/images/logos/angular/angular.png",
    imageUrl: "https://picsum.photos/800/300",
  },
  {
    id: 2,
    title: "The second article",
    content: "",
    description: "Also a great article",
    key: "my-second-article",
    date: new Date(),
    // imageUrl:"http://angular.io/asserts/images/logos/angular/angular-solidBlack.png",
    imageUrl: "https://picsum.photos/800/300",
  },
];
