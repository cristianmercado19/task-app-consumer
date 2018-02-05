import { ListController } from 'task-app-pkg/dist/tasks-module/mvc/list/list.controller';
import { ListView } from 'task-app-pkg/dist/tasks-module/mvc/list/list.view';
import { Task } from 'task-app-pkg/dist/tasks-module/entities/task.model';
export class ListTaskView implements ListView{

    constructor(
        private listController : ListController,
    ){
        this.listController.init(this);
    }

    updateList(tasks: Task[]): void {

        if (tasks.length === 0)
            return

        let listHtml = '<h3>List</h3>';

        tasks.forEach(task => {
            listHtml += '<li>' + task.name + '</li>';
        }); 

        document.getElementById('listTaskView').innerHTML = listHtml; 
    }

}
