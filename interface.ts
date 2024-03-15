interface IPract{
   amount(a:number):number;
   name(b:string):string;
}
class child implements IPract{
    amount(a: number):any {
        console.log(a);
        
    }
    name(b: string): any {
        console.log(b);
        
    }
}
let c = new child();
c.amount(10)
c.name('ritik')