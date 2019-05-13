import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './services/user-service.service';
import { People } from './models/people';
import { Planet } from './models/planet';
import { Starship } from './models/starship';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StarWars Tradeport';
  private people: People[] = [];
  private planets: Planet[] = [];
  private starships: Starship[] = [];
  private peopleObservable: Observable<any[]>;

  constructor(private us: UserService) {
    //this.peopleObservable = this.us.get_people();
    // this.us.get_people().subscribe((res: People[])=> {
    //   this.people = res;
    // });
    // this.us.get_planets().subscribe((res: Planet[])=> {
    //   this.planets = res;
    // });
    // this.us.get_starships().subscribe((res: Starship[])=> {
    //   this.starships = res;
    // });
  }
}
