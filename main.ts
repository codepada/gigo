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
    export function readButton(pin: ForcesensorChannel): number {
        let read = ForcesensorChannels[pin];
        pins.setPull(ForcesensorChannels[pin], PinPullMode.PullUp);
        let reading = pins.digitalReadPin(read);
        return (reading);
    }


    //% color=#3D3430    
    //% block="on button $pin pressed"
    //% group="Logic Sensor"
    export function buttonPressed(pin: ForcesensorChannel): boolean {
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
        //% block="right"
        right = 0,
        //% block="left"
        left = 180,
        //% block="stop"
        stop = 90,
    }
    export let DegreesServocon: { [key: number]: number } = {
        [ServoconShaft.right]: 0,
        [ServoconShaft.left]: 180,
        [ServoconShaft.stop]: 90,

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
        //% block="left"
        LOW,
        //% block="right"
        HIGH,
    }
    export let MotorSDD:{ [key: number]: number }={
        [MotorShaftDirection.LOW]: 0,
        [MotorShaftDirection.HIGH]: 1,
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
    export function motorStop(channel: MotorChannel): void {
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
    export function motorDirectionNumber(channel: MotorChannel, direction: number, speed: number): void {
        let dirPin2 = MotorChannels[channel];
        let speedPin2 = MotorSpeedPins[channel];

        pins.digitalWritePin(dirPin2, direction);
        pins.analogWritePin(speedPin2, pins.map(speed, 0, 255, 0, 1023));
    }

    //% color=#E7734B
    //% block="motor $channel direction $direction speed $speed"
    //% speed.min=0 speed.max=255
    //% speed.defl=100
    //% direction.defl=motor.MotorShaftDirection.HIGH
    //% group="Motor"
    //% color=#E7734B
    export function motorDirectionLR(channel: MotorChannel, direction: MotorShaftDirection, speed: number): void {
        let dirPin3 = MotorChannels[channel];
        let speedPin3 = MotorSpeedPins[channel];
        let direct = MotorSDD[direction];
        pins.digitalWritePin(dirPin3, direct);
        pins.analogWritePin(speedPin3, pins.map(speed, 0, 255, 0, 1023));
    }

    //% color=#E84E19
    //% block"continuous servo $pinSV direction $direction"
    //% direction.defl=motor.ServoconShaft.right
    //% group="Servo"
    export function continuousServo(pinSV: ServoconChannel, direction: ServoconShaft): void {
        let pinservo = ServoconChannels[pinSV];
        pins.servoWritePin(pinservo, direction);

    }
}

//% weight=5 color=#E7734B icon="\uf110"
namespace gigoLED {
    //led
    export enum lEDChannel {
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
    export let lEDChannels: { [key: number]: DigitalPin } = {
        [lEDChannel.A]: DigitalPin.P19,
        [lEDChannel.B]: DigitalPin.P14,
        [lEDChannel.C]: DigitalPin.P2,
        [lEDChannel.D]: DigitalPin.P8,
        [lEDChannel.E]: DigitalPin.P15,
        [lEDChannel.F]: DigitalPin.P13,
        [lEDChannel.G]: DigitalPin.P12,
        [lEDChannel.H]: DigitalPin.P1,
    }
    
    //% color=#FACB09
    //% block="led $leds to $status"
    //% status.min=0 status.max=1
    //% leds.defl=gigoLED.lEDChannel.D
    //% group="Led"
    export function ledstatus(leds: lEDChannel, status: number): void {
        let led = lEDChannels[leds];

        pins.digitalWritePin(led, status);

    }

    
    //% color=#FACB09
    //toggle led
    //% blockId=led block="led %pin $ledstate"
    //% ledstate.shadow="toggleOnOff"
    //% expandableArgumentMode="toggle"
    //% pin.defl=gigoLED.lEDChannel.D
    //% group="Led"
    export function ledToggle(pin: lEDChannel, ledstate: boolean): void {
        if (ledstate) {
            let pinled = lEDChannels[pin];
            pins.digitalWritePin(pinled, 1);

        }
        else {
            let pinled = lEDChannels[pin];
            pins.digitalWritePin(pinled, 0);

        }
    }
}