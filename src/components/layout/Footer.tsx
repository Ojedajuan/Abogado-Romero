export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-center px-4 md:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} LawPortfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
