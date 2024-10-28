input.onButtonPressed(Button.A, function on_button_pressed_a() {
    for (let index = 0; index < 4; index++) {
        music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
    }
})
input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
    music.setTempo(500)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    for (let index2 = 0; index2 < 4; index2++) {
        music.play(music.stringPlayable("E F G A G F E D ", 120), music.PlaybackMode.UntilDone)
    }
})
input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
    music.setTempo(500)
})
