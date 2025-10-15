import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center space-y-2 text-slate-400 pb-6 sm:pb-8 mt-8">
      <div className="text-xs">
        <span>© {new Date().getFullYear()} TRAVoices. All rights reserved.</span>
        <span className="mx-2">|</span>
        <Link href="https://www.sitedz.store" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          www.sitedz.store
        </Link>
      </div>
    </footer>
  );
}
