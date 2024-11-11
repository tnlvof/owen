export function PostLoading() {
  return (
    <div className="py-8 mx-auto max-w-2xl w-full">
      <div className="mb-8 space-y-4">
        <div className="h-8 bg-muted rounded-lg w-2/3 animate-pulse" />
        <div className="h-5 bg-muted rounded-lg w-1/2 animate-pulse" />
      </div>
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 bg-muted rounded animate-pulse w-full" />
            <div className="h-4 bg-muted rounded animate-pulse w-[95%]" />
            <div className="h-4 bg-muted rounded animate-pulse w-[90%]" />
          </div>
        ))}
      </div>
    </div>
  );
}
