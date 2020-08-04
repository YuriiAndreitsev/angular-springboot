import { BoxingCoach } from "./BoxingCoach";
import { BasketballCoach } from "./BasketballCoach";
import { CoachInterface } from "./CoachInterface";

let boxingCoach = new BoxingCoach();
let basketballCoach = new BasketballCoach();

let coaches: CoachInterface[] = [];
coaches.push(boxingCoach);
coaches.push(basketballCoach);

for (let c of coaches) {
    console.log(c.getDailyWorkOut());
}