export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 text-center">
      <h1 className="text-4xl font-bold">My Portfolio</h1>
      <p className="text-lg text-muted-foreground max-w-[600px]">
        I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences.
      </p>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <time className="text-sm text-muted-foreground">April 9, 2024</time>
            <a href="#" className="hover:underline">
              Embracing Vim: The Unsung Hero of Code Editors
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <time className="text-sm text-muted-foreground">April 8, 2024</time>
            <a href="#" className="hover:underline">
              Spaces vs. Tabs: The Indentation Debate Continues
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <time className="text-sm text-muted-foreground">April 7, 2024</time>
            <a href="#" className="hover:underline">
              The Power of Static Typing in Programming
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">
            rss
          </a>
          <a href="#" className="hover:text-foreground">
            github
          </a>
          <a href="#" className="hover:text-foreground">
            view source
          </a>
        </div>
      </div>
    </div>
  );
}
