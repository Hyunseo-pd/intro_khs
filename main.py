lightOn = False

def on_sound_loud():
    global lightOn
    lightOn = not (lightOn)
    if lightOn:
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . . . . .
        """)
    else:
        basic.clear_screen()
input.on_sound(DetectedSound.LOUD, on_sound_loud)
