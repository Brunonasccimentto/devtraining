import { Request, Response } from "express";
import { GoogleSheetsRepository } from "../repositories/googleSheetsRepository";

export class GetTableController {
  async getData(request: Request, response: Response): Promise<Response> {
    const googleSheetsRepository = new GoogleSheetsRepository(
      process.env.SPREADSHEET_ID!,
    );

    try {
      const data = await googleSheetsRepository.getExcelTable();

      return response.status(200).json(data);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Internal server error." });
    }
  }
}
