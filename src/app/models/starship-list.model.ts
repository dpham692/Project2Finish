import { Starship } from './starship';


export class StarshipList {
    starshipList: Starship[];
    
    constructor(starshipList: Starship[]) {
        this.starshipList = starshipList;
    }
}