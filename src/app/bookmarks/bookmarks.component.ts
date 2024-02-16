import { Component } from '@angular/core';
import { Bookmark } from '../bookmark.model';
import { BookmarkService } from '../bookmark.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.css'
})
export class BookmarksComponent {

  bookmarks!:Bookmark[];
  constructor(private bookmarkservice: BookmarkService, private router: Router){

  }

  ngOnInit(): void {
    this.bookmarks= this.bookmarkservice.getBookmarks();
  }

  manageBookmark(bookmark:Bookmark){
    this.router.navigate(['/bookmarks',bookmark.id]);
  }
}
