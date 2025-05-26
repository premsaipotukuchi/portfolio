import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [  
  // Tools (Dev & Project)
  { name: "Git/GitHub",    level: 90, category: "tools" },
  { name: "Docker",        level: 70, category: "tools" },
  // { name: "Figma",         level: 85, category: "tools" },
  { name: "VS Code",       level: 95, category: "tools" },
  { name: "Agile",         level: 85, category: "tools" },
  { name: "Jira",          level: 85, category: "tools" },

  // Data Visualization
  { name: "Excel",         level: 90, category: "data-viz" },
  { name: "Power BI",      level: 85, category: "data-viz" },
  { name: "Tableau",       level: 80, category: "data-viz" },
  { name: "Matplotlib",    level: 75, category: "data-viz" },
  { name: "Seaborn",       level: 70, category: "data-viz" },

  // Programming Languages
  { name: "Python",        level: 90, category: "programming" },
  { name: "(My, PostgreSQL, Oracle) SQL", level: 85, category: "programming" },
  { name: "Java",          level: 80, category: "programming" },
  { name: "Scala",         level: 75, category: "programming" },

  // Machine Learning Libraries
  { name: "Pandas",        level: 90, category: "machine-learning" },
  { name: "NumPy",         level: 85, category: "machine-learning" },
  { name: "scikit-learn",  level: 80, category: "machine-learning" },
  { name: "TensorFlow",    level: 75, category: "machine-learning" },
  { name: "PyTorch",       level: 70, category: "machine-learning" },

  // Big Data Technologies
  { name: "Apache Spark",  level: 80, category: "big-data" },
  { name: "Hadoop",        level: 70, category: "big-data" },
  { name: "Kafka",         level: 75, category: "big-data" },
  { name: "Airflow",       level: 80, category: "big-data" },

  // Cloud Platforms
  { name: "AWS",           level: 80, category: "cloud" },
  { name: "Databricks",    level: 75, category: "cloud" },
  { name: "GCP",           level: 75, category: "cloud" },
  { name: "Azure",         level: 75, category: "cloud" },
];

// Categories matching skills
const categories = [
  "all",
  "tools",
  "data-viz",
  "programming",
  "machine-learning",
  "big-data",
  "cloud",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};