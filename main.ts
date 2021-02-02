namespace StatusBarKind {
    export const Progress = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (in_game) {
        jump(sprite_player, constants_gravity, constants_tiles_high_jump)
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        jumps = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (in_game) {
        jump(sprite_player, constants_gravity, constants_tiles_high_jump)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`top_spike`, function (sprite, location) {
    sprite.destroy(effects.disintegrate, 100)
})
function win () {
    sprite_player_cam.setVelocity(0, 0)
    won = true
    timer.after(2000, function () {
        game_over(true)
    })
}
function create_status_bar (sprite: Sprite, tilemap_length: number) {
    sprite_progress_bar = statusbars.create(127, 4, StatusBarKind.Progress)
    sprite_progress_bar.setFlag(SpriteFlag.RelativeToCamera, true)
    sprite_progress_bar.left = 4
    sprite_progress_bar.top = 2
    sprite_progress_bar.value = 0
    sprite_progress_bar.max = tilemap_length
    sprite_progress_bar.setColor(7, 15)
    sprite_progress_bar.setBarBorder(1, 15)
    timer.background(function () {
        while (true) {
            sprite_progress_bar.value = sprite.right
            percent_traveled = Math.round(Math.map(sprite.right, 0, tilemap_length, 0, 100))
            if (percent_traveled < 10) {
                sprite_progress_bar.setLabel("" + percent_traveled + "%" + "  ", 15)
            } else if (percent_traveled < 100) {
                sprite_progress_bar.setLabel("" + percent_traveled + "%" + " ", 15)
            } else {
                sprite_progress_bar.setLabel("" + percent_traveled + "%", 15)
            }
            if (percent_traveled == 100) {
                win()
            }
            pause(100)
        }
    })
}
function game_over (win2: boolean) {
    info.setScore(Math.constrain(Math.round(sprite_player.right), 0, constants_length))
    if (info.score() > high_scores[selected_level]) {
        high_scores[selected_level - 1] = info.score()
    }
    blockSettings.writeNumberArray("high_scores", high_scores)
    game.over(win2)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`auto_jump`, function (sprite, location) {
    timer.throttle("auto_jump", 100, function () {
        jump(sprite_player, constants_gravity, constants_tiles_high_jump)
        jumps = 0
    })
})
function prepare_level () {
    tiles.placeOnRandomTile(sprite_player, assets.tile`start`)
    tiles.placeOnRandomTile(sprite_player_cam, assets.tile`start`)
    tiles.setTileAt(tiles.getTilesByType(assets.tile`start`)[0], assets.tile`transparency8`)
    sprite_player.setVelocity(48, 0)
    sprite_player_cam.setVelocity(48, 0)
    create_status_bar(sprite_player, tiles.tilemapColumns() * tiles.tileWidth())
    scene.cameraFollowSprite(sprite_player_cam)
    tiles.coverAllTiles(assets.tile`auto_jump`, assets.tile`blank`)
    tiles.coverAllTiles(assets.tile`from`, assets.tile`blank`)
    tiles.coverAllTiles(assets.tile`to0`, assets.tile`blank`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`from`, function (sprite, location) {
    tiles.placeOnRandomTile(sprite_player, assets.tile`to0`)
    tiles.placeOnRandomTile(sprite_player_cam, assets.tile`to0`)
})
function level_2 () {
    tiles.setSmallTilemap(tilemap`level_2`)
    scene.setBackgroundColor(13)
}
function make_player () {
    sprite_player = sprites.create(assets.image`character`, SpriteKind.Player)
    sprite_player_cam = sprites.create(assets.image`camera_reference`, SpriteKind.Player)
    sprite_player.setFlag(SpriteFlag.AutoDestroy, true)
    sprite_player_cam.setFlag(SpriteFlag.Ghost, true)
    sprite_player.ay = constants_gravity
}
function in_simulator_or_rpi () {
    return control.deviceDalVersion() == "sim" || control.deviceDalVersion() == "linux"
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`bottom_spike`, function (sprite, location) {
    sprite.destroy(effects.disintegrate, 100)
})
function select_level () {
    color.setPalette(
    color.Black
    )
    blockMenu.setColors(1, 15)
    blockMenu.showMenu(menu, MenuStyle.Grid, MenuLocation.BottomHalf)
    blockMenu.setControlsEnabled(false)
    scene.setBackgroundColor(13)
    tiles.setSmallTilemap(tilemap`demo`)
    tiles.placeOnRandomTile(sprite_player, assets.tile`start`)
    tiles.setTileAt(tiles.getTilesByType(assets.tile`start`)[0], assets.tile`transparency8`)
    tiles.coverAllTiles(assets.tile`from`, assets.tile`blank`)
    tiles.coverAllTiles(assets.tile`to0`, assets.tile`blank`)
    tiles.coverAllTiles(assets.tile`auto_jump`, assets.tile`blank`)
    sprite_player.setVelocity(48, 0)
    scene.cameraFollowSprite(sprite_player)
    fade(false, 2000, true)
    blockMenu.setControlsEnabled(true)
    wait_for_select()
    fade(true, 2000, true)
    color.setPalette(
    color.Black
    )
    return parseFloat(blockMenu.selectedMenuOption())
}
function jump (sprite: Sprite, gravity: number, tiles2: number) {
    if (jumps < constants_max_jumps) {
        sprite.vy = 0 - Math.sqrt(2 * (gravity * (tiles2 * tiles.tileWidth())))
        jumps += 1
    }
    timer.background(function () {
        timer.throttle("rotate", 100, function () {
            if (in_simulator_or_rpi()) {
                for (let index = 0; index < 36; index++) {
                    transformSprites.changeRotation(sprite_player, 10)
                    pause(10)
                }
            } else {
                for (let index = 0; index < 8; index++) {
                    transformSprites.changeRotation(sprite_player, 45)
                    pause(45)
                }
            }
        })
    })
}
function fade (_in: boolean, duration: number, block: boolean) {
    if (_in) {
        color.startFade(color.originalPalette, color.Black, duration)
    } else {
        color.startFade(color.Black, color.originalPalette, duration)
    }
    if (block) {
        color.pauseUntilFadeDone()
    }
}
function wait_for_select () {
    selected = false
    while (!(selected)) {
        pause(100)
    }
    blockMenu.closeMenu()
}
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    sprite_player_cam.setVelocity(0, 0)
    timer.after(2000, function () {
        game_over(false)
    })
})
blockMenu.onMenuOptionSelected(function (option, index) {
    selected = true
})
function level_1 () {
    tiles.setSmallTilemap(tilemap`level_1`)
    scene.setBackgroundColor(13)
}
function level_3 () {
    tiles.setSmallTilemap(tilemap`level_3`)
    scene.setBackgroundColor(13)
}
let selected = false
let percent_traveled = 0
let sprite_progress_bar: StatusBarSprite = null
let sprite_player_cam: Sprite = null
let selected_level = 0
let percent = 0
let menu: string[] = []
let sprite_player: Sprite = null
let high_scores: number[] = []
let in_game = false
let won = false
let jumps = 0
let constants_length = 0
let constants_max_jumps = 0
let constants_tiles_high_jump = 0
let constants_gravity = 0
constants_gravity = 300
constants_tiles_high_jump = 3
constants_max_jumps = 2
constants_length = 1600
let constants_levels = 3
jumps = 0
won = false
in_game = false
pause(500)
if (controller.B.isPressed()) {
    scene.setBackgroundColor(13)
    pause(100)
    if (game.ask("Reset high scores?")) {
        blockSettings.remove("high_scores")
        blockSettings.remove("high-score")
        game.showLongText("Successfully reset high scores!", DialogLayout.Bottom)
    }
}
if (!(blockSettings.exists("high_scores"))) {
    high_scores = []
    for (let index = 0; index < constants_levels; index++) {
        high_scores.push(0)
    }
    blockSettings.writeNumberArray("high_scores", high_scores)
}
high_scores = blockSettings.readNumberArray("high_scores")
make_player()
sprite_player.say("Dash!")
if (true) {
    menu = []
    for (let index = 0; index <= constants_levels - 1; index++) {
        percent = spriteutils.roundWithPrecision(high_scores[index] / constants_length * 100, 2)
        menu.push("" + (index + 1) + " (" + percent + "%" + ")")
    }
    selected_level = select_level()
    pause(1000)
} else {
    selected_level = 3
}
tiles.loadMap(tiles.createMap(tilemap`level12`))
blockSettings.writeNumber("high-score", high_scores[selected_level - 1])
if (selected_level == 1) {
    level_1()
} else if (selected_level == 2) {
    level_2()
} else if (selected_level == 3) {
    level_3()
}
prepare_level()
in_game = true
sprite_player.say("")
fade(false, 2000, false)
game.onUpdate(function () {
    sprite_player.vx = 48
})
game.onUpdateInterval(100, function () {
    if (!(won)) {
        if (sprite_player.x > sprite_player_cam.x) {
            sprite_player.x += -1
        } else if (sprite_player.x < sprite_player_cam.x) {
            sprite_player.x += 1
        }
    }
})
