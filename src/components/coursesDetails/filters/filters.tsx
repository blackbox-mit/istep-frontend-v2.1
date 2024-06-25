import ToolTip from "@/components/general/toolTip/toolTip";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

const toolTipClasses = "w-10 h-10 ";

export default function filters({ ourCourses }: any) {
  return (
    <>
      {ourCourses.toolTopActive == "true" && (
        <div className="flex items-center">
          <div className={toolTipClasses}>
            <ToolTip
              icon={
                <InformationCircleIcon
                  aria-hidden="true"
                  className="w-full fill-darkblue cursor-pointer"
                />
              }
              text={ourCourses.beginnerToolTip}
            />
          </div>

          <label className="inline-flex items-center p-2 rounded-full cursor-pointer text-white font-palanquin ">
            <input id="Toggle3" type="checkbox" className="hidden peer" />
            <span className="px-8 py-2 rounded-l-full bg-darkblue peer-checked:bg-darkblue/80">
              {ourCourses.beginner}
            </span>
            <span className="px-8 py-2 rounded-r-full  bg-darkblue/80 peer-checked:bg-darkblue">
              {ourCourses.advanced}
            </span>
          </label>
          <div className={toolTipClasses}>
            <ToolTip
              icon={
                <InformationCircleIcon
                  aria-hidden="true"
                  className="w-full fill-darkblue cursor-pointer"
                />
              }
              text={ourCourses.advancedToolTop}
            />
          </div>
        </div>
      )}
    </>
  );
}
