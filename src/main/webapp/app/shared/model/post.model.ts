import { Moment } from 'moment';
import { IComment } from 'app/shared/model/comment.model';
import { ILike } from 'app/shared/model/like.model';
import { ITag } from 'app/shared/model/tag.model';
import { PostType } from 'app/shared/model/enumerations/post-type.model';

export interface IPost {
  id?: number;
  title?: string;
  summary?: string;
  postType?: PostType;
  active?: boolean;
  activeDate?: Moment;
  activeBy?: string;
  fileContentType?: string;
  file?: any;
  comments?: IComment[];
  likes?: ILike[];
  tags?: ITag[];
}

export class Post implements IPost {
  constructor(
    public id?: number,
    public title?: string,
    public summary?: string,
    public postType?: PostType,
    public active?: boolean,
    public activeDate?: Moment,
    public activeBy?: string,
    public fileContentType?: string,
    public file?: any,
    public comments?: IComment[],
    public likes?: ILike[],
    public tags?: ITag[]
  ) {
    this.active = this.active || false;
  }
}
