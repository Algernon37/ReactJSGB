import style from './Message.module.sass'

function Message(props) {
    return (
        <div>
            <p className={style.text}>{props.text}</p>
        </div>
    );
};

export default Message;