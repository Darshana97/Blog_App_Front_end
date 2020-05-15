import { Article } from "./article";

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "My first article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus metus at enim placerat, rutrum tempor ipsum hendrerit. In eget erat magna. Morbi lacinia sollicitudin suscipit. Duis ullamcorper diam sed finibus pulvinar. Nulla nec magna dignissim, tristique elit et, commodo dui. Pellentesque vitae ex euismod, maximus massa a, aliquam eros. Suspendisse potenti. Nunc purus lectus, scelerisque quis fringilla nec, facilisis lobortis ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    description: "This is my first article!. It's great. Please read it. :)",
    key: "my-first-article",
    date: new Date(),
    // imageUrl: "http://angular.io/asserts/images/logos/angular/angular.png",
    imageUrl: "https://picsum.photos/800/300",
  },
  {
    id: 2,
    title: "The second article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus metus at enim placerat, rutrum tempor ipsum hendrerit. In eget erat magna. Morbi lacinia sollicitudin suscipit. Duis ullamcorper diam sed finibus pulvinar. Nulla nec magna dignissim, tristique elit et, commodo dui. Pellentesque vitae ex euismod, maximus massa a, aliquam eros. Suspendisse potenti. Nunc purus lectus, scelerisque quis fringilla nec, facilisis lobortis ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    description: "Also a great article",
    key: "my-second-article",
    date: new Date(),
    // imageUrl:"http://angular.io/asserts/images/logos/angular/angular-solidBlack.png",
    imageUrl: "https://picsum.photos/800/300",
  },
];
