import { UserWiseGameStatusDto } from "../dto/UserWiseGameStatusDto";
import HttpService from "./HttpService"

class GameService {

   

    getGame = () => {
        return HttpService.getGame("https://marcconrad.com/uob/tomato/api.php");
    }

    getUserWiseGameData = (username:any) => {
        return HttpService.get("/api/v1/game-service/get-game-status/".concat(username));
    }

    startNewGame = (gameId: any, remainingLifeCount: any) => {
        return HttpService.get("/api/v1/game-service/start-new-game".concat("/" + gameId).concat("/" + remainingLifeCount));
    }

    updateGameStatus = (gameId : any, curretScore: any, remainingLifeCount: any) =>  {
        return HttpService.get("/api/v1/game-service/update-game-status".concat("/" + gameId).concat("/" + curretScore).concat("/" + remainingLifeCount));
    }

    getTopPlayers = () => {
        return HttpService.get("/api/v1/game-service/get-top-players");
    }
}

const gameService = new GameService();
export default gameService;