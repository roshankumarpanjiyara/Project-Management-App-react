import ProjectSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar></ProjectSidebar>
      <NewProject></NewProject>
    </main>
  );
}

export default App;
