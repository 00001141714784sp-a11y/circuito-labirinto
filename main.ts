input.onPinPressed(TouchPin.P0, function () {
    vidas += -1
    basic.pause(200)
})
function faça_alguma_coisa () {
    basic.showIcon(IconNames.Heart)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
}
let vidas = 3
basic.forever(function () {
    basic.showNumber(vidas)
    if (vidas == 0) {
        basic.showIcon(IconNames.Heart)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
        vidas += 3
    }
})
