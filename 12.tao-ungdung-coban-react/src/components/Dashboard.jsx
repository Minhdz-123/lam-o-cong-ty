import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            {/* Geometric shapes - Teal and Magenta */}
            <div className="dashboard-geometric-shape dashboard-shape-1"></div>
            <div className="dashboard-geometric-shape dashboard-shape-2"></div>
            <div className="dashboard-geometric-shape dashboard-shape-3"></div>
            
            {/* Additional geometric lines */}
            <svg className="dashboard-svg">
                <line x1="200" y1="150" x2="350" y2="250" stroke="#1ce7d8" strokeWidth="1" />
                <line x1="850" y1="300" x2="1000" y2="400" stroke="#e91e63" strokeWidth="1" />
                <line x1="700" y1="450" x2="900" y2="550" stroke="#1ce7d8" strokeWidth="1" />
                <line x1="300" y1="500" x2="550" y2="600" stroke="#e91e63" strokeWidth="1" />
                <polyline points="950,200 1000,250 1050,200 1150,300" fill="none" stroke="#1ce7d8" strokeWidth="1" />
                <polyline points="250,400 300,450 350,400 450,500" fill="none" stroke="#e91e63" strokeWidth="1" />
            </svg>

            <div className="dashboard-content">
                {/* Left Side: Text Content */}
                <div className="dashboard-text-container">
                    <h1 className="dashboard-title">
                        Data <span className="dashboard-title-highlight">Analytics</span> Dashboard
                    </h1>
                    <p className="dashboard-description">
                        Transform your data into actionable insights with our cutting-edge
                        analytics platform. Real-time monitoring, intelligent predictions,
                        and beautiful visualizations.
                    </p>

                    <button className="dashboard-button">
                        Get Started
                    </button>
                </div>

                {/* Right Side: Visual Bars - Three bars matching the image exactly */}
                <div className="dashboard-bars-container">
                    {/* Left bar: teal (bottom) to darker teal (top) */}
                    <div className="dashboard-bar dashboard-bar-left">
                        <div className="dashboard-bar-lines">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="dashboard-bar-line"></div>
                            ))}
                        </div>
                    </div>
                    {/* Middle bar: dark pink/magenta (bottom) to darker purple (top) */}
                    <div className="dashboard-bar dashboard-bar-middle">
                        <div className="dashboard-bar-lines">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="dashboard-bar-line"></div>
                            ))}
                        </div>
                    </div>
                    {/* Right bar: bright blue (bottom) to reddish-orange (top) */}
                    <div className="dashboard-bar dashboard-bar-right">
                        <div className="dashboard-bar-lines">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="dashboard-bar-line"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;