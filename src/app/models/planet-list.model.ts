import { Planet } from '../models/planet';

export class PlanetList {
    planetList: Planet[];
    
    constructor(planetList: Planet[]) {
        this.planetList = planetList;
    }
}