import { CoachInterface } from "./CoachInterface";

export class BoxingCoach implements CoachInterface{
    getDailyWorkOut(): string {
        return "Body Head Body Head, Left Right !!!";
    }

}