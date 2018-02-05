import { SummaryController } from 'task-app-pkg/dist/tasks-module/mvc/summary/summary.controller';
import { SummaryView } from 'task-app-pkg/dist/tasks-module/mvc/summary/summary.view';
export class SummaryTaskView implements SummaryView{

    constructor(
        private controller: SummaryController
    ){
        this.controller.init(this);
    }

    setTotalCount(newTotal: number): void {

        if(newTotal > 0) {
            document.getElementById('summaryTaskView').innerHTML = '<h3>Total: ' + newTotal + '</h3>'; 
        }
    }
}