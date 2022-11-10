def on_button_pressed_a():
    basic.show_number(input.temperature())
    music.play_melody("C5 A B G A F G E ", 120)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_sound_loud():
    basic.show_leds("""
        . . . . .
                # . . . #
                . . # . .
                . # . # .
                . . # . .
    """)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_button_pressed_b():
    music.play_tone(294, music.beat(BeatFraction.QUARTER))
    basic.show_leds("""
        . # # . .
                . # . # .
                . # # . .
                . # . # .
                . # # . .
    """)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_touched():
    music.play_tone(294, music.beat(BeatFraction.QUARTER))
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

def on_forever():
    pass
basic.forever(on_forever)
