export const data = {
  about: {
    paragraph_one: 'My name is Matt McArdle and I am a Software Engineering graduate from the University of Guelph. I have development experience managing cloud infrastructure using Kubernetes and AWS, front-end experience developing a web app in React and Vue, and backend experience developing microservices written in C# and serverside code using Ruby on Rails.',
    paragraph_two: "Throughout my studies I managed to achieve Dean's List honours in all academic semesters with an average of 91.5% (GPA of 4.0), and was awarded the Braithwaite Business Scholarship for my excellence in my business minor along with my major. During my co-op roles I have received the highest possible grade from my employers during all three terms, and was named the Co-op Student of the Year for my performance in 2022.",
  },
  experience: {
    magnet_fte: {
      body: 'In this role I worked on our customer-hosted digital forensics platform before moving to the team building our next-generation case management platform for Magnet One. I solved critical bugs in a large legacy codebase, worked live with customers to resolve high-priority incidents, cut case dashboard load times from nearly a minute to around two seconds for one of our largest customers, and built a case archiving feature that freed up to 60% of search cluster capacity. On the new platform I designed the case-level authorization integration, helped build a customizable schema framework, and prototyped an end-to-end workflow to send evidence from Magnet One storage straight into Magnet Review for analysis.\nMy AI-powered relationship mapping project won first place and the Most Business Impact award at Magnet\'s company-wide AI hackathon.',
      tags: [
        'C#',
        '.NET',
        'React',
        'TypeScript',
        'OpenSearch',
      ]
    },
    magnet: {
      body: 'In this role I improved our cluster installation scripts that were written in Bash, increased observability of our Azure resources through implementing a tagging pipeline in Jenkins, developed our data ingestion CLI to handle a brand new XML format in C#, and got experience with front-end development using React and TypeScript.\nI was nominated for the Co-op Student of the Year award for my performance in this role.',
      tags: [
        'C#',
        'React',
        'TypeScript',
        'Bash',
        'Azure',
        'Jenkins',
      ]
    },
    vidyard_s22: {
      body: "As part of the 'Track' analytics team at Vidyard, I led a project to deliver a new analytics dashboard to all of our enterprise customers. I got experience building new components in Vue, end-to-end testing using Cypress, and backend experience with Ruby on Rails.\nI was named the 2022 Co-op Student of the Year for my performance in this role.",
      tags: [
        'Ruby on Rails',
        'Vue',
        'Cypress',
        'DataDog'
      ]
    },
    vidyard_w23: {
      body: 'During this term I worked with Ruby on Rails, Vue, and GraphQL in their main web application, and worked with React and Redux in their Chrome Extension. I led a project to migrate to a new OpenAI model which resulted in a 92.5% decrease in cost, and implemented real-time response streaming to improve the user experience. I was also able to deliver a prototype of an AI-powered post-processing microservice to implement gaze correction in videos.',
      tags: [
        'Ruby on Rails',
        'Vue',
        'GraphQL',
        'React',
        'OpenAI',
        'Redis',
        'Sidekiq'
      ]
    },
  },
}

export default data;
