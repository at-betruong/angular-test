import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService, END_POINT } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  news$: any;

  private subscribe;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.subscribe = this.api.get(END_POINT.listNews).subscribe();
    this.api.getAssets(END_POINT.newsJson).subscribe(data => {
      this.news$ = data.man;
      data.women.forEach((item) => {
        this.news$.push(item);
      });
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
