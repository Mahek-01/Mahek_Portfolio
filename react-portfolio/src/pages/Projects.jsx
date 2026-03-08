import ProjectCard from '../components/ProjectCard';
import './Pages.css'; // For the page-container and page-header styles

const Projects = () => {
    return (
        <main className="page-container">
            <div className="page-header">
                <h1>My <span className="text-gradient">Projects</span></h1>
                <p className="subtitle">Showcasing a blend of Development and Data Analysis.</p>
            </div>

            <section className="project-container" style={{ padding: '0' }}>
                {/* 1st project */}
                <ProjectCard
                    title="Web-Development Project"
                    description="Web development blends creativity and logic, turning ideas into interactive experiences. Each project demands precision, problem‑solving, and collaboration. From responsive design to dynamic functionality, developers craft digital spaces that connect people and inspire innovation. Every line of code builds solutions that shape the future online."
                    image="/mAnime.png"
                    isTodo={true}
                />

                {/* 2nd project  */}
                <ProjectCard
                    title="Excel Project"
                    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, similique numquam accusantium doloremque ex laborum exercitationem incidunt deleniti at eos ut sapiente eligendi voluptates nisi aliquid velit nulla enim laudantium consequatur iure quisquam libero illum? Corporis ullam provident reiciendis similique! Laborum harum ab eligendi totam est obcaecati maxime excepturi molestiae. Laborum numquam provident voluptatem."
                    image="/excel.jpg"
                    reverse={true}
                />

                {/* 3rd project */}
                <ProjectCard
                    title="SQL Project"
                    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, similique numquam accusantium doloremque ex laborum exercitationem incidunt deleniti at eos ut sapiente eligendi voluptates nisi aliquid velit nulla enim laudantium consequatur iure quisquam libero illum? Corporis ullam provident reiciendis similique! Laborum harum ab eligendi totam est obcaecati maxime excepturi molestiae. Laborum numquam provident voluptatem."
                    image="/Sql.jpg"
                />

                {/* 4th project */}
                <ProjectCard
                    title="Power BI Project"
                    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, similique numquam accusantium doloremque ex laborum exercitationem incidunt deleniti at eos ut sapiente eligendi voluptates nisi aliquid velit nulla enim laudantium consequatur iure quisquam libero illum? Corporis ullam provident reiciendis similique! Laborum harum ab eligendi totam est obcaecati maxime excepturi molestiae. Laborum numquam provident voluptatem."
                    image="/power_bi.jpg"
                    reverse={true}
                />
            </section>
        </main>
    );
};

export default Projects;
