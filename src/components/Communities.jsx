import CommunityCard from "./CommunityCard";

const Communities = () => {
  let communitiesList = [
    {
      title: "SIH FINALS 2024",
      content: `Being a finalist in the Smart India Hackathon 2024 at Lovely Professional University was an inspiring experience. Competing with brilliant minds, we refined our project, showcased creativity, and embraced teamwork. The event fostered collaboration, enhanced our technical skills, and strengthened our resolve to contribute to India’s technological growth through innovation.`,
      url: "https://res.cloudinary.com/quickhireup/image/upload/v1736437971/SIH_f8z0fq.jpg",
    },
    {
      title: "GCP X GFG'24",
      content: `We secured 2nd position in the GCP x GFG Hackathon 2024, organized by GeeksforGeeks and Google Cloud. Our project, a decentralized scholarship platform, impressed the judges with its innovation and impact. This hackathon showcased our skills, teamwork, and passion for leveraging technology to create transparent and efficient solutions for education accessibility.`,
      url: "https://res.cloudinary.com/quickhireup/image/upload/v1736437971/dcgc_hx9fxv.jpg",
    },
    {
      title: "HACKINDIA 2024",
      content: `I participated in HackIndia, where I developed an innovative application on the Solana blockchain. This hackathon provided a dynamic platform to explore cutting-edge blockchain technology and create a decentralized solution. The experience enhanced my skills in Solana development, fostering creativity, collaboration, and a deeper understanding of Web3 applications.`,
      url: "https://res.cloudinary.com/quickhireup/image/upload/v1736437962/hackindia_ymykzm.jpg",
    },
    {
      title: 'AWS DAY 2023',
      content: `I attended AWS Day, an inspiring event showcasing the latest innovations in cloud computing. It offered insightful sessions on AWS services, hands-on workshops, and networking opportunities with industry experts. The event deepened my understanding of cloud solutions and their impact, inspiring me to leverage AWS for scalable and efficient applications.`,
      url: "https://res.cloudinary.com/quickhireup/image/upload/v1736443303/awsday_k1ij04.jpg",
    },
    {
      title: "AMITY STARTUP EXPO",
      content: `I participated in the Startup Expo at Amity University, an incredible platform for showcasing innovative ideas and networking with aspiring entrepreneurs and industry leaders. The event featured insightful sessions, interactive booths, and mentorship opportunities, fostering collaboration and creativity. It was an enriching experience to present and refine entrepreneurial concepts.`,
      url: "https://res.cloudinary.com/quickhireup/image/upload/v1736437962/amity_zzlna1.jpg",
    },
  ];

  return (
    <div
      className="h-fit w-full my-24 flex flex-col gap-8 py-12"
      id="community"
    >
      <span className="text-center text-2xl italic sm:text-lg sm:p-4">
        "CODE ! COLLABORATE ! CREATE ! CONTRIBUTE ! COMMUNICATE !" - Harshvardhan
      </span>
      <span className="text-center text-8xl font-bold sm:text-5xl">
        Hackathons & Events
      </span>
      <div className="flex flex-row flex-wrap gap-16 mt-12 justify-center sm:flex-col sm:gap-8 sm:px-4">
        {communitiesList.map((community) => {
          return <CommunityCard key={community.title} data={community} />;
        })}
      </div>
      {/* <div className="mx-auto mt-24">
        <button className="p-4 px-12 rounded-2xl text-xl font-bold border border-blue-300 flex flex-row place-items-center gap-4 hover:bg-blue-500 hover:text-white ">
          Check More
        </button>
      </div> */}
    </div>
  );
};

export default Communities;
