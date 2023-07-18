<template>
  <NuxtLayout
    name="report"
    colour="bg-blue-950"
    hover-colour="rgb(197, 217, 234, 0.15)"
  >
    <template #header>
      <div class="flex flex-row">
        <div class="w-1/6">
          <img :src="MagnetLogo" alt="Magnet Forensics Logo" class="h-auto" />
        </div>
        <div class="flex flex-col w-5/6">
          <h1 class="text-4xl text-slate-200 font-bold">Magnet Forensics</h1>
          <h2 class="text-2xl text-slate-300 font-medium">Software Developer (Co-op)</h2>
          <p>May 2022 - August 2022</p>
        </div>
      </div>

      <nav class="hidden lg:block">
        <ul class="mt-16">
          <li class="py-2"><a href="#introduction" class="nav-active">Introduction</a></li>
          <li class="py-2"><a href="#my-team" class="report-link">Report</a></li>
          <li class="py-2"><a href="#kudos">Kudos</a></li>
          <li class="py-2"><a href="#conclusion">Conclusion</a></li>
          <li class="py-2"><a href="#goals">Goals</a></li>
        </ul>
      </nav>
    </template>

    <article class="report">
      <section id="introduction" class="py-24">
        <h2>WELCOME!</h2>
        <p>My name is Matthew McArdle and I am a Software Engineering Student at the University of Guelph. On this page I will be going into great detail about my first co-op placement during my time at the amazing Waterloo company Magnet Forensics. I hope by the end of this you get a good idea about all the awesome experiences I had during my time at Magnet, and are as blown away as I am about how many different things I had the opportunity to learn.</p>
        <div class="flex flex-row">
          <img src="https://www.cbj.ca/wp-content/uploads/2015/11/Magnet-Forensics-logo.jpg" alt="Magnet Forensics logo">
        </div>
      </section>

      <section id="about" class="py-24">
        <h2>ABOUT MAGNET FORENSICS</h2>
        <p><a href="https://www.magnetforensics.com/">Magnet Forensics</a> is a Waterloo-based company that develops tools used primarily by law enforcement or private investigators to uncover digital evidence left on suspects' or victims' devices. I joined Magnet in May of 2021, which just so happened to be at a very exciting time for the company. On April 28th they became the first Waterloo company to have an IPO in 15 years.</p>
        <div class="flex flex-row">
          <img src="https://pbs.twimg.com/media/ESqrDEGXQAEy9E3.jpg" alt="Magnet Forensics office building">
        </div>
      </section>

      <section id="axiom" class="py-24">
        <h2 id="axiom">AXIOM</h2>
        <p>Their flagship product is <a href="https://www.magnetforensics.com/products/magnet-axiom/">Magnet AXIOM</a>, the desktop tool used to uncover and examine digital evidence from mobile, computer, or cloud sources. Many different teams work together to develop AXIOM. For example, there is a dedicated team to parse/extract artifacts (digital evidence that may come in many formats, ex: Skype Call Metadata), and another team to develop EXAMINE, the interface used to analyze and build cases from the data extracted.</p>
        <img src="https://cdn.shopify.com/s/files/1/0193/5740/1187/products/mockup-d573f12d_345x345@2x.png?v=1600110362" alt="Axiom logo">
      </section>

      <section id="mdis" class="py-24">
        <h2 id="mdis">MDIS</h2>
        <p>While Magnet AXIOM certainly is the company&#39;s most successful product, there are some super exciting innovations earlier in their product lifecycle that are rapidly growing in popularity. The most mature of these innovations come as a trio of products that are marketed together as a part of the Magnet Digital Investigation Suite (MDIS). These three tools are <a href="https://www.magnetforensics.com/products/magnet-automate/">Magnet AUTOMATE</a> which automates workflows that forensic examiners might otherwise have to perform manually, <a href="https://www.magnetforensics.com/products/magnet-atlas/">Magnet ATLAS</a> which provides collaborative and case management tools for investigators, and <a href="https://www.magnetforensics.com/products/magnet-review/">Magnet REVIEW</a> which is a web application to enable non-technical examiners to review evidence and build cases remotely while interacting with a more user-friendly interface than more forensically intensive products such as AXIOM. Magnet REVIEW ended up being the team I joined for my co-op term and I will go into far more detail later on.</p>
        <img src="https://www.forensicfocus.com/stable/wp-content/uploads/2022/04/2022-04-14_625885cb011ea_MF_MDIS_Feb2022_TwLiFb_1200x675.png" alt="Magnet Digital Investigation Suite graphic">
      </section>

      <section id="speakers" class="py-24">
        <h2 id="guest-speakers">GUEST SPEAKERS</h2>
        <p>One thing that I really came to appreciate about Magnet is its policy at each all-hands meetings to have a guest speaker from the field talk about their real-life experiences involving digital forensics. They would go over case after case of crimes that seemed straight out of a TV show, and hearing about the impact that Magnet was able to make on these cases was so powerful. When the stakes involve justice for the innocent it cannot be stressed enough how motivating it is to come into work with the right attitude and work ethic. I found it amazing how inspiring these detectives were. They were the real heros so to hear them talk about Magnet&#39;s products in such a good light made me so proud to be there (even as a co-op). During my time here we got the chance to hear from guest speakers from Nashville, Scotland, and even Germany. Each speaker came with their own amazing stories about how real crimes were solved using the tools that Magnet has provided.</p>
        <div class="flex flex-row">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Metro_Nashville_Police_Patch.png" alt="Metro Nashville Police badge">
          <img src="https://www.largsandmillportnews.com/resources/images/4405837/" alt="Scotland Police logo">
        </div>
      </section>

      <section id="my-team" class="py-24">
        <h2 id="my-team">MY TEAM</h2>
        <p>As mentioned before I joined the Magnet REVIEW team. More specially I originally joined the Taco sub-team which specializes in deployment and infrastructure primarily. This came as very exciting but terrifying news to know I would be surrounded by super cool tech which I unfortunately had little to no experience with. I knew that this term would certainly give me more than enough opportunities to try out new technologies and immediately knew I was on a team that was more than happy to help me learn. I want to take some time now to go over some important themes/tasks I performed during my time at Magnet to demonstrate some of the awesome opportunities I had to learn.</p>
        <div class="flex flex-row">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png" alt="Kubernetes logo">
          <img src="https://www.zencos.com/wp-content/uploads/2021/11/aws-logo.png" alt="AWS logo">
        </div>
      </section>

      <section id="bash" class="py-24">
        <h2 id="bash-installer">BASH INSTALLER</h2>
        <p>During the early days of my term I found myself working quite frequently on our product&#39;s installer. It was written in Bash which I had some experience with during University, so I found it far more approachable than other parts of the product. I started off with small little quality of life improvements such as changing the name of the installer&#39;s folder from dist to review-VERSION, and slowly built up to adding configuration options into the installer such as allowing them to configure their company&#39;s logo that gets uploaded for use in the front-end.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/1200px-Bash_Logo_Colored.svg.png" alt="Bash logo">
      </section>

      <section id="jenkins" class="py-24">
        <h2>JENKINS / AZURE CLI</h2>
        <p>The next phase of my co-op involved entering the world of Jenkins. For the unfamiliar, Jenkins is a pipeline based automation and continuous integration tool to build, test, and deploy our product. I first worked on a ticket to address an issue that I saw arising involving what I would call orphaned clusters. There seemed to be an issue where one of our build jobs would be triggered to spin up an instance of our product to do some testing on, but after the testing was completed, the cluster was not being torn down. This can be quite a problem when these clusters can cost over $2000 a month. I decided to familiarize myself with the Jenkins pipeline used to build these clusters and the Azure CLI to interact with the resources being created. I ended up using Jenkins environment variables to determine who kicked off the job and then the Azure CLI to automatically tag the resources with the name of the person who started the build in order to maintain responsibility for the clusters. Because of this, it is now far easier to clean up these clusters and save ourselves from spending $2000 a month on a cluster we weren&#39;t even using.</p>
        <div class="flex flex-row">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png" alt="Jenkins logo">
          <img src="https://swimburger.net/media/ppnn3pcl/azure.png" alt="Microsoft Azure logo">
        </div>
      </section>

      <section id="cli" class="py-24">
        <h2>C# (CLI XML Parsing)</h2>
        <p>My next (and probably my favourite) project of my co-op involved pair-programming with another developer on the team to develop new parsers for our CLI. For context, our CLI is used to ingest evidence into REVIEW by parsing either JSON or XML files and extracting the needed information from elements to populate models used in REVIEW. Specifically we were tasked with supporting one of our competitor&#39;s data formats which came as an XML export. I should probably add that this was my first major involvement with one of our C# services, so this was an amazing learning experience for myself. This also was about the time where I really felt myself being able to contribute meaningfully to design discussions as I became more comfortable and familiar with our CLI&#39;s infrastructure. I remember this so fondly because it felt amazing to contribute to a customer requested Epic in such a meaningful way. It also was so enjoyable to work alongside such an amazing mentor who was so open to collaborate. I think I owe a lot of my growth during my co-op to Christian for being such a great mentor during the work on the project, and it remains one of my most fond memories during my work term.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" alt="C# logo">
      </section>

      <section id="front-end" class="py-24">
        <h2>FRONT-END DEVELOPMENT</h2>
        <p>During the back half of my co-op there arose a concern about a large release we were supposed to deliver. However, it just so happened to involve almost entirely front-end and minor application level changes. This meant my Taco sub-team had very few priority items to deliver for this specific release. For this reason we came to the decision that it might be beneficial for me to switch over to the other sub-team (aka the Gadgeteers) to lend a hand. This gave me an amazing opportunity to get experience with front-end development. I learned how to develop using component driven design in React.js and found it super cool to work with one of these powerful frameworks. I also got experience with developing packages as we have an internal npm library which I had to work on. This gave me experience working with the Bootstrap library as our main packages are built on top of it.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React logo">
      </section>

      <section id="refactor" class="py-24">
        <h2>MICROSERVICE REFACTOR</h2>
        <p>When nearing the end of my co-op I discovered some inflexibility in one of our microservices when I was working on what should have been a small fix. I brought this to the attention of one of the team&#39;s Senior Developers, Rob. To my amazement, he suggested I should take on the tall task of refactoring the problematic areas of the microservice. He explained that it had become a bit of a mess due to some bad practices sneaking their way into production. For the next few weeks I took on this super exciting project, with Rob acting as somewhat of a project manager/mentor for concerns and questions I had while working on it. Through this experience I learned many fascinating concepts involving code completeness and best practices. I also of course learned the methodology involved with refactoring production code. I developed whitebox tests, blackbox tests, learned about what makes code hard to maintain, learned concepts of how to keep code flexible, and learned so much about how to not just write functional code, but maintainable and extendable code.</p>
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLBkCHXoIcNq_JT6Wbos32LIzIEjvtVE68_iLDTqeZhv_5m1Rc" alt="Refactoring icon">
      </section>

      <section id="kudos">
        <h2>KUDOS</h2>
        <p>I want to close this page out by giving out some much deserved credit to those who helped me during my term. I first would like the REVIEW team as a whole for how amazing of an environment it was to join. Everyone on the team was always so willing to collaborate and help me learn, and this made REVIEW such a pleasure to be a part of. However, there are three individuals I would like to specifically acknowledge for all the above and beyond support they gave me over the past eight months.</p>
        <p>First and foremost, I need to extend a huge thank you to my co-op advisor at Magnet, <a href="https://www.linkedin.com/in/chris-chevreau-8b596b239/">Chris Chevreau</a>. As my supervisor he was my go-to guy for any issues or support I needed during my time there. He was always happy to help and kept me on the right track whenever I started to get lost. Not only did he offer his own support, he also always made an effort to direct me to the person or resources that might answer some questions I&#39;ve had. As someone who was new to almost everything during my co-op, having someone point me in the right direction to even figure out where I can learn was so beneficial. He also gave me the feedback I needed to achieve my goals and grow to my full potential during my time there. I owe so much to Chris for how well I was able to integrate into the Magnet REVIEW team.</p>
        <p>Next I would like to extend another huge thank you to <a href="https://www.linkedin.com/in/christiancornelis/">Christian Cornelis</a> for his awesome collaborative spirit and his teachings during work we completed together during our parsing epic. I have him to thank for so much of my technical learnings as he ramped me up in C#, unit tests, microservices, and all of our parsing infrastructure. He not only was a great mentor, he was also an absolute pleasure to work with as he always had a great attitude and always maintained a upbeat spirit.</p>
        <p>I also need to extend a huge thank you to <a href="https://www.linkedin.com/in/robert-nelson-0936542a/">Robert Nelson</a>, one of the Senior Developers on the Taco team. I remember during my very first week he stayed on a call with me until 7pm just happily answering all my never-ending questions about all the new things I saw during my first few days. As our resident expert on our Kubernetes infrastructure, he was a crucial resource for me as started my co-op without ever even hearing about Kubernetes. Even after eight months working with Rob, I&#39;m still convinced hes some sort of software developing wizard as he had just a mind boggling amount of knowledge available. Rob was an amazing resource but an even more amazing mentor, and I am so grateful that I got the privilege to work alongside him.</p>
        <p>I seriously cannot stress enough how amazing the people were during my time at Magnet. I was blown away each and every day with their willingness to collaborate and educate, and maintain a super fun environment to work in as well. For a first co-op experience, I cannot imagine anything better and I am so grateful I got the opportunity to work with such amazing people.</p>
      </section>

      <section id="conclusion">
        <h2>CONCLUSION</h2>
        <p>Overall my co-op term was an absolutely amazing experience and I am so grateful for all the opportunities to learn from such intelligent and passionate people. I am also super grateful that I got experience with so many fascinating and powerful technologies during my time there such as Jenkins, AWS, Grafana, Gerrit, Locust, ElasticSearch, Python, Kubernetes, Azure, Docker, C#, Bootstrap, React.js, and Bash. For my first co-op opportunity, I could never have imagined it being so successful and enjoyable, and it has made me even more excited about my future career.</p>
      </section>

      <section id="goals" class="goals py-24">
        <div class="flex flex-col">
          <h2>GOALS</h2>
          <p>
            In this section, I will give a summary of the goals I set out to accomplish over the term and reflect on their outcomes. There are five separate success levels I will be using to describe my success in achieving each goal. These levels are Failure, Difficulty, Success, and Outstanding.
          </p>

          <div class="grid grid-cols-1 gap-16 mt-16">
            <div class="section flex flex-col">
              <div class="flex flex-row w-full items-end">
                <h3>C#</h3>
                <h4 class="mx-2">Become proficient in C#</h4>
                <div class="ml-auto mr-0 border rounded-md mb-2 p-1" style="background:#006319;">
                  <p class="text-white">Outstanding</p>
                </div>
              </div>
              <hr>
              <div class="flex flex-col md:flex-row">
                <p class="md:w-[70%] mr-4">
                  One goal was to become proficient using C#. I came into the work term with no prior experience with the language and considering almost all of our microservices are written in C# I knew I would need to ramp myself up on C#. I accomplished this goal by signing up on Pluralsight for a C# learning course to cover the language basics, and made a personal effort to give all code reviews written in C# a look so I can learn by example and by asking the other developer's questions about their code. Even with that personal effort I still have to say that I would not have learned so much so fast about the language if it wasn't for my pair programming experience I previously mentioned with Christian. By learning through my Pluralsight course, observing the other dev's new C# code, and an amazing hands-on learning experience working on our CLI, I can confidently say I am now comfortable developing in C#. I would certainly say I have accomplished this goal.
                </p>
                <div class="h-[200px] mx-auto md:ml-auto md:mr-0">
                  <img src="~/assets/images/CSharp.png" alt="C# logo" class="h-full w-fit">
                </div>
              </div>
            </div>

            <div class="section flex flex-col">
              <div class="flex flex-row w-full items-end">
                <h3>AWS</h3>
                <h4 class="mx-2">Become an AWS Certified Cloud Practitioner</h4>
                <div class="ml-auto mr-0 border rounded-md mb-2 p-1" style="background:#fcba03;">
                  <p class="text-white">Satisfactory</p>
                </div>
              </div>
              <hr>
              <div class="flex flex-col md:flex-row">
                <p class="md:w-[70%] mr-4">
                  Looking back this is my most regretted goal. My Magnet mentor Chris warned me that as I became more involved with the team I would find this goal not as appealing and unfortunately that was exactly the case. I believed getting a certification would be a great tangible evidence of my learnings during my co-op, but as I became completely integrated into the team, I found little time to dedicate to this goal. On top of that, the certification itself became less and less appealing as I did more and more AWS courses. It turns out that the certification is targeted at product management or other roles with less of a focus on technical ability. This essentially made the course focused on using the AWS dashboard and learning the high-level definitions of each AWS product. It also put more of a focus on cost-management and other tasks that a employee in a leadership role would care about, and as a co-op hoping to learn about implementations, that didn't align with my current career status. I ended up accepting that this goal would not be accomplished in lieu of the issues I just mentioned. However, I would honestly measure it a slight success because through my co-op term I learned so much about AWS just through hands on experience (even if I don't have a certification to show for it).
                </p>
              </div>
              <div class="h-[200px] mx-auto md:ml-auto md:mr-0">
                <img src="~/assets/images/AWS.png" alt="Amazon Web Services logo" class="h-full w-fit">
              </div>
            </div>

            <div class="section flex flex-col">
              <div class="flex flex-row w-full items-end">
                <h3>Soft Skills</h3>
                <h4 class="mx-2">Improve my ability to engage in technical and design conversations</h4>
                <div class="ml-auto mr-0 border rounded-md mb-2 p-1" style="background:#006319;">
                  <p class="text-white">Outstanding</p>
                </div>
              </div>
              <hr>
              <div class="flex flex-col md:flex-row">
                <p class="md:w-[70%] mr-4">
                  Early on in my co-op I felt myself lurking in group conversations about implementations and design orientated conversations, especially when it involved a technology I hadn't worked with yet. I wanted to be able to contribute to these conversations so I made it a goal of mine to learn from my coworkers about how they approach those types of conversations, and also research any technologies or concepts that I was unfamiliar with when they were brought up in these conversations. This turned out to be one of my favourite goals looking back as it pushed me out of my comfort zone to learn about so many new technologies during my term. I also think this goal helped develop a very important skill, engaging in discussions without an expert-level of knowledge about the subject. By the end of the term I feel I learned how to ask the important questions during this discussions to understand the problems and possible solutions, without needing to be very experienced with the technologies involved in the problem. This allowed me to contribute my opinion far more during design discussions and when creating acceptance-criteria for a ticket, and I think this growth in my abilities really unlocked a huge aspect of the job for me once I was able to engage in these conversations. I am very proud of how this goal turned out and I would certainly say I achieved it.
                </p>
              </div>
              <div class="h-[200px] mx-auto md:ml-auto md:mr-0">
                <img src="~/assets/images/Conversation.png" alt="Amazon Web Services logo" class="h-full w-fit">
              </div>
            </div>

            <div class="section flex flex-col">
              <div class="flex flex-row w-full items-end">
                <h3>Kubernetes</h3>
                <h4 class="mx-2">Familiarize myself with our Kubernetes infrastructure</h4>
                <div class="ml-auto mr-0 border rounded-md mb-2 p-1" style="background:#006319;">
                  <p class="text-white">Success</p>
                </div>
              </div>
              <hr>
              <div class="flex flex-col md:flex-row">
                <p class="md:w-[70%] mr-4">
                  During my first four months of my co-op I learned the base level knowledge needed to understand our Kubernetes infrastructure, but knew there is just so much more for me to learn about it. Because of this, I made it a goal of mine in my last four months to become much more familiar with Kubernetes. To accomplish this I planned on completing more Kubernetes related tickets during my last months at Magnet, but ran into difficulty when priorities were set on front-end related tickets. However, I stayed determined to surround myself with Kubernetes and volunteered as a Support Tribute to help troubleshoot issues in active REVIEW environments. Luckily for me most of the issues require navigation through Kubernetes to at the very least diagnose the issue, and sometimes the issue is even Kubernetes related. This allowed me to slowly expand my familiarity with Kubernetes environments, and during my last month I even ran a seminar with two of our new hires to give a surface level tutorial with our installations and Kubernetes deployments. Aecause I was able to run a seminar for a new hires, I would certainly say I achieved my goal of becoming familiar with Kubernetes.
                </p>
                <div class="h-[200px] mx-auto md:ml-auto md:mr-0">
                  <img src="~/assets/images/Conversation.png" alt="Conversation icon" class="h-full w-fit">
                </div>
              </div>
            </div>

            <div class="section flex flex-col">
              <div class="flex flex-row w-full items-end">
                <h3>Co-op Relations</h3>
                <h4 class="mx-2">Become more involved with co-op social events</h4>
                <div class="ml-auto mr-0 border rounded-md mb-2 p-1" style="background:#006319;">
                  <p class="text-white">Outstanding</p>
                </div>
              </div>
              <hr>
              <div class="flex flex-col md:flex-row">
                <p class="md:w-[70%] mr-4">
                  After four months at Magnet I realized I had been focusing too much on maximizing my productivity during work hours, and was missing out on some great social opportunities that Magnet was providing. Magnet has a weekly meeting for co-op students to attend to relax and play games and socialize, and during my first term I was taking myself too seriously and rarely attended. This meant I missed out of meeting some awesome people and possible future connections to use in my career. For this reason, I made it a goal of mine to attend all social events presented to me (work-permitting). After attending almost all of the term's co-op meetings, I have made friends with plenty of the other co-op students and have remained in touch even after the term. Therefore I would mark this goal as an outstanding success.
                </p>
                <div class="h-[200px] mx-auto md:ml-auto md:mr-0">
                  <img src="~/assets/images/Friends.jpeg" alt="Friends icon" class="h-full w-fit">
                </div>
              </div>
            </div>

            <div class="section flex flex-col">
              <div class="flex flex-row w-full items-end">
                <h3>Business Knowledge</h3>
                <h4 class="mx-2">Gain a deeper understanding of the business aspects of software development</h4>
                <div class="ml-auto mr-0 border rounded-md mb-2 p-1" style="background:#00cc33;">
                  <p class="text-white">Success</p>
                </div>
              </div>
              <hr>
              <div class="flex flex-col md:flex-row">
                <p class="md:w-[70%] mr-4">
                  Because of my ongoing pursuit of a Minor in business, I figured during my work-term I should avoid only focusing only on the software development aspects of the team and also try and get some learnings about the business of the company. To achieve this I made it a goal of mine to make an extra effort to interact and pay close attention to my team's Product Managers. Ay paying attention to how they make decisions and set priorities for the team, I hoped to learn how software can be valued from a business perspective. Luckily for me, I had plenty of opportunities to be involved in timeline and priority discussions with our Product Managers, and even had some 1-on-1 opportunities to discuss specific feature requests with them. This allowed me to ask questions about risk management and customer relations, and give me real life experience in a highly active business environment. I never got quite comfortable enough to ask for personal discussions as I had hoped to, but because of all of the amazing interactions that I was involved in naturally with our Product Managers, I would mark this goal as a success.
                </p>
                <div class="h-[200px] mx-auto md:ml-auto md:mr-0">
                  <img src="~/assets/images/Business.jpeg" alt="Business icon" class="h-full w-fit">
                </div>
              </div>
            </div>

            <div class="section flex flex-col">
              <div class="flex flex-row w-full items-end">
                <h3>Python</h3>
                <h4 class="mx-2">Become familiar with the Python programming language</h4>
                <div class="ml-auto mr-0 border rounded-md mb-2 p-1" style="background:#006319;">
                  <p class="text-white">Outstanding</p>
                </div>
              </div>
              <hr>
              <div class="flex flex-col md:flex-row">
                <p class="md:w-[70%] mr-4">
                  During my first four months of my co-op, I worked with Python for my first time to develop load-testing tests using the Locust framework. I found the language to be pretty fun to learn, and knew with its reputation I should certainly be more comfortable with the language. Therefore, I made it a goal for my second term to learn Python through any means I could. When I originally made this goal I did it with the information that we were planning to create new deployment scripts in Python, but unfortunately that task was delegating to another team, and I didn't get the opportunity to develop it. This didn't stop my goal however, as when the code moved into code review, I gave it plenty of my attention and learned from the other developers code. On top of this, I completed two side projects using the language to give myself ample opportunity to learn it. These projects were my F1 Standings Visualizer and the yearly Advent of Code challenge (which I did in Python). After these two projects, and my learnings during my work term, I would certainly say I am familiar with the language and this goal has been achieved.
                </p>
                <div class="h-[200px] mx-auto md:ml-auto md:mr-0">
                  <img src="~/assets/images/Business.jpeg" alt="Business icon" class="h-full w-fit">
                </div>
              </div>
            </div>

            <div class="section flex flex-col">
              <div class="flex flex-row w-full items-end">
                <h3>BVT</h3>
                <h4 class="mx-2">Take on the responsibility of being a Build Verification Testing co-champion</h4>
                <div class="ml-auto mr-0 border rounded-md mb-2 p-1" style="background:#006319;">
                  <p class="text-white">Outstanding</p>
                </div>
              </div>
              <hr>
              <div class="flex flex-col md:flex-row">
                <p class="md:w-[70%] mr-4">
                  I became very interested in the responsibilities required to run a smooth BVT before a release. However, I knew that the only release left before my term was over was going to be a very important one. For this reason, I decided to take on the responsibility as a co-champion with another developer to ensure all went smoothly. This gave me an opportunity to lead the whole team to ensure all necessary behaviour is tested and all procedure is followed before a release. It was quite a stressful goal to take on, but I am so glad I gave myself the opportunity to take on such an important role during my time at Magnet.
                </p>
                <div class="h-[200px] mx-auto md:ml-auto md:mr-0">
                  <img src="~/assets/images/Business.jpeg" alt="Business icon" class="h-full w-fit">
                </div>
              </div>
            </div>

            <div class="section flex flex-col">
              <div class="flex flex-row w-full items-end">
                <h3>Personal Projects</h3>
                <h4 class="mx-2">Apply myself outside of work to enhance my portfolio</h4>
                <div class="ml-auto mr-0 border rounded-md mb-2 p-1" style="background:#006319;">
                  <p class="text-white">Outstanding</p>
                </div>
              </div>
              <hr>
              <div class="flex flex-col md:flex-row">
                <p class="md:w-[70%] mr-4">
                  As my co-op term came closer to its end, I realized I had learned so much but didn't apply my learnings to any projects for my portfolio. Because of this, I made it a goal to apply learnings from work hours into personal projects during my leisure time. This gave me opportunity to develop projects in Python, React.js, Bash, and C that I can add to my portfolio to show future employers. I ended up developing a F1 Standings Visualizer in Python, this whole website in React.js and Tailwind, some helper scripts for both projects in Bash, a Roulette simulator for a roommate of mine in C, and a hangman game in C as well. Of course I always will wish I had completed even more projects, but I am very happy with what resulted from this goal and would mark it as a great success.
                </p>
                <div class="h-[200px] mx-auto md:ml-auto md:mr-0">
                  <img src="~/assets/images/Business.jpeg" alt="Business icon" class="h-full w-fit">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </NuxtLayout>
</template>

<script>
import MagnetLogo from '~/assets/images/Magnet-Logo.png';

export default defineNuxtComponent({
  name: 'MagnetPage',

  data() {
    return {
      MagnetLogo,
    }
  },

  head() {
    return {
      title: 'Magnet Forensics Co-op Report',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Magnet Forensics Co-op Report',
        },
      ],
    };
  },
});
</script>

<style scoped>
.report img {
  height: auto;
  margin: 0 auto;
  display: block;
  max-width: 500px;
  max-height: 150px;
  object-fit: contain;
  object-position: center;
  background-color: white;
}

.report a {
  color: #99b3ff;
  text-decoration: underline;
  font-weight: bold;
}

p {
  margin-bottom: 1.5rem;
}

.goals p {
  margin-bottom: 0;
}

.nav-active {
  color: #99b3ff;
  font-weight: bold;
}

.nav-active:after {
  content: " —";
}
</style>
