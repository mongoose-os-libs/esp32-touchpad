# JS bindings for ESP32 touch pad sensor

## Overview

This library provides JavaScript bindings for the ESP32 touch pad sensor.
The JS API largely mirrors the [C API](https://github.com/espressif/esp-idf/blob/master/components/driver/include/driver/touch_pad.h).

## Examples

### Polling the sensor manually

```js
load('api_esp32_touchpad.js');

// Touch sensors are numbered from 0 to 9.
// For convenience, TOUCHPAD.GPIO map translates from GPIO number to sensor number.
let ts = TOUCHPAD.GPIO[15];

TOUCHPAD.init();
TOUCHPAD.setVoltage(TOUCHPAD.HVOLT_2V4, TOUCHPAD.LVOLT_0V8, TOUCHPAD.HVOLT_ATTEN_1V5);
TOUCHPAD.config(ts, 0);
Timer.set(1000 /* 1 sec */, true /* repeat */, function() {
  let tv = TOUCHPAD.read(ts);
  print('Sensor', ts, 'value', tv);
}, null);

```

### Using interrupts

```js
load('api_esp32_touchpad.js');

// Touch sensors are numbered from 0 to 9.
// For convenience, TOUCHPAD.GPIO map translates from GPIO number to sensor number.
let ts = TOUCHPAD.GPIO[15];

TOUCHPAD.init();
TOUCHPAD.filterStart(10);
TOUCHPAD.setMeasTime(0x1000, 0xffff);
TOUCHPAD.setVoltage(TOUCHPAD.HVOLT_2V4, TOUCHPAD.LVOLT_0V8, TOUCHPAD.HVOLT_ATTEN_1V5);
TOUCHPAD.config(ts, 0);
Sys.usleep(100000); // wait a bit for initial filtering.
let noTouchVal = TOUCHPAD.readFiltered(ts);
let touchThresh = noTouchVal * 2 / 3;
print('Sensor', ts, 'noTouchVal', noTouchVal, 'touchThresh', touchThresh);
TOUCHPAD.setThresh(ts, touchThresh);
TOUCHPAD.isrRegister(function(st) {
  // st is a bitmap with 1 bit per sensor.
  let val = TOUCHPAD.readFiltered(ts);
  print('Status:', st, 'Value:', val);
}, null);
TOUCHPAD.intrEnable();
```
