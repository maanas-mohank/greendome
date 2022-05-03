namespace SpriteKind {
    export const rescued = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    mySprite2.follow(mySprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -300
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile16, function (sprite, location) {
    if (birdcount > 10) {
        game.splash("The rescued endangered birds are very thankful to you. Good job Agent Ryan!")
        game.over(true, effects.confetti)
        music.playMelody("C E F G A B C5 C5 ", 120)
    } else {
        game.splash("You failed terribly, better luck next time.")
        game.over(false, effects.dissolve)
        music.playMelody("G E C C C - - - ", 120)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile1`, function (sprite, location) {
    info.changeScoreBy(1)
    birdcount += 1
    tiles.setTileAt(location, sprites.skillmap.islandTile5)
    duck1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.rescued)
    tiles.placeOnTile(duck1, location)
    duck1.follow(mySprite, 90)
    music.baDing.play()
})
let duck1: Sprite = null
let birdcount = 0
let mySprite: Sprite = null
let mySprite2: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
game.splash("Your mission is to save all the endangered birds captured by the evil poacher, Black Jack. Good luck Agent Ryan!")
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.rescued)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(2, 158))
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . . f e 4 d d d d 4 e f e . . 
    . . f e f 2 2 2 2 e d d 4 e . . 
    . . e 4 f 2 2 2 2 e d d e . . . 
    . . . . f 4 4 5 5 f e e . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
tiles.setTileAt(tiles.getTileLocation(2, 158), assets.tile`tile1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`tile2`)
