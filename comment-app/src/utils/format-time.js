import moment from './moment-cn';

export const formatCommentTime = timestamp => {
    return moment(timestamp).startOf('second').fromNow();
}