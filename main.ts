input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    music.setTempo(500)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        music.play(music.stringPlayable("E F G A G F E D ", 120), music.PlaybackMode.UntilDone)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    music.setTempo(500)
})
