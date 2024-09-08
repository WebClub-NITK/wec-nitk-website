# (An attempt at writing) A beginners guide to Systems

## A Foreword

Systems(and most engineering in general) can involve two things : 
1. Remove the various layers of abstractions in modern computer science, and study one or more layer(s) of abstraction
2. Create abstractions to manage lower level things and make them simple.
3. Create something completely new to solve problems.

Providing a roadmap for systems is a daunting task. It is mostly driven by ***enthusiasm*** (we are Web Enthusiasts' Club after all!) , curiosity, interest and a spirit of learning. Below are some thought processes which demonstrate what we are trying to say.

> I wrote a simple GUI application in python --> How does my computer actually draw all those elements?? --> Window managers and computer graphics --> ∞

> I program in C --> I use a compiler to compile my code and generate some output file which magically runs --> How to compilers work?? --> ∞

> I wrote a simple full stack web application and have deployed it on an AWS instance --> What can the cloud do and how does it work? --> ∞

> I program in C --> Compilers convert my code into instructions which are run on my processor --> How does that processor work?? --> ∞

> I program in C --> After compiling, all i have to do is run the program and somehow magically it runs alongside hundreds of other programs --> My operating system is managing this --> How do Operating systems work?? (Linux better) --> ∞

> I wrote a simple full stack web application and have deployed it on a service like Vercel --> How do such services work?? DevOps?? --> ∞

> I wrote a full stack web application and have deployed it on AWS, and now thousands of people want to access it. It has crashed --> How do I scale things?? --> ∞

> I wrote a full stack web application and have deployed it on Vercel --> How are computers around the world able to communicate with the server --> Networking concepts?? --> ∞

> I wrote a full stack web application but I see all these terms like SSL, TLS, certificates --> Cryptography and its Math --> ∞

> I want to create, maintain, package, deploy, run and monitor a big software stack (like IRIS) --> What are the best practices and how do I do this?? --> System design, Distributed systems and DevOps --> ∞ 

> I want to create a decentralised system of giving rent contracts to tenants, where the contract is triggered only if they pay me --> Smart contracts and Blockchain?? --> ∞

> I am curious about how hackers exploit systems and write malicious code --> InfoSec --> ∞

All this may seem daunting, but remember, [you are NOT dumb, you just lack the prerequisites](https://lelouch.dev/blog/you-are-probably-not-dumb/)

Below is our attempt at a roadmap. This will be constantly updated, so definitely bookmark this page!



## Operating systems 
| Resource                                | Description                                                                                                                                                   | Links                                      |
|--------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| **Dinosaur Book of OS by Silberschatz et al.**                             | Absolute classic book, easily available as a PDF. They also have helpful slides.                                | https://www.os-book.com//OS10/index.html                    |
| **Modern Operating Systems by Andrew Taenbaum**                              | Another classic book.                                        | Easily available online as a PDF |
| **MIT's 6.004 OS course**                      | Thorough and in depth.                                                                 | https://www.youtube.com/@silvinahanonowachman3310/videos      |
| **Operating systems - Three easy pieces**                       | Easy to follow and simple. They use a toy OS called XV6(originally developed by MIT and intended to teach students)                                                                                                   | ostep.org        |
| **CS162 by UC Berkeley**                 | Similar to the MIT course. Rigorous.                                                                                     | https://www.youtube.com/playlist?list=PLF2K2xZjNEf97A_uBCwEl61sdxWVP7VWC                         |
| **CS377 by UMass** | Excellent course, with slides and lab material.                       | https://www.youtube.com/playlist?list=PLacuG5pysFbDQU8kKxbUh4K5c1iL5_k7k, material at : https://none.cs.umass.edu/~shenoy/courses/fall14/ |
| **Computer Systms From a Programmers perspective** | great book covering a wide variety of topics, not only limited to OS.                       | https://www.cs.sfu.ca/~ashriram/Courses/CS295/assets/books/CSAPP_2016.pdf
| **The little book about OS development** | Slightly advanced, but a great intro into writing kernels.                       | https://ordoflammae.github.io/littleosbook/
| **Think OS A Brief Introduction to Operating Systems** | Short book of around 100pgs. Might need some side quest learning but great nonetheless.                       | https://greenteapress.com/thinkos/ , book here : https://greenteapress.com/thinkos/thinkos.pdf


General advice : Always good to have a solid understanding of operating systems and Linux in particular

## Blockchain

| **Resource**                                  | **Description**                                                                                                                                                     | **Links**                                      |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| **Learn to Become a Blockchain Developer**     | A great guide from roadmaps.sh               |https://roadmap.sh/blockchain
| Learn Hub from ethereum.org                  | Official Ethereum resource hub with tutorials, documentation, and guides on developing decentralized applications (dApps) on the Ethereum platform.                 | https://ethereum.org/en/learn/ |
| **A Curated List of Awesome Ethereum Resources** | Excellent Github repo           | https://github.com/ethereum/awesome-ethereum                     |



## Compilers and Compiler Design

| Resource                                               | Description                                                                                          | Links                                                        |
|--------------------------------------------------------|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| **Engineering a Compiler (Cooper and Torczon)**       | Start with this!                                                                                     | PDF easily available online!                                      |
| **The Dragon Book**                                  | A large portion is dedicated to lexing and parsing; chapters on optimization are great.              | PDF easily available online!                                        |
| **Introduction to Compilers (Prof. Alex Aiken)**      | Stanford course; available online or the first few videos on YouTube.                                | https://online.stanford.edu/courses/soe-ycscs1-compilers                                  |
| **Great playlists by Prof. Sorav Bansal**              | Especially on compiler optimizations.                                                                 | https://youtube.com/@compilerai7818?si=Rg_TMK7UkvXbwqTa  |
| **Crafting Interpreters**                             | Hands-on and interactive approach to learning about interpreters.                                     | https://craftinginterpreters.com/                            |
| **GodBolt and DogBolt**                               | Tools to play around with code and compilation.                                                      | https://godbolt.org/ and https://dogbolt.org/               |
| **Learn LLVM 17, Kwan and Nacke**                     | Useful if exploring LLVM.                                                                           |                                       |


*Some suggestions:*   
- (Not strictly required) Would be great to go through a Theory of Computation course before deeply delving into resources (MITOCW has a great course!)
- (Kind of required for better understanding) Would be helpful to have basic knowledge of Abstract Algebra (Groups, Lattices, etc…) before delving into compiler optimizations - Side note: Required in cryptography too!


## Parallel Computing

***Some prerequisites*** : Computer architechture and some hands on experience in writing parallel code.

| **Resource**                                | **Description**                                                                                                                                                  | **Links**                                      |
|-------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| **Programming Massively Parallel Processors: A Hands-On Approach, 4th ed** | An in-depth guide to programming parallel processors like GPUs using CUDA, with practical hands-on examples and exercises. Ideal for learning parallel computing. | Easily available online as a PDF               |




## Networking

| Resource                                               | Description                                                                                      | Links                                                   |
|--------------------------------------------------------|--------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| **PowerCert videos**                                 | Great introductory channel with visualizations.                                                  | https://www.youtube.com/@PowerCertAnimatedVideos/featured |
| **Jeremy's IT lab**                                  | Great teacher for networking concepts.                                                            | https://www.youtube.com/@JeremysITLab/videos             |
| **Practical Networking**                             | Great channel to understand topics quickly with short intros.                                    | https://www.youtube.com/@PracticalNetworking/videos     |
| **Beej's guide to Network concepts**                  | Excellent resource to go from beginner to advanced in networking.                                 | https://beej.us/guide/bgnet0/                            |
| **Beej's guide to Network programming**               | Comprehensive guide to network programming.                                                       | https://beej.us/guide/bgnet/                             |
| **Mohit sir's classes**                              |  Amazing classes!                                                                                                |                                    |


## Cryptography
| Resource                                               | Description                                                                                         | Links                                                   |
|--------------------------------------------------------|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| **Introduction to Cryptography by Christof Paar**     | Unparalleled quality; considered the best resource by far.                                         | https://www.youtube.com/@introductiontocryptography4223/videos |
| **Crypto hands-on exercises**                         | Understand crypto by doing hands-on exercises.                                                     | https://cryptopals.com/ and https://cryptohack.org/      |
| **Crypto101**                                         | A great book with practical discussions on key exchanges and crypto ecosystems such as SSL and TLS. | https://www.crypto101.io/                              |


## Wireless Networks

| **Module**                                | **Description**                                                                                                                                                  |
|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1. Introduction to Wireless Networking** | - **Regulatory Organizations**: Learn about global regulatory bodies like the FCC, ITU-R, IETF, ISOC, and their roles in defining wireless communication standards.<br>- **Wi-Fi Alliance and IEEE**: Understand the contributions of the Wi-Fi Alliance and IEEE in developing Wi-Fi standards and protocols. |
| **2. Communication and RF Basics**        | - **Carrier Signals and Communication Fundamentals**: Study the basics of carrier signals and RF communication, including modulation, transmission, and reception techniques.<br>- **Understanding RF Signals**: Dive into the characteristics of RF signals such as wavelength, frequency, amplitude, and phase.<br>- **RF Behaviors**: Explore RF signal interactions like absorption, reflection, refraction, diffraction, attenuation, and multipath effects. |
| **3. RF Components and Power Measurement** | - **RF Components**: Learn about transmitters, receivers, antennas, and intentional radiators.<br>- **Power Measurement**: Understand power units like watts, dB, dBi, and dBm, and the rules of 10s and 3s for calculating power levels. |
| **4. Antenna Types and Characteristics**  | - **Different Types of Antennas**: Study omnidirectional, semidirectional, patch, planar, Yagi, and highly directional antennas.<br>- **Advanced Antenna Concepts**: Learn about antenna arrays, beamforming, MIMO, polarization, and diversity for optimizing signal coverage. |
| **5. Antenna Performance and Beamforming** | - **Azimuth and Elevation Charts**: Analyze antenna radiation patterns with azimuth and elevation charts.<br>- **Beamforming Techniques**: Understand static and dynamic beamforming and transmit beamforming for signal quality improvement. |
| **6. IEEE 802.11 Standards**              | - **802.11 Evolution**: Learn about IEEE 802.11 standards (802.11a/b/g/n/ac) and their amendments like 802.11i, 802.11r, and 802.11w.<br>- **Spread Spectrum Technologies**: Study FHSS, DSSS, and OFDM technologies and their impact on Wi-Fi performance. |
| **7. Wi-Fi Spectrum and Channels**        | - **Frequency Bands**: Explore frequency bands used in Wi-Fi (900 MHz, 2.4 GHz, 5 GHz, 60 GHz) and their channels.<br>- **Channel Management**: Learn to manage adjacent, non-adjacent, and overlapping channels to optimize throughput. |
| **8. Wireless Networking Topologies**     | - **WLAN Topologies**: Study WLAN, WWAN, WMAN, and WPAN topologies.<br>- **802.11 Network Architectures**: Learn about Basic Service Sets (BSS), Extended Service Sets (ESS), Mesh BSS, and the roles of access points and client stations. |
| **9. Wi-Fi Access Methods and MAC Architecture** | - **CSMA/CA vs. CSMA/CD**: Understand these channel access mechanisms and their relevance.<br>- **MAC Layer Details**: Dive into MAC architecture, packet structures, frame types, and subtypes. |
| **10. WLAN Deployment Models**            | - **WLAN Architectures**: Learn about autonomous, centralized, and cloud-based WLAN architectures.<br>- **WLAN Controller Functions**: Understand WLAN controllers (WLCs) and their roles in managing data, control, and management planes. |
| **11. Deployment Considerations and Best Practices** | - **WLAN Deployment Scenarios**: Study deployment for corporate, educational, healthcare, and public hotspot environments.<br>- **Real-Time Location Services (RTLS)**: Learn about RTLS for asset tracking and location services. |
| **12. Wi-Fi Troubleshooting Techniques**  | - **Common Troubleshooting Scenarios**: Learn techniques for addressing RF interference, poor coverage, and capacity vs. coverage trade-offs.<br>- **Advanced Troubleshooting**: Explore Layer 2 retransmissions, RF interference sources, and environmental factors. |
| **13. Wi-Fi Security Fundamentals**       | - **Security Standards**: Understand WEP, WPA, WPA2, and WPA3 standards and their impact.<br>- **Robust Security Practices**: Learn about security protocols and policies to protect wireless networks from attacks. |
| **14. Types of Wireless Attacks**         | - **Common Wireless Attacks**: Study attacks like eavesdropping, rogue access points, and denial of service (DoS).<br>- **Mitigation Techniques**: Learn how to detect and mitigate wireless attacks. |
| **15. Conducting Site Surveys**           | - **WLAN Site Surveys**: Understand site surveys, tools, and techniques for coverage, capacity, and interference assessment.<br>- **Survey Tools and Documentation**: Learn about indoor and outdoor survey tools and creating detailed documentation. |
| **16. Power over Ethernet (PoE) for WLANs** | - **PoE Standards and Applications**: Understand PoE standards (802.3af, 802.3at) and their role in powering access points and devices. |
| **17. High Throughput (HT) and Very High Throughput (VHT)** | - **802.11n and 802.11ac Technologies**: Study MIMO, beamforming, channel bonding, and advanced modulation introduced by these standards. |
| **18. Managing Mobile Devices in WLANs**  | - **BYOD Policies**: Learn about managing personal and corporate devices in wireless environments.<br>- **Guest Access Management**: Understand how to securely set up and manage guest access. |



## DevOps
The DevOps roadmap is designed to take you from the foundational concepts to advanced topics.


| **Topic**                                | **Description**                                                                                                                                                  |
|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1. Introduction to DevOps**             | - **Overview of DevOps**: Learn the core principles, culture, and benefits of DevOps.<br>- **DevOps Lifecycle**: Understand the key stages, including continuous integration (CI), continuous delivery (CD), and continuous deployment. |
| **2. Fundamentals of Operating Systems and Virtualization** | - **Operating Systems**: Introduction to operating systems, focusing on Linux.<br>- **Virtualization**: Understand the concepts of virtualization and virtual machines.<br>- **Setting Up a Linux VM**: Learn to set up a Linux virtual machine and explore the Linux file system.<br>- **Command Line Interface (CLI) Basics**: Master essential Linux commands, package managers, and text editors like Vim. |
| **3. Command Line and Scripting**         | - **Basic and Advanced Linux Commands**: Learn commands for file management, networking, and process management.<br>- **Shell Scripting**: Develop scripts to automate tasks, manage environment variables, and handle complex operations. |
| **4. Networking and Security**            | - **Networking Basics**: Understand fundamental networking concepts, including SSH for secure remote connections.<br>- **User and Permissions Management**: Learn to manage Linux users, groups, and permissions for secure access control. |
| **5. Version Control with Git**           | - **Introduction to Git**: Start with basic concepts like repositories, commits, and branches.<br>- **Advanced Git Techniques**: Explore rebasing, merge requests, resolving conflicts, and using `.gitignore`.<br>- **Using Git for DevOps**: Understand Git's integration with CI/CD workflows. |
| **6. Infrastructure as Code (IaC)**       | - **Introduction to Build Tools**: Learn about tools for compiling, packaging, and deploying applications.<br>- **Artifact Management**: Learn to manage build artifacts with tools like Nexus.<br>- **Introduction to Containers**: Understand containers and Docker basics. |
| **7. Docker and Containerization**        | - **Docker Fundamentals**: Learn Docker architecture, commands, and how to create Docker images.<br>- **Docker Compose**: Manage multi-container applications with Docker Compose.<br>- **Advanced Docker**: Explore debugging, best practices, and managing Docker repositories. |
| **8. Kubernetes for Container Orchestration** | - **Kubernetes Overview**: Learn Kubernetes architecture, components, and deployment models.<br>- **Kubernetes Operations**: Master `kubectl` commands, YAML configuration, and application deployment in a Kubernetes cluster.<br>- **Advanced Kubernetes Topics**: Understand namespaces, services, Ingress, volumes, ConfigMaps, Secrets, StatefulSets, and Helm. |
| **9. CI/CD with Jenkins**                 | - **Introduction to Jenkins**: Learn Jenkins setup, interface, and job types (freestyle, pipeline).<br>- **Pipeline as Code**: Define build pipelines using Jenkinsfiles.<br>- **Integrating Docker and Kubernetes with Jenkins**: Use Jenkins for deploying Docker containers and Kubernetes applications. |
| **10. Cloud Infrastructure and Automation** | - **AWS Cloud Services**: Understand AWS services like EC2, IAM, and VPC.<br>- **Cloud-Native Deployments**: Learn to deploy applications to the cloud with tools like Terraform. |
| **11. Microservices and Kubernetes**      | - **Introduction to Microservices**: Learn microservices architecture and its advantages.<br>- **Deploying Microservices in Kubernetes**: Use Kubernetes for managing and scaling microservices.<br>- **Helm for Kubernetes**: Learn to use Helm for deploying applications. |
| **12. Monitoring and Observability**      | - **Prometheus and Grafana**: Learn about Prometheus for monitoring, Grafana for visualization, and creating alert rules.<br>- **Alertmanager**: Configure Alertmanager for notifications. |
| **13. Data Management in DevOps**         | - **Database Types and Management**: Understand database roles and their integration in CI/CD pipelines.<br>- **Artifact Repositories**: Manage build artifacts using repository managers like Nexus. |
| **14. Infrastructure Automation with Terraform** | - **Terraform Basics**: Learn to use Terraform for infrastructure provisioning.<br>- **Advanced Terraform**: Study modules, remote state management, and integration with CI/CD pipelines. |
| **15. Configuration Management with Ansible** | - **Ansible Basics**: Learn the basics of Ansible playbooks, modules, and ad-hoc commands.<br>- **Advanced Ansible Practices**: Automate infrastructure tasks with dynamic inventory and reusable roles. |
| **16. Python for DevOps Automation**      | - **Python Basics**: Learn Python fundamentals for scripting and automation.<br>- **Python with AWS (Boto3)**: Manage AWS resources with the Boto3 library.<br>- **Advanced Python Scripting**: Develop scripts for automation, monitoring, and data management. |
| **17. Cloud-Native Services and Microservices** | - **AWS and EKS**: Learn to manage Kubernetes clusters with AWS services like EKS.<br>- **Deploying to the Cloud**: Deploy applications using CI/CD pipelines with Docker and Kubernetes. |
| **18. Terraform and Cloud Management**    | - **Automating Infrastructure Provisioning**: Use Terraform to automate cloud resource provisioning.<br>- **Terraform Best Practices**: Understand best practices for infrastructure as code. |
| **19. Additional DevOps Tools**           | - **Monitoring and Alerting**: Use Prometheus, Grafana, and Alertmanager for monitoring.<br>- **Log Management**: Implement logging best practices and manage logs across services. |


## Security

Be on the lookout over this space 👀👀👀


### Final thoughts

Do ***YOU*** have any good resources you want to share with us? Reach out to the Web Enthusiasts' Club core team, we will consider your suggestion!

