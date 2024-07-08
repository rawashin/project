// import { FaPhone } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
// const FixedContactBar = () => {
//   return (
//     <div className="fixed left-0 z-10 flex w-full bottom-0 lg:bottom-[200px] lg:flex-col lg:w-fit lg:bottom0">
//       <a
//         href="tel:201061462026"
//         target="_blank"
//         rel="noreferrer"
//         className="bg-primary relative lg:rounded-xl transition-all text-background-50 w-full lg:w-[45px] flex h-[45px] items-center justify-center"
//       >
//         <span className="sr-only">تواصل علي الهاتف</span>
//         <div className="absolute w-full h-full border animate-ping" />
//         <FaPhone />
//       </a>
//       <a
//         href="https://wa.me/201061462026"
//         target="_blank"
//         rel="noreferrer"
//         className="bg-green-500 relative lg:rounded-xl text-white transition-all text-2xl text-background-50 w-full flex lg:w-[45px] h-[45px] items-center justify-center"
//       >
//         <span className="sr-only">تواصل علي الواتساب</span>
//         <div className="absolute w-full h-full border animate-ping" />
//         <FaWhatsapp />
//       </a>
//     </div>
//   );
// };

// export default FixedContactBar;
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const FixedContactBar = () => {
  return (
    <div className="fixed left-0 lg:left-10 lg:gap-8 z-10 flex w-full bottom-0 lg:bottom-[50px] lg:flex-col lg:w-fit lg:bottom0">
      <a
        href="tel:201061462026"
        target="_blank"
        rel="noreferrer"
        className="bg-primary relative lg:rounded-full transition-all text-background-50 w-full lg:w-[45px] flex h-[45px] items-center justify-center"
      >
        <span className="sr-only">تواصل علي الهاتف</span>
        <div className="absolute hidden w-full h-full delay-75 border rounded-full animate-ping border-primary lg:block" />
        <FaPhone />
      </a>
      <a
        href="https://wa.me/201061462026"
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 relative lg:rounded-full text-white transition-all text-2xl text-background-50 w-full flex lg:w-[45px] h-[45px] items-center justify-center"
      >
        <span className="sr-only">تواصل علي الواتساب</span>
        <div className="absolute hidden w-full h-full border border-green-500 rounded-full animate-ping lg:block" />
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default FixedContactBar;
