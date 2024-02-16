import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TabsComponent } from './tabs/tabs.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BookmarkTileComponent } from './bookmark-tile/bookmark-tile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './todo.service';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { EditBookmarkComponent } from './edit-bookmark/edit-bookmark.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ScheduleComponent,
    BookmarksComponent,
    BookmarkTileComponent,
    TodoItemComponent,
    TodosComponent,
    AddTodoComponent,
    EditTodoComponent,
    AddBookmarkComponent,
    EditBookmarkComponent,
    EditScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
