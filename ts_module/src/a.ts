export let num:number=10;
export function isLegal(age:number){
    if(age>18) return true;
    else return false;
}

function getName(name:string){
    return name;
}
export default getName;  //default export mei name change kr skte while importing but not in simple export-- No need of Destructure
//simple export mei destructure krna pdtaa hai unlike Defualt export