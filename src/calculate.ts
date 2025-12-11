import type { Doctor } from "./doctor.js";

export interface QueueResult {
  waitTime: number;
  assignedToDoctor: string;
}

export function calculateEstimatedWaitTime(
  doctors: Doctor[],
  queuePosition: number
): QueueResult {
  if (doctors.length === 0) {
    throw new Error("No doctors are available.");
  }

  if (queuePosition < 1) {
    return {
      waitTime: 0,
      assignedToDoctor: doctors[0].name
    };
  }

  if (queuePosition <= doctors.length) {
    return {
      waitTime: 0,
      assignedToDoctor: doctors[queuePosition - 1].name
    };
  }

  const doctorFreeTimes = new Array(doctors.length).fill(0);

  for (let i = 1; i <= queuePosition; i++) {
    let soonestFreeTime = Infinity;
    let chosenDoctorIndex = 0;

    for (let j = 0; j < doctorFreeTimes.length; j++) {
      if (doctorFreeTimes[j] < soonestFreeTime) {
        soonestFreeTime = doctorFreeTimes[j];
        chosenDoctorIndex = j;
      }
    }

    if (i === queuePosition) {
      return {
        waitTime: soonestFreeTime,
        assignedToDoctor: doctors[chosenDoctorIndex].name
      };
    }

    doctorFreeTimes[chosenDoctorIndex] +=
      doctors[chosenDoctorIndex].avgConsultationTime;
  }

  return {
    waitTime: 0,
    assignedToDoctor: doctors[0].name
  };
}
