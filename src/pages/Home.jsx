function Home() {
  const projects = [
    {
      name: "Counter",
      description: "Basic Counter",
      link: "/counter",
    },
    {
      name: "TextEdit",
      description: "Edit-Text",
      link: "/textEdit",
    },
    {
      name: "Focus",
      description: "Focus-Form",
      link: "/input",
    },
    {
      name: "RefCounter",
      description: "RefCount",
      link: "/refcount",
    },
    {
      name: "UsersByID",
      description: "Basic useParams ",
      link: "/user/1",
    },
    {
      name: "SearchComponent",
      description: "Search Component",
      link: "/searchComponent",
    },
    {
      name: "DarkModeToggle",
      description: "Modes ",
      link: "/darkMode",
    },
    {
      name: "SideBar",
      description: "Side-Bar",
      link: "/sidebar",
    },
  ];

  return (
    <div className="container">
      {projects.map((project, index) => (
        <div key={index} className="card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link} className="button">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
}
export default Home;
