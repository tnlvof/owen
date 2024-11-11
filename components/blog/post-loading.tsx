export function PostLoading() {
  return (
    <div className="py-8 mx-auto max-w-2xl animate-pulse">
      <div className="mb-8">
        <div className="h-8 w-3/4 bg-muted rounded-lg mb-4" />
        <div className="h-6 w-1/2 bg-muted rounded-lg" />
      </div>
      <div className="space-y-4">
        <div className="h-4 bg-muted rounded" />
        <div className="h-4 bg-muted rounded w-11/12" />
        <div className="h-4 bg-muted rounded w-4/5" />
        <div className="h-4 bg-muted rounded w-2/3" />
      </div>
    </div>
  );
}
