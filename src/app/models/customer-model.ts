
export interface customer {
    customerType: any,
    accountNumber: number,
    mobileNumber: number,
    customerPlan: Plan,
    startDate: Date
  }

  export interface CustomerType{
    id:any;
    descriptions:string;
  }
  
  export interface Plan extends CustomerType {
    id:any;
    code:string;
    customerType:CustomerType;
    amount:number;
  }