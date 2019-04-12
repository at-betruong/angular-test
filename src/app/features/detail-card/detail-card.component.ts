import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, END_POINT } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit, OnDestroy {
  id: number;
  sub: any;
  news$: any;
  infoCard: any;
  relativalCard: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService) {}

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
       this.id = +params.get('id'); // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
    });

    this.api.getAssets(END_POINT.newsJson).subscribe(data => {
      this.infoCard = data.man.find((item) => {
        return item.id === this.id;
      });
      if ( !this.infoCard ) {
        this.infoCard = data.women.find((item) => {
          return item.id === this.id;
        });
        this.relativalCard =  data.women.filter(item => item.id !== this.id);
      } else {
        this.relativalCard =  data.man.filter(item => item.id !== this.id);
      }
    });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
