export function ProfileImage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[360px] overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-[var(--bg-subtle)] p-6 shadow-sm sm:mx-0">
      <div className="flex h-full w-full items-center justify-center rounded-[1.75rem] bg-[var(--bg-base)] text-[var(--text-secondary)]">
        <span className="text-sm uppercase tracking-[0.24em]">Profile image</span>
      </div>
    </div>
  )
}
