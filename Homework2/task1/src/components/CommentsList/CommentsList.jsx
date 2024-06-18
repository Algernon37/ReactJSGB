import style from './CommentsList.module.sass'

function CommentsList({comments, setComments}) {

    const deleteComment = (id) => {
        setComments(prevComments => prevComments.filter(comment => comment.id !== id));
    };

    return (
        <div className={style.commentsList}>
            {comments.map(comment => (
                <div key={comment.id} className={style.comment}>
                    <div className={style.commentText}>{comment.text}</div>
                    <button
                        variant="danger"
                        onClick={() => deleteComment(comment.id)}
                    >
                        delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default CommentsList;