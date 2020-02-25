export interface ILike {
  id?: number;
  username?: string;
  postId?: number;
}

export class Like implements ILike {
  constructor(public id?: number, public username?: string, public postId?: number) {}
}
