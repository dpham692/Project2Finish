import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../models/planet';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  @Input() planet: Planet;
  constructor() { }

  ngOnInit() {
  }

}
