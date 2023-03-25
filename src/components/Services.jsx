import React from "react";
import { BiSearchAlt } from "react-icons/bi";
// import { RiHeart2Fill } from "react-icons/ri";
import { AiFillFileExclamation, AiFillFile, AiFillFilePdf } from "react-icons/ai";
import { BsFillCameraVideoFill, BsFillHouseDoorFill } from "react-icons/bs";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <ServiceCard
          color="bg-[#8F00FF]"
          title="Inspections"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          // eslint-disable-next-line no-trailing-spaces
          subtitle="A thorough examination of the property's various systems and components to identify any 
          potential problems or issues. The key areas of inspection are Roofing, Electrical, Plumbing, HVAC,
          Structural, Exterior, and Interior."
        />
        <ServiceCard
          color="bg-[#00FFFF]"
          title="Titles"
          icon={<AiFillFileExclamation fontSize={21} className="text-white" />}
          subtitle="A legal document that serves as proof of ownership of a property. It includes the
          Property Description, Ownership Details, Encumbance and Liens, Restrictions and Covenants,
          Legal Status, Chain of Title, and Title Insurance. "
        />
        <ServiceCard
          color="bg-[#8F00FF]"
          title="Photos & Videos"
          // eslint-disable-next-line react/jsx-no-undef
          icon={<BsFillCameraVideoFill fontSize={21} className="text-white" />}
          subtitle="A powerful marketing tool that can help showcase a property and attract potential buyers.
          Good elements for real estate photos and videos are High Quality Visuals, Professional Editing, Accurate
          Property Representation, Interactive Features, and Contact Information. "
        />
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#00FFFF]"
          title="Virtual Tours"
          icon={<BsFillHouseDoorFill fontSize={21} className="text-white" />}
          subtitle="Allows potential buyers to explore a property from the comfort of their
          own home or anywhere, on demand. Virtual tours have high-quality visuals, interactive features,
          floor plan, accurate representation of the property, additional info, and contact info."
        />
        <ServiceCard
          color="bg-[#8F00FF]"
          title="Deeds"
          icon={<AiFillFilePdf fontSize={21} className="text-white" />}
          subtitle="A legal document that transfers ownership of a property from one person or entity to another.
          It should include: Name of Parties, Property Description, Consideration, Granting Language, Signatures,
          Delivery and Acceptance, Restrictions and Covenants, and Legal Status"
        />
        <ServiceCard
          color="bg-[#00FFFF]"
          title="Loan Documents"
          icon={<AiFillFile fontSize={21} className="text-white" />}
          subtitle="Real Estate loans typically involve a Promissory Note, Mortgage or Deed of Trust, Loan Application,
          Credit Report, Appraisal Report, Title Report, and Closing Disclosure."
        />
      </div>
    </div>
  </div>
);

export default Services;
