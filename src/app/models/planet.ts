export class Planet{
    name: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    population: string;
    rotation_period: string;
    orbital_period: string;
    surface_water: string;
    constructor(name: string, diameter: string, climate: string, gravity: string, terrain: string, population: string, rotation_period: string, orbital_period: string, surface_water: string){
        this.name = name;
        this.diameter = diameter;
        this.climate = climate;
        this.gravity = gravity;
        this.terrain = terrain;
        this.population = population;
        this.rotation_period = rotation_period;
        this.orbital_period = orbital_period;
        this.surface_water = surface_water;
    }
}