import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Article } from "./article";
import { ARTICLES } from "./mock-articles";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:8000/articles");
  }

  getArticle(key: string): Observable<Article> {
    const articles: Article[] = ARTICLES.filter((a) => a.key === key);
    return of(articles[0]);
  }
}
