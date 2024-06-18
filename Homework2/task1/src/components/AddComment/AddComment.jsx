import { Form } from 'react-bootstrap';
import style from './AddComment.module.sass';

function AddComment({ comments, newTextComment, setNewTextComment, setComments }) {

    const addComment = (event) => {
        event.preventDefault();
        if (newTextComment.trim() === "") return; 
        const newComment = {
            id: comments.length > 0 ? comments[comments.length - 1].id + 1 : 1,
            text: newTextComment
        };
        setComments([...comments, newComment]);
        setNewTextComment("");
    };

    return (
        <div className={style.CommentsForm}>
            <Form onSubmit={addComment}>
                <Form.Group className={style.control}>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="New Comment"
                        value={newTextComment}
                        onChange={(e) => setNewTextComment(e.target.value)}
                        className={style.textarea}
                    />
                </Form.Group>
                <button type="submit">Add new comment</button>
            </Form>
        </div>
    );
}

export default AddComment;
