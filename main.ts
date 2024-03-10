radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
    } else if (receivedNumber == 0) {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
})
radio.setGroup(1)
basic.showLeds(`
    . . # # .
    . # . . #
    # . . # .
    # . # . .
    . # . . .
    `)
