import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { NavigationExtras, Router } from '@angular/router';

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL

@Component({
  selector: 'app-ie-news',
  templateUrl: './ie-news.page.html',
  styleUrls: ['./ie-news.page.scss'],
})
    
export class IeNewsPage implements OnInit {

  articles: any = [];

   constructor(public httpClient: HttpClient,private router:Router) {
    this.loadData();
  }



  ngOnInit() {
  }


  loadData() { 
    this.httpClient.get(`${API_URL}/top-headlines?country=IE&apiKey=${API_KEY}`).subscribe((result:any) => {
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

  goBack() { 
    this.router.navigate(['/main'])
  }
}
