import { UserRepository } from "./userRepository"

export class Database {
    public static userRepository: UserRepository

    public static initializeRepositories(){
        this.userRepository = new UserRepository()
    }
}