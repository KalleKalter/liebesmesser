basic.forever(function () {
    basic.setLedColor(basic.rgb(255, 0, 0))
    if (input.pinIsPressed(TouchPin.P0) || input.pinIsPressed(TouchPin.P3)) {
        let zahl = 0
        basic.showNumber(randint(0, 100))
        if (zahl >= 65 && zahl <= 100) {
            basic.showIcon(IconNames.Heart)
            basic.clearScreen()
        }
    }
})
