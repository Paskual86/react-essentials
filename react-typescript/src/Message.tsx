//import React from 'react';
import messageHoc from './Hoc';

/*interface UserMessage {
    name:string;
    message:string;
}

const Message = (prop: UserMessage):any => {
    return (
        <p>{prop.name}, {prop.message}</p>
        );
}
*/

const example = (prop: any) : any => <p>{prop.name}, {prop.message}</p>;

const Message = messageHoc(example)

export default Message;