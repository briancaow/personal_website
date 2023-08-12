import Image from "next/image";
import Section from "./components/Section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-3 p-24">
      <Section>
        <div className="bg-white rounded-full overflow-hidden">
          <Image
            src="/BrianCao.jpg"
            alt="Picture of author"
            width={100}
            height={100}
          />
        </div>
        <h1>Brian Cao</h1>
        <h2>Welcome to my corner of the internet!</h2>
      </Section>
      <div className="flex flex-row space-x-3">
        <Section>
          <h1>GitHub</h1>
        </Section>
        <Section>
          <h1>About Me</h1>
          <ul>
            <li>👴 20 years old</li>
            <li>🏫 University of Washington</li>
            <li>💻 Computer Science</li>
            <li>🙏 Looking for work</li>
            <li>🏂 Snowboarding {">"} Skiing</li>
          </ul>
        </Section>
        <Section>
          <h1>Links</h1>
          <ul>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Github</li>
          </ul>
        </Section>
      </div>
      <Section>
        <h1>My Projects</h1>
        <ul>
          <li>Amethyst</li>
          <li>QuikSwitch</li>
          <li>BuildLapse</li>
          <li>BarBouncer</li>
        </ul>
      </Section>
      <Section>
        <h1>Resume</h1>
      </Section>
      <Section>
        <h1>Contact</h1>
      </Section>
    </main>
  );
}
