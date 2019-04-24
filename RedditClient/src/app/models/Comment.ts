import { Postable } from './Postable';

export class Comment extends Postable {
    parentPostable: Postable;
}