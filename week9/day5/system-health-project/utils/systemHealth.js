import {
  checkDobot,
  checkTuya,
  checkDatabase
} from "../services/devices.js";

export function CheckSystemHealth(deviceName) {
  const checks = {
    dobot: checkDobot,
    tuya: checkTuya,
    database: checkDatabase
  };

  const checkFunction = checks[deviceName.toLowerCase()];

  if (!checkFunction) {
    return {
      device: deviceName,
      status: "UNKNOWN DEVICE"
    };
  }

  return checkFunction();
}