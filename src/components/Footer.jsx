export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-10 text-paper/50 md:px-10 lg:pl-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <img src="/images/kflora-logo.png" alt="KFlora" className="h-7 w-7 object-contain opacity-90" />
          <span className="font-display text-sm text-paper/80">KFlora</span>
        </div>
        <p className="text-xs">584/5 Kandy Rd, Kadawatha &middot; 070 235 0583</p>
        <p className="text-xs">&copy; {new Date().getFullYear()} KFlora</p>
      </div>
    </footer>
  )
}
