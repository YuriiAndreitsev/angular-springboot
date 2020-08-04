var sports = ["golf", "football", "basketball", "cybersport"];
for (var index = 0; index < sports.length; index++) {
    console.log(sports[index]);
}
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSport = sports_1[_i];
    if (tempSport == "basketball") {
        console.log(tempSport + " is my favorite!");
    }
    else {
        console.log(tempSport);
    }
}
