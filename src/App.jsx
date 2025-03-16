import ProjectSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: []
  });

  function handleSelectProject(id){
    setProjectState(prev => {
      return{
        ...prev,
        selectedProject: id,
      }
    })
  }

  function handleStartAddProject(){
    setProjectState(prev => {
      return{
        ...prev,
        selectedProject: null,
      };
    });
  }

  function handleCancelAddProject(){
    setProjectState(prev => {
      return{
        ...prev,
        selectedProject: null,
      };
    });
  }

  function handleAddProject(projectData){
    setProjectState(prev => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prev, 
        selectedProject: undefined,
        projects: [...prev.projects, newProject]
      }
    })
  }

  // console.log(projectState);

  let content;

  if(projectState.selectedProject === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }else if(projectState.selectedProject === undefined){
    content = <NoProjectSelected onStartAddProject = {handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject = {handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;
