import { Request, Response } from "express";
import { GoogleSheetsRepository } from "../repositories/googleSheetsRepository";
import Status from "../enums/status";
import { Student } from "../model/student";

export class UpdateStudentStatusController {
  async updateData(request: Request, response: Response): Promise<Response> {
    
    const googleSheetsRepository = new GoogleSheetsRepository(process.env.SPREADSHEET_ID!);
    const lessons = await googleSheetsRepository.getClassLessons();
    const studentsAbsence = await googleSheetsRepository.getStudentsAbsences();
    const StudentsExams = await googleSheetsRepository.getStudentExamsScore();
    const student = new Student();

    try {
      
      const studentsReprovedByAbsence: number[] = studentsAbsence!.flatMap(
        (element, index) => {
          const status = student.checkAbsenceStatus(element, lessons!);
          return status === Status.FailedForAbsence ? [index] : [];
        },
      );

      const studentsStatus: Status[][] = StudentsExams!.map((element) => {
        const [p1, p2, p3] = element;
        const status = student.stundentStatus(student.calculateAverage(p1, p2, p3));
        return [status];
      });

      const finalStudentStatus: Status[][] = studentsStatus.map(
        (element, index) => {
          const reprovedByAbsence = studentsReprovedByAbsence.includes(index);
          return reprovedByAbsence ? [Status.FailedForAbsence] : element;
        },
      );

      const studentsInFinalExam = finalStudentStatus.map((element) => {
        const studentsInFinalExam = element[0] === Status.FinalExam;
        return studentsInFinalExam;
      });

      const calculateStudentsExamFinalScoreToPass: number[] | Status[][] =
        StudentsExams!.map((element, index) => {
          const [p1, p2, p3] = element;
          return studentsInFinalExam[index] == true
            ? [student.finalExamScoreForApproval(student.calculateAverage(p1, p2, p3))]
            : [Status.Default];
        });

      Promise.all([
        await googleSheetsRepository.updateStudentsStatus(finalStudentStatus),
        await googleSheetsRepository.updateFinalMarkExam(calculateStudentsExamFinalScoreToPass),
      ]);

      return response
        .status(200)
        .json({ message: "The exel table has been updated." });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Internal server error." });
    }
  }
}
