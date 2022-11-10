let lightOn = false
input.onSound(DetectedSound.Loud, function () {
    lightOn = !(lightOn)
    if (lightOn) {
        basic.showString("" + (lightOn))
    } else {
        basic.showString("" + (lightOn))
    }
})
