class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    writePlayerCount(Count) {
        database.ref("/").update({
            playerCount: Count
        });


    }
    readPlayerCount() {
        var playerRef = database.ref("playerCount")
        playerRef.on("value", (data) => {
            playerCount = data.val();
        })
    }
    update() {
        var parentPath = "players/player" + this.index;
        database.ref(parentPath).set({
            name: this.name,
            distance: this.distance,
        });
    }
    static readPlayers() {
        var playersref = database.ref("players")
        playersref.on("value", (data) => {
            players = data.val();
        })
    }

}