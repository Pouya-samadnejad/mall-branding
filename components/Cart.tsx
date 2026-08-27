import { MapPinCheck } from "lucide-react";
import { cloneElement, isValidElement, type ReactNode } from "react";

type CartProps = {
  value: ReactNode | string | number;
  label: string;
  icon?: ReactNode;
  iconSize?: number;
};

export default function Cart({
  value,
  label,
  icon = <MapPinCheck strokeWidth={1.5} />,
  iconSize = 48,
}: CartProps) {
  const renderedIcon =
    isValidElement(icon) &&
    typeof icon.props === "object" &&
    icon.props !== null &&
    !("className" in icon.props)
      ? cloneElement(icon as React.ReactElement<{ size?: number }>, {
          size: iconSize,
        })
      : icon;

  return (
    <div className="relative overflow-hidden border border-primary/20 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 w-72 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2"
      >
        <div className="h-16 w-60 rounded-full bg-primary/40 blur-[90px]" />
      </div>

      <span aria-hidden className="text-primary">
        {renderedIcon}
      </span>

      <div className="relative text-2xl font-bold text-primary" dir="ltr">
        {value}
      </div>
      <p className="relative text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
