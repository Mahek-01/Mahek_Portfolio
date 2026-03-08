import './Pages.css';

const Services = () => {
    const servicesList = [
        {
            title: "Frontend Web Development",
            description: "Building responsive, modern, and highly interactive graphical user interfaces using React, HTML5, and advanced CSS3.",
            icon: "fa-solid fa-code"
        },
        {
            title: "Data Analysis & Visualization",
            description: "Transforming complex datasets into clear, actionable, and interactive dashboards using tools like SQL, Excel, and Power BI.",
            icon: "fa-solid fa-chart-pie"
        },
        {
            title: "Database Architecture",
            description: "Designing, optimizing, and querying relational databases to ensure fast, reliable, and scalable data storage for applications.",
            icon: "fa-solid fa-database"
        },
        {
            title: "UI/UX & Web Optimization",
            description: "Translating mockups into pixel-perfect code while improving metrics, page load times, and mobile responsiveness.",
            icon: "fa-solid fa-gauge-high"
        }
    ];

    return (
        <main className="page-container">
            <div className="page-header">
                <h1>My <span className="text-gradient">Services</span></h1>
                <p className="subtitle">Premium solutions tailored to your digital needs.</p>
            </div>
            
            <div className="services-grid">
                {servicesList.map((service, index) => (
                    <div key={index} className="service-card glass">
                        <div className="service-icon">
                            <i className={service.icon}></i>
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Services;
