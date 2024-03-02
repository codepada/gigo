
> Open this page at [https://codepada.github.io/gigo/](https://codepada.github.io/gigo/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/codepada/gigo** and import

# Pada Education blocks for micro:bit


Blocks that support [LEARNING LAB - MICROBIT COMPATIBLE ROBOT](https://padabook.com/th/products/545481-ชุดการเรียนรู้การเขียนโปรแกรม+Micro%3Abit+COMPATIBLE+ROBOTS)



## Gigo control box
```package
Gigo control box is also a built-in buzzer, 8 sets of I/O (Gigo type)and 8 sets of I/O DuPont connectors.
These I/O interfaces provide micro:bit external connections to the 50X PLANETARY GEARBOX (DDM),
180° SERVO MOTOR (METAL GEAR), LINE SENSOR, FORCE SENSOR, and other devices.
Users can also purchase other compatible sensors or servo motors.
```

### gigo pinout
```package
pinout gigo control box
A(P20,P19)
B(x,P14)
C(x,P2)
D(x,P8)
E(P16,P15)
F(P14,P13)
G(P2,P12)
H(P8,P1)
```
### Read Forcesensor

```package
Read force sensor and show number (0 or 1)
```
```blocks
basic.forever(function () {
    basic.showNumber(sensor.Readbutton(sensor.ForcesensorChannel.A))
})
```

### Forcesensor Pressed

```package
when forcesensor is pressed led show icon Heart
    true and false
```
```blocks
basic.forever(function () {
    if (sensor.ButtonPressed(sensor.ForcesensorChannel.A)) {
        basic.showIcon(IconNames.Heart)
    }
})
```

### motor

```package
control motor with select port A ,E ,F, G ,H  
direction
    Left
    Right
    Stop  
Speed 0-255  
```
```blocks
input.onButtonPressed(Button.A, function () {
    motor.motor_direction_LR(motor.MotorChannel.E, motor.MotorShaftDirection.HIGH, 100)
})
input.onButtonPressed(Button.B, function () {
    motor.MotorStop(motor.MotorChannel.E)
})

```

### continuesd servo
```package
control ContinuousServo
    Left
    Right
    Stop
```
```blocks
input.onButtonPressed(Button.A, function () {
    motor.ContinuousServo(motor.ServoconChannel.P1, motor.ServoconShaft.Left)
})
input.onButtonPressed(Button.AB, function () {
    motor.ContinuousServo(motor.ServoconChannel.P1, motor.ServoconShaft.Stop)
})
input.onButtonPressed(Button.B, function () {
    motor.ContinuousServo(motor.ServoconChannel.P1, motor.ServoconShaft.Right)
})

```

### LED gigo
```package
select led port A , B, C , D ,E ,F, G ,H 
control with toggle on off
```
```blocks
input.onButtonPressed(Button.A, function () {
    gigoLED.led_toggle(gigoLED.LEDChannel.D, true)
})
input.onButtonPressed(Button.B, function () {
    gigoLED.led_toggle(gigoLED.LEDChannel.D, false)
})

```

## License

* MIT

## Supported targets
For microbit

```package
Pada Education=github.com/codepada/gigo
```


## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/codepada/gigo** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
