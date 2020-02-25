import { IPost } from 'app/shared/model/post.model';

export interface ITag {
  id?: number;
  title?: string;
  posts?: IPost[];
}

export class Tag implements ITag {
  constructor(public id?: number, public title?: string, public posts?: IPost[]) {}
}
