export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-base)] py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 text-sm text-[var(--text-secondary)] sm:px-6 lg:px-8">
        © {new Date().getFullYear()} A.B. · Built with purpose.
      </div>
    </footer>
  )
}
