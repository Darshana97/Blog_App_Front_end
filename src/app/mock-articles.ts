import { Article } from "./article";

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "My first article",
    content: "",
    description: "This is my first article!. It's great. Please read it. :)",
    key: "my-first-article",
    date: new Date(),
    imageUrl: "http://angular.io/asserts/images/logos/angular/angular.png",
    // imageUrl:"https://www.google.com/search?q=angular+images&safe=strict&sxsrf=ALeKk01P7JcrJJE9ZPIIJvEmQErL_8OZog:1589427529914&tbm=isch&source=iu&ictx=1&fir=3WGESIZ4Fn7ILM%253A%252C1ECDCQiZn-_BPM%252C_&vet=1&usg=AI4_-kTf9jaexjWQllEDx4gMmjTtgY4Mow&sa=X&ved=2ahUKEwik9MP6trLpAhXYXSsKHW7gDA8Q9QEwAHoECAcQIw#imgrc=e3Hi4Q4pfozoNM"
  },
  {
    id: 2,
    title: "The second article",
    content: "",
    description: "Also a great article",
    key: "my-second-article",
    date: new Date(),
    imageUrl:
      "http://angular.io/asserts/images/logos/angular/angular-solidBlack.png",
  }
];
