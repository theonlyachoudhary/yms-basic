"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  return (
  <nav className="bg-white shadow-sm border-b py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image src="/g176.svg" alt="Youth Muslim Sports Logo" width={160} height={70} className="block" priority />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-xl font-medium font-oswald">Home</Link>
                <Link href="/programs" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-xl font-medium font-oswald">Programs</Link>
                <Link href="/about" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-xl font-medium font-oswald">About</Link>
                <Link href="/contact" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-xl font-medium font-oswald">Contact</Link>
              </div>
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700 text-lg">Explore Programs</Button>
          </div>
        </div>
      </nav>
  );
}
