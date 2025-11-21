export function Logo({ variant = 'light', className = '' }: { variant?: 'light' | 'dark'; className?: string }) {
  return (
    <div 
      className={className || "h-[36px] sm:h-[36px] md:h-[29px] lg:h-[20px] flex items-center min-h-[36px] sm:min-h-[36px] md:min-h-[29px] lg:min-h-[20px]"}
      style={{ height: '36px', minHeight: '36px' }}
    >
      <img 
        src="/media/teasy-marketing-logo.png" 
        alt="TEASY Marketing" 
        className="h-full w-auto object-contain max-h-[36px] sm:max-h-[36px] md:max-h-[29px] lg:max-h-[20px]"
        style={{ maxHeight: '36px', height: '100%', width: 'auto' }}
        loading="eager"
        width="120"
        height="32"
      />
    </div>
  );
}