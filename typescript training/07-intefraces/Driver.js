"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BoxingCoach_1 = require("./BoxingCoach");
var BasketballCoach_1 = require("./BasketballCoach");
var boxingCoach = new BoxingCoach_1.BoxingCoach();
var basketballCoach = new BasketballCoach_1.BasketballCoach();
var coaches = [];
coaches.push(boxingCoach);
coaches.push(basketballCoach);
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var c = coaches_1[_i];
    console.log(c.getDailyWorkOut());
}
