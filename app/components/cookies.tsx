// "use client"
// import { setCookie } from "cookies-next";
// import { cookies } from "next/headers";
// import { useEffect, useState } from "react";

// export default function Cookies() {
//   const cookieStore = cookies();

//   const [allowCookies, setAllowCookies] = useState<boolean | undefined>(undefined);

//   useEffect(() => {
//     setCookie("iDontMindBeingMonitored", "true");
//   }, [allowCookies]);
  
//   return (
//     <div className="absolute bottom-0 left-0 -[10000] w-full h-fit px-12 py-4 backdrop-blur-md">
//       <div className="w-full h-fit bg-black rounded-md flex flex-col justify-center items-center">
//         <p>
//           This website uses third-party tools to monitor performance and
//           analytics. A cookie will be stored to remember your decision.
//         </p>

//         <p>Allow analytics?</p>

//         <div className="flex flex-row space-x-4">
//           <button className="bg-black border border-gray-500 rounded-lg px-6 py-1 font-black text-white hover:scale-110 transition-all duration-150"
//             onClick={() => setAllowCookies(true)}
//           >
//             Allow
//           </button>
//           <button className="bg-red-500 border border-gray-500 rounded-lg px-6 py-1 font-black text-black hover:scale-110 transition-all duration-150"
//             onClick={() => setAllowCookies(false)}
//           >
//             Disallow
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
