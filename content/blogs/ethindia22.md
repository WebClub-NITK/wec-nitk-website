[ETHIndia](https://ethindia.co/index) is the world's largest Ethereum hackathon, with speakers and sponsors from all over the globe promoting and celebrating the blockchain ecosystem. Owing to its scale, my prior commitments and my experience with only the Web2 space, I brushed it aside. 45 mins before the final deadline to apply, my friend Ashish Bharath called and asked if we were interested. With little convincing and setting priorities right (and lesser hopes of making it), team unETHical was born. 

## The Prelude

Having almost forgotten about the hackathon, we received an invite to be among 2000 selected hackers out of 21000+ registrations from across 69 countries - one month after registering. We were jumping (at least I was). But a late invite also meant less time to prepare. Half the team was sceptical and had other things scheduled - the team almost fell apart. But again, with a lot of convincing, cancelling other commitments (as important as exams) Rahul Pujari (the UI/UX guy) from Delhi, Abhiraj Mengade (the frontend guy) from Pune, Asim Jawahir (the IoT guy) from Kerala, Ashish Bharath (the Solidity guy) and I (frontend guy) from Bengaluru, were all set to attend the 36-hour extravaganza. 

## The Experience

The hackathon started off with a series of workshops on the blockchain, which were really helpful in getting us up to speed on the technology we would be using for our project. There were also multiple sponsor stalls and a beautiful main stage for an amazing speaker lineup. 
The hackathon officially started at 8:00 pm, and that's when the real work began. The organisers provided a 24/7 snack bar with lots of good food and energy drinks to keep us fueled.
The next day was primarily spent coding and trying to get our project to work. We barely slept the previous night, and there were tons of bugs, especially in the IoT part of the project. I remember at one point, we were pulling our hair out trying to figure out why our device wasn't connecting to the internet 😂. 
Another highlight of the day was the swag haul. Whenever there was a rush around a sponsor stall, we knew that a new batch of swags had arrived 😆. Each of us ended up with 11-12 t-shirts, caps, stickers, hoodies, badges, a mouse pad, bands……phew, please see the image to see everything! 😸

![image](https://github.com/WebClub-NITK/wec-nitk-website/assets/97223188/588a50a8-6245-4498-a6d6-28a4592b897f)

![image](https://github.com/WebClub-NITK/wec-nitk-website/assets/97223188/e0224054-0f02-4161-8d39-e9204c6c0e97)

![image](https://github.com/WebClub-NITK/wec-nitk-website/assets/97223188/a39f68d0-54bf-4897-84ae-e1c777f18d6f)

![image](https://github.com/WebClub-NITK/wec-nitk-website/assets/97223188/03ca038b-ddfc-44ee-8d77-eafdbcbd2280)

![image](https://github.com/WebClub-NITK/wec-nitk-website/assets/97223188/60eee8c6-d979-4e07-b9e5-ae42ec01d6f0)

![image](https://github.com/WebClub-NITK/wec-nitk-website/assets/97223188/c701b5a0-2aff-4125-84f1-e80e7f03b6c5)

![image](https://github.com/WebClub-NITK/wec-nitk-website/assets/97223188/d609aa55-4a5a-4b12-9c31-62cebfa0dfe0)

![image](https://github.com/WebClub-NITK/wec-nitk-website/assets/97223188/7e8d76d3-802e-4d72-bba1-20faf77968a2)

## The Project
This section covers the technical details of what we built. Please feel free to move to the next section if you'd like. 

### Problem?

The government has set a target that 30% of all vehicles be electrically driven by 2030. For this aim to be realised requires that strong incentives be created for the manufacture, sale, and usage of electric vehicles. In addition, it is expected that the increased usage of EVs will substantially increase the usage of batteries to power them. Though technology is improving, the issue of battery charging is particularly troubling. Charging stations require a lot of infrastructure. A proposed method is to use battery swapping stations where you walk in and swap your existing discharged batteries with charged ones. But here also, there are two problems: 

1. Putting a price on the usage of the battery: Location aside - some features of batteries may directly affect their worth, such as the age of the battery and its historical treatment. Tracking energy consumption is also cumbersome. 
2. Difficulty in energy source attribution: An aspect of EV usage sometimes overlooked is that they are largely environmentally viable only if the source of electricity is also driven by renewable energy. Attributing electricity sources is a difficult process, however.

### Solution
Blockchain'ify' the station and the information of the battery. 
Why?
1. Immutable battery information storage: The blockchain may store information such as the age of the battery and its previous treatment in an immutable fashion, thus removing the possibility of misrepresentation to increase the price or lower the cost of usage.
2. Attribution of energy source: Usage of blockchain to store information on the sources of energy used to charge the battery may help inform choice to incentivise usage of sources of renewable energy. 
3. Programmable transfers: Exploiting the ‘smart contract’ feature of blockchain applications would allow for more efficient swapping of batteries at charging stations since simple rules on costing can be applied on the basis of battery attributes and executed on exchange.

#### How does ChargeSwap work?

1. The user signs up for our platform. We made the onboarding simple for conventional Web2 users, by allowing them to sign up with social login in addition to the usual MetaMask login. Thanks to the Biconomy SDK. 
2. [Assumption for now]: The user is sent a battery by us with the ownership transferred to them in the smart contract. This smart contract is deployed on Polygon (the Mumbai testnet as of now).
3. The user searches for nearby stations based on different parameters such as the availability of the battery, its source and the distance to the station.
4. Upon arriving at the station, the user scans his discharged battery using RFID at the IoT-enabled device. The metadata of each battery is immutably stored using IPFS. 
5. The user is asked to pay the price for the charge required. The price is just a multiple of (100 - discharged battery %) written in the smart contract. 
6. Upon successful transaction, the IoT-enabled device interacts with the smart contract to swap the ownership of a newly charged battery and the user's discharged battery. 
7. The user can now insert the changed battery into their EV and get going. 


![image](https://github.com/WebClub-NITK/wec-nitk-website/assets/97223188/280bc445-2d29-4ef0-8b6b-1432bbb44543)


## The results
"Hackers, please submit your hack by 9 am!" - said the announcement. Rushing through the final pieces, we made our last commit at 8:52 am. Now it was time to pitch our project to the judges and sponsors. After pitching to 5 panels over 3 hours, already exhausted, we finally decided to take a rest. With partial sleep, I checked my inbox at 3:22 pm. "IMPORTANT - [ETHIndia 2022]: You're shortlisted for Top 10 teams" - the subject read. Putting my specs to confirm, I started waking up my teammates. Every single one of us couldn't believe it, and we were ecstatic! 
We presented our hack live to over 2000 people and a virtual audience through [YouTube](https://youtu.be/9rieTya8Yds?t=3908). Wait, it wasn't over yet. 

ChargeSwap also won the Best Public Good by Polygon, and the Best New Module Integration using the Biconomy SDK with a total prize money of $6500+. Multiple investors and organisations, including the Govt of Telangana, expressed interest in helping to carry forward our project. We also met Mr Sandeep Nailwal, who not only recognised us but also appreciated our project. 


![image](https://github.com/WebClub-NITK/wec-nitk-website/assets/97223188/a35a114a-eb82-4ac6-aad0-df67f753701f)


![image](https://github.com/WebClub-NITK/wec-nitk-website/assets/97223188/1ebf81b0-d2e1-42f0-b47c-6d3b82af0aeb)


![image](https://github.com/WebClub-NITK/wec-nitk-website/assets/97223188/525651f6-239b-4875-a93a-6fef87829c0d)


![image](https://github.com/WebClub-NITK/wec-nitk-website/assets/97223188/26822a6d-e628-4f6f-9778-19b2e0af2608)


![image](https://github.com/WebClub-NITK/wec-nitk-website/assets/97223188/4013a3a3-e888-4f3e-a5b9-f31517f44c76)


![image](https://github.com/WebClub-NITK/wec-nitk-website/assets/97223188/d841f325-f752-4b8f-a6e5-5ab30b826f19)


![image](https://github.com/WebClub-NITK/wec-nitk-website/assets/97223188/9646f5f5-8fd3-4c31-a1fb-47a1e45501d6)

## Takeaways
* It's all about the team.
  
  Find individuals that fit different pieces of the puzzle. Let each individual work independently and trust their skills. None of us had any idea about IoT except Asim, whom we trusted (at least a little). The same goes for other team members and their skills. 
* Your network is your net worth.
  
  Hackathons are all about meeting new people and understanding new ideas and opportunities. Talk to diverse individuals. They are nicer than you think.
* Plan a little beforehand
  
  Have some potential problem statements researched beforehand, keeping in mind the theme of the hackathon. It's easier to find a solution to an existing problem rather than finding both. 
* Don’t underestimate your potential
  
  We saw people who had won coveted hackathons, received big fellowships, etc - easy demotivation. If only you believe in yourselves, will you able to triumph the odds.  

From a team that doubted even its selection to attend the hackathon, and almost falling apart upon selection, to emerging as winners among multiple categories and being featured in leading newspapers - it all feels nothing but surreal. I can't wait to see where ChargeSwap takes us in the future! ⚡

## Related Links:
* Project Link: https://devfolio.co/projects/chargeswap-3527
* Project Demo:  https://www.youtube.com/watch?v=9rieTya8Yds&t=3908s
* News: https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece
* ETHIndia’22 Offical Recap: https://www.youtube.com/watch?v=U6LDMJ2pdvk
* ETHIndia Website: https://ethindia.co/



