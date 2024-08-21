import styles from './ProjectsStyles.module.css';
import scrap from '../../assets/scraping.png';
import appImg from '../../assets/je6pozqe.png';
import nodeIMG from '../../assets/node.png';
import fastapiIMG from '../../assets/fastapi.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Proyectos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={scrap}
          link="https://github.com/jsiguenzac/WebScrapingEcomm"
          h3="Web Scraping"
          p="Uso de Selenium y Pandas para exportar data en Excel."
        />
         <ProjectCard
          src={appImg}
          link="https://github.com/jsiguenzac/Demo-Probador-Virtual"
          h3="Demo - Probador Virtual"
          p="Desarrollo de app con Flutter."
        />
        <ProjectCard
          src={nodeIMG}
          link="https://github.com/jsiguenzac/firts_backend_node"
          h3="Backend Node"
          p="Backend con NodeJS, Typescript, JWT, TypeORM y PostgreSQL."
        />
        <ProjectCard
          src={fastapiIMG}
          link="https://api-logistica-dev.vercel.app"
          h3="Backend FastAPI"
          p="Servicios para app logística (JWT, PostgreSQL y SQLAlchemy)."
        />
      </div>
    </section>
  );
}

export default Projects;
