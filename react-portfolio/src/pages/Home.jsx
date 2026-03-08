// ProjectCard has been moved to the Projects route
const Home = () => {
    return (
        <main>
            <section className="hero">
                <div className="hero1">
                    <div className="one">Welcome to my <span className="text-gradient">World</span></div>
                    <div className="two">
                        I am a <span className="text-gradient bold">Web Developer & Data Analyst</span>
                    </div>
                    <div className="button-container">
                        <button className="btn btn-primary" onClick={() => alert('Contact me on +91 9714915485')}>
                            Contact Me
                        </button>
                        <button className="btn btn-secondary" onClick={() => alert('Services Not available Now !!')}>
                            Services
                        </button>
                    </div>
                </div>
                <div className="hero2">
                    <img src="/3d_hero.png" alt="3D Modern Developer Workspace" />
                </div>
            </section>


        </main>
    );
};

export default Home;
