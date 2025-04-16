import axios from "axios";
import { User } from '../models/User';


const localUrl = "http://localhost:3300/usuarios";

export class ServiceUser{


    static async findAllUsers(): Promise<User[]> {
        const UsersResponse = await axios.get(localUrl)
        return UsersResponse.data;
    }

    static async findById(id: string): Promise<User> {
        const User = await axios.get(localUrl + `/${id}`);
        return User.data;
    }

    static async postUser(User: User) {
        await axios.post(localUrl, User)
            .then(() => {
                window.location.reload();
            })
            .catch(error => {
                console.error(error)
            })
        console.log(`User ${User.name}`)
    }

    static async deleteUser(id: string) {
        await axios.delete(localUrl + `/${id}`)
            .then(() => {
                window.location.reload();
            })
            .catch(error => {
                console.error(error)
            })
    }

    static async updateUser(User: User) {
        await axios.put(localUrl + `/${User.id}`, User)
            .then(() => {
                window.location.reload();
            })
            .catch(err => {
                console.error(err)
            })
    }
}

