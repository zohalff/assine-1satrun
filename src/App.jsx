import Badge from "./components/Badge";

function App() {
  return (
    <div>
      <h1>Week 1 Assignment</h1>

      <Badge label="Course" value="React" />
      <Badge label="Week" value={1} />
      <Badge label="Topic" value="Props" />
      <Badge label="Level" value="Beginner" />
    </div>
  );
}

export default App;