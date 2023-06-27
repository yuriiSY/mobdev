import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private routher: Router) { }

  ngOnInit() {
  }

  routherToUS() {
    this.routher.navigate(['/home']);
  }

  routherToIE() {
    this.routher.navigate(['/ie-news']);
  }

  routherToUA() {
    this.routher.navigate(['/ua-news']);
  }

}
