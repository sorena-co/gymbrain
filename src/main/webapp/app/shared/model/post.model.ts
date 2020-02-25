import { Moment } from 'moment';
import { IComment } from 'app/shared/model/comment.model';
import { ILike } from 'app/shared/model/like.model';
import { ITag } from 'app/shared/model/tag.model';

export interface IPost {
  id?: number;
  title?: string;
  summary?: string;
  postType?: string;
  active?: boolean;
  activeDate?: Moment;
  activeBy?: string;
  comments?: IComment[];
  likes?: ILike[];
  tags?: ITag[];
}

export class Post implements IPost {
  constructor(
    public id?: number,
    public title?: string,
    public summary?: string,
    public postType?: string,
    public active?: boolean,
    public activeDate?: Moment,
    public activeBy?: string,
    public comments?: IComment[],
    public likes?: ILike[],
    public tags?: ITag[]
  ) {
    this.active = this.active || false;
  }
}
