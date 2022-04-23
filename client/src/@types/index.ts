export interface DataProps{
    click:number;
    fullUrl:string;
    shortUrl:string;
    createdAt:number;
  }

export interface ResponseDataProps{
    data:DataProps|[];
    message:string;
    status: 'failed' | 'success';
  }
