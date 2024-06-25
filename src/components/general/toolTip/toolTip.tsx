interface ToolTipProps {
  text: string;
  icon: any;
}

export default function ToolTip({ icon, text }: ToolTipProps) {
  return (
    <div className="relative flex flex-col items-center group  ">
      {icon}

      <div className="absolute bottom-0 flex flex-col items-center hidden mb-10 group-hover:flex">
        <span className="relative rounded-md z-10 font-palanquin  p-4 text-p-xs leading-none bg-darkblue text-white whitespace-no-wrapbg-darkblue shadow-lg w-max max-w-48">
          {text}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-darkblue "></div>
      </div>
    </div>
  );
}
