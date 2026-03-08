import './Pages.css';

const About = () => {
    return (
        <main className="page-container">
            <div className="page-header">
                <h1>About <span className="text-gradient">Me</span></h1>
                <p className="subtitle">Bridging the gap between Code and Data.</p>
            </div>
            
            <div className="about-content">
                <div className="about-text glass">
                    <h2>Who I Am</h2>
                    <p>
                        I am a versatile professional bridging the gap between software engineering and data science. 
                        As a Web Developer, I craft beautiful, interactive, and responsive user experiences. 
                        As a Data Analyst, I transform raw numbers into actionable insights and compelling visual stories.
                    </p>
                    <p>
                        My dual expertise allows me to not only build robust applications but also deeply understand 
                        and optimize the data that flows through them. Whether I am architecting a React SPA or 
                        building complex dashboards in SQL and Power BI, I deliver comprehensive digital solutions.
                    </p>
                    <div className="skills-container">
                        <span className="skill-tag">React.js</span>
                        <span className="skill-tag">SQL & Databases</span>
                        <span className="skill-tag">Data Visualization (Power BI)</span>
                        <span className="skill-tag">JavaScript / Python</span>
                        <span className="skill-tag">UI/UX Design</span>
                    </div>
                </div>
                
                <div className="about-image-container">
                    <div className="about-image glass">
                        <img src="/mahek_blue.jpg" alt="Mahek" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
