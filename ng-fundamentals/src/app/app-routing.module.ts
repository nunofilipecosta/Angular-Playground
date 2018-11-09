import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookListComponent } from './book-list/book-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'books', component: BookListComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
