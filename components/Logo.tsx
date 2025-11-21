export function Logo({ variant = 'light', className = '' }: { variant?: 'light' | 'dark'; className?: string }) {
  return (
    <div 
      className={className || "h-[30px] sm:h-[30px] md:h-[29px] lg:h-[20px] flex items-center min-h-[30px] sm:min-h-[30px] md:min-h-[29px] lg:min-h-[20px]"}
      style={{ height: '30px', minHeight: '30px' }}
    >
      <img 
        src="/media/teasy-marketing-logo.png" 
        alt="TEASY Marketing" 
        className="h-full w-auto object-contain max-h-[30px] sm:max-h-[30px] md:max-h-[29px] lg:max-h-[20px]"
        style={{ maxHeight: '30px', height: '100%', width: 'auto' }}
        loading="eager"
        width="120"
        height="32"
      />
    </div>
  );
}