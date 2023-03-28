import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsAddComponent } from './news/news-add/news-add.component';

const routes: Routes = [
  {
    path: 'news/list',
    component: NewsListComponent
  },
  {
    path: 'news/add',
    component: NewsAddComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
