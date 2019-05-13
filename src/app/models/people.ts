export class People{
    name: string;
    height: string
    mass: string;
    gender: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
   
    constructor(name: string, height: string, mass: string, gender: string, hair_color: string, skin_color: string, eye_color: string, birth_year: string ) {
        this.name = name;
        this.height = height;
        this.mass = mass;
        this.gender = gender;
        this.hair_color = hair_color;
        this.skin_color = skin_color;
        this.eye_color = eye_color;
        this.birth_year = birth_year;
    }
}