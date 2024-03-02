//% color=#E7734B icon="\uf2db"
namespace sensor {

    export enum ForcesensorChannel {
        //% block="A (P20)"
        A,
        //% block="E (P16)"
        E,
        //% block="F (P14)"
        F,
        //% block="G (P2)"
        G,
        //% block="H (P8)"
        H,
    }
    export let ForcesensorChannels: { [key: number]: DigitalPin } = {
        [ForcesensorChannel.A]: DigitalPin.P20,
        [ForcesensorChannel.E]: DigitalPin.P16,
        [ForcesensorChannel.F]: DigitalPin.P14,
        [ForcesensorChannel.G]: DigitalPin.P2,
        [ForcesensorChannel.H]: DigitalPin.P8,
    }

    //----------------------------------
    //% color=#000000
    //% block="read button $pin (0-1)"
    //% group="Read Sensor"
    export function Readbutton(pin: ForcesensorChannel): number {
        let read = ForcesensorChannels[pin];
        pins.setPull(ForcesensorChannels[pin], PinPullMode.PullUp);
        let reading = pins.digitalReadPin(read);
        return (reading);
    }


    //% color=#3D3430    
    //% block="on button $pin pressed"
    //% group="Logic Sensor"
    export function ButtonPressed(pin: ForcesensorChannel): boolean {
        pins.setPull(ForcesensorChannels[pin], PinPullMode.PullUp);
        let read2 = ForcesensorChannels[pin];
        return pins.digitalReadPin(read2) == 0;
    }

}

//% color=#E7734B icon="\uf48b"
namespace motor {
    export enum ServoconChannel {
        //% block="P1"
        P1,
        //% block="P8"
        P8,
        //% block="P12"
        P12,
        //% block="P2"
        P2,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P16"
        P16,
    }
    export let ServoconChannels: { [key: number]: AnalogPin } = {
        [ServoconChannel.P1]: AnalogPin.P1,
        [ServoconChannel.P8]: AnalogPin.P8,
        [ServoconChannel.P12]: AnalogPin.P12,
        [ServoconChannel.P2]: AnalogPin.P2,
        [ServoconChannel.P13]: AnalogPin.P13,
        [ServoconChannel.P14]: AnalogPin.P14,
        [ServoconChannel.P15]: AnalogPin.P15,
        [ServoconChannel.P16]: AnalogPin.P16,
    }
    export enum ServoconShaft {
        //% block="Right"
        Right = 0,
        //% block="Left"
        Left = 180,
        //% block="Stop"
        Stop = 90,
    }
    export let DegreesServocon: { [key: number]: number } = {
        [ServoconShaft.Right]: 0,
        [ServoconShaft.Left]: 180,
        [ServoconShaft.Stop]: 90,

    }
    export enum MotorChannel {
        //% block="E (P15,P16)"
        E,
        //% block="F (P13,P14)""
        F,
        //% block="G (P12,P2)""
        G,
        //% block="H (P1,P8)""
        H,
    }
    export enum MotorShaftDirection {
        //% block="Left"
        LOW,
        //% block="Right"
        HIGH,
    }
    export let MotorSpeedPins: { [key: number]: AnalogPin } = {
        [MotorChannel.E]: AnalogPin.P16,
        [MotorChannel.F]: AnalogPin.P14,
        [MotorChannel.G]: AnalogPin.P2,
        [MotorChannel.H]: AnalogPin.P8,
    }
    export let MotorChannels: { [key: number]: DigitalPin } = {
        [MotorChannel.E]: DigitalPin.P15,
        [MotorChannel.F]: DigitalPin.P13,
        [MotorChannel.G]: DigitalPin.P12,
        [MotorChannel.H]: DigitalPin.P1,
    }
    //% color=#E7734B
    //% direction.defl=MotorShaftDirection.HIGH
    //% block="stop motor $channel"
    //% group="Motor"
    export function MotorStop(channel: MotorChannel): void {
        let dirPin = MotorChannels[channel];
        let speedPin = MotorSpeedPins[channel];
        pins.digitalWritePin(dirPin, 0);
        pins.analogWritePin(speedPin, 0);
    }

