import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../bookmark.model';
import { BookmarkService } from '../bookmark.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrl: './edit-bookmark.component.css'
})
export class EditBookmarkComponent implements OnInit{
  bookmark!: Bookmark;

  constructor(
    private bookmarkService: BookmarkService,
    private route: ActivatedRoute,
    private router: Router
  ){

  }

  ngOnInit(): void {
    let id= this.route.snapshot.params['id'];
    this.bookmark=this.bookmarkService.getBookmark(id);
    console.log(this.bookmark.url)
  }

  onFormSubmit(form: NgForm){
    const {name,url}= form.value;

    this.bookmarkService.updateBookmark(this.bookmark.id,{
      name,
      url: new URL(url)
    })
    this.router.navigateByUrl('/bookmarks')
  }

  delete(){
    this.bookmarkService.deleteBookmark(this.bookmark.id)
    this.router.navigate(['../'], { relativeTo: this.route })

  }

}
