import CommunityCard from "./CommunityCard";

const Communities = () => {
  let communitiesList = [
    {
      title: "React India 2023",
      content: `Participating in React India at Goa was a transformative experience. As a member of Team React India, I immersed myself in a dynamic conference featuring multiple insightful talks. The vibrant setting of Goa provided the perfect backdrop for this enriching event, fostering collaboration and learning within the React community.`,
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1703189981/F8DH4C5aIAAkaEu_xxqofo.jpg",
    },
    {
      title: "Hack The League 2.0",
      content: `Being part of the organizing team for "Hack the League" in Jaipur, a MLH chapter hackathon, was exhilarating. Bringing together innovation enthusiasts, the event became a hub of creativity and collaboration. As we curated challenges and facilitated the hackathon atmosphere, Jaipur served as a vibrant backdrop for this thrilling gathering of tech minds.`,
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1703228702/340678137_931656447884530_6400185077649387270_n_k0osl5.jpg",
    },
    {
      title: "KCD MUMBAI 2023",
      content: `Hosting a track at KCD Mumbai, a dynamic event in the Kubernetes community, was a highlight. As part of the organizing team, I witnessed the convergence of diverse talents in the realm of Kubernetes. Mumbai provided the perfect stage for this collaborative experience, fostering knowledge exchange and pushing the boundaries of container orchestration.`,
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1703228616/355213604_787587226403100_7263326915584750560_n_kiuwak.jpg",
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
