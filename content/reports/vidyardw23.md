---
title: "Vidyard · Co-op Report"
company: "Vidyard"
role: "Software Developer (Co-op)"
period: "January 2023 - August 2023"
description: "Matt McArdle's co-op work term report for his role at Vidyard in the winter and summer of 2023."
image: "/images/Vidyard-Logo.png"
colour: "bg-emerald-950"
hoverColour: "rgba(29, 216, 101, 0.1)"
---

<section id="introduction-section">

### Welcome!

On this page I will be going into great detail about my co-op placement during my second term at the amazing Kitchener company Vidyard.

Because I was returning to Vidyard I was already very familiar with the company and the product, so I was able to hit the ground running and start delivering value right away. I got to work on some really amazing projects and got to work with some really amazing people. I am so thankful for the opportunity to return to Vidyard and I am so excited to share my experience with you!

![Vidyard logo](https://www.productboard.com/wp-content/uploads/2020/06/vidyard.png)

### About Vidyard

[Vidyard](https://vidyard.com/) is a software company based in Kitchener which provides tools for the modern-day sales professional. They specialize primarily in providing value through video tooling which provides thorough analytics to enable their users to qualify their leads based on engagement with their video content. During my two terms there I would spend time on both the Analytics team along with the Create team to delivers features that encourage more content creation on the platform.

![Vidyard office building](https://whitneyre.com/wp-content/uploads/Main-Image-41-488x326.jpg)

</section>

<section id="report-section">


### Track Team

Because of all the awesome things I was able to do during my eight months at Vidyard, I will unfortunately have to omit some of the smaller details but I will try and cover all the major projects I worked on. I will start by going over the projects I worked on during my first four months when I returned to the **Star Track** (Analytics) team.

![Star Trek icon](https://www.shareicon.net/data/2015/09/14/100884_star-trek_512x512.png)

### SLI/SLO Project

When I first rejoined the team we just began a new project to revamp our team's SLI/SLO's (Service Level Indicators / Service Level Objectives). These are essentially metrics that we can use to measure the health of our platform. We use these metrics to determine the overall trends in health of our analytics in the platform. To create user-friendly dashboards we added new metrics, alerts, and dashboards to our [Datadog](https://www.datadoghq.com/product/) account.

To better familiarize myself with our Datadog integration I used my growth time to enrol in the [Datadog 101: Developer](https://learn.datadoghq.com/courses/dd-101-dev) course. From this course and by contributing to this project I became very comfortable with the Datadog platform and learned a lot about how to use it to monitor our platform. This came in handy later on when I was investigating any incidents and when I created a new dashboard for monitoring our OpenAI integration's performance.

While I didn't find this portion of the term the most fascinating, it gave me very meaningful experience with large-scale application monitoring, logging, and tracing and I look forward to putting this new knowledge to use later in my career.

![Metrics clip art](https://cdn-icons-png.flaticon.com/128/1389/1389692.png)
![Datadog Logo](https://imgs.search.brave.com/MMOLXH1LyJKqiOwyhrr2Dz5x3rEL1UwEG4soME3LeqI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2RhdGFk/b2c5MjQzLmpwZw)

### Team Based Branded Sharing Pages

Once our team finished creating all our new Datadog dashboard, we moved back to normal project work to tackle creating a new way to assign "Sharing Pages" in an account. A "[Sharing Page](https://knowledge.vidyard.com/hc/en-us/articles/360009869514-Set-up-a-sharing-page-for-your-videos)" is basically a very simple webpage that hosts a Vidyard player for viewers to watch. We manage hosting these pages but allow our users to customize the appearance of them to fit in with their marketing needs. However, we currently only allow our users to customize the appearance of these pages at the folder level, meaning that all videos in a specific folder (or sub-folders) will have the same appearance. This is not ideal for our users who have multiple teams in their account who want to have different branding for their videos that exist in their own personal folder.

To resolve this my team was tasked with creating a new system in the backend to handle overwriting the "Sharing Page" of a personal folder for a Team Assigned Branded Sharing Page. This involved familiarizing myself with our GraphQL graph so we can extend it to support our new mutations and queries for this behaviour. Once we had the backend in place this also involved creating a new dashboard for managing and displaying all of the existing Sharing Pages so that our users can easily assign them. Overall this was a great full-stack project and I was very glad to get some experience with GraphQL and our backend infrastructure for our Sharing Pages' service.

One extra aspect of this project that I really enjoyed was an investigation I did into how these Sharing Pages behave when different domains are assigned or removed from them (for example a custom CNAME or Vidyard-provided subdomain). With the new assignment type possibly overwriting the current personal Sharing Page each team member would have, we wanted to ensure that our routing logic would not break any existing links. I was able to investigate this behaviour and then even found a way to optimize our behavior to support 66% more domain changes than we previously supported. This was a very exciting investigation and I was very happy to be able to deliver this optimization to our users.

![GraphQL Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/960px-GraphQL_Logo.svg.png)
![Hyperlink icon](https://imgs.search.brave.com/isHMBA61DJvwQHY6JAT3fAfY100LHVEv5ej4z9pXDGo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzU3LzYyLzQz/LzM2MF9GXzQ1NzYy/NDMxMl81T3pId3Z6/ODByQ3dwVUxrQmpD/OGpQQVdpcnVtc1ZX/di5qcGc)

### Create Team

After my first four months I was given the opportunity to move to the Create Improve team to work on some really exciting projects. I was very excited to move to this team because I was very interested in the projects they were working on and I was also very excited to work with some of the developers on the team who I had met during my previous terms. Again this team also had a nickname, this time being the **Create Im-purr-ove** team.

![Cat clip art](https://clipartix.com/wp-content/uploads/2017/06/Black-cat-clip-art.png)

### OpenAI Chat Migration / Realtime Response Streaming

When I first joined the team, a situation arose where their ongoing project didn't require everyone on the team to contribute to it. I saw this as an opportunity to take on more responsibility and lead a secondary project to optimize our OpenAI integration. This integration allows our users to use our platform to create speaker notes based on a user's request that are powered by OpenAI's LLMs. The model we were originally using was the [Completions](https://platform.openai.com/docs/guides/gpt/completions-api) model which takes in a block of texts and attempts to "complete" it (ie: Mary had a little ➡️ Mary had a little lamb). We ran into some issues with configuring our instance to respond in a consistent way using this model, and I identified that there could be some major upside to converting to a [Chat](https://platform.openai.com/docs/guides/gpt/chat-completions-api) model instead. This is the type of model you'd be familiar with if you have used [ChatGPT](https://chat.openai.com/) before where the model emulates the flow of a conversation and responds to each message in a way that makes the most sense based on the context.

I then shaped out a project to involve researching, delivering, and optimizing this new approach for use in replacement of the old model. While researching I also noticed there was an opportunity to add in realtime response streaming similar to the user experience seen on the official [ChatGPT](https://chat.openai.com/) website. This would be a major improvement to the user experience and would allow users to see the response as it is being generated instead of waiting for the entire response to be generated before seeing it (which can take up to 30 seconds). I was able to get approval from my manager to pursue this project and I was able to deliver the migration and UX-improvement fully before the end of my term.

This project was so much fun to work on and it involved a lot of research, proompt-engineering, WebSockets for GraphQL subscriptions, Redis, and even some Sidekiq for asynchronous jobs in Ruby on Rails. I got to architect a fairly complex backend system to handle the realtime response streaming and also got to get more frontend experience by implementing the new UI in our Chrome Extension using React and Redux. I am so proud of the work I was able to do on this project and was so happy to see this get released to 100% of our users.

![OpenAI logo](https://logos-download.com/wp-content/uploads/2022/06/OpenAI_Logo-2959x3000.png)
![Sidekiq logo](https://sidekiq.org/assets/2018/square.svg)
![Ruby on Rails logo](https://www.logo.wine/a/logo/Ruby_on_Rails/Ruby_on_Rails-Logo.wine.svg)

<div/>

![Redis logo](https://logowik.com/content/uploads/images/redis.jpg)
![GraphQL logo](https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/960px-GraphQL_Logo.svg.png)
![React logo](https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem-700x626.png)

### AI-Powered Gaze Redirection Project

During my last four months I felt like I had a great opportunity to deliver a super powerful prototype of some exiting new AI-powered technology we could add to the platform. I saw online that a new AI-powered SDK for video alterations was released and noticed that one of the features was a Gaze Redirection tool that would adjust a person's eyes so that they always maintain eye-contact with their camera. We already provided a "Speaker Notes" feature where you can jot down your notes to refer to while recording, so I knew that having the ability to read off your notes but still appear engaged with the video would be super valuable.

I pitched the idea to my Product Manger and it eventually bubbled up to the Senior Leadership Team who showed a great interest in the project. I eventually developed a prototype that allowed us to get user feedback on the feature and decide how much to invest into it in the future.

I'm mainly proud of this not just for the code I had to write, but instead for all the coordination it took to get buy-in from the entire organization. I had to get approval from my manager, my director, and even the CTO. They were so excited for the prototype that we actually got sign-off to begin a partnership with a provider to get early-access features and have conversations with a representative of their platform. By the end of the term I fully delivered on my prototype and enabled the functionality for users to try it out on our staging environments. The project was such a success that it has now been added as a prioritized project on the company roadmap.

<iframe width="560" height="315" src="https://www.youtube.com/embed/O50BkP16eZo?si=ADDkELaF_gf26qCP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Co-op Program Involvement

The last aspect of this co-op term I wanted to mention here was my growing involvement with the co-op program at Vidyard. Because this would be my third term as a co-op at the company I had a great opportunity to give my perspective to try and help improve the program. When the Summer term began it coincided perfectly with the Fall hiring schedule, and so I made it a goal of mine to help out with selecting the applicants for the next semester.

Throughout this term I helped reorganize the onboarding process, cultivate the applicant shortlist, conduct candidate interviews, and also organize all of the co-op social events both in-person and online. I was very happy to get involved with the program and I am very excited to see how it continues to grow in the future.

![Interview clip art](https://imgs.search.brave.com/NCiIIyEXUVdkXFCFq0l1Ta40xizRaHr-2_4iRpDHea0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy8yMDIxMzA5LTIw/MC5wbmc)

</section>

<section id="kudos-section">

### Kudos

I would now like to take some time to thank some of the amazing people who have had an impact on me throughout the term. Vidyard is full of amazing people who all deserve recognition, but for the sake of keeping this brief, I'll only go into detail about a handful of them.

First off I want to thank everyone who supported me at the Co-op Awards Reception for my reception of the 2022 Co-op Student of the Year award. I need to say a huge thank you to Jenn Bilawski for nominating me and providing a touching speech to play at the reception. I would also like to thank everyone who attended the reception and supported me in person. I was so happy to see Arjun Von Hatten, Kyle Kreutzer, Kevin Shelley, and Kyle Dyroff all take the time to attend the reception.

Next I would like to thank my manager on the Create team Carol Miranda for her support with my AI Gaze Redirection project. Her support enabled me to get access to the resources I needed to deliver the project and she was always there to help me out whenever I needed it. She was able to get the approval for the early-access version of the software and also helped me allocate resources to my project when I needed them. I am so thankful for her support and I am so happy to have had the opportunity to work with her.

Last but not least I would like to thank Kyle Siopiolosz who was the Senior Software Developer on the Create team. When I first joined the team the company had undergone a reorganization and the team I was joining was temporarily without a manager. This meant that the team was being led by Kyle in the interim and he was the one who was responsible for onboarding me and getting me up to speed. He was always there to answer any questions I had and he was always willing to help me out whenever I needed it. He set me up to succeed in the term by encouraging me to take on projects that I was interested in and encouraged me to use as much "Growth Time" as possible during my term. I am so thankful for his support and I am so happy to have had the opportunity to work with him.


</section>

<section id="goals-section">

### Goals

In this section I will give a summary of the goals I set out to accomplish over the term and reflect on their outcomes. There are five separate success levels I will be using to describe my success in achieving each goal. These levels are Failure, Satisfactory, Success, and Outstanding.


:GoalHeading{title="Jr. Developer" subtitle="Exceed the expectations associated with the Jr. Developer role" level="Outstanding"}

I would mark this goal as an outstanding success. After reflecting on my performance against Vidyard's developer levels rubric with my manager, we observed that I easily exceeded the expectations of a Junior Developer and even met many of the expectations of an Intermediate Developer. By actively monitoring my performance throughout the term, I was able to identify my strengths and weaknesses. This made it easy for me to actively seek out opportunities to meet expectations that I hadn't already satisfied.


![Report card clip art](https://imgs.search.brave.com/1DwWytOJYK9rTDnUd9L3OsEG1HzxNKiyumT_gw6in28/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nL28vYnVz/aW5lc3Mvb2Etb2Zm/aWNlLXN5c3RlbS1p/Y29uL3BlcmZvcm1h/bmNlLWV2YWx1YXRp/b24ucG5n)

:GoalHeading{title="Backend Experience" subtitle="Expand my proficiency with backend technologies and infrastructure" level="Outstanding"}

I would mark this goal as an outstanding success. When reflecting on the term I am proud of my contributions to Vidyard's backend infrastructure by optimizing MySQL queries, extending their GraphQL API, and making improvements to our analytics services. Compared to my last co-op term this was a much more backend-focused term and I was very happy to get more experience in this area.

![Backend server and gear clip art](https://imgs.search.brave.com/YguwULH5fnDUqsbHqbORTomoYtyNDA8-lGwDfrOq1MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yNi85Ny9i/YWNrZW5kLWRldmVs/b3BtZW50LWljb24t/bW9ub2Nocm9tZS1z/aW1wbGUtc2lnbi12/ZWN0b3ItNDcwNzI2/OTcuanBn)

:GoalHeading{title="Leetcode" subtitle="Improve my problem solving skills involving algorithms and data structures" level="Success"}

I would mark this goal as a success. Through my growth time I was able to practice many interview questions on LeetCode, and I have definitely improved my comfort with them. However, I still feel like there is room to improve in this area and I found myself prioritizing other work and projects over my LeetCode practice more than I would have liked.

![Idea lightbulb clip art](https://static.vecteezy.com/system/resources/previews/017/348/068/original/lightbulb-idea-concept-line-icon-light-bulb-bright-creative-solution-and-innovation-pictogram-efficient-electric-low-energy-lightbulb-outline-sign-editable-stroke-isolated-illustration-vector.jpg)

:GoalHeading{title="Networking" subtitle="Network and get a large variety of experience across the Vidyard platform" level="Outstanding"}

I would mark this goal as an outstanding success. By networking throughout the term I was able to identify parts of the platform with a very exciting roadmap for the upcoming year. I met with 4 different managers to discuss their team's plans and found the team that I believe is the best fit for my next co-op. On top of this networking, I also sought out bugs that led me to cooperating with developers from many different teams. By working on tasks outside of my typical domain I got to meet and work with lots of new developers.

![Handshake clip art](https://smallimg.pngkey.com/png/small/87-873179_shaking-hands-handshake-handshaking-hand-deal-business-shaking.png)

:GoalHeading{title="Co-op Mentoring" subtitle="Gain leadership experience by acting as a mentor to incoming co-ops" level="Success"}

I would mark this goal as a success. Throughout my term I made it a focal point to assist any co-ops who could use any help. By willing to collaborate as much as possible I made it very easy for each of my peers to reach out whenever they felt stuck or needed some advice. From these interactions I was able to get experience giving advice to my peers and using my extra experience at the organization to assist others. As someone very early into my career it is very difficult to find opportunities to mentor others, so I am very fortunate that I was in a position where my experience as a previous co-op warranted it. I would mark this goal as only a success because after the initial ramp-up period the co-ops all found their groove and reached out far less at the end of the term. However, the plenty of opportunities I was given to assist them at the start of the term were extremely meaningful to me so I would of course mark this goal as achieved.

![Mentor clip art](https://imgs.search.brave.com/RzHCCqY31vsw4ueu4AaFnKZsjLwNPbDIfUPNMelgiCY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzM0LzM4LzUy/LzM2MF9GXzUzNDM4/NTI4NF9nNlB5djZD/MW5WT2N5b1ZsR2NZ/bG5LMjg2dUtPSmd1/bC5qcGc)

:GoalHeading{title="Project Management" subtitle="Utilize my Growth Time to ideate a project and deliver a prototype" level="Outstanding"}

I would mark this goal as an outstanding success. I am extraordinarily proud of the work I was able to do, and the prototype I was able to deliver. Early on during my return to Vidyard I noticed that new AI-powered models have been released that enable users to modify videos such that it appears the participant always maintains eye-contact with their camera. I believed that this technology could perfectly integrate into our platform and I made it a goal of mine to demonstrate this functionality. I planned out this project and got approval from my manager, my director, and even the CTO. They were so excited for the prototype that we actually got sign-off to begin a partnership with a provider to get early-access features and have conversations with a representative of their platform. By the end of the term I fully delivered on my prototype and enabled the functionality for users to try it out on our staging environments. The project was such a success that it has now been added as a prioritized project on the company roadmap.

![Project document clip art](https://cdn-icons-png.flaticon.com/512/5956/5956592.png)

:GoalHeading{title="Co-op Hiring" subtitle="Gain experience screening, selecting, and onboarding candidates effectively" level="Outstanding"}

I would mark this goal as an outstanding success. By actively pursuing a role in the hiring process I was able to participate in both the pre-screening and interview process for co-op hiring. This gave me amazing experience in conducting interviews and gauging candidates and I am so fortunate to be given the opportunity to participate. I also worked as a liaison between the HR representative and the co-ops of the Summer semester to ideate new program activities and organize events for the group. By engaging in all aspects of the co-op hiring experience through assisting in onboarding, event planning, candidate shortlisting, and interviewing, I believe I have more than accomplished this goal.

![Interview clip art](https://imgs.search.brave.com/NCiIIyEXUVdkXFCFq0l1Ta40xizRaHr-2_4iRpDHea0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy8yMDIxMzA5LTIw/MC5wbmc)


</section>

<section id="conclusion-section">

### Conclusion

Overall, I was blown away with the amazing opportunities presented to me throughout my co-op term and feel so fortunate to be surrounded by such awesome people and such cool technology. This was the perfect co-op term to close out my final placement, and it gave me so many amazing opportunities to take on new challenges and responsibilities, work with new technology, and grow as a developer. I am so thankful for the opportunity to return to Vidyard and I am so excited to see what the future holds for me as I complete my final school terms and officially begin my career.

</section>