import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService, END_POINT } from '../../core/services/api.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit, OnDestroy {
  news$: any;

  private subscribe;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.subscribe = this.api.get(END_POINT.listNews).subscribe();
    this.api.getAssets(END_POINT.newsJson).subscribe(data => {
      this.news$ = data.man;
      console.log(this.news$);
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
