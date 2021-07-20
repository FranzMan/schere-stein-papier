input.onButtonPressed(Button.A, function () {
    hand = Math.randomRange(1, 3)
    list[hand].showImage(0)
})
let hand = 0
let list: Image[] = []
let SSP_Liste = [1, 3]
list[1] = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
list[2] = images.createImage(`
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    `)
list[3] = images.createImage(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
	
})
