// ____________IMPORTS FOR REACT___________//
import React from "react";
import { useState } from "react";
import Modal from "react-modal";

// ____________IMPORTS FOR TYPE___________//
import { ProjectModal } from "../Types/CustomTypes";

const projects: ProjectModal[] = [
  {
    id: 1,
    title: "Project 1",
    description: "Description for Project 1",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for Project 2",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description for Project 3",
  },
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectModal | null>(
    null
  );

  const openModal = (project: ProjectModal) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  return (
    <div>
      <h1>HELLO. THIS IS THE PORTFOLIO PAGE</h1>
      {/* Project Cards */}
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>

          <button onClick={() => openModal(project)}>View Details</button>
        </div>
      ))}

      {/* Modals */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onRequestClose={closeModal}
          contentLabel="Project Details Modal"
        >
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.description}</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default Portfolio;
