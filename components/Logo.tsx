const logoText = 'TEASY';

export function Logo({ variant = 'light', className = '' }: { variant?: 'light' | 'dark'; className?: string }) {
  return (
    <div className={className || "h-8 flex items-center font-bold text-lg"}>
      <span style={{ 
        color: variant === 'dark' ? '#000' : '#fff',
        fontSize: '18px',
        fontWeight: 'bold',
        letterSpacing: '2px'
      }}>
        {logoText}
      </span>
    </div>
  );
}