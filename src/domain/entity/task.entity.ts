export class Task{
    private id: number;
    private title: string;

    constructor(id: number, title: string){
        this.id = id;
        this.title = title;
    }

    public getId(){
        return this.id;
    }

    public setId(id: number){
        this.id = id;
   }

    public setTitle(title: string){
         this.title = title;
    }

    public getTitle(){
        return this.title;
    }

}
