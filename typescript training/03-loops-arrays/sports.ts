let sports: string[] = ["golf", "football", "basketball", "cybersport"];

for (let index = 0; index < sports.length; index++) {
    console.log(sports[index]);
    
}

for (let tempSport of sports){
    if (tempSport == "basketball"){
        console.log(tempSport + " is my favorite!");
    }else {
    console.log(tempSport);
    }
}