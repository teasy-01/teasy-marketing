export function Logo({ variant = 'light', className = '' }: { variant?: 'light' | 'dark'; className?: string }) {
  return (
    <div 
      className={className || "h-[20px] sm:h-[20px] md:h-[29px] lg:h-[20px] flex items-center min-h-[20px] sm:min-h-[20px] md:min-h-[29px] lg:min-h-[20px]"}
    >
      <img 
        src="/media/teasy-marketing-logo.png" 
        alt="TEASY Marketing" 
        className="h-full w-auto object-contain max-h-[20px] sm:max-h-[20px] md:max-h-[29px] lg:max-h-[20px]"
        loading="eager"
        width="120"
        height="32"
      />
    </div>
  );
}