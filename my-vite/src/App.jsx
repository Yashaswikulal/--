import topUser from "./components/topUser";
import topPost from "./components/topPost";

function App() {
  return (
    <div className="App">
      <h1>Social Media Analytics</h1>
      <TopUsers />
      <TopPosts type="popular" />
      <TopPosts type="latest" />
    </div>
  );
}

export default App;

