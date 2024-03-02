input.onButtonPressed(Button.A, function() {
    motor.motor_direction_LR(motor.MotorChannel.E, motor.MotorShaftDirection.HIGH, 100)
})
input.onButtonPressed(Button.B, function () {
    motor.MotorStop(motor.MotorChannel.E)
})
