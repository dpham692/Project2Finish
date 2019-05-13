import { Component, OnInit,Input } from '@angular/core';
import { People } from '../models/people';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  @Input() people:People;
  constructor() { }

  ngOnInit() {
  }

}
