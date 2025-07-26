// // components/ProductCatalogueModal.jsx
// "use client";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import {
//   UserIcon,
//   BuildingOffice2Icon,
//   EnvelopeIcon,
//   PhoneIcon,
//   ChatBubbleLeftEllipsisIcon,
// } from "@heroicons/react/24/outline";
// import { ArrowRightIcon } from "@heroicons/react/20/solid";

// export default function ThanksForYourInterest() {
//   const [formData, setFormData] = useState({
//     name: "",
//     company: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const router = useRouter();

//   const onClose = () => {
//     router.back();
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-60 flex justify-center z-50 px-4 overflow-y-auto">
//       <div className="bg-white h-auto max-h-screen overflow-y-auto shadow-xl max-w-7xl w-full flex flex-col md:flex-row my-10 rounded">
//         {/* Left Image */}
//         <div className="hidden md:flex w-1/2  justify-center bg-gray-100 ">
//           <Image
//             src="/popup.webp"
//             alt="Catalogue"
//             width={1500}
//             height={1500}
//             className=" w-full object-cover"
//           />
//         </div>
//         {/* Right Form */}
//         <div className="w-full md:w-1/2 p-6 md:p-10 relative">
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-4xl"
//           >
//             ×
//           </button>
//           <h2 className="text-xl md:text-2xl text-gray-700 font-semibold mb-5 mt-12 text-center poppins ">
//             Thank you for your interest in Supershield
//           </h2>
//           <p className="text-gray-600 text-center mb-6 text-sm md:text-base  open-sans leading-6">
//             To proceed, please fill in the fields below. Once submitted, you
//             will receive an email with a link to download the document.
//           </p>
//           <form onSubmit={handleSubmit} className="space-y-6 ">
//             <div className="relative">
//               <UserIcon className="h-5 w-5 text-gray-400 absolute left-5 top-4.5 " />
//               <input
//                 name="name"
//                 type="text"
//                 placeholder="Enter your name*"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 pl-12 pr-4 py-4 rounded focus:ring-2 focus:ring-red-500 open-sans"
//               />
//             </div>

//             <div className="relative">
//               <BuildingOffice2Icon className="h-5 w-5 text-gray-400 absolute left-5 top-4.5" />
//               <input
//                 name="company"
//                 type="text"
//                 placeholder="Enter your company name*"
//                 required
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 pl-12 pr-4 py-4 rounded focus:ring-2 focus:ring-red-500  open-sans"
//               />
//             </div>

//             <div className="relative">
//               <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-5 top-4.5" />
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Enter your email*"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 pl-12 pr-4 py-4 rounded focus:ring-2 focus:ring-red-500 open-sans"
//               />
//             </div>

//             <div className="relative">
//               <PhoneIcon className="h-5 w-5 text-gray-400 absolute left-5 top-4.5" />
//               <input
//                 name="phone"
//                 type="tel"
//                 placeholder="Enter your phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 pl-12 pr-4 py-4 rounded focus:ring-2 focus:ring-red-500 open-sans"
//               />
//             </div>

//             <div className="relative">
//               <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-400 absolute left-5 top-4.5" />
//               <textarea
//                 name="message"
//                 rows={3}
//                 placeholder="Your message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 pl-12 pr-4 py-4 rounded focus:ring-2 focus:ring-red-500 open-sans"
//               ></textarea>
//             </div>

//             {/* <div className="flex justify-center">
//             <button className="mt-4 bg-[#C50022] text-white text-md px-6 py-3 hover:bg-white hover:text-[#B41424] border border-[2px] border-[#B41424] transition duration-300 open-sans">
//             → Submit
//             </button>
//             </div> */}
//             <div className="flex justify-center">
//               <button className="mt-4 bg-[#C50022] cursor-pointer text-white text-md px-6 py-3 hover:bg-white hover:text-[#B41424] border-[2px] border-[#B41424] transition duration-300 open-sans flex items-center gap-2">
//                 <ArrowRightIcon className="h-5 w-5" /> Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  UserIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function ProductCatalogueModal() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onClose = () => {
    router.back();
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   setSubmitted(true);

  //   // Optionally reset form
  //   setFormData({
  //     name: "",
  //     company: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //   });

  //   // Auto-close modal after 3 seconds
  //   setTimeout(() => {
  //     setSubmitted(false);
  //     onClose();
  //   }, 3000);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://my-wp-site.local/wp-json/custom/v1/enquiry/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);

        // Reset the form
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });

        // Auto-close modal after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 3000);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-60 flex justify-center z-50 px-4 overflow-y-auto">
        <div className="bg-white h-auto max-h-screen overflow-y-auto shadow-xl max-w-7xl w-full flex flex-col md:flex-row my-10 rounded">
          {/* Left Image */}
          <div className="hidden md:flex w-1/2 justify-center bg-gray-100">
            <Image
              src="/popup.webp"
              alt="Catalogue"
              width={1500}
              height={1500}
              className="w-full object-cover"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 p-6 md:p-10 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-4xl"
            >
              ×
            </button>
            <h2 className="text-xl md:text-2xl text-gray-700 font-semibold mb-5 mt-12 text-center poppins">
              Thank you for your interest in Supershield
            </h2>
            <p className="text-gray-600 text-center mb-6 text-sm md:text-base open-sans leading-6">
              To proceed, please fill in the fields below. Once submitted, you
              will receive an email with a link to download the document.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <UserIcon className="h-5 w-5 text-gray-400 absolute left-5 top-4.5" />
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 pl-12 pr-4 py-4 rounded focus:ring-2 focus:ring-red-500 open-sans"
                />
              </div>

              <div className="relative">
                <BuildingOffice2Icon className="h-5 w-5 text-gray-400 absolute left-5 top-4.5" />
                <input
                  name="company"
                  type="text"
                  placeholder="Enter your company name*"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 pl-12 pr-4 py-4 rounded focus:ring-2 focus:ring-red-500 open-sans"
                />
              </div>

              <div className="relative">
                <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-5 top-4.5" />
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 pl-12 pr-4 py-4 rounded focus:ring-2 focus:ring-red-500 open-sans"
                />
              </div>

              <div className="relative">
                <PhoneIcon className="h-5 w-5 text-gray-400 absolute left-5 top-4.5" />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 pl-12 pr-4 py-4 rounded focus:ring-2 focus:ring-red-500 open-sans"
                />
              </div>

              <div className="relative">
                <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-400 absolute left-5 top-4.5" />
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 pl-12 pr-4 py-4 rounded focus:ring-2 focus:ring-red-500 open-sans"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button className="mt-4 bg-[#C50022] cursor-pointer text-white text-md px-6 py-3 hover:bg-white hover:text-[#B41424] border-[2px] border-[#B41424] transition duration-300 open-sans flex items-center gap-2">
                  <ArrowRightIcon className="h-5 w-5" /> Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      {submitted && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-md mx-auto rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-xl font-semibold text-[#C50022] poppins mb-4">
              Thank you for your submission!
            </h2>
            <p className="text-gray-700 open-sans">
              We appreciate your interest. You will receive a download link via
              email shortly.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
