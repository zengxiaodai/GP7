export interface Article {
  _id: string,
  title: string,
  image: string,
  content: string,
  top: boolean,
  author: string,
  create_time: number,
  [propName:string]: any
}
