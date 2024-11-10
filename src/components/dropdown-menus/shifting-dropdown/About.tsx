import React from "react";
import { FiArrowRight } from "react-icons/fi";

const About = () => (
  <div className="flex items-center gap-5">
    <div className="w-1/3">
      <img
        className="mb-2 w-full rounded object-cover"
        src="https://imgs.search.brave.com/BHUSMDtu-lZMP6VqYunU7yQ1uXwShjaTbZNhmQjQ2LA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9IT29yM05ELUJ0/OTBOMG9adHZVN1lV/aGIyWm89LzI0N3gw/OjE0Mzh4MTE5MS9m/aXQtaW4vNTAweDUw/MC85OWRlc2lnbnMt/Y29udGVzdHMtYXR0/YWNobWVudHMvNjUv/NjU1ODUvYXR0YWNo/bWVudF82NTU4NTk0/OA"
        alt="Creative agency team"
      />
    </div>
    <div className="w-2/3">
      <h3 className="text-sm font-semibold">About Us</h3>
      <p className="mt-2 text-xs text-neutral-400">
        We are a creative web development agency focused on crafting beautiful, responsive, and innovative digital solutions for businesses of all sizes.
      </p>
      {/* <button className="mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>Learn More</span>
        <FiArrowRight />
      </button> */}
    </div>
  </div>
);

export default About;
