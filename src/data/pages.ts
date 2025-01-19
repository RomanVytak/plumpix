import { CONTENT_TYPES } from "../const";

export const pages_data = [
  /**
   * Dedicated team Page (dedicated-team)
   */
  {
    slug: 'dedicated-team',

    /**
     * article
     */
    [CONTENT_TYPES.article]: {
      title: 'Build Your Remote Development Team with PlumPix',
      text: 'Accelerate Your Business Growth and Simplify Hiring Processes: Empower Your Team to Scale Effectively Without the Burden of Recruitment Challenges',
      image: '/img/cases/case.jpg',
    },

    /**
     * white_cards
     */
    [CONTENT_TYPES.white_cards]: {
      title: 'How to Strengthen Your Team with PlumPix',
      data: [
        {
          title: 'Discovery',
          text: 'Start by scheduling a call to discuss your project requirements and technical needs. We\'ll carefully select experts who are the perfect technical and cultural fit for your team.',
          button: 'Learn more',
          link: '',
        },
        {
          title: 'Team Setup',
          text: 'With our extensive pool of vetted in-house developers, we can launch most projects within just 1–2 weeks.',
          button: 'Learn more',
          link: '',
        },
        {
          title: 'Reliable Delivery',
          text: 'Your PlumPix team seamlessly integrates with your in-house team or operates independently, delivering dependable results from day one.',
          button: 'Learn more',
          link: '',
        },
      ],
    },

    /**
     * blue_cards
     */
    [CONTENT_TYPES.blue_cards]: {
      title: 'Why Partner with PlumPix Developers',
      data: [
        {
          title: 'Elite Talent Pool',
          text: 'We select only the best candidates. Our rigorous hiring process involves screening over 100 applicants, evaluating 40 technical assessments, and conducting 15 interviews for each position.',
        },
        {
          title: 'Flexible Team Solutions',
          text: 'Whether expanding your current team or creating a dedicated one, we adapt to your needs. Scale up as your project grows or bring in part-time experts for focused tasks.',
        },
        {
          title: 'Clear and Cost-Effective Pricing',
          text: 'A dEnjoy predictable costs with no surprises. Our dedicated team model ensures accurate budget estimates and transparent expense tracking throughout your project.',
        },
        {
          title: 'Rapid Onboarding Process',
          text: 'Get started in just five days. Our streamlined approach ensures your project gains momentum with the right talent, fast.',
        },
        {
          title: 'Diverse Technical Expertise',
          text: 'We deliver across a wide range of technologies, including React, TypeScript, Node.js, Angular, Vue, Python, Laravel, and Symphony, ensuring your project benefits from cutting-edge knowledge.',
        },
        {
          title: 'Ownership and Results Focus',
          text: 'Keep control while achieving exceptional outcomes. With PlumPix, you maintain technical ownership, while we focus on delivering measurable results for your business.',
        },
      ],

      button: {
        title: 'Contact us',
        link: '/contacts',
      },
    },

    /**
     * techstack
     */
    [CONTENT_TYPES.techstack]: true,

    /**
     * stages
     */
    [CONTENT_TYPES.stages]: null,
  },

  /**
   * Custom Development Page (custom-development)
   */
  {
    slug: 'custom-software-development',

    /**
     * article
     */
    [CONTENT_TYPES.article]: {
      title: 'We help tech companies thrive and succeed in the modern landscape',
      text: 'We’ll assist you in building attractive, high-performing, and secure web applications customized to meet your business objectives',
      image: '/img/cases/case.jpg',
    },

    /**
     * white_cards
     */
    [CONTENT_TYPES.white_cards]: {
      title: 'Why PlumPix?',
      data: [
        {
          title: 'Tailored Solutions for Your Business',
          text: 'We prioritize your unique business goals, delivering custom software solutions that align with your specific requirements and drive growth',
          button: 'Learn more',
        },
        {
          title: 'Proven Expertise',
          text: 'With years of experience in software development, our skilled team combines technical proficiency and industry insights to create innovative, reliable, and scalable solutions',
          button: 'Learn more',
        },
        {
          title: 'Agile and Flexible Approach',
          text: 'We use agile methodologies to adapt to your evolving needs, ensuring efficient project management and seamless collaboration throughout the development process',
          button: 'Learn more',
        },
        {
          title: 'End-to-End Development Services',
          text: 'From concept and design to deployment and support, we handle every stage of the software development lifecycle, providing comprehensive and hassle-free service',
          button: 'Learn more',
        },
        {
          title: 'Cutting-Edge Technologies',
          text: 'Our team stays ahead of the curve by leveraging the latest tools and technologies, ensuring your software is built for performance, security, and future-readiness',
          button: 'Learn more',
        },
        {
          title: 'Client-Centric Commitment',
          text: 'Your success is our priority. We pride ourselves on clear communication, transparency, and delivering exceptional results that exceed expectations',
          button: 'Learn more',
        },
      ],
    },

    /**
     * reviews
     */
    [CONTENT_TYPES.reviews]: true,

    /**
     * techstack
     */
    [CONTENT_TYPES.techstack]: true,

    /**
     * stages
     */
    [CONTENT_TYPES.stages]: {
      title: 'Phases of Our Development Workflow',
      data: [
        {
          tab: 'Discovery Phase',
          title: 'Discovery Phase',
          content: 'The first step in crafting your software is understanding the full scope of your project. For new builds, we analyze your goals and define the best approach for success. For existing systems, we assess your infrastructure, app architecture, codebase, and deployment strategies. This phase culminates in a detailed roadmap that aligns with your vision and sets a clear path for development.',
        },
        {
          tab: 'Wireframing & Design',
          title: 'Wireframing & Design',
          content: 'This phase focuses on translating ideas into visuals. We create wireframes to map out user flows and design intuitive, aesthetically pleasing interfaces. Our goal is to ensure a seamless user experience that reflects your brand and meets your target audience’s needs.',
        },
        {
          tab: 'Architecture & DevOps',
          title: 'Architecture & DevOps',
          content: 'We design scalable, secure system architecture tailored to your project’s requirements. Alongside this, our DevOps experts implement automation and streamlined workflows for efficient development, deployment, and system management. This phase ensures a strong foundation for your application.',
        },
        {
          tab: 'Backend and Frontend Development',
          title: 'Backend and Frontend Development',
          content: 'Our developers work on both sides of your application. The backend focuses on building robust, scalable systems to handle data and processes, while the front-end delivers a user-friendly, dynamic interface. Together, they create a seamless and powerful software solution.',
        },
        {
          tab: 'Maintenance and Support',
          title: 'Maintenance and Support',
          content: 'After launch, we provide continuous monitoring, updates, and improvements. From bug fixes to adapting to new technologies, our maintenance ensures your software stays reliable, secure, and aligned with your business needs.',
        },
      ],
    },
  },

  /**
   * Privacy Policy
   */
  {
    slug: 'privacy-policy',

    /**
     * plain text
     */
    [CONTENT_TYPES.plainText]: `
      <h2>Privacy Policy</h2>

      <p>Plumpix.io ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services</p>

      <h3>1. Information We Collect</h3>

      <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>

      <h4>1.1 Personal Data</h4>
      <ul>
        <li>Information you provide directly: Name, email address, phone number, or other contact details when you register for our services, contact us, or subscribe to our newsletter.</li>
        <li>Account information: Usernames, passwords, and other registration information.</li>
      </ul>

      <h4>1.2 Non-Personal Data</h4>
      <ul>
        <li>Usage data: Details about your interactions with our website and services, including pages viewed, time spent on pages, and clicks.</li>
        <li>Device information: IP address, browser type, operating system, and device identifiers.</li>
        <li>Cookies and tracking technologies: Information collected through cookies, web beacons, or similar technologies.</li>
      </ul>

      <h3>2. How We Use Your Information</h3>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>To provide and manage our services</li>
        <li>To communicate with you about updates, offers, or services</li>
        <li>To analyze website usage and improve user experience.</li>
        <li>To comply with legal obligations or enforce our terms and policies.</li>
      </ul>

      <h3>3. How We Share Your Information</h3>
      <p>We may share your information with third parties under the following circumstances:</p>
      <ul>
        <li>Service Providers: With vendors and partners who help us deliver our services.</li>
        <li>Legal Requirements: When required by law or to protect the rights and safety of Plumpix.io, our users, or others.</li>
        <li>Business Transfers: In connection with mergers, acquisitions, or sale of company assets.</li>
      </ul>
      <p>We will never sell your personal data to third parties.</p>

      <h3>4. Data Retention</h3>
      <p>We retain your information only as long as necessary for the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>

      <h3>5. Data Security</h3>
      <p>We implement reasonable technical and organizational measures to protect your information from unauthorized access, use, or disclosure. However, no security measures are infallible, and we cannot guarantee absolute security.</p>

      <h3>6. Your Rights</h3>
      <p>Depending on your jurisdiction, you may have the following rights:</p>
      <ul>
        <li>Access: Request access to the personal data we hold about you.</li>
        <li>Correction: Request correction of inaccurate or incomplete data.</li>
        <li>Deletion: Request deletion of your personal data.</li>
        <li>Objection: Object to the processing of your data for specific purposes.</li>
      </ul>
      <p>To exercise these rights, contact us at [Insert Contact Email].</p>

      <h3>7. Cookies and Tracking Technologies</h3>
      <p>We use cookies and similar technologies to enhance your browsing experience. You can control cookie settings through your browser. Note that disabling cookies may affect website functionality.</p>

      <h3>8. Third-Party Links</h3>
      <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites. We encourage you to review their privacy policies.</p>

      <h3>9. Updates to This Privacy Policy</h3>
      <p>We may update this Privacy Policy from time to time. Any changes will be effective upon posting the revised policy on this page. We encourage you to review this Privacy Policy periodically.</p>

      <h3>10. Contact Us</h3>
      <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:ask@plumpix.io">ask@plumpix.io</a></p>
    `
  }
];
