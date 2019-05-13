export class Starship{
    name: string;
    model: string;
    manufacturer: string;
    length: string;
    crew: string;
    passengers: string;
    consumables: string;
    MGLT: string;
    cost_in_credits: string;
    max_atmosphering_speed: string;
    cargo_capacity: string;
    hyperdrive_rating: string;
    starship_class: string;
    constructor(name: string, model: string, manufacturer: string, length: string, crew: string, passengers: string, consumables: string, MGLT: string, cost_in_credits: string, 
        max_atmosphering_speed: string, cargo_capacity: string, hyperdrive_rating: string, starship_class: string){
            this.name = name;
            this.model = model;
            this.manufacturer = manufacturer;
            this.length = length;
            this.crew = crew;
            this.passengers = passengers;
            this.consumables = consumables;
            this.MGLT = MGLT;
            this.cost_in_credits = cost_in_credits;
            this.max_atmosphering_speed = max_atmosphering_speed;
            this.cargo_capacity = cargo_capacity;
            this.hyperdrive_rating = hyperdrive_rating;
            this.starship_class = starship_class;
            //DANDY DANDY FANCY FANCY
        }
}