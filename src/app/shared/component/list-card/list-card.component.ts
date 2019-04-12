import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService, END_POINT } from '../../../core/services/api.service';
import { WordLimitPipe } from '../../pipe/word-limit.pipe';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit, OnDestroy {
  news: any;

  private subscribe;
  constructor(private api: ApiService) { }

  ngOnInit() {
    // this.subscribe = this.api.get(END_POINT.listNews).subscribe();
    // this.news$ = this.api.getAssets(END_POINT.newsJson);
  }

  ngOnDestroy() {
    // this.subscribe.unsubscribe();
  }

}
