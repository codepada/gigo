
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
![Box](https://github.com/codepada/gigo/blob/master/picture/micorbitbox.png)
![pinout](https://github.com/codepada/gigo/blob/master/picture/pinout.png)
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
![forcesensor](https://github.com/codepada/gigo/blob/master/picture/forcesensor.png)
<img src="https://github.com/codepada/gigo/blob/master/picture/forcesensor.png">
```package
for read force sensor and show number on led
```
```blocks
basic.forever(function () {
    basic.showNumber(sensor.Readbutton(sensor.ForcesensorChannel.A))
})
```
![buttonread](https://github.com/codepada/gigo/blob/master/picture/readbutton.png)

### Forcesensor Pressed

```package
code for  Forcesensor  is pressed , when forcesensor is pressed led show icon Heart
```
```blocks
basic.forever(function () {
    if (sensor.ButtonPressed(sensor.ForcesensorChannel.A)) {
        basic.showIcon(IconNames.Heart)
    }
})
```
![buttonpressed](https://github.com/codepada/gigo/blob/master/picture/buttonispressed.png)

### motor
![motor](https://github.com/codepada/gigo/blob/master/picture/motor.png)

```package
control motor with select port A ,E ,F, G ,H 
```
```blocks
input.onButtonPressed(Button.A, function () {
    motor.motor_direction_LR(motor.MotorChannel.E, motor.MotorShaftDirection.HIGH, 100)
})
input.onButtonPressed(Button.B, function () {
    motor.MotorStop(motor.MotorChannel.E)
})

```
![DDM motor](https://github.com/codepada/gigo/blob/master/picture/motorcontrol.png)

### continuesd servo
![continuesd servor](https://github.com/codepada/gigo/blob/master/picture/servocon.png)
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
![continuesd](https://github.com/codepada/gigo/blob/master/picture/motorservocontrol.png)

### LED gigo
![ led](https://github.com/codepada/gigo/blob/master/picture/led.png)
```package
select led port A , B, C , D ,E ,F, G ,H and control with toggle 
```
```blocks
input.onButtonPressed(Button.A, function () {
    gigoLED.ledBrightness(gigoLED.lEDChannel.D, true)
})
input.onButtonPressed(Button.B, function () {
    gigoLED.ledBrightness(gigoLED.lEDChannel.D, false)
})

```
![LEDcontrol](https://github.com/codepada/gigo/blob/master/picture/ledcontrol.png)

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