    //% color=#E7734B
    //% block="motor $channel direction $direction speed $speed"
    //% speed.min=0 speed.max=255
    //% speed.defl=100
    //% direction.min=0 direction.max=1
    //% group="Motor"
    //% color=#E7734B
    export function motor_direction_number(channel: MotorChannel, direction: number, speed: number): void {
        let dirPin2 = MotorChannels[channel];
        let speedPin2 = MotorSpeedPins[channel];

        pins.digitalWritePin(dirPin2, direction);
        pins.analogWritePin(speedPin2, pins.map(speed, 0, 255, 0, 1023));
    }

    //% color=#E7734B
    //% block="motor $channel direction $direction speed $speed"
    //% speed.min=0 speed.max=255
    //% speed.defl=100
    //% direction.defl=MotorShaftDirection.HIGH
    //% group="Motor"
    //% color=#E7734B
    export function motor_direction_LR(channel: MotorChannel, direction: MotorShaftDirection, speed: number): void {
        let dirPin3 = MotorChannels[channel];
        let speedPin3 = MotorSpeedPins[channel];
        pins.digitalWritePin(dirPin3, direction);
        pins.analogWritePin(speedPin3, pins.map(speed, 0, 255, 0, 1023));
    }

    //% color=#E84E19
    //% block"continuous Servo $pinSV direction $direction"
    //% direction.defl=90
    //% group="Servo"
    export function ContinuousServo(pinSV: ServoconChannel, direction: ServoconShaft): void {
        let pinservo = ServoconChannels[pinSV];
        pins.servoWritePin(pinservo, direction);

    }
}

//% weight=5 color=#E7734B icon="\uf110"
namespace gigoLED {
    //led
    export enum LEDChannel {
        //% block="A (P19)"
        A,
        //% block="B (P14)"
        B,
        //% block="C (P2)"
        C,
        //% block="D (P8)"
        D,
        //% block="E (P15)"
        E,
        //% block="F (P13)"
        F,
        //% block="G (P12)"
        G,
        //% block="H (P1)"
        H,
    }
    export let LEDChannels: { [key: number]: DigitalPin } = {
        [LEDChannel.A]: DigitalPin.P19,
        [LEDChannel.B]: DigitalPin.P14,
        [LEDChannel.C]: DigitalPin.P2,
        [LEDChannel.D]: DigitalPin.P8,
        [LEDChannel.E]: DigitalPin.P15,
        [LEDChannel.F]: DigitalPin.P13,
        [LEDChannel.G]: DigitalPin.P12,
        [LEDChannel.H]: DigitalPin.P1,
    }
    export enum LEDShaftonoff {
        //% block="off"
        LOW,
        //% block="on"
        HIGH,

    }


    //% color=#FACB09
    //% block="led $leds Status $Status"
    //% Status.min=0 Status.max=1
    //% leds.defl=lEDChannel.D
    //% group="Led"
    export function led_status(leds: LEDChannel, Status: number): void {
        let led = LEDChannels[leds];

        pins.digitalWritePin(led, Status);

    }

    //% color=#FACB09
    //% block="led $leds Status $Status"
    //% Status.defl=lEDShaftonoff.HIGH*
    //% leds.defl=lEDChannel.D
    //% group="Led"
    export function led_onoff(leds: LEDChannel, Status: LEDShaftonoff): void {
        let led = LEDChannels[leds];

        pins.digitalWritePin(led, Status);

    }
    //% color=#FACB09
    //toggle led
    //% blockId=led block="led %pin $ledstate"
    //% ledstate.shadow="toggleOnOff"
    //% expandableArgumentMode="toggle"
    //% pin.defl=lEDChannel.D
    //% group="Led"
    export function led_toggle(pin: LEDChannel, ledstate: boolean): void {
        if (ledstate) {
            let pinled = LEDChannels[pin];
            pins.digitalWritePin(pinled, 1);

        }
        else {
            let pinled = LEDChannels[pin];
            pins.digitalWritePin(pinled, 0);

        }
    }
}