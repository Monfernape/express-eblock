import User from '../models/user'
export class UserRepository {
    
    getUsers = async () => {
        //TODO
    }

    login = async (username: string, password: string) => {
        const user = await User.findOne({username, password})
        if(user) return user;
        else throw new Error('User Not Found')
    }
}