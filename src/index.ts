import { calculateEstimatedWaitTime } from "./calculate.js";
import type { Doctor } from "./doctor.js";

const doctors: Doctor[] = [
  { id: "1", name: "Dr. A", avgConsultationTime: 3 },
  { id: "2", name: "Dr. B", avgConsultationTime: 4 },
];

console.log("Position 11:", calculateEstimatedWaitTime(doctors, 11));
console.log("Position 5:", calculateEstimatedWaitTime(doctors, 5));
console.log("Position 6:", calculateEstimatedWaitTime(doctors, 6));
