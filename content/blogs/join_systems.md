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



Operating systems :
| Resource                                | Description                                                                                                                                                   | Links                                      |
|--------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| *Dinosaur Book of OS by Silberschatz et al.*                             | Absolute classic book, easily available as a PDF. They also have helpful slides.                                | https://www.os-book.com//OS10/index.html                    |
| *Modern Operating Systems by Andrew Taenbaum*                              | Another classic book.                                        | Easily available online as a PDF |
| *MIT's 6.004 OS course*                      | Thorough and in depth.                                                                 | https://www.youtube.com/@silvinahanonowachman3310/videos      |
| *Operating systems - Three easy pieces*                       | Easy to follow and simple. They use a toy OS called XV6(originally developed by MIT and intended to teach students)                                                                                                   | ostep.org        |
| *CS162 by UC Berkeley*                 | Similar to the MIT course. Rigorous.                                                                                     | https://www.youtube.com/playlist?list=PLF2K2xZjNEf97A_uBCwEl61sdxWVP7VWC                         |
| *CS377 by UMass* | Excellent course, with slides and lab material.                       | https://www.youtube.com/playlist?list=PLacuG5pysFbDQU8kKxbUh4K5c1iL5_k7k, material at : https://none.cs.umass.edu/~shenoy/courses/fall14/ |
| *Computer Systms From a Programmers perspective* | great book covering a wide variety of topics, not only limited to OS.                       | https://www.cs.sfu.ca/~ashriram/Courses/CS295/assets/books/CSAPP_2016.pdf
| *The little book about OS development* | Slightly advanced, but a great intro into writing kernels.                       | https://ordoflammae.github.io/littleosbook/
| *Think OS A Brief Introduction to Operating Systems* | Short book of around 100pgs. Might need some side quest learning but great nonetheless.                       | https://greenteapress.com/thinkos/ , book here : https://greenteapress.com/thinkos/thinkos.pdf


General advice : 

Networking :
1. PowerCert videos - great introductory channel with visualisations - https://www.youtube.com/@PowerCertAnimatedVideos/featured
2. Jeremy's IT lab - great teacher - https://www.youtube.com/@JeremysITLab/videos
3. Practical Networkin - great channel to understand topics quickly, you are given a short intro to the topic which will allow you to explore it in depth later if interested - https://www.youtube.com/@PracticalNetworking/videos
4. Beej's guide to Network concepts, great resource, will take you from noob to pro - https://beej.us/guide/bgnet0/
5. Beej's guide to Network programming - https://beej.us/guide/bgnet/
6. Mohit sir's classes!


Distributed Systems:
1. Github repo with a lot of resources - https://github.com/theanalyst/awesome-distributed-systems
2. MITs 6.824 - https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB , with resources at https://pdos.csail.mit.edu/6.824/schedule.html
3. Distributed systems reading group - https://dsrg.pdos.csail.mit.edu/papers/
4. https://dataintensive.net/ - comprehensive book


Cryptography :
1. Introduction to Cryptography by Christof Paar, unparalleled quality, the best resource by far - https://www.youtube.com/@introductiontocryptography4223/videos
2. https://cryptopals.com/ and https://cryptohack.org/ - understand crypto by doing hands on exercises
3. Crypto101, a great book with a lot of practicality discussed, such as key exchanges and crypto ecosystems such as SSL and TLS - https://www.crypto101.io/


Compilers :
1. Engineering a compiler (Cooper and Torczon) - Start with this!
2. The Dragon Book (A large portion of the text is dedicated to lexing and parsing, which might not be needed. The chapters on optimization are great!)
3. Introduction to Compilers (Prof. Alex Aiken) - Stanford course (You can find it on standard online or the first few videos on YouTube)
4. https://youtube.com/@compilerai7818?si=Rg_TMK7UkvXbwqTa - Great playlists (especially on compiler optimizations) by Prof. Sorav Bansal
5. craftinginterpreters.com : hands on and interactive
6. GodBolt (godbolt.org) and DogBolt (dogbolt.org) - to play around with code and compilation
7. Learn LLVM 17, Kwan and Nacke - (If exploring LLVM)

Some suggestions:
(Not strictly required) Would be great to go through a Theory of Computation course before deeply delving into resources (MITOCW has a great course!)
(Kind of required for better understanding) Would be helpful to have basic knowledge of Abstract Algebra (Groups, Lattices, etc…) before delving into compiler optimizations - Side note: Required in cryptography too!

Parallel Computing 

Prereq: Computer Architecture and some prior experience with writing parallel code.
Programming Massively Parallel Processors: A Hands-On Approach, 4th ed

Blockchain

Learn to become a blockchain developer - https://roadmap.sh/blockchain
Learn Hub | ethereum.org - https://ethereum.org/en/learn/
A Curated List of Awesome Ethereum Resources - https://github.com/ttumiel/Awesome-Ethereum

