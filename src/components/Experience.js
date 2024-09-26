import React, { useState } from 'react';
import './Experience.css';

function Experience() {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState(0);

    // Data for job experiences
    const experiences = [
        {
            company: 'Pricerite Cash & Carry',
            title: 'Business Analyst',
            duration: 'July 2022 - July 2023',
            description: [
                'Spearheaded market research initiatives, analyzing industry data to uncover 15% growth opportunities in emerging food product categories.',
                'Implemented inventory optimization strategies, reducing carrying costs by 20% and improving supply chain efficiency by 25%.'
            ]
        },
        {
            company: "Luciano Men's Boutique",
            title: 'Assistant Manager',
            duration: 'May 2021 - June 2022',
            description: [
                'Managed customer inquiries and daily operations.',
                'Increased revenue by 10% through upselling and improved customer service strategies.'
            ]
        },
        {
            company: 'Internships',
            title: 'Business Analytics Intern',
            duration: '2020 - 2021',
            description: [
                'Assisted in developing data-driven marketing strategies.',
                'Analyzed customer data to improve retention rates by 12%.'
            ]
        }
    ];

    // Handle tab click
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div id="experience">
            <h2>/ experience</h2>
            <div className="experience-container">
                {/* Sidebar with company names */}
                <div className="tabs">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`tab ${activeTab === index ? 'active' : ''}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {exp.company}
                        </div>
                    ))}
                </div>

                {/* Job details with animated transitions */}
                <div className="job-details">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`job-content ${activeTab === index ? 'active' : ''}`}
                        >
                            <h3>{exp.title} @ {exp.company}</h3>
                            <span>{exp.duration}</span>
                            <ul>
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
