import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchNewsService {

  constructor(private http: HttpClient) { }

  fetchTopNews(){
    return this.http.get<any>("https://newsapi.org/v2/top-headlines?country=in&apiKey=7956fe3e0ec643a683cfed973b78504a", {observe: "body"})
  }
}
