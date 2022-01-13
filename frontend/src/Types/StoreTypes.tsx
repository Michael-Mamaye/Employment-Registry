export interface Datum {
    _id?: string;
    name: string;
    dateOfBirth: string;
    gender: string;
    salary: number;
    email:string;
    startDate?:string;
    __v?: number;
}
export type ForEmployee={
    totalEmployees:number,
    totalSalary:number,
    data:Datum[];
    topThree:Datum[];
    employeesState:filterTypes;
    topThreeState:filterTypes;
    namedData:Datum[];
    
}

export type filterTypes={
    filterBy:string,
    sortBy:string,
    ascOrDesc:number
}













































































































































































































