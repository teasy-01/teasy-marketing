export function Logo({ variant = 'light', className = '' }: { variant?: 'light' | 'dark'; className?: string }) {
  return (
    <div className={className || "h-7 sm:h-7 md:h-6 lg:h-[20px] flex items-center min-h-[28px] sm:min-h-[28px] md:min-h-[24px] lg:min-h-[20px]"}>
      <img 
        src="/media/teasy-marketing-logo.png" 
        alt="TEASY Marketing" 
        className="h-full w-auto object-contain max-h-[28px] sm:max-h-[28px] md:max-h-[24px] lg:max-h-[20px]"
        loading="eager"
        width="120"
        height="32"
      />
    </div>
  );
}