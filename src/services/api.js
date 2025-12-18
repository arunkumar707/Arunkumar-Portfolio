// Import JSON data files
import projectsData from '../data/projects.json';
import skillsData from '../data/skills.json';
import experienceData from '../data/experience.json';
import educationData from '../data/education.json';

// Projects API
export const getProjects = async () => {
    // Simulate async operation
    return new Promise((resolve) => {
        setTimeout(() => resolve(projectsData), 100);
    });
};

// Skills API
export const getSkills = async () => {
    // Simulate async operation
    return new Promise((resolve) => {
        setTimeout(() => resolve(skillsData), 100);
    });
};

// Experience API
export const getExperience = async () => {
    // Simulate async operation
    return new Promise((resolve) => {
        setTimeout(() => resolve(experienceData), 100);
    });
};

// Education API
export const getEducation = async () => {
    // Simulate async operation
    return new Promise((resolve) => {
        setTimeout(() => resolve(educationData), 100);
    });
};

// Contact API - Now just simulates sending (logs to console)
// Contact API - Uses EmailJS to send actual emails
import emailjs from '@emailjs/browser';

export const sendContactMessage = async (data) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

    if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') {
        console.info('EmailJS not configured. Running in DEMO mode (simulating successful send).');

        // Simulate network request
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Contact form submitted (Demo Mode):', data);
                resolve({
                    success: true,
                    message: 'Message received! (Demo Mode)'
                });
            }, 1500);
        });
    }

    const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: 'Arun Kumar'
    };



    try {
        const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
        return {
            success: true,
            message: 'Message sent successfully!'
        };
    } catch (error) {
        console.error('EmailJS Error:', error);
        throw error;
    }
};
