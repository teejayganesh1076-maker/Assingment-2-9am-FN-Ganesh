function BlogPost({ title, author, children }) {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>By {author}</p>
      <div>{children}</div>
    </div>
  );
}
export default BlogPost;