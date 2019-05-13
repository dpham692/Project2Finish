import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipsComponent } from './components/ships/ships.component';
import { InfoComponent } from './components/info/info.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { UserService } from './services/user-service.service';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { PeopleService } from './services/people.service';
import { PlanetService } from './services/planet.service';
import { StarshipService } from './services/starship.service';
import { RegisterComponent } from './register/register.component';
import { FindComponent } from './find/find.component';
import { AllComponent } from './all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    ShipsComponent,
    InfoComponent,
    NavComponent,
    PeopleDetailComponent,
    PlanetDetailComponent,
    StarshipDetailComponent,
    RegisterComponent,
    FindComponent,
    AllComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/project2'}, UserService, PeopleService, PlanetService, StarshipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
