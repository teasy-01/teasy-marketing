export function Logo({ variant = 'light', className = '' }: { variant?: 'light' | 'dark'; className?: string }) {
  return (
    <div className={className || "h-8 sm:h-8 md:h-6 lg:h-2 flex items-center min-h-[32px] sm:min-h-[32px] md:min-h-[24px] lg:min-h-[8px]"}>
      <img 
        src="/media/teasy-marketing-logo.png" 
        alt="TEASY Marketing" 
        className="h-full w-auto object-contain max-h-[32px] sm:max-h-[32px] md:max-h-[24px] lg:max-h-[8px]"
        loading="eager"
        width="120"
        height="32"
      />
    </div>
  );
}