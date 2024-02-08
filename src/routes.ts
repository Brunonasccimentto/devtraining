import { Router } from "express";
import { UpdateStudentStatusController } from "./controllers/update-student-status-controller";
import { GetSpreadsheetController } from "./controllers/get-spreadsheet-controller";

const routes = Router();
const updateStudentStatusController = new UpdateStudentStatusController();
const getSpreadsheetController = new GetSpreadsheetController();

routes.post("/student/status", updateStudentStatusController.updateData);
routes.get("/spreadsheet", getSpreadsheetController.getData);

export { routes };
