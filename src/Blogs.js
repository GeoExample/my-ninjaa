const Blogs = ({ blogs }) => {
  return (
    <div className="mainContext">
      <div>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
