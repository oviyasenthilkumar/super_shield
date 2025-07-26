// export default function TopTabs({ activeTab, setActiveTab }) {
//   const tabs = ["Documents", "Videos", "FAQs"];
//   return (
//     <div className="flex justify-center gap-4 py-4 bg-white shadow">
//       {tabs.map(tab => (
//         <button
//           key={tab}
//           onClick={() => setActiveTab(tab)}
//           className={`px-4 py-2 rounded ${
//             activeTab === tab ? "bg-red-600 text-white" : "bg-gray-200"
//           }`}
//         >
//           {tab}
//         </button>
//       ))}
//     </div>
//   );
// }
export default function TopTabs({ activeTab, setActiveTab }) {
  const tabs = ["Documents", "Videos", "FAQs"];

  return (
    <div className="flex justify-center gap-6 py-6 px-4 md:px-8 ">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative pb-2 font-semibold transition-colors poppins leading-10 text-lg ${
            activeTab === tab
              ? "text-[#c50022] border-b-2 border-[#c50022]"
              : "text-gray-700 hover:text-[#c50022]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}



// "use client";

// export default function TopTabs({ selectedTab, onChangeTab }) {
//   const tabs = ["Documents", "Videos","Faq"]; // or whatever your tabs are

//   return (
//     <div className="flex space-x-4 justify-center py-5">
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           onClick={() => onChangeTab(tab)} // <-- fix this line
//           className={`relative pb-2 font-semibold transition-colors poppins leading-10 text-lg ${
//             selectedTab === tab
//               ? "text-[#c50022] border-b-2 border-[#c50022]"
//               : ""
//           }`}
//         >
//           {tab}
//         </button>
//       ))}
//     </div>
//   );
// }

