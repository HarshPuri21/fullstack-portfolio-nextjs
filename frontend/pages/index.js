
// This file represents a complete Next.js application.
// In a real Next.js project, each component and page would be in its own file.
// For demonstration, everything is combined here.

// --- /pages/index.js ---
// This is the main page of the portfolio.

import React, { useState } from 'react';

// --- Reusable Components ---

const ProjectCard = ({ project }) => (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                ))}
            </div>
        </div>
    </div>
);

const SkillBadge = ({ skill }) => (
    <div className="bg-gray-700 text-gray-300 px-4 py-2 rounded-md font-semibold">
        {skill}
    </div>
);


// --- Main Page Component ---
export default function PortfolioPage() {
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState({ submitting: false, success: false, error: '' });

    const projects = [
        { name: 'Interactive 3D Product Viewer', description: 'A web-based 3D viewer using React and Three.js with dynamic material changes and performance optimizations.', tags: ['React', 'Three.js', 'TypeScript', 'Node.js'] },
        { name: 'High-Performance Data Dashboard', description: 'Visualized thousands of real-time data points using D3.js and WebSockets, optimized with list virtualization.', tags: ['React', 'D3.js', 'WebSockets', 'Jest'] },
        { name: 'Full-Stack E-Commerce Frontend', description: 'A complete e-commerce UI with Vue.js, Vuex for state management, and a multi-step checkout flow.', tags: ['Vue.js', 'Vuex', 'AWS ECS', 'Docker'] },
        { name: 'Serverless Job Board on AWS', description: 'Architected a fully serverless application with Lambda, API Gateway, DynamoDB, and S3 for secure resume uploads.', tags: ['AWS Lambda', 'DynamoDB', 'S3', 'Serverless'] },
        { name: 'Real-time Chat Application', description: 'A scalable chat server supporting public/private messaging using Node.js, Socket.IO, and Redis for message brokering.', tags: ['Node.js', 'Socket.IO', 'Redis'] },
        { name: 'Blog Platform Backend', description: 'Engineered a CMS-style blog backend with a comprehensive RESTful API using PostgreSQL and Prisma.', tags: ['Node.js', 'PostgreSQL', 'Prisma', 'Docker'] },
    ];
    
    const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Git', 'REST APIs'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactForm(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ submitting: true, success: false, error: '' });

        try {
            // In a real app, this URL would point to your deployed Node.js backend
            const response = await fetch('http://localhost:3002/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contactForm),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            
            setFormStatus({ submitting: false, success: true, error: '' });
            setContactForm({ name: '', email: '', message: '' });

        } catch (error) {
            setFormStatus({ submitting: false, success: false, error: 'Failed to send message. Please try again later.' });
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen font-sans">
            <div className="container mx-auto px-6 py-16">

                {/* --- Hero Section --- */}
                <section className="text-center mb-24">
                    <h1 className="text-6xl font-extrabold mb-4">Harsh Puri</h1>
                    <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
                        Aspiring Full-Stack Engineer passionate about building scalable, real-time web applications and designing robust APIs.
                    </p>
                </section>

                {/* --- About Me Section --- */}
                <section id="about" className="mb-24 max-w-4xl mx-auto">
                     <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                     <p className="text-lg text-gray-300 leading-relaxed text-center">
                        With a strong foundation in backend development using Node.js, Express, and PostgreSQL, I'm eager to leverage my hands-on project experience with modern frontend frameworks like React, Next.js, and Vue.js. My goal is to contribute to a collaborative team, solve complex problems, and grow into a future tech lead. I thrive in environments where I can learn continuously and apply new technologies to create efficient and elegant solutions.
                     </p>
                </section>

                {/* --- Skills Section --- */}
                <section id="skills" className="mb-24">
                    <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {skills.map(skill => <SkillBadge key={skill} skill={skill} />)}
                    </div>
                </section>

                {/* --- Projects Section --- */}
                <section id="projects" className="mb-24">
                    <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map(p => <ProjectCard key={p.name} project={p} />)}
                    </div>
                </section>

                {/* --- Contact Section --- */}
                <section id="contact">
                    <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
                    <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
                        <form onSubmit={handleFormSubmit}>
                            <div className="space-y-6">
                                <input type="text" name="name" value={contactForm.name} onChange={handleInputChange} placeholder="Your Name" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                                <input type="email" name="email" value={contactForm.email} onChange={handleInputChange} placeholder="Your Email" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                                <textarea name="message" value={contactForm.message} onChange={handleInputChange} placeholder="Your Message" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md h-40 focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
                            </div>
                            <div className="mt-6 text-center">
                                <button type="submit" disabled={formStatus.submitting} className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 disabled:bg-indigo-400 transition-colors">
                                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                        {formStatus.success && <p className="text-center mt-4 text-green-400">Message sent successfully! Thank you.</p>}
                        {formStatus.error && <p className="text-center mt-4 text-red-400">{formStatus.error}</p>}
                    </div>
                </section>

            </div>
        </div>
    );
}
