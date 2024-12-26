import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CircleNodeProps {
  icon: ReactNode;
  label: string;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function CircleNode({ icon, label, className, onClick, style }: CircleNodeProps) {
  return (
    <div className={cn("group", className)} style={style}>
      <div
        className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 cursor-pointer"
        onClick={onClick}
      >
        {icon}
        <div className="absolute -bottom-6 whitespace-nowrap text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
          {label}
        </div>
      </div>
    </div>
  );
}