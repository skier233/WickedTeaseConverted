answer = sendInput("Are you aching a lot right now %subname%?", 0);
if (answer.isLike("yes", "yea", "yep"))
{
    sendMessage("Mmmm");
    sendMessage("I want you to ache MORE");
    sendMessage("%edge%");
    startEdging();
    sendMessage("%lettheedgefade%", 0);
    stopEdging();
}
else
{
    sendMessage("No?");
    sendMessage("Well I can't have that %Grin%");
    sendMessage("%edge%");
    startEdging();
    if (randomInteger(0, 10) <= 6)
    {
        sendMessage("%lettheedgefade%", 0);
    }
    else
    {
        sendMessage("%Holdtheedge%", 0);
        holdEdge(randomInteger(10, 20));
    }
}
sendMessage("Don't worry %PetName%");
sendMessage("There's plenty more ache where that came from %Grin%");