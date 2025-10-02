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
      name: "FetchExample",
      description: "Fetch Example ",
      link: "/fetchExample",
    },
    {
      name: "Infinite load",
      description: "Infinite lading",
      link: "/feed",
    },
    {
      name: "SideBar",
      description: "Side-Bar",
      link: "/sidebar",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {projects.map((project, index) => (
    <div
      key={index}
      className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex flex-col hover:shadow-md transition-shadow"
    >
      <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">
        {project.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">
        {project.description}
      </p>
      <a
        href={project.link}
        className="mt-4 inline-block text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        View Project →
      </a>
    </div>
  ))}
</div>

  );
}
export default Home;
