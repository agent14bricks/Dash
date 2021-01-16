scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    sprite.destroy(effects.disintegrate, 100)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    jump(sprite_player, constants_gravity, constants_tiles_high_jump)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        jumps = 0
    }
})
function level1 () {
    tiles.setSmallTilemap(tiles.createTilemap(hex`c8000f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202000000000000000000000000000000000000000000000002000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001030100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000103010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020000000000000000000000000000000000000000000000000000000200000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000010301000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202000000000000000001030303000000030303010000000000000000000002000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000002020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020200000000000000000000000000000000000000000000000000000000000000000002020200000000000000000000000100000000000000000000000000000000000000020000000000000000000000000002000000000000000000000000000000000000000000000000000000000202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020200000000000000020202000000000000000000000000000000000000000000000000000202020000000000000000000000000000010202020000000000000000000000000000000200000000000000000000000000000002000000000000000000000000000000000000000000020202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020200000000000000000000000000000000000202020000000000000000000000000000000000020202000000000000000000000000000000000001000000020202000000000000000000000002000000000000000000000000000000000002000000000000000000000000000002020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020200000000000000000000000000000000000000000000000000000002020200000000000000000002020200000000000000000000000000000000000000000100000000000002020200000000000000020000000000000000000000000000000000000002000000000000000202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010103030301010101010101010303030101010101010101010303030303030303030303030303030303030303030303030303030303030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101030303030303030303030303030303030303030101010101010101030303010101030303010101030303010101030303010101030303010101030303030303030303030303030303030303030303`, img`
        ........................................................................................................................................................................................................
        ........................................................................................................................................................................................................
        ........................................................................................................................................................................................................
        ........................................................................................................................................................................................................
        ..................................................................................................................................2.2...................................................................
        .................................................................................................................................2...2...............................................................222
        ......................................................................................................222.......................2.....2........................................................2.2......
        ...................................................................................................222...................................................................................2.2....2.......
        ................................................................................................222...........................2.........2..........................................2.2....2.............
        .............................................................................................222........2.........2..........2...........2...................................222....2...................
        ......................................................222.................................222...........2222...222..........2.............2............................222..............................
        .................................................222.......222.........................222..............2222...............2...............2.....................222....................................
        ............................................222.................222.................222.................2...222...........2.................2..............222..........................................
        .......................................222...........................222.........222....................2......222.......2...................2.......222................................................
        2222222222222222...22222222...222222222..............................22222222222222222222222222222222222222222222222222222...................22222222...222...222...222...222...222.....................
        `, [myTiles.transparency8,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Eight))
    scene.setBackgroundColor(13)
    tiles.placeOnTile(sprite_player, tiles.getTileLocation(1, 13))
    tiles.placeOnTile(sprite_player_cam, tiles.getTileLocation(1, 13))
    sprite_player.setVelocity(48, 0)
    sprite_player_cam.setVelocity(48, 0)
    sprite_player.ay = constants_gravity
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    win()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    jump(sprite_player, constants_gravity, constants_tiles_high_jump)
})
function win () {
    sprite_player_cam.setVelocity(0, 0)
    won = true
    timer.after(2000, function () {
        game.over(true)
    })
}
function make_player () {
    sprite_player = sprites.create(img`
        c c c c c c c c 
        c b b b b b b c 
        c b c b b c b c 
        c b c b b c b c 
        c b b b b b b c 
        c b c c c c b c 
        c b b b b b b c 
        c c c c c c c c 
        `, SpriteKind.Player)
    sprite_player_cam = sprites.create(img`
        . 
        `, SpriteKind.Player)
    sprite_player.setFlag(SpriteFlag.AutoDestroy, true)
    sprite_player_cam.setFlag(SpriteFlag.Ghost, true)
    scene.cameraFollowSprite(sprite_player_cam)
}
function jump (sprite: Sprite, gravity: number, tiles2: number) {
    if (jumps < constants_max_jumps) {
        sprite.vy = 0 - Math.sqrt(2 * (gravity * (tiles2 * tiles.tileWidth())))
        jumps += 1
    }
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    win()
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    sprite_player_cam.setVelocity(0, 0)
    timer.after(2000, function () {
        game.over(false)
    })
})
let sprite_player_cam: Sprite = null
let sprite_player: Sprite = null
let won = false
let jumps = 0
let constants_max_jumps = 0
let constants_tiles_high_jump = 0
let constants_gravity = 0
constants_gravity = 300
constants_tiles_high_jump = 3
constants_max_jumps = 3
jumps = 0
won = false
make_player()
level1()
game.onUpdate(function () {
    sprite_player.vx = 48
})
game.onUpdateInterval(50, function () {
    if (!(won)) {
        if (sprite_player.x > sprite_player_cam.x) {
            sprite_player.x += -1
        } else if (sprite_player.x < sprite_player_cam.x) {
            sprite_player.x += 1
        }
    }
})
