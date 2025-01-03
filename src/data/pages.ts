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
      title: 'We are a full-stack development company',
      text: 'We empower tech companies to win in today’s competitive digital economy by providing expert engineering and consultancy services. Choosing the right people, the most appropriate technology and effective and transparent processes, we ensure radical efficiency. That’s why we’re called Radency',
      image: '/img/cases/case.jpg',
    },

    /**
     * white_cards
     */
    [CONTENT_TYPES.white_cards]: {
      title: 'Why plumpix?',
      data: [
        {
          title: '111 Custom Software Developmen',
          text: 'Rely on our product development expertise to build an MVP from scratch and evolve it into a full-featured platform',
          button: 'Learn more',
          link: '',
        },
        {
          title: 'Custom Software Developme',
          text: 'Rely on our product development expertise to build an MVP from scratch and evolve it into a full-featured platform',
          button: 'Learn more',
          link: '',
        },
        {
          title: 'Custom Software Developm',
          text: 'Rely on our product development expertise to build an MVP from scratch and evolve it into a full-featured platform',
          button: 'Learn more',
          link: '',
        },
      ],
    },

    /**
     * blue_cards
     */
    [CONTENT_TYPES.blue_cards]: {
      title: 'Why hire developers from PlumPix',
      data: [
        {
          title: 'Top Talent in Software Development',
          text: 'We carefully vet every candidate to ensure we bring the best to your projects. Our rigorous process includes reviewing 100+ resumes, evaluating 40+ technical tasks, and conducting around 15 interviews to fill a single position.',
        },
        {
          title: 'Team Scalability',
          text: 'We can extend your existing team or build a new dedicated team from scratch. Plus, we can scale the team according to your growing needs, or, by contrast, provide you with part-time specialists if you require a limited scope of tasks.',
        },
        {
          title: 'Predictable and transparent pricing',
          text: "A dedicated team model is a cost-effective solution when done right. If you hire a dedicated development team with Binary, you'll have a clear budget estimate for the project and transparent cost tracking in the process.",
        },
        {
          title: 'Kick off in 5 days or less',
          text: 'Build and onboard your team in days. Get your project on track with dedicated talent.',
        },
        {
          title: 'Wide tech expertise',
          text: 'We work with all major tech platforms and have extensive expertise with AWS, GCP, Java, Python, Ruby, .NET, JS and Flutter.',
        },
        {
          title: 'Results focused',
          text: 'Maintain full control of the results and the technical ownership of the project team.',
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
      title: 'Why plumpix?',
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
];
