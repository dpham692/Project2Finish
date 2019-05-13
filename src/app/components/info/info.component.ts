import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';

// import { People } from 'src/app/models/people';
import { Planet } from 'src/app/models/planet';
import { Starship } from 'src/app/models/starship';
import { PeopleService } from 'src/app/services/people.service';
import { PlanetService } from 'src/app/services/planet.service';
import { StarshipService } from 'src/app/services/starship.service';
import { PeopleList } from 'src/app/models/people-list.model';
import { ClientMessage } from 'src/app/models/client-message.model';
import { People } from 'src/app/models/people';
import { PlanetList } from 'src/app/models/planet-list.model';
import { StarshipList } from 'src/app/models/starship-list.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
 
  //  peoples: PeopleList[];
  // planets: Planet[];
  // starships: Starship[];
  // public clientMessage: ClientMessage = new ClientMessage('No peoples to display.');

  // constructor(private peopleService: PeopleService) {}

  // public findAllHeroes(): void {
  //   this.peopleService.findPeople()
  //     .subscribe(
  //       data => this.peoples = data,
  //       responseError => this.clientMessage = responseError.error
  //     );
  // }
  
  public peoples: PeopleList = new PeopleList([]);
  public planets: PlanetList = new PlanetList([]);
  public starships: StarshipList = new StarshipList([]);
  public clientMessage: ClientMessage = new ClientMessage('No information to display.');
  constructor(private peopleService: PeopleService, private planetService: PlanetService, private starshipService: StarshipService) { }
  findAllPeople(): void{
    console.log("Work");
    this.peopleService.findPeopleById()
    .subscribe( 
      data => {this.peoples = data,
      console.log(this.peoples)},
      responseError => this.clientMessage = responseError.error
    );
  }
  findAllPlanet(): void{
    this.planetService.findPlanetById()
    .subscribe( 
      data => {this.planets = data,
      console.log(this.planets)},
      responseError => this.clientMessage = responseError.error
    );
  }
  findAllStarship(): void{
    this.starshipService.findStarshipById()
    .subscribe( 
      data => {this.starships = data,
      console.log(this.starships)},
      responseError => this.clientMessage = responseError.error
    );
  }
  
 
  
  // getPeoplesFromServices():void{
  //    this.peoples = this.peopleService.findPeople();
  //   }
  
  // getPlanetsFromServices():void{
  //   this.planets = this.planetService.getPlanets();
  // }
  // getStarshipsFromServices():void{
  //   this.starships = this.starshipService.getStarships();
  // }

  ngOnInit() {
    //DANDY DANDY FANCY FANCY
    // this.getPeoplesFromServices();
    // this.getPlanetsFromServices();
    // this.getStarshipsFromServices();
  }
  //method when select in the list it will highlight
  // selectedPeople: People;
  // onSelect(people: People): void{
  //   this.selectedPeople = people;
  // }
  // selectedPlanet: Planet;
  // onSelect2(planet: Planet): void{
  //   this.selectedPlanet = planet;
  // }
  // selectedStarship: Starship;
  // onSelect3(starship: Starship): void{
  //   this.selectedStarship = starship;
  // }

}
