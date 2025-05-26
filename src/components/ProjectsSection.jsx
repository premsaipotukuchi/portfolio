import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Uber Trip Analysis Dashboard",
    description: "Interactive Power BI dashboard for 1.6M+ Uber trips, highlighting revenue, distance, and booking trends.",
    image: "https://i0.wp.com/softwareengineeringdaily.com/wp-content/uploads/2021/06/Twitter-Uber-Data.png?zoom=2&resize=730%2C389", // Dashboard screenshot from Unsplash
    tags: ["Power BI", "Excel", "Python"],
    demoUrl: "https://github.com/premsaipotukuchi/uber_Data_Analysis",
    githubUrl: "https://github.com/premsaipotukuchi/uber_Data_Analysis",
  },
  {
    id: 2,
    title: "IPL Data Analysis with PySpark & AWS",
    description: "Scalable PySpark pipeline on AWS S3 to analyze IPL data with key metrics and visualizations.",
    image: "https://storage.googleapis.com/pitchonnet-news-photo/news-photo/32667.pitch2-(26).jpg", // Cricket stadium photo from Unsplash
    tags: ["PySpark", "AWS S3", "Matplotlib", "Seaborn", "Databricks"],
    demoUrl: "https://github.com/premsaipotukuchi/IPL-CRICKET-LEAGUE-DATA-ANALYSIS-USING-SPARK",
    githubUrl: "https://github.com/premsaipotukuchi/IPL-CRICKET-LEAGUE-DATA-ANALYSIS-USING-SPARK",
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    description: "Content-based recommender using Streamlit and TMDB API with NLP-based similarity matching.",
    image: "https://blog.lancedb.com/content/images/size/w1000/2024/05/1_AatBvnpVpEPoQvZAMeqU-A.webp", // Movie reel image from Unsplash
    tags: ["Python", "Streamlit", "TMDB API", "Machine Learning"],
    demoUrl: "https://github.com/premsaipotukuchi/Movie-recommendation-System",
    githubUrl: "https://github.com/premsaipotukuchi/Movie-recommendation-System",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of recent data-driven projects focused on insights, scalability, and UX.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >{tag}</span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/premsaipotukuchi"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
