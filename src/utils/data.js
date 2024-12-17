export const serviceData = [
    {
        imgLink: '/assets/img/all-images/projects/projects_1.webp',
        navLink: 'enrollment',
        service: 'Provider Enrollment',
        info: 'in three lines'
    },
    {
        imgLink: '/assets/img/all-images/projects/projects_2.webp',
        navLink: 'coding',
        service: 'Medical Coding',
        info: 'in three lines'
    },
    {
        imgLink: '/assets/img/all-images/projects/projects_3.webp',
        navLink: 'demographics',
        service: 'Patient Demographics',
        info: 'in three lines'
    },
    {
        imgLink: '/assets/img/all-images/projects/projects_4.webp',
        navLink: 'eligibility',
        service: 'Eligibility',
        info: 'in three lines'
    },
    {
        imgLink: '/assets/img/all-images/projects/projects_5.webp',
        navLink: 'chargecapture',
        service: 'Charge Capture',
        info: 'in three lines'
    },
    {
        imgLink: '/assets/img/all-images/projects/projects_6.webp',
        navLink: 'posting',
        service: 'Payment Posting',
        info: 'in three lines'
    },
    {
        imgLink: '/assets/img/all-images/projects/projects_7.webp',
        navLink: 'accounts',
        service: 'Accounts Receivable',
        info: 'in three lines'
    },
]

export const testimonials = [
    {
        text: 'Place Waves made my job search stress-free. They understood my career goals and matched me with a hospital that aligned perfectly with my skills and values. Their support throughout the process was exceptional!',
        cliName: 'D Kavitha',
    },
    {
        text: 'Place Waves has been a game-changer for our recruitment process. They consistently provide us with qualified candidates who not only meet our skill requirements but also fit seamlessly into our team culture. Highly recommended!',
        cliName: 'Priya Menon',
    },
    {
        text: 'As a recent nursing graduate, I struggled to find my first job. Place Waves guided me through every step, from resume building to interview prep, and helped me land my dream role. I couldn’t be happier!',
        cliName: 'A Arjun Kumar',
    },
    {
        text: 'Place Waves helped me find a position that not only matched my skills but also my passion for patient care. The personalized attention they provided was beyond what I expected. A truly rewarding experience!',
        cliName: 'D Rohit Kumar',
    },
    {
        text: 'We\'ve partnered with Place Waves multiple times, and they always deliver outstanding candidates. Their understanding of our specific needs and commitment to quality service makes them our go-to consultancy.',
        cliName: 'Neha Verma',
    }
]

export const questions = [
    {
        id: 'collapseOne',
        que: 'What is Place Waves, and what services do you provide?',
        ans: 'Place Waves is a specialized job consultancy focused on healthcare revenue cycle management. We offer services such as accounts receivable management, medical coding, charge capture, payment posting, patient demographics, and eligibility verification. Additionally, we provide on-hand training programs for job seekers to help them build successful careers in these fields.'
    },
    {
        id: 'collapseTwo',
        que: 'What kind of training does Place Waves offer job seekers?',
        ans: 'Our on-hand training programs focus on preparing candidates for real-world healthcare roles. Training highlights include:\n' +
            '\n' +
            'Practical knowledge of medical billing and coding.\n' +
            'Hands-on experience with healthcare software and tools.\n' +
            'Exposure to processes like charge capture, eligibility verification, and payment posting.\n' +
            'Guidance on compliance and industry best practices.'
    },
    {
        id: 'collapseThree',
        que: 'Do you provide placement assistance for job seekers?',
        ans: 'Yes, Place Waves provides placement support to help job seekers connect with top healthcare organizations. Our goal is to ensure candidates are job-ready and positioned for success in their careers.'
    },
    {
        id: 'collapseFour',
        que: 'What industries or specialties does Place Waves cater to?',
        ans: 'We cater to the healthcare industry, providing services across multiple specialties, including:\n' +
            '\n' +
            'Medical coding (ICD-10, CPT, HCPCS).\n' +
            'Revenue cycle management (charge entry, payment posting, patient demographics).'
    },
    {
        id: 'collapseFive',
        que: 'How can I enroll in Place Waves’s training programs?',
        ans: 'You can contact us through our website or reach out via email or phone to learn more about available training programs and enrollment processes.'
    },
    {
        id: 'collapseSix',
        que: 'How can I contact Place Waves for inquiries or services?',
        ans: 'You can reach us through the Contact Us section of our website, where you\'ll find email, phone, and form options to connect with our team.\n' +
            '\n' +
            'Have more questions? Get in touch with Place Waves today to learn how we can support your career goals or optimize your healthcare processes!'
    },
    {
        id: 'collapseSeven',
        que: 'Does Place Waves assist with job placement after training?',
        ans: 'Yes, Place Waves provides job placement support to trainees. Our placement team helps connect you with top healthcare providers looking for skilled professionals in the revenue cycle management field.'
    },
    {
        id: 'collapseEight',
        que: 'What roles does Place Waves prepare job seekers for?',
        ans: 'We prepare candidates for a variety of healthcare roles, including:\n' +
            '\n' +
            'Medical coders and auditors.\n' +
            'Payment posting specialists.\n' +
            'Eligibility verification analysts.\n' +
            'Charge entry professionals.'
    },
    {
        id: 'collapseNine',
        que: 'Do I need prior experience to enroll in Place Waves’s training programs?',
        ans: 'No prior experience is required. Our training programs are designed to cater to both beginners and individuals with some background in healthcare or administration.'
    },
    {
        id: 'collapseTen',
        que: 'Are there any fees for the training programs?',
        ans: 'Yes, there are affordable program fees, which vary depending on the module. Our team will provide details upon inquiry.'
    }
]

export function currentYear(){
    const d = new Date()
    return d.getFullYear()
}