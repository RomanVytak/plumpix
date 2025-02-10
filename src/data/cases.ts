import { TECHSTACK } from "../const";

export const cases = [

  /**
   * Abacus case
   */
  {
    slug: 'case-abacus',
    home: {
      tags: ['LMS platform', TECHSTACK.symphony.name, TECHSTACK.typeScript.name, TECHSTACK.bootstrap.name],
      name: 'Seamless and intuitive LMS for optimizing the educational process',
      image: '/img/cases/abacus/home.jpg',
      preview: '/img/cases/abacus/preview.jpg',
    },
    team: ['3 engineers', '1 QA engineer', '1 designer'],
    duration: '12+ months',
    technologies: [TECHSTACK.php, TECHSTACK.symphony, TECHSTACK.typeScript, TECHSTACK.redux, TECHSTACK.graphql, TECHSTACK.bootstrap],
    preview: 'The platform is dedicated to teaching arithmetic through hands-on methods. It offers resources, courses, and materials for children learning the fundamentals of mathematics using visualization and practical exercises. The goal is to make learning arithmetic interactive and engaging, helping students playfully develop their math skills.',
    about: `
      <h3>About project</h3>
      <p>The platform is dedicated to teaching arithmetic through hands-on methods. It offers resources, courses, and materials for children learning the fundamentals of mathematics using visualization and practical exercises. The goal is to make learning arithmetic interactive and engaging, helping students playfully develop their math skills.</p>
    `,
    сhallenge: `
      <h3>Product feature</h3>
      <ul>
        <li>Creative and user-friendly design</li>
        <li>Multi-tenant architecture for managing organizations and users</li>
        <li>Admin panel for organization management</li>
        <li>Messaging system for employees and trainers</li>
        <li>Flexible class administration schedule</li>
        <li>User rating and achievements system</li>
        <li>Multi-language support</li>
        <li>Admin dashboard with platform statistics</li>
      </ul>
    `,
    content: `
      <h3>1. Discovery</h3>
      <p>We conducted a user needs analysis and market research, compiled a functional and technical requirements list, developed an implementation plan and budget, and created interface prototypes.</p>

      <h3>2. Design concept</h3>
      <p>Since most of the platform's users are children, we focused a great deal of attention on a creative, playful, non-intrusive, and enjoyable design.
      <br>
      The design concept for the LMS platform emphasizes a user-centric interface with intuitive navigation, modern aesthetics, interactive learning features, comprehensive course management tools, robust assessment options, performance analytics, integrated communication tools, seamless third-party integrations, and strong security measures to enhance the overall learning experience.</p>

      <h3>3. Development</h3>
      <p>Three developers worked on the LMS platform, emphasizing user feedback significantly. They focused on intuitive interface design, robust security measures, and thorough testing while ensuring comprehensive documentation and training for users and administrators.</p>

      <h3>4. Release</h3>
      <p>The fully operational platform was launched in just 6 months, and we are continually enhancing the LMS by adding new features as the product evolves.</p>
    `,
    slider: [
      '/img/cases/abacus/slide1.jpg',
      '/img/cases/abacus/slide2.jpg',
      '/img/cases/abacus/slide3.jpg',
    ]
  },

  /**
   * Face And Skin case
   */
  {
    slug: 'case-face-and-skin',
    home: {
      tags: ['SBP Booking', 'eCommerce', TECHSTACK.wp.name, TECHSTACK.typeScript.name],
      name: 'Web Application for Booking a Cosmetologist, eCommerce site',
      image: '/img/cases/face/home.jpg',
      preview: '/img/cases/face/preview.jpg',
    },
    team: ['2 backend engineers', '2 frontend engineers', '1 QA engineer', '1 designer'],
    duration: '6 months',
    technologies: [TECHSTACK.php, TECHSTACK.graphql, TECHSTACK.magento, TECHSTACK.react, TECHSTACK.redux, TECHSTACK.next],
    preview: 'The platform is dedicated to teaching arithmetic through hands-on methods. It offers resources, courses, and materials for children learning the fundamentals of mathematics using visualization and practical exercises. The goal is to make learning arithmetic interactive and engaging, helping students playfully develop their math skills.',
    about: `
      <h3>About project</h3>
      <p>SBP Booking is a web application designed to simplify the process of booking professional cosmetologists. The platform connects clients with specialists, allowing them to choose services, check availability, and book appointments seamlessly. The goal was to develop a user-friendly, high-performance system that enhances the user experience and streamlines business operations for beauty professionals.</p>
    `,
    сhallenge: `
      <h3>Product feature</h3>
      <ul>
        <li><strong>Cosmetologist Directory</strong> - Users can browse a list of available cosmetologists along with their work schedules</li>
        <li><strong>Work Schedule Management</strong> - Each cosmetologist has a detailed schedule, allowing clients to see available time slots</li>
        <li><strong>Flexible Booking Options</strong> - Clients can book an appointment with a specific cosmetologist or choose a desired cosmetic service and be matched with an available specialist</li>
        <li><strong>Calendar-based Booking</strong> - Clients can select a date and a specific time slot for their appointment</li>
        <li><strong>Automated Notifications</strong> - Users receive a reminder notification one day before their visit</li>
        <li><strong>Admin Dashboard</strong> - A tool for cosmetologists to manage schedules and appointments</li>
      </ul>
    `,
    content: `
      <h3>1. Discovery</h3>
      <p>We thoroughly researched existing booking solutions during the discovery phase, analyzing their strengths and weaknesses. This helped us identify key gaps and opportunities for improvement. Additionally, we worked closely with the client to understand their vision and specific requirements for the platform.</p>
      <p>To ensure that SBP Booking met real user needs, we engaged in discussions with customers of a cosmetic center, gathering valuable feedback on their booking preferences and pain points. This user-driven approach allowed us to refine the feature set and ensure an optimal experience for both clients and cosmetologists.</p>

      <h3>2. Design concept</h3>
      <p>The design focused on a clean, minimalistic aesthetic with a mobile-first approach. The UI was crafted to ensure quick navigation, clear service listings, and a smooth checkout process.</p>

      <h3>3. Development</h3>
      <p>...</p>

      <h3>4. Release</h3>
      <p>...</p>
    `,
    slider: [
      '/img/cases/face/slide1.jpg',
      '/img/cases/face/slide2.jpg',
      '/img/cases/face/slide3.jpg',
    ]
  },
]
