sendMessage("I know how much this makes you ache");
if (randomInteger(0, 2) == 1) {
    sendMessage("How much your %Cock% wants me to say yes");
    sendMessage("Even while your heart is begging me to tell you no");
    sendMessage("But there's only one thing you're going to hear from me right now");
    }
else {
    sendMessage("How every stroke makes you want to beg");
    sendMessage("Well go ahead and beg me %PetName%");
    sendMessage("It may not change anything");
    sendMessage("But it will definitely turn me on %EmoteRandom%");
}
Stroking();

function Stroking() {
    sendMessage("%startStroking%");
    startStroking(60);
    duration = 10;
    timeSoFar = 0;
    while (timeSoFar < duration) {
        java.lang.Thread.sleep(500);
        timeSoFar += .5;
    }
}

function randomInteger(lowest, highest) {
    return Math.floor(Math.random() * highest) + lowest;
}