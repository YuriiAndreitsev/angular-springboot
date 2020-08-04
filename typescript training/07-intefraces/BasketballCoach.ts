import { CoachInterface } from "./CoachInterface";

export class BasketballCoach implements CoachInterface {
    getDailyWorkOut(): string {
        return " practice 3pt shots!!!";
    }

}