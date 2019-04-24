import { TypeVote } from './TypeVote';
import { Redditor } from './Redditor';
import { Postable } from './Postable';

export class Vote {
    id: number;
    typeVote: TypeVote;
    owner: Redditor;
    postable: Postable;
  }