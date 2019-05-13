import { People } from '../models/people';

export class PeopleList {
    peopleList: People[];
    
    constructor(peopleList: People[]) {
        this.peopleList = peopleList;
    }
}