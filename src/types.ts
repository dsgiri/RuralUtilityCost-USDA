export type Category = 
  | 'Acreage' 
  | 'Payment Estimation' 
  | 'Disaster Support' 
  | 'Decision Tools' 
  | 'Resources' 
  | 'Records';

export interface Tool {
  id: string;
  title: string;
  description: string;
  category: Category;
  primaryOutcome: string;
}

export type ViewState = 
  | 'home' 
  | 'tools' 
  | 'favorites' 
  | 'about' 
  | 'legal'
  | 'contact'
  | 'not-found'
  | 'tool-view';
