# (An attempt at writing) A Beginner Guide to Systems

## A Foreword

Systems(and most engineering in general) can involve two things : 
1. Remove the various layers of abstractions in modern computer science, and study one or more layer(s) of abstraction
2. Create abstractions to manage lower level things and make them simple.
3. Create something completely new to solve problems.

Providing a roadmap for systems is a very daunting task. It is mostly driven by **enthusiasm** (we are Web Enthusiasts' Club after all!) , curiosity, interest and a spirit of learning. Below are some thought processes which demonstrate what we are trying to say.

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


Here's a tabular format for all the sections:

---

### Operating Systems:

| Resource                                | Description                                                                                                                                                   | Links                                      |
|--------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| **Dinosaur Book of OS by Silberschatz et al.**                             | Absolute classic book, easily available as a PDF. They also have helpful slides.                                | [OS Book](https://www.os-book.com//OS10/index.html)                    |
| **Modern Operating Systems by Andrew Tanenbaum**                              | Another classic book.                                        | Easily available online as a PDF |
| **MIT's 6.004 OS course**                      | Thorough and in-depth.                                                                 | [MIT OS Course](https://www.youtube.com/@silvinahanonowachman3310/videos)      |
| **Operating Systems - Three Easy Pieces**                       | Easy to follow and simple. They use a toy OS called XV6 (originally developed by MIT and intended to teach students).                                                                                                   | [OSTEP](https://ostep.org)        |
| **CS162 by UC Berkeley**                 | Similar to the MIT course. Rigorous.                                                                                     | [CS162 Playlist](https://www.youtube.com/playlist?list=PLF2K2xZjNEf97A_uBCwEl61sdxWVP7VWC)                         |
| **CS377 by UMass** | Excellent course, with slides and lab material.                       | [CS377 Playlist](https://www.youtube.com/playlist?list=PLacuG5pysFbDQU8kKxbUh4K5c1iL5_k7k), [Material](https://none.cs.umass.edu/~shenoy/courses/fall14/) |
| **Computer Systems From a Programmer's Perspective** | Great book covering a wide variety of topics, not only limited to OS.                       | [CSAPP 2016 PDF](https://www.cs.sfu.ca/~ashriram/Courses/CS295/assets/books/CSAPP_2016.pdf) |
| **The Little Book about OS Development** | Slightly advanced, but a great intro into writing kernels.                       | [Little OS Book](https://ordoflammae.github.io/littleosbook/) |
| **Think OS: A Brief Introduction to Operating Systems** | Short book (~100 pgs). Might need some side-quest learning but great nonetheless.                       | [Think OS](https://greenteapress.com/thinkos/), [Book](https://greenteapress.com/thinkos/thinkos.pdf) |

---

### Networking:

| Resource                          | Description                                                         | Links                                                                                 |
|-----------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| **PowerCert Videos**              | Great introductory channel with visualizations.                     | [PowerCert Videos](https://www.youtube.com/@PowerCertAnimatedVideos/featured)         |
| **Jeremy's IT Lab**               | Great teacher.                                                      | [Jeremy's IT Lab](https://www.youtube.com/@JeremysITLab/videos)                       |
| **Practical Networking**          | Quick understanding of networking concepts.                         | [Practical Networking](https://www.youtube.com/@PracticalNetworking/videos)           |
| **Beej's Guide to Network Concepts** | From beginner to advanced networking.                                | [Beej's Guide](https://beej.us/guide/bgnet0/)                                         |
| **Beej's Guide to Network Programming** | Detailed guide to network programming.                              | [Beej's Programming Guide](https://beej.us/guide/bgnet/)                              |
| **Mohit Sir's Classes**           | Instructor-led classes.                                             | N/A                                                                                   |

---

### Distributed Systems:

| Resource                              | Description                                                         | Links                                                                                 |
|---------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| **Awesome Distributed Systems Repo**  | Collection of distributed systems resources.                        | [GitHub Repo](https://github.com/theanalyst/awesome-distributed-systems)              |
| **MIT's 6.824 Playlist**              | Distributed Systems course by MIT.                                  | [MIT 6.824 Playlist](https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB) |
| **Distributed Systems Reading Group** | Reading group from MIT focused on distributed systems papers.       | [Distributed Systems Reading Group](https://dsrg.pdos.csail.mit.edu/papers/)          |
| **Data-Intensive Systems**            | Comprehensive book on distributed systems.                          | [Data-Intensive Systems](https://dataintensive.net/)                                  |

---

### Cryptography:

| Resource                                        | Description                                                                 | Links                                                                                 |
|-------------------------------------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| **Introduction to Cryptography by Christof Paar** | Best cryptography resource with clear explanations.                         | [Introduction to Cryptography](https://www.youtube.com/@introductiontocryptography4223/videos) |
| **Cryptopals & Cryptohack**                      | Hands-on exercises to understand cryptography.                              | [Cryptopals](https://cryptopals.com/), [Cryptohack](https://cryptohack.org/)          |
| **Crypto101**                                    | Practical book discussing key exchanges and crypto ecosystems.              | [Crypto101](https://www.crypto101.io/)                                                |

---

### Compilers:

| Resource                               | Description                                                             | Links                                                                                 |
|----------------------------------------|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| **Engineering a Compiler (Cooper & Torczon)** | A solid introduction to compiler design.                                 | N/A                                                                                   |
| **The Dragon Book**                    | Covers lexing, parsing, and optimization techniques.                     | N/A                                                                                   |
| **Introduction to Compilers (Prof. Alex Aiken)** | Stanford's course on compilers, available online.                         | N/A                                                                                   |
| **Compiler Optimizations by Prof. Sorav Bansal** | Great playlists focused on compiler optimizations.                       | [Compiler Optimizations](https://youtube.com/@compilerai7818?si=Rg_TMK7UkvXbwqTa)     |
| **Crafting Interpreters**              | Interactive, hands-on guide to interpreters and compilers.               | [Crafting Interpreters](https://craftinginterpreters.com/)                            |
| **GodBolt & DogBolt**                  | Play around with code and compilation.                                   | [GodBolt](https://godbolt.org/), [DogBolt](https://dogbolt.org/)                      |
| **Learn LLVM 17, Kwan & Nacke**        | For those exploring LLVM compiler infrastructure.                        | N/A                                                                                   |

---

### Parallel Computing:

| Resource                                               | Description                                                    | Links                           |
|--------------------------------------------------------|----------------------------------------------------------------|---------------------------------|
| **Programming Massively Parallel Processors**          | A hands-on approach to parallel computing, 4th edition.         | N/A                             |

---

### Blockchain:

| Resource                                            | Description                                                             | Links                                                                           |
|-----------------------------------------------------|-------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| **Learn Blockchain Developer Skills**               | Roadmap for becoming a blockchain developer.                             | [Roadmap](https://roadmap.sh/blockchain)                                        |
| **Ethereum.org Learn Hub**                          | Learning resources from Ethereum.org.                                    | [Ethereum Learn Hub](https://ethereum.org/en/learn/)                            |
| **Awesome Ethereum Resources**                      | Curated list of Ethereum resources.                                      | [Awesome Ethereum](https://github.com/ttumiel/Awesome-Ethereum)                 |

---

### Suggestions:

| Topic                          | Description                                                  | Links                                                                           |
|---------------------------------|--------------------------------------------------------------|---------------------------------------------------------------------------------|
| **Theory of Computation**       | MIT OCW's course is helpful before delving into compilers.    | [MIT OCW Theory of Computation](https://ocw.mit.edu/)                           |
| **Abstract Algebra**            | Understanding groups and lattices is useful in optimizations. | N/A                                                                             |

---

