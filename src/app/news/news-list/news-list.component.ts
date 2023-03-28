import { Component, OnInit } from '@angular/core';
import { GlobalServiceType, GlobalService } from 'src/app/global.service';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  protected dataNews: Array<any> = []

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {

    this.getNews()
  }

  getNews(){
    this.globalService.get(GlobalServiceType.NEWS_LIST,'').subscribe((response) => {
      this.dataNews = JSON.parse(JSON.stringify(response)).data
    },(err) => {
      console.log(err)
    },() => {

    })
  }

}
