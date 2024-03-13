import Image from "next/image";

export default function ProjectsSection() {
    return (
      <>
        <div className="sm:flex items-center justify-around w-screen lg:px-24">
          <div className="sm:w-1/2 p-10">
            <div className="image object-center text-center">
              <Image src="/whatwedoIllustrations/projects.svg" className="ml-auto" width="1280" height="1280" />
            </div>
          </div>
          <div className="sm:w-1/2 p-5">
            <div className="text">
              <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                <span className="text-primary-blue">Projects</span>
              </h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
                commodi doloremque, fugiat illum magni minus nisi nulla numquam
                obcaecati placeat quia, repellat tempore voluptatum.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  