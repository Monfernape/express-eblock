import User from "../models/user";
export class UserRepository {
    getUsers = async () => {
        //TODO
    };

    findUser = async (username: string) => {
        return await User.findOne({ username });
    };

    signup = async (userData: any) => {
        const user = new User(userData);
            return await user.save();
    };
}
