const InsFactory:any=[];

export function InjectIns(){
    return function(target:any){
        InsFactory.push(new target())
    };
}

export function Autowired(type:Function){
    return function (target: any, propertyName: string) {
        let ins = InsFactory.find((ins:any)=>ins instanceof type);
        if(ins){
            target[propertyName] = ins;
        }else{
            console.log(`请注入${type}`)
        }
    }
}