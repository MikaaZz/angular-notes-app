import { Component, Input, OnInit } from '@angular/core';
import { NotesProps } from 'src/types/Notes';

@Component({
  selector: 'app-thinking',
  templateUrl: './thinking.component.html',
  styleUrls: ['./thinking.component.css'],
})
export class ThinkingComponent implements OnInit {
  @Input() think: NotesProps = {
    category: '',
    content: '',
    model: 'modelo1',
  };

  constructor() {}

  ngOnInit(): void {}

  noteWidth(): string {
    if (this.think.content.length > 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
