import { type GoogleAuth } from "google-auth-library";
import { type JSONClient } from "google-auth-library/build/src/auth/googleauth";
import { google, type sheets_v4 } from "googleapis";
import Status from "../enums/status";

export class GoogleSheetsRepository {
  private readonly spreadsheetId: string;
  private readonly googleSheet: sheets_v4.Sheets;
  private readonly auth: GoogleAuth<JSONClient>;
  private readonly keyFile = "credentials.json";
  private readonly scopes = ["https://www.googleapis.com/auth/spreadsheets"];

  constructor(spreadsheetId: string) {
    this.spreadsheetId = spreadsheetId;
    this.auth = new google.auth.GoogleAuth({
      keyFile: this.keyFile,
      scopes: this.scopes,
    });
    this.googleSheet = google.sheets("v4");
  }

  async updateStudentsStatus(status: Status[][]): Promise<void> {
    await this.googleSheet.spreadsheets.values.update({
      auth: this.auth,
      spreadsheetId: this.spreadsheetId,
      range: "engenharia_de_software!G4:G",
      valueInputOption: "RAW",
      requestBody: {
        values: status,
      },
    });
  }

  async updateFinalExamScoreToPass(finalMark: number[][] | Status[][]): Promise<void> {
    await this.googleSheet.spreadsheets.values.update({
      auth: this.auth,
      spreadsheetId: this.spreadsheetId,
      range: "engenharia_de_software!H4:H",
      valueInputOption: "RAW",
      requestBody: {
        values: finalMark,
      },
    });
  }

  async getClassLessons(): Promise<number | null> {
    const lessons = await this.googleSheet.spreadsheets.values.get({
      auth: this.auth,
      spreadsheetId: this.spreadsheetId,
      range: "engenharia_de_software!A2:H2",
      valueRenderOption: "UNFORMATTED_VALUE",
    });

    const rawData = lessons.data.values![0][0];
    const data = parseInt(rawData.match(/\d+/)[0]);

    return data;
  }

  async getStudentsAbsences(): Promise<number[] | null> {
    const absences = await this.googleSheet.spreadsheets.values.get({
      auth: this.auth,
      spreadsheetId: this.spreadsheetId,
      range: "engenharia_de_software!C4:C",
      valueRenderOption: "UNFORMATTED_VALUE",
    });

    const data = absences.data.values as number[][];
    const absensesArray = data.reduce(
      (acc, current) => acc.concat(current),
      [],
    );
    return absensesArray;
  }

  async getStudentExamsScore(): Promise<number[][] | null> {
    const studentsExams = await this.googleSheet.spreadsheets.values.get({
      auth: this.auth,
      spreadsheetId: this.spreadsheetId,
      range: `engenharia_de_software!D4:F`,
      valueRenderOption: "UNFORMATTED_VALUE",
    });

    return studentsExams.data.values as number[][];
  }

  async getExcelTable(): Promise<sheets_v4.Schema$ValueRange> {
    const table = await this.googleSheet.spreadsheets.values.get({
      auth: this.auth,
      spreadsheetId: this.spreadsheetId,
      range: `engenharia_de_software`,
      valueRenderOption: "UNFORMATTED_VALUE",
    });

    return table as sheets_v4.Schema$ValueRange;
  }
}
