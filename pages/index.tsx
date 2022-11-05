import Hero from "components/Hero";
import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import WorkExperience from "components/WorkExperience";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="#experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="#skills" className="snap-start">
        <Skills />
      </section>
    </div>
  );
}
