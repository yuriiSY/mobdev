import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { NavigationExtras, Router } from '@angular/router';

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weatherValues: any;
  articles: any = [];

  constructor(public httpClient: HttpClient,private router:Router) {
    this.loadData();
  }


  loadData() { 
    this.httpClient.get(`${API_URL}/top-headlines?country=us&apiKey=${API_KEY}`).subscribe((result:any) => {
      console.log(result);
      this.articles = result.articles;
     });
  }

  getDetails(selectedArticle:any) { 
    console.log(selectedArticle);
    const params: NavigationExtras = {
      queryParams: {
        'author': selectedArticle.author,
        'content': selectedArticle.content,
        'description': selectedArticle.description,
        'publishedAt': selectedArticle.publishedAt,
        'source': selectedArticle.source.name,
        'title': selectedArticle.title,
        'url': selectedArticle.url,
        'urlToImage': selectedArticle.urlToImage
      }
    }
    this.router.navigate(['/details'],params)
  }
}

