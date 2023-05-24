let mitspielerAugen = 0
let meineAugen = 0
radio.onReceivedNumber(function (receivedNumber) {
    mitspielerAugen = receivedNumber
    vergleicheaugen()
})
function vergleicheaugen () {
    if (meineAugen > 0 && mitspielerAugen > 0) {
        if (mitspielerAugen >= meineAugen) {
            basic.setLedColor(0xff0000)
        } else {
            basic.setLedColor(0x00ff00)
        }
        basic.pause(2000)
        basic.turnRgbLedOff()
    }
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0x0000ff)
    meineAugen = 0
    mitspielerAugen = 0
})
input.onGesture(Gesture.Shake, function () {
    meineAugen = Math.randomRange(1, 10)
    basic.showNumber(meineAugen)
    radio.sendNumber(meineAugen)
    vergleicheaugen()
})
