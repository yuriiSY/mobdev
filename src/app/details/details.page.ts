import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  author: any
  content: any
  description: any
  publishAt: any
  url: any
  image: any
  source: any
  title: any

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.author = this.activatedRoute.snapshot.queryParamMap.get('author')
    this.content = this.activatedRoute.snapshot.queryParamMap.get('content')
    this.description = this.activatedRoute.snapshot.queryParamMap.get('description')
    this.publishAt = this.activatedRoute.snapshot.queryParamMap.get('publishedAt')
    this.source = this.activatedRoute.snapshot.queryParamMap.get('source')
    this.title = this.activatedRoute.snapshot.queryParamMap.get('title')
    this.url = this.activatedRoute.snapshot.queryParamMap.get('url')
    this.image = this.activatedRoute.snapshot.queryParamMap.get('urlToImage')  
  }

  goBack() { 
    this.router.navigate(['/home'])
  }

  async openBrowser() { 
    await Browser.open({ url: this.url});
  }
}


