input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(input.temperature())
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # # . # #
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(294, music.beat(BeatFraction.Quarter))
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.playTone(330, music.beat(BeatFraction.Quarter))
})
basic.forever(function () {
	
})
