import { UserDto } from "../dto/UserDto"
import HttpService from "./HttpService"

const SERVICE_PARTH = '/api/v1/user-service'

class UserService {

    saveUser = (data: UserDto) => {
        return HttpService.post(SERVICE_PARTH.concat("/save-user"),data)
    }

    loginUser = (data: UserDto) => {
        return HttpService.post(SERVICE_PARTH.concat("/user-login"), data)
    }

}

const userService = new UserService();
export default userService;