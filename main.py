def on_button_pressed_a():
    for index in range(4):
        music.play(music.string_playable("E D G F B A C5 B ", 120),
            music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_tilt_right():
    music.set_tempo(500)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_button_pressed_b():
    for index2 in range(4):
        music.play(music.string_playable("E F G A G F E D ", 120),
            music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_tilt_left():
    music.set_tempo(500)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)
