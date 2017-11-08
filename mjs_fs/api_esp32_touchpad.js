/*
 * Copyright (c) 2014-2017 Cesanta Software Limited
 * All rights reserved
 */

let TOUCHPAD = {
  // Handy map of GPIO to touch sensor number.
  GPIO: {"4": 0, "0": 1, "2": 2, "27": 7, "15": 3, "13": 4, "12": 5, "14": 6, "33": 8, "32": 9},

  init: ffi('int touch_pad_init()'),
  deinit: ffi('int touch_pad_deinit()'),

  config: ffi('int touch_pad_config(int, int)'),

  read: ffi('int esp32_touch_pad_read(int)'),
  readFiltered: ffi('int esp32_touch_pad_read_filtered(int)'),

  isrRegister: ffi('int esp32_touch_pad_isr_register(void (*)(int, userdata), userdata)'),
  isrDeregister: ffi('int esp32_touch_pad_isr_register()'),
  intrEnable: ffi('int touch_pad_intr_enable()'),
  intrDisable: ffi('int touch_pad_intr_disable()'),

  setMeasTime: ffi('int touch_pad_set_meas_time(int, int)'),
  getMeasTimeSleepCycle: ffi('int esp32_touch_pad_get_meas_time_sleep_cycle()'),
  getMeasTimeMeasCycle: ffi('int esp32_touch_pad_get_meas_time_meas_cycle()'),

  HVOLT_KEEP:  -1, HVOLT_2V4: 0, HVOLT_2V5: 1, HVOLT_2V6: 2, HVOLT_2V7: 3,
  LVOLT_KEEP:  -1, LVOLT_0V5: 0, LVOLT_0V6: 1, LVOLT_0V7: 2, LVOLT_0V8: 3,
  HVOLT_ATTEN_KEEP: -1, HVOLT_ATTEN_1V5: 0, HVOLT_ATTEN_1V: 1, HVOLT_ATTEN_0V5: 2, HVOLT_ATTEN_0V: 3,
  setVoltage: ffi('int touch_pad_set_voltage(int, int, int)'),  // refh, refl, atten
  getVoltageRefH: ffi('int esp32_touch_pad_get_voltage_refh()'),
  getVoltageRefL: ffi('int esp32_touch_pad_get_voltage_refl()'),
  getVoltageAtten: ffi('int esp32_touch_pad_get_voltage_atten()'),

  PAD_TIE_OPT_LOW: 0, PAD_TIE_OPT_HIGH: 1,
  setCntMode: ffi('int touch_pad_set_cnt_mode(int, int, int)'),  // pad, slope, opt
  getCntModeSlope: ffi('int esp32_touch_pad_get_cnt_mode_slope(int)'),
  getCntModeOpt: ffi('int esp32_touch_pad_get_cnt_mode_opt(int)'),

  ioInit: ffi('int touch_pad_io_init(int)'),

  FSM_MODE_TIMER: 0, FSM_MODE_SW: 1,
  setFSMMode: ffi('int touch_pad_set_fsm_mode(int)'),
  getFSMMode: ffi('int esp32_touch_pad_get_fsm_mode()'),

  swStart: ffi('int touch_pad_sw_start()'),

  setThresh: ffi('int touch_pad_set_thresh(int, int)'),
  getThresh: ffi('int esp32_touch_pad_get_thresh(int)'),

  TRIGGER_BELOW: 0, TTRIGGER_ABOVE: 1,
  setTriggerMode: ffi('int touch_pad_set_trigger_mode(int)'),
  getTriggerMode: ffi('int esp32_touch_pad_get_trigger_mode()'),

  TRIGGER_SOURCE_BOTH: 0, TRIGGER_SOURCE_SET1: 1,
  setTriggerSource: ffi('int touch_pad_set_trigger_source(int)'),
  getTriggerSource: ffi('int esp32_touch_pad_get_trigger_source()'),

  setGroupMask: ffi('int touch_pad_set_group_mask(int, int, int)'),
  getGroupMaskSet1: ffi('int esp32_touch_pad_get_group_mask_set1()'),
  getGroupMaskSet2: ffi('int esp32_touch_pad_get_group_mask_set2()'),
  getGroupMaskEn: ffi('int esp32_touch_pad_get_group_mask_en()'),

  clearStatus: ffi('int touch_pad_clear_status()'),
  getStatus: ffi('int touch_pad_get_status()'),

  setFilterPeriod: ffi('int touch_pad_set_filter_period(int)'),
  getFilterPeriod: ffi('int esp32_touch_pad_get_filter_period()'),

  filterStart: ffi('int touch_pad_filter_start(int)'),
  filterStop: ffi('int touch_pad_filter_stop()'),
  filterDelete: ffi('int touch_pad_filter_delete()'),
};
