input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    music.playMelody("C5 A B G A F G E ", 120)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . . . . .
        # . . . #
        . . # . .
        . # . # .
        . . # . .
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
    music.playTone(294, music.beat(BeatFraction.Quarter))
})
basic.forever(function () {
	
})
