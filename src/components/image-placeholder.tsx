type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-border bg-secondary text-center text-sm text-muted-foreground ${className ?? ""}`}
    >
      <span className="px-4">{label}</span>
    </div>
  );
}
