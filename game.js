class Game {
    constructor() {

    }
    readGameState() {
        var gameref = database.ref("gameState")
        gameref.on("value", (data) => {
            gameState = data.val();

        })
    }
    //async 
    writeGamestate(state) {
        database.ref("/").update({
            'gameState': state
        })


    }

    start() {
        if (gameState === 0) {
            player = new Player();
            form = new Form();
            player.readPlayerCount();
            form.display();
        }
        car1 = createSprite(100, 200);
        car1.addImage("car1", car1_img);
        car2 = createSprite(300, 200);
        car2.addImage("car2", car2_img);
        car3 = createSprite(500, 200);
        car3.addImage("car3", car3_img);
        car4 = createSprite(700, 200);
        car4.addImage("car4", car4_img);
        cars = [car1, car2, car3, car4];
    }
    play() {
        form.hide();
        Player.readPlayers();
        textSize(20);

        var x = 175;
        var y = 0;
        var index = 0;
        image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 5);

        for (var i in players) {

            index = index + 1
            x = x + 200;
            y = displayHeight - players[i].distance;
            cars[index - 1].x = x;
            cars[index - 1].y = y;


            if (i === "player" + player.index) {
                camera.position.x = displayWidth / 2
                camera.position.y = cars[index - 1].y;


            }
            else
                fill("black");

        }
        if (keyDown(UP_ARROW) && player.index !== null) {
            player.distance += 50;

            player.update();
        }
        drawSprites();

        if (player.distance >= 3700) { gameState = 2 }
    }

    end() {
        var index = 0;
        var text;
        for (var j in players) {
            index = index + 1
            if (j === "player" + player.index) {

                // textSize(40);
                // text("Game Ended", displayWidth / 2, cars[index - 1].y - 100)
                 text =createElement("h2");
                text.html("Game Ended")
                text.position(displayWidth / 2, cars[index - 1].y - 200);
            }
        }
    }
}