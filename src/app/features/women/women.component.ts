import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService, END_POINT } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit, OnDestroy {

  news$: any;

  private subscribe;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.subscribe = this.api.get(END_POINT.listNews).subscribe();
    this.api.getAssets(END_POINT.newsJson).subscribe(data => {
      this.news$ = data.women;
      console.log(this.news$);
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
