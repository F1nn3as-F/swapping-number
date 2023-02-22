input.onButtonPressed(Button.A, function () {
    _1 += 1
    basic.showNumber(_1)
})
input.onGesture(Gesture.LogoUp, function () {
    _2 += 1
    basic.showNumber(_2)
})
input.onButtonPressed(Button.B, function () {
    _1 += -1
    basic.showNumber(_1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("#1 =")
    basic.showNumber(_1)
    basic.showString("#2 =")
    basic.showNumber(_2)
})
input.onGesture(Gesture.LogoDown, function () {
    _2 += -1
    basic.showNumber(_2)
})
let _2 = 0
let _1 = 0
_1 = 0
_2 = 0
basic.showString("#1 =")
basic.showNumber(_1)
basic.showString("#2 =")
basic.showNumber(_2)
