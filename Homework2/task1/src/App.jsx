import reactLogo from './assets/react.svg'
import style from './App.module.sass'
import CommentsList from './components/CommentsList/CommentsList'
import AddComment from './components/AddComment/AddComment'
import { useState } from "react";

function App() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
  ]);

  const [newTextComment, setNewTextComment] = useState('');

  return (
    <div className={style.wrapper}>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={style.logo} alt="React logo" />
        </a>
      </div>
      <AddComment
        newTextComment={newTextComment}
        setNewTextComment={setNewTextComment}
        comments={comments}
        setComments={setComments}
      />
      <CommentsList
        comments={comments}
        setComments={setComments}
      />
    </div>
  )
}

export default App
