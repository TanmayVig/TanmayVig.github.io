import { Link } from "react-router-dom";
import img from "../pic.jpg";
import Button from "../atoms/Button";
import Popover from "../molecules/Popover";
import { AtSymbolIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import GitHubIcon from "../atoms/Icons/GithubIcon";
import LinkedInIcon from "../atoms/Icons/LinkedInIcon";
import { heading } from "../assets/vars";

export default function Intro() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="md:grid grid-flow-row-dense grid-cols-3 justify-items-center items-center place-content-center">
        <div className="md:shrink-0">
          <div className="relative">
            <img className=" h-screen md:h-screen" src={img} alt="" />
            <div className="absolute text-5xl top-5 left-5">
              <h1 className={`m-2 ${heading}`}>Tanmay Vig.</h1>
            </div>
          </div>
        </div>
        {/* <Container> */}
        <div className="grid col-span-2 h-full grid-rows-4 grid-flow-col justify-items-center items-center place-content-center">
          <div className="row-span-3 ">
            <h2 className="text-white tracking-wider font-bold">
              "A fun loving, optimistic person. Software Developer by
              profession. ALWAYS UP FOR NEW CHALLENGES!"
              <br />
              <br />
              Life Goal: Provide generational wealth to my next Generation.
              <br />
              <br />
              P.S.- I make my own challenges if I don't have enough.
            </h2>
            <br />
            <div className="flex gap-4 justify-start">
              <div className="flex-none">
                <Button onClick={() => setShowModal(!showModal)}>
                  {/* <LinkIcon className="text-white h-10"></LinkIcon> */}
                  <h1 className={`${heading}`}>LINKS</h1>
                </Button>
              </div>
              <div className={`flex-none ${showModal ? "block" : "hidden"}`}>
                <Popover>
                  <a
                    className="text-white px-0 hover:cursor-pointer"
                    href="mailto:tanmayvij11@gmail.com"
                    target="_blank"
                  >
                    <AtSymbolIcon className="text-white h-5"></AtSymbolIcon>
                  </a>
                  <p className="text-white bg-purple-500 rounded shadow text-sm font-bold">
                    tanmayvij11@gmail.com
                  </p>
                </Popover>
              </div>
              <div className={`flex-none ${showModal ? "block" : "hidden"}`}>
                <Popover>
                  <a
                    className="text-white px-0 hover:cursor-pointer"
                    href="https://www.github.com/TanmayVig"
                    target="_blank"
                  >
                    <GitHubIcon className="text-white h-5"></GitHubIcon>{" "}
                  </a>
                  <p className="text-white bg-purple-500 rounded shadow text-sm font-bold">
                    TanmayVig
                  </p>
                </Popover>
              </div>
              <div className={`flex-none ${showModal ? "block" : "hidden"}`}>
                <Popover>
                  <a
                    className="text-white px-0 hover:cursor-pointer"
                    href="https://www.linkedin.com/in/tanmay-vig-07176118b/"
                    target="_blank"
                  >
                    <LinkedInIcon className="text-white h-5 hover:cursor-pointer"></LinkedInIcon>
                  </a>
                  <p className="text-white bg-purple-500 rounded shadow text-sm font-bold">
                    TanmayVig
                  </p>
                </Popover>
              </div>
            </div>
          </div>
          <div>
            <Link
              className="block -inset-1 -skew-y-3 bg-purple-500 hover:skew-y-0"
              to="know-more"
            >
              <span className="m-1 text-white font-bold">
                Know More About Me!
              </span>
            </Link>
          </div>
        </div>
        {/* </Container> */}
      </div>
    </>
  );
}
