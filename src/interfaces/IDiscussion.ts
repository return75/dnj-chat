import IComment from "./IComment";

export default interface IDiscussion extends IComment {
    replies: IComment[];
}
