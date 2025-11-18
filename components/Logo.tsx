export function Logo({ variant = 'light', className = '' }: { variant?: 'light' | 'dark'; className?: string }) {
  return (
    <div className={className || "h-4 flex items-center"}>
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