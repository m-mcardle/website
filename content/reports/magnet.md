---
title: "Magnet Forensics Co-op Report"
company: "Magnet Forensics"
role: "Software Developer (Co-op)"
period: "May 2021 - December 2021"
description: "Matt McArdle's co-op work term report for his role at Magnet Forensics in 2021."
image: "/assets/images/Magnet-Logo.png"
---

### Welcome!

My name is Matthew McArdle and I am a Software Engineering Student at the University of Guelph. On this page I will be going into great detail about my first co-op placement during my time at the amazing Waterloo company Magnet Forensics. I hope by the end of this you get a good idea about all the awesome experiences I had during my time at Magnet, and are as blown away as I am about how many different things I had the opportunity to learn.

![Magnet Forensics logo](https://www.cbj.ca/wp-content/uploads/2015/11/Magnet-Forensics-logo.jpg)

### About Magnet Forensics
[Magnet Forensics](https://www.magnetforensics.com/) is a Waterloo-based company that develops tools used primarily by law enforcement or private investigators to uncover digital evidence left on suspects' or victims' devices. I joined Magnet in May of 2021, which just so happened to be at a very exciting time for the company. On April 28th they became the first Waterloo company to have an IPO in 15 years.

![Magnet Forensics office building](https://pbs.twimg.com/media/ESqrDEGXQAEy9E3.jpg)

### AXIOM
Their flagship product is [Magnet AXIOM](https://www.magnetforensics.com/products/magnet-axiom/), the desktop tool used to uncover and examine digital evidence from mobile, computer, or cloud sources. Many different teams work together to develop AXIOM. For example, there is a dedicated team to parse/extract artifacts (digital evidence that may come in many formats, ex: Skype Call Metadata), and another team to develop EXAMINE, the interface used to analyze and build cases from the data extracted.

![Axiom logo](https://cdn.shopify.com/s/files/1/0193/5740/1187/products/mockup-d573f12d_345x345@2x.png?v=1600110362)

### MDIS
While Magnet AXIOM certainly is the company's most successful product, there are some super exciting innovations earlier in their product lifecycle that are rapidly growing in popularity. The most mature of these innovations come as a trio of products that are marketed together as a part of the Magnet Digital Investigation Suite (MDIS). These three tools are [Magnet AUTOMATE](https://www.magnetforensics.com/products/magnet-automate/) which automates workflows that forensic examiners might otherwise have to perform manually, [Magnet ATLAS](https://www.magnetforensics.com/products/magnet-atlas/) which provides collaborative and case management tools for investigators, and [Magnet REVIEW](https://www.magnetforensics.com/products/magnet-review/) which is a web application to enable non-technical examiners to review evidence and build cases remotely while interacting with a more user-friendly interface than more forensically intensive products such as AXIOM. Magnet REVIEW ended up being the team I joined for my co-op term and I will go into far more detail later on.

![Magnet Digital Investigation Suite graphic](https://www.forensicfocus.com/stable/wp-content/uploads/2022/04/2022-04-14_625885cb011ea_MF_MDIS_Feb2022_TwLiFb_1200x675.png)

### Guest Speakers
One thing that I really came to appreciate about Magnet is its policy at each all-hands meetings to have a guest speaker from the field talk about their real-life experiences involving digital forensics. They would go over case after case of crimes that seemed straight out of a TV show, and hearing about the impact that Magnet was able to make on these cases was so powerful. When the stakes involve justice for the innocent it cannot be stressed enough how motivating it is to come into work with the right attitude and work ethic. I found it amazing how inspiring these detectives were. They were the real heros so to hear them talk about Magnet's products in such a good light made me so proud to be there (even as a co-op). During my time here we got the chance to hear from guest speakers from Nashville, Scotland, and even Germany. Each speaker came with their own amazing stories about how real crimes were solved using the tools that Magnet has provided.

![Metro Nashville Police badge](https://upload.wikimedia.org/wikipedia/commons/5/57/Metro_Nashville_Police_Patch.png)
![Scotland Police logo](https://www.largsandmillportnews.com/resources/images/4405837/)

### My Team
As mentioned before I joined the Magnet REVIEW team. More specially I originally joined the Taco sub-team which specializes in deployment and infrastructure primarily. This came as very exciting but terrifying news to know I would be surrounded by super cool tech which I unfortunately had little to no experience with. I knew that this term would certainly give me more than enough opportunities to try out new technologies and immediately knew I was on a team that was more than happy to help me learn. I want to take some time now to go over some important themes/tasks I performed during my time at Magnet to demonstrate some of the awesome opportunities I had to learn.

![Kubernetes logo](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png)
![AWS logo](https://www.zencos.com/wp-content/uploads/2021/11/aws-logo.png)

### Bash Installer
During the early days of my term I found myself working quite frequently on our product's installer. It was written in Bash which I had some experience with during University, so I found it far more approachable than other parts of the product. I started off with small little quality of life improvements such as changing the name of the installer's folder from dist to review-VERSION, and slowly built up to adding configuration options into the installer such as allowing them to configure their company's logo that gets uploaded for use in the front-end.

![Bash logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/1200px-Bash_Logo_Colored.svg.png)

### Jenkins Automation / Azure CLI
The next phase of my co-op involved entering the world of Jenkins. For the unfamiliar, Jenkins is a pipeline based automation and continuous integration tool to build, test, and deploy our product. I first worked on a ticket to address an issue that I saw arising involving what I would call orphaned clusters. There seemed to be an issue where one of our build jobs would be triggered to spin up an instance of our product to do some testing on, but after the testing was completed, the cluster was not being torn down. This can be quite a problem when these clusters can cost over $2000 a month. I decided to familiarize myself with the Jenkins pipeline used to build these clusters and the Azure CLI to interact with the resources being created. I ended up using Jenkins environment variables to determine who kicked off the job and then the Azure CLI to automatically tag the resources with the name of the person who started the build in order to maintain responsibility for the clusters. Because of this, it is now far easier to clean up these clusters and save ourselves from spending $2000 a month on a cluster we weren't even using.

![Jenkins logo](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png)
![Microsoft Azure logo](https://swimburger.net/media/ppnn3pcl/azure.png)

### C# (CLI XML Parsing)
My next (and probably my favourite) project of my co-op involved pair-programming with another developer on the team to develop new parsers for our CLI. For context, our CLI is used to ingest evidence into REVIEW by parsing either JSON or XML files and extracting the needed information from elements to populate models used in REVIEW. Specifically we were tasked with supporting one of our competitor's data formats which came as an XML export. I should probably add that this was my first major involvement with one of our C# services, so this was an amazing learning experience for myself. This also was about the time where I really felt myself being able to contribute meaningfully to design discussions as I became more comfortable and familiar with our CLI's infrastructure. I remember this so fondly because it felt amazing to contribute to a customer requested Epic in such a meaningful way. It also was so enjoyable to work alongside such an amazing mentor who was so open to collaborate. I think I owe a lot of my growth during my co-op to Christian for being such a great mentor during the work on the project, and it remains one of my most fond memories during my work term.

![C# logo](https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png)

### React.js Front-End Development
During the back half of my co-op there arose a concern about a large release we were supposed to deliver. However, it just so happened to involve almost entirely front-end and minor application level changes. This meant my Taco sub-team had very few priority items to deliver for this specific release. For this reason we came to the decision that it might be beneficial for me to switch over to the other sub-team (aka the Gadgeteers) to lend a hand. This gave me an amazing opportunity to get experience with front-end development. I learned how to develop using component driven design in React.js and found it super cool to work with one of these powerful frameworks. I also got experience with developing packages as we have an internal npm library which I had to work on. This gave me experience working with the Bootstrap library as our main packages are built on top of it.

![React logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png)

### Refactoring a Microservice
When nearing the end of my co-op I discovered some inflexibility in one of our microservices when I was working on what should have been a small fix. I brought this to the attention of one of the team's Senior Developers, Rob. To my amazement, he suggested I should take on the tall task of refactoring the problematic areas of the microservice. He explained that it had become a bit of a mess due to some bad practices sneaking their way into production. For the next few weeks I took on this super exciting project, with Rob acting as somewhat of a project manager/mentor for concerns and questions I had while working on it. Through this experience I learned many fascinating concepts involving code completeness and best practices. I also of course learned the methodology involved with refactoring production code. I developed whitebox tests, blackbox tests, learned about what makes code hard to maintain, learned concepts of how to keep code flexible, and learned so much about how to not just write functional code, but maintainable and extendable code.


![Refactoring icon](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLBkCHXoIcNq_JT6Wbos32LIzIEjvtVE68_iLDTqeZhv_5m1Rc)


### Kudos

I want to close this page out by giving out some much deserved credit to those who helped me during my term. I first would like the REVIEW team as a whole for how amazing of an environment it was to join. Everyone on the team was always so willing to collaborate and help me learn, and this made REVIEW such a pleasure to be a part of. However, there are three individuals I would like to specifically acknowledge for all the above and beyond support they gave me over the past eight months.

<br/>

First and foremost, I need to extend a huge thank you to my co-op advisor at Magnet, [Chris Chevreau](https://www.linkedin.com/in/chris-chevreau-8b596b239/). As my supervisor he was my go-to guy for any issues or support I needed during my time there. He was always happy to help and kept me on the right track whenever I started to get lost. Not only did he offer his own support, he also always made an effort to direct me to the person or resources that might answer some questions I've had. As someone who was new to almost everything during my co-op, having someone point me in the right direction to even figure out where I can learn was so beneficial. He also gave me the feedback I needed to achieve my goals and grow to my full potential during my time there. I owe so much to Chris for how well I was able to integrate into the Magnet REVIEW team.

<br/>

Next I would like to extend another huge thank you to [Christian Cornelis](https://www.linkedin.com/in/christiancornelis/) for his awesome collaborative spirit and his teachings during work we completed together during our parsing epic. I have him to thank for so much of my technical learnings as he ramped me up in C#, unit tests, microservices, and all of our parsing infrastructure. He not only was a great mentor, he was also an absolute pleasure to work with as he always had a great attitude and always maintained a upbeat spirit.

<br/>

I also need to extend a huge thank you to [Robert Nelson](https://www.linkedin.com/in/robert-nelson-0936542a/), one of the Senior Developers on the Taco team. I remember during my very first week he stayed on a call with me until 7pm just happily answering all my never-ending questions about all the new things I saw during my first few days. As our resident expert on our Kubernetes infrastructure, he was a crucial resource for me as started my co-op without ever even hearing about Kubernetes. Even after eight months working with Rob, I'm still convinced hes some sort of software developing wizard as he had just a mind boggling amount of knowledge available. Rob was an amazing resource but an even more amazing mentor, and I am so grateful that I got the privilege to work alongside him.

<br/>

I seriously cannot stress enough how amazing the people were during my time at Magnet. I was blown away each and every day with their willingness to collaborate and educate, and maintain a super fun environment to work in as well. For a first co-op experience, I cannot imagine anything better and I am so grateful I got the opportunity to work with such amazing people.

### Conclusion

Overall my co-op term was an absolutely amazing experience and I am so grateful for all the opportunities to learn from such intelligent and passionate people. I am also super grateful that I got experience with so many fascinating and powerful technologies during my time there such as Jenkins, AWS, Grafana, Gerrit, Locust, ElasticSearch, Python, Kubernetes, Azure, Docker, C#, Bootstrap, React.js, and Bash. For my first co-op opportunity, I could never have imagined it being so successful and enjoyable, and it has made me even more excited about my future career.
