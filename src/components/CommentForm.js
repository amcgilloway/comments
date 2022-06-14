import React, {useState} from 'react';

const CommentForm = ({onCommentSubmit}) => {

    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");

    const handleAuthor = (event) => {
        setAuthor(event.target.value);
    }

    const handleText = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newAuthor = author.trim();
        const newText = text.trim();
        if (!newAuthor || !newText){
            return 
        }
        // TODO: Update the comments in CommentBox
        const newComment = {author: newAuthor, text: newText, id: Date.now()}
        onCommentSubmit(newComment)

        setAuthor("");
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="author">Author:</label>
            <input required type="text" placeholder="Author" id="author" value={author} onChange={handleAuthor}/>
            <label htmlFor="text">Text:</label>
            <input required type="text" placeholder="Say something..." id="text" value={text} onChange={handleText} />
            <input type="submit" value="Post Comment" />
        </form>
    )
}

export default CommentForm;