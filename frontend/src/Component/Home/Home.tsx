import Hero from "./Hero";
import Card from "./Card";
import ProjectDetails from "./ProjectDetails";
import Main from "./Main";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-[#F3F9F4]">
        <Card />
          <ProjectDetails />
          <Main />
      </div>
    </>
  );
}
