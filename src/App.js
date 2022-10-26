import Blogs from "./Blogs";
import useFetch from "./ourHooks/useFetch";

function App() {
  const { blogs, pending, err } = useFetch(
    "https://fakerapi.it/api/v1/books?_quantity=5"
  );

  return (
    <div className="container">
      {pending && <div>Loading...</div>}
      {err && <div>Something Wrong here!</div>}
      {blogs && <Blogs blogs={blogs} />}
    </div>
  );
}

export default App;
