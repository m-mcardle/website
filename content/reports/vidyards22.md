---
title: "Vidyard · Co-op Report"
company: "Vidyard"
role: "Software Developer (Co-op)"
period: "May 2022 - August 2022"
description: "Matt McArdle's co-op work term report for his role at Vidyard in the summer of 2022."
image: "/images/Vidyard-Logo.png"
colour: "bg-emerald-950"
hoverColour: "rgba(29, 216, 101, 0.1)"
---

<section id="introduction-section">

### Welcome!

On this page I will be going into great detail about my co-op placement during my time at the amazing Kitchener company Vidyard. During this term I worked on a lot of awesome projects, met some amazing people, and was even awarded the Ian Pavlinic Memorial Award as the University of Guelph's Computing Co-op Student of the Year for my contributions during my time there. Watch the following video from my manager Jenn Bilawski to learn more about my performance during my time on her team!

<iframe class="vidyard_iframe" src="//play.vidyard.com/RjnNS2kRMrxXrzsgoCtCyE.html?" width=320 height=180 scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen></iframe>


### About Vidyard

[Vidyard](https://vidyard.com/) is a software company based in Kitchener which provides tools for the modern-day professional. They specialize primarily in providing value through video tooling which provides thorough analytics to enable their users to qualify their leads based on engagement with their video content. It was founded by two University of Waterloo students in 2010 as their Capstone Project, and the company still has a very Waterloo-centric culture. As a co-op not from the University of Waterloo, I found myself in a great opportunity to show the company that there are amazing students from all universities across Canada and made it a goal of mine to help open the door for future applicants from the University of Guelph.

![Vidyard office building](https://whitneyre.com/wp-content/uploads/Main-Image-41-488x326.jpg)


### Dashboard

The main infrastructure I would end up working with was known as Dashboard. This essentially was the web application that our users would access to navigate to their library of videos, view analytics, manage user accounts, and more. The Dashboard repository was written using the Ruby on Rails framework for the backend and Vue.js for the front end. Both of these frameworks were new to me, so I was very excited to work with them and learn!

![Ruby on Rails logo](https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png)
![Vue logo](https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png)


### Team Performance Dashboard

More specifically, I would be working primarily on the **Team Performance Dashboard** which was an analytics dashboard that was currently in BETA when I joined. Its focus was on providing engagement metrics based on who on your team is creating the most videos, receiving the most views, and invoking the most actions from their viewers. When I joined it was a mere prototype of what was intended, and through the course of my four months there, my team and I would bring the dashboard out of a BETA and fully release it to our enterprise customers. If you have a Vidyard account you should be able to view the demo dashboard [here](https://secure.vidyard.com/organizations/0/upgrades/team-performance) and check out the adjacent video for our marketing team's awesome promo for the page.

<iframe class="vidyard_iframe mx-auto" src="//play.vidyard.com/mZnVwKZa9GvjLUCyeJWfT1.html?" width=320 height=180 scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen></iframe>


### ConstructionYard

The repository I interacted with ended up being **ConstructionYard**. This repo hosts an internal npm package which contains a collection of reusable Vue components which is consumed across all Vue-based parts of the platform. These components can differ from simple buttons to interactive calendars and everything in between. I would end up working very closely with this repo and would become quite familiar with the workflow involved and policies of development inside of it. This would be where my team would build out the new filters, menus, and other components involved in our Team Performance Dashboard project which I will discuss in more detail later.

![Vue logo](https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png)
![Construction clip art of crane and building in black and white](https://png.pngtree.com/png-vector/20190227/ourlarge/pngtree-vector-construction-house-icon-png-image_708533.jpg)

</section>

<section id="report-section">

### My Team

I joined during an interesting time for the company as engineering was going through a major reorganization. When I joined it was the first week of my team's formal existence as the Sales Track team. This team was put together to focus on our analytics service as well as developing monitors for the health of our platform. Of course, because a team of developers will never accept their formal name, my team decided to internally call ourselves the **Star Track** team.

![Star Trek icon](https://www.shareicon.net/data/2015/09/14/100884_star-trek_512x512.png)


### Bug Fixes

When I first joined the Track team they were in the closing stages of an ongoing project with an expected competition date within the first two weeks of my term. Because of this, there was no value in me being ramped up on months of progress for only a week of contribution to the project. To make myself useful I dove straight into our backlog of bugs to investigate and resolve. Unfortunately for me, there were no easy 'slam-dunk' fixes sitting there for me.


<br/>

The first bug I grabbed involved an error message appearing in our video player when viewing a share page on Firefox. The error message stated that the video was no longer available at the URL the user is on, and only appeared when a user navigated to the video from an outbound Facebook link.

<br/>

I quickly came up with a hunch about the Firefox browser altering expected behaviour to avoid any user tracking via Facebook's `fbclid`. I eventually ended up reading through the Firefox browser's C++ source code to discover that in cases where a URL contains this new tracking id, Firefox alters the expected behaviour of network requests. This bug fix gave me a great opportunity to learn a lot about our player's infrastructure and brush off my JavaScript skills, and was a fun and challenging first task of my term.

<br/>

The next bug I attempted to fix involved concerns about our player's 'Call to Actions' and GDPR guidelines. Before this ticket, I had never heard of GDPR, so I had a lot to learn when it came to the legalities of the issue. The issue was filed when a customer noticed they were receiving the data that their viewers had submitted via a Call to Action in their video, but the viewers were not being identified in our analytics service because they hadn't consented to be tracked according to GDPR guidelines. Essentially we just wanted to make sure that this is the expected behaviour and fix it if it wasn't.

<br/>

While I awaited a response from our legal team on the matter, I developed a prototype of a tweak to our player to only show Call to Actions when a user has consented to GDPR. Once legal finally had time to look into the issue they returned with the information that they were satisfied with the current behaviour and that no functionality needed to be changed. This was great news as that meant that no refactoring had to be done and I could finally close this ticket. While I was disappointed that my code wouldn't be needed I was still thrilled to get some more experience in new parts of our codebase and got some great opportunities to meet people from all parts of the organization as I investigated the issue.

<br/>

With these two nasty bugs closed it was finally time for me to jump right into my team's next project!

![Black bug clip art](https://cdn-icons-png.flaticon.com/512/78/78946.png)


### Custom Date Picker

The first project I was able to contribute to involved building a new component to allow users to filter data by a custom date range on the Team Performance Dashboard. This involved building out the new component in our ConstructionYard Vue library and then replacing the old simple menu with this new component on the actual dashboard. My main contributions during this phase involved the logic behind disabling dates in the calendar based on a preset maximum range of days along with a given earliest date. The solution involved in disabling dates in the calendar itself was quite straightforward but I came to realize that both the technical design and UI design failed to accommodate for the manual text inputs that we planned to include in the component. This led me to many challenging and interesting design conversations with other developers on my team and my team's UI designer. I thoroughly enjoyed this as it was a great introduction to my team because I got to work alongside almost everyone on the team as we tried to remedy the oversights of our original plan. This project gave me some great experience with the Vue framework, and some great experience discussing complexity and design challenges with my peers.

![Black calendar clip art](https://media.istockphoto.com/vectors/calendar-reminder-isolated-icon-vector-id670134048?k=20&m=670134048&s=612x612&w=0&h=10u65mgxivNAEYq5nqbg9reG_s9cGyLiVuWLf9ppE5g=)


### See More

The next phase of our project involved extending the charts and tables to allow them to be opened in a 'See More' view to have the data from all users on the team displayed instead of just the top 5. This involved tweaking our API endpoints for querying for data to support returning all users on a team which meant I got to make some changes in our Ruby on Rails backend which was awesome. I also ended up being responsible for adjusting our Vuex store to support storing and fetching the data for these new modals appropriately, and it was very fun to learn about centralized stores in a web application.

![Binoculars clip art](https://media.istockphoto.com/vectors/binocular-field-glasses-flat-icon-vector-id494991460?k=20&m=494991460&s=612x612&w=0&h=Z6eCQG5jeZ4LxCc3Ghw2iJ8NVqiR0_F9EURd-TQvOZg=)


### GIF Police Guild

One of my favourite projects I worked on was a side project I started with a few other co-ops. All developers at Vidyard are entitled to "Growth Time" to spend time during the day working on something other than your required project work. To utilize this **growth time** we decided to try and build something together as a short side-project. As a developer at Vidyard one important rule to know is that when you open a Pull Request on GitHub, you **MUST** include a GIF inside the description. It came to my attention that some developers were somehow forgetting this golden rule, and leaving PRs "GIF-less". Luckily for Vidyard, they had lots of co-ops who could spend their time identifying these PRs and manually commenting "Needs a GIF" to address this issue.

<br/>

However, after manually doing the same task a few times, I realized this was a prime opportunity to automate more of our PR workflow. We already had a service that would apply automated actions to JIRA tickets, Slack channels, and GitHub PRs using a series of webhooks, so I knew this sort of concept would not be too foreign to Vidyard. We already had some basic auto-labelling on GitHub to inform the owner of the pull request that it has passed review or if it still requires a review so I was able to just extend the behaviour in this service to now validate the existence of a GIF in the PR's body.

<br/>

After a short period of pair-programming with two fellow co-ops, we were able to implement some fancy regex to parse for the supported image formats on GitHub and apply the new "Needs GIF" label appropriately. This was a very fun and valuable experience as I got to experience designing a new service and establishing a guild to accomplish a project.

![Police officer clip art black and white](https://iconarchive.com/download/i91984/icons8/windows-8/Users-Police.ico)
![Police officer GIF](https://media.giphy.com/media/81xwEHX23zhvy/giphy.gif)


### Multi-Select Team Filter

The final phase of my team's project was to extend the functionality of the Dashboard to support querying across multiple teams. This involved once again building a new menu component for the "multi-selection" as well as tweaking our endpoints to support returning data from multiple teams. This was the most exciting part of my term as I was privileged enough to become the Project Lead for this phase. As the m my duties involved leading my team’s daily standup, organizing testing sessions to ensure coverage of expected behaviour, and having discussions with developers, designers, and managers to ensure that all concerns are understood and the project’s development flowed smoothly. During my time as project lead, I overcame challenges such as navigating work delegation when significant parts of the team were on vacation, making scope decisions to ensure we maintained on track for our targeted release and helping shape new designs that more effectively solved the issues we were addressing. While managing the responsibilities of a Project Lead, I was still able to complete 42% of my team's tickets to ensure that I was contributing effectively as a developer.

![Filter clip art](https://static.thenounproject.com/png/1014280-200.png)


</section>

<section id="kudos-section">

### Kudos

I would now like to take some time to thank some of the amazing people who have had an impact on me throughout the term. Vidyard is full of amazing people who all deserve recognition, but for the sake of keeping this brief, I'll only go into detail about three of them.

<br/>

First off I would like to extend a huge thank you to my manager [Jenn Bilawski](https://www.linkedin.com/in/bilawski/). Throughout the term, she helped me re-imagine what a manager can be. Our weekly one-on-ones were always a delight where no subject was off-limits. Through these conversations she helped me better understand career progression, transitioning to a leadership position, and how to understand compensation as I progress through my early career. Not only were our discussions amazing, but her management provided me with fantastic opportunities to grow throughout my term. As my manager, she appointed me as the project leader for the last phase of the Team Performance Dashboard project. This was a fantastic opportunity to get real leadership and management experience, and I was very lucky to get the opportunity as it is very uncommon for co-ops to hold the title. Jenn truly believed in me and I could feel that through her amazing support every single day.

<br/>

I would also like to thank my amazing co-op buddy [Nyssa Wilfong](https://www.linkedin.com/in/nyssa-wilfong-4a22a527/). She was my go-to person for all my day-to-day questions and was always more than happy to help me with any issues or questions I came to her with. On top of being super helpful, she was also a delight to interact with. It seemed like she came every day with an unfaltering positive attitude which was hard not to be positively affected by. My questions seemed to be never-ending throughout the term, but she never shied away from an opportunity to help me learn. I owe so much of my success to Nyssa for helping me stay on track and ramp myself up with all the powerful new tech I was surrounded with throughout my term.

<br/>

Last but not least I want to thank my fellow co-op, [Massimo De Luca](https://ca.linkedin.com/in/massimo-deluca). He was my partner during my fun little "GIF-Police" side project and was an absolute blast to work with. It was such a joy to work alongside him and my co-op term would only have been a fraction as fun without being able to go out to lunch and share the office with such a great guy.

</section>

<section id="goals-section">

## Goals

In this section I will give a summary of the goals I set out to accomplish over the term and reflect on their outcomes. There are five separate success levels I will be using to describe my success in achieving each goal. These levels are Failure, Satisfactory, Success, and Outstanding.

:GoalHeading{title="Project Lead" subtitle="Lead a phase of a project" level="Outstanding"}

During the early stages of my co-op I learned about the flow of our projects and became very interested in the responsibilities of becoming a "Project Lead". This title belonged to the developer who would be responsible for managing the day-to-day development of the project to ensure that all stakeholders are operating effectively and the development is going smoothly. This role is almost never given to co-ops due to the responsibility that must be put on them, but I really believed that I could demonstrate that I was qualified to achieve such an opportunity. To accomplish this goal I made it a focus of mine to demonstrate everyday that I was dependable enough, insightful enough, and confident enough to take on the responsibilities of this role. On top of that I made it a goal of mine to learn as much as I could about the duties involved and payed close attention to the actions of other "Project Leads" to ensure that I would be prepared if I was presented with the opportunity. Luckily enough for me, I was assigned the position for the very last phase that was available before my term was over. It was such a valuable experience to get such raw leadership experience so early into my career, and I am so thankful that I got the opportunity. As "Project Lead" we completed the project before our refined projection, and because of this I would certainly mark this goal as an outstanding success for myself.

![Conversation clip art](https://static.vecteezy.com/system/resources/previews/013/042/573/original/talk-people-icon-in-clipart-concept-conversation-discussion-sign-symbol-vector.jpg)

:GoalHeading{title="Personal Projects" subtitle="Enhance my project portfolio" level="Outstanding"}

As I've progressed through my early career I've really come to appreciate the value in learning through my extracurricular side projects that I have developed. From these projects I've gained valuable experience with powerful new tech, applied my learnings from university, enhanced my portfolio, and had a lot of fun while doing it! Because of this, I made it a goal of mine over the co-op term to find opportunities to apply my learnings during my term into new side projects outside of working hours. To accomplish this I made it a habit to jot down interesting languages, frameworks, or concepts that I wanted to explore more during my own time. One of the projects that came from this was rebuilding my personal website from scratch using the Vue-based Nuxt framework due to how much I was enjoying learning Vue during the term. This gave me a great opportunity to explore the Vue language a bit deeper and also get experience with a new powerful framework. Another project I developed involved a email notification service to inform subscribers of predicted large changes in gas prices. This idea actually came from a suggestion from a fellow co-op Massimo when I asked him for ideas of how to utilize a gas price API that I had built. On top of that, I decided to write the scripts using Ruby to get more experience with the language I had just started working with during the term. With multiple successful projects completed, I would certainly say that I have accomplished this goal.

![Idea lightbulb clip art](https://static.vecteezy.com/system/resources/previews/017/348/068/original/lightbulb-idea-concept-line-icon-light-bulb-bright-creative-solution-and-innovation-pictogram-efficient-electric-low-energy-lightbulb-outline-sign-editable-stroke-isolated-illustration-vector.jpg)

:GoalHeading{title="Test Driven Development" subtitle="Gain experience with TDD" level="Success"}

One concept I really wanted to get more experience with was test driven development. It is an interesting concept that I've learned during my studies but I have never had the motivation to put it into practice before. To change this I made it a goal of mine to complete some tickets while fully following the ideologies of TDD. To accomplish this goal I spent time refreshing myself on the concepts involved as well as the testing libraries that were available to me at Vidyard. I then began finding tickets with functionality that I believed would be appropriate for a test-driven approach to its development. I was then able to finally take a feature from "red to green" as I began building my Jest assertions before I developed any code. I was able to try this out for a handful of my tickets so I would say that I accomplished this goal. However, I unfortunately found this approach to be a bit heavy for the work I was doing and found that it was taking more time to follow this approach than I believed was worth it. Because of this, I eventually stepped away from following TDD for my tickets, but because I did get to try it out I would definitely mark this as a success.

![Testing clip art](https://cdn-icons-png.flaticon.com/512/10492/10492944.png)

:GoalHeading{title="Technical Proficiency" subtitle="Learn Ruby and Vue.js" level="Outstanding"}

One goal that I felt was vital to my success at Vidyard would be ramping myself up on the languages and technologies associated with the development environment of my team. This involved the programming languages Vue and Ruby, and tools such as Datadog and LaunchDarkly. To accomplish this goal I used a variety of educational resources to research this unfamiliar areas early in my term. One of my favorites was Ruby Koans which was an interactive workbook that taught me all the wild stuff that Ruby could do. I also made it a focus of mine to not shy away from unfamiliar languages during code reviews or while picking up tickets. By forcing myself to go outside of my comfort zone, I would give myself opportunities to learn through experience. After becoming totally comfortable developing in Vue and Ruby and becoming experienced modifying our feature flags on LaunchDarkly, I would say that I absolutely achieved this goal.

![Vue logo](https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png)

:GoalHeading{title="Internal Project" subtitle="GIF Police Guild" level="Outstanding"}

Another goal I created was to utilize my Vidyard "Growth Time" to develop an internal project with some of my peers. I wanted to get more of an opportunity exploring new areas and also working with new people, and by contributing to an internal project I would accomplish both of those things. To achieve this goal I made sure to keep a creative mindset while working. By doing this I kept my eyes out for areas of improvement across the platform. About midway through my term, I was joking with two fellow co-ops about how our most valuable contributions were policing GitHub pull requests to ensure they have a GIF in their description. For context, it is an awesome Vidyard policy where developers are always supposed to place a GIF in each of their PRs. From these jokes I came up with an idea to automate the "GIF Policing" and founded a development guild alongside these two other co-ops to do this. This project ended up involving GitHub webhooks and a whole lot of regex parsing but by the end of it we had a fully operational automated labeling system that would alert owners that their PR was GIF-less. This project was a lot of fun and I'm glad I got to collaborate with some of the other co-ops so I would absolutely mark this goal as achieved.

![Idea lightbulb clip art](https://static.vecteezy.com/system/resources/previews/017/348/068/original/lightbulb-idea-concept-line-icon-light-bulb-bright-creative-solution-and-innovation-pictogram-efficient-electric-low-energy-lightbulb-outline-sign-editable-stroke-isolated-illustration-vector.jpg)

</section>

<section id="conclusion-section">

### Conclusion

Overall, I was blown away with the amazing opportunities presented to me throughout my co-op term and feel so fortunate to be surrounded by such awesome people and such cool technology. This co-op term was an amazing four months of sharpening my front-end skills, getting my first real leadership experience, and lots of fun! I am so thankful I got great experience with powerful tech such as Vue, Ruby on Rails, Cypress, Vuex, Datadog, and Launch Darkly. After another successful co-op term, I cannot wait to see what my next placement will hold!

</section>
