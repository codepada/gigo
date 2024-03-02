input.onButtonPressed(Button.A, function() {
    motor.motor_direction_LR(motor.MotorChannel.E, motor.MotorShaftDirection.HIGH, 100)
})
input.onButtonPressed(Button.B, function () {
    motor.MotorStop(motor.MotorChannel.E)
})
input.onButtonPressed(Button.AB, function() {
    gigoLED.led_onoff(gigoLED.LEDChannel.D, gigoLED.LEDShaftonoff.HIGH)
})