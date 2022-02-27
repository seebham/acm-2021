import React from "react";
import Link from "next/link";
import Head from "next/head";
import { acmTeam, ctscTeam } from "../data/teamsData";

const Member = ({
  photo,
  name,
  subtitle,
}: {
  photo: string;
  name: string;
  subtitle: string;
}) => {
  return (
    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src={photo ? photo : "/assets/imgs/portraits/defaultAvatar.jpg"}
          />
        }
        <div className="flex-grow">
          <h2 className="title-font font-medium">{name}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <>
      <div className=" body-font relative">
        <div className="container px-5 py-24 mx-auto h-full flex flex-col">
          <div className="flex flex-col h-full text-center w-full mb-20">
            <h2 className="sm:text-4xl text-2xl font-semibold mb-2 relative">
              Our Teams
            </h2>
          </div>
          {/* <div className="mb-16">
            <div className="text-lg font-bold px-2 pb-2">
              Student Co-ordinators
            </div>
            <div className="flex flex-wrap -m-2 flex-1">
              {StudentCoordinators &&
                StudentCoordinators.map((mem) => (
                  <Member key={mem.name} {...mem} />
                ))}
            </div>
          </div> */}
          <div className="mb-16">
            <div className="text-lg font-bold px-2 pb-2">
              ACM Student Chapter
            </div>
            <div className="flex flex-wrap -m-2 flex-1">
              {acmTeam &&
                acmTeam.map((mem) => <Member key={mem.name} {...mem} />)}
            </div>
          </div>
          <div className="mb-16">
            <div className="text-lg font-bold px-2 pb-2">
              Computer Technology Student Council
            </div>
            <div className="flex flex-wrap -m-2 flex-1">
              {ctscTeam &&
                ctscTeam.map((mem) => <Member key={mem.name} {...mem} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
