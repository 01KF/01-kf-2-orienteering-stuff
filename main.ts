input.onButtonPressed(Button.A, function () {
    step = 0
    updateSteps()
})

input.onGesture(Gesture.Shake, function () {
    step += 1
    led.stopAnimation()
    updateSteps()
})
let step = 0
OLED.clear
OLED.init(128, 64)

function updateSteps() {
    OLED.clear()
    OLED.writeString("Steps detected:")
    OLED.writeNum(step)
}

updateSteps()
basic.forever(function () {
})
