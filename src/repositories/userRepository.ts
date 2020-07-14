import User from "../models/user";
export class UserRepository {
    getUsers = async () => {
        //TODO
    };

    findUser = async (username: string) => {
        return await User.findOne({ username });
    };

    login = async (username: string, password: string) => {
        const user = await User.findOne({ username, password });
        if (user) return user;
        else throw new Error("User Not Found");
    };

    signup = async (userData: any) => {
        const user = new User(userData);
        try {
            await user.save();
            return user;
        } catch {
            return null;
        }
    };
}
