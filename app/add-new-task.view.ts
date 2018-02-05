import { AddNewTaskPassiveCotroller } from 'task-app-pkg/dist/tasks-module/mvc/add-new-task-passive/add-new-task-passive.controller';
import { AddNewTaskPassiveView } from 'task-app-pkg/dist/tasks-module/mvc/add-new-task-passive/add-new-task-passive.view';
export class AddNewTaskView implements AddNewTaskPassiveView {

    constructor(
        private controller: AddNewTaskPassiveCotroller
    ) {
        this.attachAddTaskButtonClick();
        this.controller.init(this);
    }

    private attachAddTaskButtonClick(): void {
        document.getElementById('addTaskButton').onclick = ()=> this.onAddTaskButtonClicked();
    }

    private onAddTaskButtonClicked() {
        this.cleanSuccessfulMessage();
        this.controller.onAddTaskEvent();
    }

    lock(): void {
        console.log("lock() > Method not implemented.");
    }
    getTaskName(): string {
        const taskName = document.getElementById('taskName')["value"];

        return taskName;
    }
    unlock(): void {
        console.log("unlock() > Method not implemented.");
    }
    showSuccessfulMessageOnAddNewTask(taskId: number): void {
        const message = 'New Task Added with Id: ' + taskId;
        document.getElementById('successfulMessageOnAddNewTask').innerHTML = '<h5>' + message + '</h5>'; 
    }

    cleanSuccessfulMessage(): void {
        document.getElementById('successfulMessageOnAddNewTask').innerHTML = ''; 
    }
    
    showErrorMessageOnAddNewTask(): void {
        alert("error ocurred, task not added");
    }
    setMaxLenghTaskName(maxLength: number): void {
        console.log("setMaxLenghTaskName() > Method not implemented.");
    }
}
