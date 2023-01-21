radio.onReceivedNumber(function (receivedNumber) {
    radio2 = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (state == 1) {
        led.plotBarGraph(
        Math.map(radio2, -95, -42, 0, 9),
        9
        )
    }
})
input.onButtonPressed(Button.A, function () {
    state = 1
    basic.showNumber(state)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    state = 0
    basic.showNumber(state)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
})
let state = 0
let radio2 = 0
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
loops.everyInterval(1000, function () {
    radio.sendNumber(0)
})
