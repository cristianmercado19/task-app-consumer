import { ListTaskView } from './app/list-task.view';
import { getPlural } from "task-app-pkg/dist";
import { TaskSimpleStoreService } from "task-app-pkg/dist/tasks-module/services/task-simple-store.service";
import { TaskApiMock } from "task-app-pkg/dist/tasks-module/api/task-mock.api"
import { InMemoryTaskService } from 'task-app-pkg/dist/tasks-module/services/in-memory-task.service';
import { AddNewTaskPassiveCotroller } from 'task-app-pkg/dist/tasks-module/mvc/add-new-task-passive/add-new-task-passive.controller';
import { SummaryController } from 'task-app-pkg/dist/tasks-module/mvc/summary/summary.controller';
import { ListController } from 'task-app-pkg/dist/tasks-module/mvc/list/list.controller';
import { AddNewTaskView } from "./app/add-new-task.view";
import { SummaryTaskView } from './app/summary-task.view';

export class Main {

    run() {
        const storeService = new TaskSimpleStoreService();
        const api = new TaskApiMock();
        const service = new InMemoryTaskService(api, storeService);
    
        const addNewTaskController = new AddNewTaskPassiveCotroller(service);
        const summaryController = new SummaryController(storeService);
        const listController = new ListController(storeService);
    
        const addNewTaskView = new AddNewTaskView(addNewTaskController);
        const listView = new ListTaskView(listController);
        const summaryView = new SummaryTaskView(summaryController);
    }
}


