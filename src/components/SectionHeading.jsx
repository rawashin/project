import { cn } from "../lib";

// eslint-disable-next-line react/prop-types
const SectionHeading = ({ title, isStart, className }) => {
  return (
    <h2
      className={cn(
        " mb-6 text-secondary text-3xl font-semibold w-fit",
        {
          "mx-auto": !isStart,
        },
        className
      )}
    >
      {title}
      <div
        className={cn("w-full h-[1px] mt-4 bg-secondary", {
          "mx-auto": !isStart,
        })}
      />
    </h2>
  );
};

export default SectionHeading;
