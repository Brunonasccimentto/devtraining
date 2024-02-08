import { Student } from '../../src/model/student';
import Status from '../../src/enums/status'; 

const student = new Student()

describe('calculateAverage', () => {
  it('should return student average', () => {

    expect(student.calculateAverage(50, 50, 50)).toBe(5.0);
    expect(student.calculateAverage(91, 88, 92)).toBe(9.0);
    expect(student.calculateAverage(0, 0, 0)).toBe(0);
    expect(student.calculateAverage(-5, -5, -5)).toBe(-0.5);
  });
});

describe('stundentStatus', () => {
  it("should return the student's status correctly", () => {
    expect(student.stundentStatus(4)).toBe(Status.Failed);
    expect(student.stundentStatus(6)).toBe(Status.FinalExam);
    expect(student.stundentStatus(7)).toBe(Status.Approved);
  });
});

describe('checkAbsenceStatus', () => {
  it("should return the student's absence status", () => {
    expect(student.checkAbsenceStatus(5, 20)).toBe(Status.Default);
    expect(student.checkAbsenceStatus(8, 35)).toBe(Status.Default);
    expect(student.checkAbsenceStatus(20, 60)).toBe(Status.FailedForAbsence);
    expect(student.checkAbsenceStatus(10, 20)).toBe(Status.FailedForAbsence);
  });
});

describe('finalExamScoreForApproval', () => {
  it('should correctly return the final exam score to pass', () => {
    expect(student.finalExamScoreForApproval(4)).toBe(6);
    expect(student.finalExamScoreForApproval(6.2)).toBe(4);
    expect(student.finalExamScoreForApproval(5.7)).toBe(5);
    expect(student.finalExamScoreForApproval(5.2)).toBe(5);
  });
});