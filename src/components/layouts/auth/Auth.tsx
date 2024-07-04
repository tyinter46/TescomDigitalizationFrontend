// import { Link } from "react-router-dom";
// import { HOME } from "routes/CONSTANTS";
// import { TesSearch } from "components/icons";
import { Navbar } from "components/modules";

import { type ReactNode } from "react";
// import { ogLogo } from "assets/logos";
// import { ogLogoBackground } from "assets/backgrounds";

interface Props {
  //   reverse?: boolean;
  children: ReactNode;
}
const AuthLayout = ({ children }: Props) => {
  // const [hoverData, setHoverData] = useState(""); // State for hover data
  // const [showTooltip, setShowTooltip] = useState(false); // State for tooltip visibility

  // const onHover = (e: any, data: string) => {
  //   e.preventDefault();
  //   setHoverData(data);
  //   setShowTooltip(true);
  // };

  // const onHoverOver = (e: any) => {
  //   e.preventDefault();
  //   setShowTooltip(false);
  // };
  return (
    <>
      <Navbar></Navbar>
      <div>{children}</div>
    </>
    //     <div
    //       className={`${
    //         reverse ? "flex-row-reverse" : "flex-row"
    //       } relative w-full min-h-screen lg:h-screen flex`}
    //     >
    //       <div className="flex items-center justify-between absolute top-0  left-0 right-0 pt-10 px-5 md:px-10 lg:px-20 z-20">
    //         {/* <Link to={HOME}>
    //           <img src={ogLogo} alt="logo" className="" />
    //         </Link> */}
    //       </div>
    //       <div className="relative hidden lg:flex w-2/5 h-full items-center bg-white">
    //         {/* <div className="w-full h-full absolute pt-20 -left-10 xl:-left-20 bg-white">
    //           <img alt="OGLOGOBACKGRD" src={ogLogoBackground} className="W-full h-full" />
    //         </div> */}
    //       </div>
    //       <div className="relative w-full lg:w-3/5 h-full pt-20 px-5 md:px-10 lg:px-20 flex bg-white overflow-hidden">
    //         <div className="absolute top-10 right-5 md:right-10 lg:right-20 z-20">
    //           {/* Code with dropdown */}
    //           {/* <Dropdown
    //             button={
    //               <div className="flex items-center gap-2 px-1 py-px border-2  b border-black rounded-md cursor-pointer">
    //                 <ZuFlagUnitedKingdom size={20} color={"#000000"} className="text-black" />
    // @@ -39,7 +40,15 @@ const AuthLayout = ({ children, reverse = false }: Props) => {
    //             }
    //           >
    //             <ZuDown size={10} />
    //             <></>
    //           </Dropdown>
    //           </Dropdown> */}

    //           {/* Code without dropdown */}
    //           <button>
    //             <div
    //               className="flex items-center gap-2 px-1 py-px border-2 border-white rounded-lg cursor-pointer relative"
    //               onMouseEnter={(e) => {
    //                 onHover(e, "Search");
    //               }}
    //               onMouseLeave={(e) => {
    //                 onHoverOver(e);
    //               }}
    //             >
    //               <TesSearch size={20} />
    //               {showTooltip && (
    //                 <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded-md">
    //                   <p>{hoverData}</p>
    //                 </div>
    //               )}
    //             </div>
    //           </button>
    //         </div>

    //       </div>
    //     </div>
  );
};

export default AuthLayout;
