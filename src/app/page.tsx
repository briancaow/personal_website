"use client";
import Image from "next/image";
import Section from "./components/Section";
import GitHubCalendar, { Props } from "react-github-calendar";

export default function Home() {
  const selectLastHalfYear: Props["transformData"] = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  const getAge = () => {
    const now = new Date();
    const bday = new Date(2002, 10, 22);
    var diff = (now.getTime() - bday.getTime()) / 1000;
    diff /= 60 * 60 * 24;
    return Math.floor(diff / 365.25);
  };

  return (
    <main className="px-9">
      <div className="flex min-h-screen items-center justify-center space-x-3 bg-white-300">
        <div className="flex-none flex-row w-[400px] h-[550px] bg-red-500 space-y-3">
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
            <div className="text-center">
              <p>
                Passionate about making indie-projects and building cool things.{" "}
                <br /> Current Junior studying computer science at the
                University of Washington
              </p>
            </div>
          </Section>
          <div className="ml-12">
            <Section>
              <h1>GitHub</h1>
              <div>
                <GitHubCalendar
                  username={"briancaow"}
                  transformData={selectLastHalfYear}
                  hideColorLegend
                  fontSize={16}
                  labels={{
                    totalCount: "{{count}} contributions in the last half year",
                  }}
                />
              </div>
            </Section>
          </div>
        </div>

        <div className="flex flex-col flex-none w-[700px] h-[550px] justify-center space-y-3 bg-blue-500">
          <div className="flex flex-row space-x-3 items-end">
            <div className="basis-1/2 mt-6">
              <Section>
                <h1>About Me</h1>
                <ul>
                  <li>
                    <p>👴 {getAge()} years old</p>{" "}
                  </li>
                  <li>
                    <p>🇻🇳 Vietnamese</p>
                  </li>
                  <li>
                    <p>🎓 University of Washington</p>
                  </li>
                  <li>
                    <p>💻 Computer Science</p>
                  </li>
                  <li>
                    <p>🙏 Looking for work</p>
                  </li>
                  <li>
                    <p>🏂 Snowboarding {">"} Skiing</p>
                  </li>
                </ul>
              </Section>
            </div>
            <Section>
              <h1>Activities</h1>
              <div>
                <h2>DubHacks NEXT</h2>
                <h2>Lavin Entreprenuership Program</h2>
              </div>
            </Section>
          </div>
          <div className="flex flex-row align-top space-x-3">
            <div>
              <Section>
                <h1>My Projects</h1>
                <div>
                  <h2>Amethyst</h2>
                  <p>
                    What if learning happened where we consumed information?
                  </p>
                  <h2>QuikSwitch</h2>
                  <p>What if we could Switch between multiple apps at once?</p>
                  <h2>BuildLapse</h2>
                  <p>What if we could market our products by building them?</p>
                  <h2>BarBouncer</h2>
                  <p>What if I made a IOS app?</p>
                </div>
              </Section>
            </div>
            <div className="w-[70px] h-[170px] bg-yellow-500">
              <Section>
                <Image
                  src="/linkedIn.png"
                  alt="Picture of author"
                  width={40}
                  height={40}
                />
                <Image
                  src="/x.png"
                  alt="Picture of author"
                  width={40}
                  height={40}
                />
                <Image
                  src="/github.png"
                  alt="Picture of author"
                  width={40}
                  height={40}
                />
              </Section>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[300px] h-[550px] flex-none justify-center bg-yellow-500 space-y-3">
          <Section>
            <h1>Resume</h1>
          </Section>
          <Section>
            <h1>Contact</h1>
            <p>Email: briancao02@gmail.com</p>
          </Section>
        </div>
      </div>
    </main>
  );
}
