basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0) || input.pinIsPressed(TouchPin.P3)) {
        basic.showNumber(randint(0, 100))
    }
})
