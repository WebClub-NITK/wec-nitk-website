const gdg_sig_path = `/blogs/${process.env.GDG_SIG_ID}`;
const algo_sig_path =  `/blogs/${process.env.ALGO_SIG_ID}`;
const intel_sig_path =  `/blogs/${process.env.INTEL_SIG_ID}`;
const systems_sig_path =  `/blogs/${process.env.SYSTEMS_SIG_ID}`;

export const ourSigsData = [
  {
    id: 1,
    title: (
      <p className="font-semibold text-[#DB6541] lg:text-2xl">
        Algorithms Group
      </p>
    ),
    description:
      "The **Algorithms Special Interest Group (SIG)** is a vibrant community where enthusiasts, students, and professionals explore algorithms. We offer activities like **lockout tournaments**, **mentorship groups**, and **post-contest discussions** that help members **learn**, **compete**, and **grow** together. Whether you're a beginner or an expert, our SIG is the perfect place to deepen your algorithmic knowledge.",
    imageName: "algo.png",
    sigPage: algo_sig_path,
    className: " bg-[#ffb098]"
  },
  
  {
    id: 2,
    title: (
      <p className="font-semibold text-[#BDCC1C] lg:text-2xl">
        Intelligence Group
      </p>
    ),
    description:
      "We focus on **understanding human intelligence** and applying it to machines for the **benefit of humanity**. Our work in *Machine Learning (ML)* and *Artificial Intelligence (AI)* combines research with practical applications, covering **ML theory**, **Deep Learning**, **Reinforcement Learning**, and **Data Science**. We also engage in **competitive ML**, **Kaggle contests**, and apply ML to *software products*. Our mission is to bridge theory and practice, creating impactful innovations. Join us as we push the *frontiers of AI and ML* for a better world.",
    imageName: "intel.png",
    sigPage: intel_sig_path,
      className: " bg-[#ffb098]"
  },
  {
    id: 3,
    title: (
      <p className="font-semibold text-[#000000] lg:text-2xl flex gap-[5px]">
        GDG On Campus NITK
      </p>
    ),
    description:
      "We help students bridge the gap between *theory and practice* in software development. In a **peer-to-peer learning** environment, students expand their knowledge, build solutions to real-world problems, and assist communities through **projects and events**. Our work spans **backend**, **frontend**, **mobile development**, and **game development**. We've actively participated in **hackathons** and contributed to **open-source projects**. Join us to learn, create, and make an impact!",
    imageName: "gdg.png",
    sigPage: gdg_sig_path,
      className: " bg-[#ffb098]"
  },
  {
    id: 4,
    title: (
      <p className="font-semibold text-[#F59453] lg:text-2xl">
        Systems & Security Group
      </p>
    ),
    description:
      "We are a group of passionate students exploring the diverse aspects of *computer systems*. The **Systems and Security SIG** delves into topics like **Networks**, **Distributed Systems**, **Blockchains**, **Security**, **Operating Systems (OS)**, **DBMS**, and **Architecture**. We thrive on working with large **open-source projects** like the Linux kernel. Whether you're into **CTF** security challenges or fascinated by large-scale systems like Netflix, join us to explore, learn, and innovate together.",
    imageName: "systems.png",
    sigPage: systems_sig_path,
    className: " bg-[#ffb098]"
  },
];
