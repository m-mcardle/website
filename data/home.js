export const data = {
  about: {
    paragraph_one: 'My name is Matt McArdle and I am a fourth-year Software Engineering student at the University of Guelph. I have development experience managing cloud infrastructure using Kubernetes and AWS, front-end experience developing a web app in React and Vue, and backend experience developing microservices written in C# and serverside code using Ruby on Rails.',
    paragraph_two: "Throughout my studies I have managed to achieve Dean's List honours in all academic semesters with an average of 90.1% (GPA of 4.0), and was awarded the Braithwaite Business Scholarship for my excellence in my business minor along with my major. During my co-op roles I have received the highest possible grade from my employers during all three terms, and was named the Co-op Student of the Year for my performance in 2022.",
  },
  experience: {
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
      ]
    },
    vidyard_w23: {
      body: 'During this term I worked with Ruby on Rails, Vue, and GraphQL in their main web application, and worked with React and Redux in their Chrome Extension. I led a project to migrate to a new OpenAI model which resulted in a 92.5% decrease in cost, and implemented real-time response streaming to improve the user experience.',
      tags: [
        'Ruby on Rails',
        'Vue',
        'GraphQL',
        'React',
        'OpenAI'
      ]
    },
    idk: 'I contributed to a project to migrate our Sharing Pages assignment behaviour to a more flexible and scalable architecture. This involved creating new inheritance logic in Ruby on Rails, new GraphQL endpoints for accessing this data, and creating new components for a new library page in Vue.\nI also researched and ideated a project to our routing behaviour to result in less broken links in 75% of URL change flows. This resulted in a much better user experience when changing where their videos are located.\nOn multiple occasions I also took on the extra responsibility of Incident Commander to coordinate a team to respond to outages in a high-pressure environment.\nI then changed to a new team to deliver new features in our Chrome Extension using React and Redux, while also leading a project to migrate our OpenAI integration to a new model.\nThis migration project resulted in a 92.5% decrease in cost on the new model and I also implemented real-time response streaming to improve the user experience. This involved extending our OpenAI service to receive the OpenAI response in chunks asynchronously in a queued Sidekiq job, storing the stream in Redis, and subscribing to the stream via GraphQL and ActionCable websockets in Ruby on Rails.'
  },
}

export default data;
