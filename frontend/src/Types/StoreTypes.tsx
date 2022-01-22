export interface salType{
        _id?: string;
        salary: number;
        salaryDate: string;
        _v?:string;
}
export interface Datum {
    _id?: string;
    name: string;
    coreSalary:number;
    dateOfBirth: string;
    gender: string;
    salary?: salType[];
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













































































































































































































