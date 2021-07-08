export class TaskModel{
    userId:any;
    id:any;
    title:any;
    completed:boolean;
    constructor(title:any,userId:any,id:any){
        this.completed=false;
        this.title = title;
        this.userId = userId;
        this.id = id;
    }
}