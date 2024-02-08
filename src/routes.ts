import { Router } from 'express';
import { UpdateStudentStatusController } from './controllers/update-student-status-controller';
import { GetTableController } from './controllers/get-table-controller';

const routes = Router();
const updateStudentStatusController = new UpdateStudentStatusController();
const getTableController = new GetTableController();

routes.post('/student/status', updateStudentStatusController.updateData);
routes.get('/table', getTableController.getData);

export { routes };
