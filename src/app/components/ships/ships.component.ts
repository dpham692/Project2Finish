import { Component, OnInit } from '@angular/core';
import { Ship } from '../../ship';
import { SHIPS } from '../../mock-ships';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  ships = SHIPS;
  selectedShip: Ship;
  constructor() { }

  ngOnInit() {
  }
  onSelect(ship: Ship): void {
    this.selectedShip = ship;
  }
}
