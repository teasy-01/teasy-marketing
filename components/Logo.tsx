export function Logo({ variant = 'light', className = '' }: { variant?: 'light' | 'dark'; className?: string }) {
  return (
    <div 
      className={className || "h-[28px] sm:h-[32px] md:h-[29px] lg:h-[20px] flex items-center"}
    >
      <img 
        src="/media/teasy-marketing-logo.png" 
        alt="TEASY Marketing" 
        className="h-full w-auto object-contain"
        loading="eager"
        width="120"
        height="32"
      />
    </div>
  );
}