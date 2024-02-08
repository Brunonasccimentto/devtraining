import Status from "../enums/status";

export class Student {
  constructor() {}

  calculateAverage = (p1: number, p2: number, p3: number): number => {
    const average = ((p1 / 10 + p2 / 10 + p3 / 10) / 3).toFixed(1);
    return parseFloat(average);
  };

  stundentStatus = (average: number): Status => {
    if (average < 5) {
      return Status.Failed;
    }

    if (average >= 5 && average < 7) {
      return Status.FinalExam;
    }

    return Status.Approved;
  };

  checkAbsenceStatus = (absences: number, lessons: number): Status => {
    if (absences > lessons * 0.25) {
      return Status.FailedForAbsence;
    }

    return Status.Default;
  };

  finalExamScoreForApproval = (average: number) => {
    return Math.ceil(5 * 2 - average);
  };
}
