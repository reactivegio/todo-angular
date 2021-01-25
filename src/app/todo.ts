export class Todo {
    id: number;
    title: string;
    isCompleted: boolean;

    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}
