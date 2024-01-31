 function PostItem({id, title, body}) {
    return (
        <div id={id}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default PostItem