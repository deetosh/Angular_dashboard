import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookmarkService } from '../bookmark.service';
import { Router } from '@angular/router';
import { Bookmark } from '../bookmark.model';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrl: './add-bookmark.component.css'
})
export class AddBookmarkComponent {

  constructor(private bookmarkService: BookmarkService,
    private router:Router, ){

  }
  onFormSubmit(form: NgForm){
    const {name,url}= form.value;
    const bookmark = new Bookmark(name,url);
    this.bookmarkService.addBookmark(bookmark);
    this.router.navigateByUrl('/bookmarks')
  }
}
