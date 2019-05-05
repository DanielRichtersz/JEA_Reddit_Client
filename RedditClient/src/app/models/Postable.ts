import { Redditor } from './Redditor';
import { Comment } from './Comment';
import { Vote } from './Vote';

export class Postable {
    id: number;
    content: string;
    deleted: boolean;
    owner: Redditor;
    comments: Array<Comment>;
    votes: Array<Vote>;
    dateCreated: Date;
  }