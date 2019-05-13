import { User } from "./user.model";

export class UserList {
    userList: User[];

    constructor(userList: User[]) {
        this.userList = userList;
    }
}