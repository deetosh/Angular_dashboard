import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  bookmarks: Bookmark[]=[
  ];


  constructor() {
    // load the bookmarks from local storage during initialization 
    this.loadState();
    if (this.bookmarks === null || this.bookmarks === undefined) {
      this.bookmarks = [];
    }
  }

  getBookmarks(){
    return this.bookmarks;
  }

  getBookmark(id:string){
    return this.bookmarks.find(t=> t.id === id);
  }

  addBookmark(bookmark: Bookmark){
    this.bookmarks.push(bookmark);
    this.saveState();
  }

  updateBookmark(id:string, updatedBookmarkFields: Partial<Bookmark>){
    const bookmark= this.getBookmark(id);
    if(bookmark!=undefined)
      Object.assign(bookmark,updatedBookmarkFields)
      this.saveState();
  }

  deleteBookmark(id: string){
    const index= this.bookmarks.findIndex(t=> t.id===id);
    if(index == -1)return 
    this.bookmarks.splice(index,1);
    this.saveState();
  }

  saveState(){
    if(this.bookmarks!=undefined)
    localStorage.setItem('bookmarks',JSON.stringify(this.bookmarks))
  }

  loadState(){
    this.bookmarks= JSON.parse(localStorage.getItem('bookmarks'));
  }
}
