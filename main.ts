function GreenStart () {
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 255)
    pins.analogWritePin(AnalogPin.P16, 0)
}
function AllOff () {
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
}
function RedStart () {
    pins.analogWritePin(AnalogPin.P14, 255)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
}
function Startup () {
    for (let index = 0; index < 3; index++) {
        RedStart()
        basic.pause(300)
        GreenStart()
        basic.pause(300)
        BlueStart()
        basic.pause(300)
    }
    AllOff()
    ServoStart()
}
function BlueStart () {
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 255)
}
function ServoStart () {
    pins.servoWritePin(AnalogPin.P13, 0)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P13, 90)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P13, 180)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P13, 0)
}
led.enable(false)
Startup()
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P14, pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    255
    ))
    pins.analogWritePin(AnalogPin.P15, pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    255
    ))
    pins.analogWritePin(AnalogPin.P16, pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    0,
    255
    ))
    pins.servoWritePin(AnalogPin.P13, pins.map(
    pins.analogReadPin(AnalogPin.P3),
    0,
    1023,
    0,
    180
    ))
})
