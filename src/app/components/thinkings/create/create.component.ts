import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  think = {
    id: 1,
    content: 'Learn Angular',
    category: 'Developer',
    model: '',
  };

  constructor() {}

  ngOnInit(): void {}

  createNote(): void {}

  cancelNote(): void {}
}
