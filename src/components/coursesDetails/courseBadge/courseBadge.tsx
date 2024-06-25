interface CourseBadgeProps {
  color: string;
  text: string;
}

export default function courseBadge({ color, text }: CourseBadgeProps) {
  return (
    <>
      <span className="bg-darkblue rounded-full px-6 py-2">
        <span className={`text-${color} font-bold `}>{text}</span>
      </span>
    </>
  );
}
