import { Component, OnInit } from '@angular/core';
import { NotesProps } from 'src/types/Notes';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css'],
})
export class ListNotesComponent implements OnInit {
  listThinkings: NotesProps[] = [
    {
      category: 'Development',
      content:
        'Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. ',
      model: 'modelo1',
    },
    {
      category: 'Development',
      content: 'Lorem ipsum, cacilds vidis. Lorem ipsum, cacilds vidis. ',
      model: 'modelo2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
