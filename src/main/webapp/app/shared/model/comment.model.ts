import { Moment } from 'moment';

export interface IComment {
  id?: number;
  title?: string;
  active?: boolean;
  activeBy?: string;
  activeDate?: Moment;
  postId?: number;
}

export class Comment implements IComment {
  constructor(
    public id?: number,
    public title?: string,
    public active?: boolean,
    public activeBy?: string,
    public activeDate?: Moment,
    public postId?: number
  ) {
    this.active = this.active || false;
  }
}
