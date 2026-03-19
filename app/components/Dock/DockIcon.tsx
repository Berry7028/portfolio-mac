"use client";
import Image from "next/image";

type Props = {
  index: number;
  hoveredIndex: number | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
} & (
  | { isSeparator: true }
  | { isSeparator?: false; name: string; src: string }
);
const MAX_LIFT_DISTANCE = 3;
const LIFT_AMOUNT = 24;
export default function DockIcon(props: Props) {
  const { index, hoveredIndex, onMouseEnter, onMouseLeave } = props;
  if (props.isSeparator) {
    return (
      <div
        className="w-px h-8 bg-gray-400/50 shrink-0"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  const { name, src } = props;
  const distance =
    hoveredIndex !== null ? Math.abs(index - hoveredIndex) : Infinity;
  const lift =
    distance <= MAX_LIFT_DISTANCE
      ? Math.cos((distance / MAX_LIFT_DISTANCE) * (Math.PI / 2)) * LIFT_AMOUNT
      : 0;

  return (
    <div
      className="relative flex flex-col items-center shrink-0 transition-transform duration-200 ease-out"
      style={{ transform: `translateY(-${lift}px)` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {hoveredIndex === index && (
        <span className="absolute bottom-full mb-2 px-2 py-1 rounded-xl bg-black/70 text-white text-sm whitespace-nowrap">
          {name}
        </span>
      )}
      <div className="w-12 h-1/2 rounded-2xl flex items-center justify-center drop-shadow-lg">
        <Image src={src} alt={name} width={48} height={48} />
      </div>
    </div>
  );
}
