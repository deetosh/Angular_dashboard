import { Component, Input, OnInit, Output } from '@angular/core';
import { Bookmark } from '../bookmark.model';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrl: './bookmark-tile.component.css'
})
export class BookmarkTileComponent implements OnInit {
  @Input() bookmark: Bookmark

  tileIconSrc: string

  faviconError: boolean
  @Output() editClick: EventEmitter<void>= new EventEmitter<void>();

  constructor(){

  }

  ngOnInit(): void {
    this.tileIconSrc = this.bookmark.url + '/favicon.ico'
  }

  EditBookmark(){
    this.editClick.emit();
  }


}
