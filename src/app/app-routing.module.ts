import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodosComponent } from './todos/todos.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { EditBookmarkComponent } from './edit-bookmark/edit-bookmark.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent},
  {path: 'todos',component: TodosComponent},
  {path: 'todos/add',component:AddTodoComponent},
  {path: 'schedule',component:ScheduleComponent,children:[
    {path: ':id',component:EditScheduleComponent}
  ]},
  {path: 'todos/:id',component:EditTodoComponent},
  {path: 'bookmarks/add-bookmark',component:AddBookmarkComponent},
  {path: 'bookmarks/:id',component:EditBookmarkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })], //new thing ****
  exports: [RouterModule]
})
export class AppRoutingModule { }
