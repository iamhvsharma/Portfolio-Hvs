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
      title: "PUNE FOSS 2023",
      content: `Curating a track for PuneFOSS, an open-source meetup organized by FOSS enthusiasts, was a gratifying experience. As part of the organizing team, I witnessed the community spirit thriving in Pune. This event, brimming with discussions and shared passion for open source, underscored the power of collaborative knowledge exchange within the FOSS ecosystem.`,
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1703228790/339274515_611481033840669_1594108768360683823_n_ndagkj.jpg",
    },
    {
      title: "MUG PUNE 2023",
      content: `Leading a track at MUG Pune, the MongoDB chapter in Pune, was an enriching endeavor. As an active participant in the organizing team, I witnessed the local MongoDB community coming together to explore the latest trends and best practices. Pune provided a vibrant backdrop for this collaborative exchange, emphasizing the importance of NoSQL databases in modern development landscapes.`,
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1703229096/386476778_850792050386259_3706650073783872632_n_twq8oy.jpg",
    },
  ];

  return (
    <div
      className="h-fit w-full my-24 flex flex-col gap-8 py-12"
      id="community"
    >
      <span className="text-center text-2xl italic sm:text-lg sm:p-4">
        "Collaboration First ! Code Second !" - Shoutout to{" "}
        <a href="https://www.eddiehub.org/" className="italic font-bold">
          EddieHub
        </a>
      </span>
      <span className="text-center text-8xl font-bold sm:text-5xl">
        Community Contributions
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
