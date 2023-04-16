import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, Mic2, Layout, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className='space-y-5'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Libary
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Linkin Park 4ever ♥</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Best Of Racionais MC's</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Alternative</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>BR💔KEN</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>GYM 💪</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>SADLIST {'):'}</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1 hover:bg-zinc-800'><ChevronLeft /></button>
            <button className='rounded-full bg-black/40 p-1 hover:bg-zinc-800'><ChevronRight /></button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
          <div className=' grid grid-cols-3 gap-4 mt-4'>
            <a href='' className='bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/linkinpark.jpg" width={104} height={104} alt="capa do album" />
              <strong>Live in Texas</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='black' color='black' />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/breakingbenjamin.jpg" width={104} height={104} alt="capa do album" />
              <strong>Ember</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='black' color='black' />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/greenday.jpg" width={104} height={104} alt="capa do album" />
              <strong>American Idiot</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='black' color='black' />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/bringmethehorizon.jpg" width={104} height={104} alt="capa do album" />
              <strong>That's The Spirit</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='black' color='black' />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/orappa.jpg" width={104} height={104} alt="capa do album" />
              <strong>Anjos (Pra quem tem fé)</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='black' color='black' />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/egyptcentral.jpg" width={104} height={104} alt="capa do album" />
              <strong>Egypt Central</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='black' color='black' />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-3xl mt-10'>Made for Heitor Pires</h2>

          <div className='grid grid-cols-6 gap-10 mt-4'>
            <a href='' className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="/linkinpark.jpg" className='w-full' width={120} height={120} alt="capa do album" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Korn, Menphis May Fire, NF and more</span>
            </a>
            <a href='' className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="/linkinpark.jpg" className='w-full' width={120} height={120} alt="capa do album" />
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-500'>Korn, Menphis May Fire, NF and more</span>
            </a>
            <a href='' className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="/linkinpark.jpg" className='w-full' width={120} height={120} alt="capa do album" />
              <strong className='font-semibold'>Daily Mix 3</strong>
              <span className='text-sm text-zinc-500'>Korn, Menphis May Fire, NF and more</span>
            </a>
            <a href='' className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="/linkinpark.jpg" className='w-full' width={120} height={120} alt="capa do album" />
              <strong className='font-semibold'>Daily Mix 4</strong>
              <span className='text-sm text-zinc-500'>Korn, Menphis May Fire, NF and more</span>
            </a>
            <a href='' className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="/linkinpark.jpg" className='w-full' width={120} height={120} alt="capa do album" />
              <strong className='font-semibold'>Daily Mix 5</strong>
              <span className='text-sm text-zinc-500'>Korn, Menphis May Fire, NF and more</span>
            </a>
            <a href='' className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="/linkinpark.jpg" className='w-full' width={120} height={120} alt="capa do album" />
              <strong className='font-semibold'>Daily Mix 6</strong>
              <span className='text-sm text-zinc-500'>Korn, Menphis May Fire, NF and more</span>
            </a>

          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className='flex items-center gap-5'>
          <Image src="/nexttonothing.jpg" width={60} height={60} alt="capa do album" />
          <div className='flex flex-col'>
            <strong className='font-normal'>Next To Nothing</strong>
            <span className='text-zinc-400'>Breaking Benjamin</span>
          </div>
          <Heart size={20} />
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-4'>
            <Shuffle className='text-zinc-200' size={20} />
            <SkipBack className='text-zinc-200' size={20} />
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play fill='black' color='black' />
            </button>
            <SkipForward className='text-zinc-200' size={20} />
            <Repeat className='text-zinc-200' size={20} />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:30</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-20 h-1 rounded-full' />
            </div>
            <span className='text-xs text-zinc-400'>3:43</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className='flex items-center gap-2'>
            <Volume size={20} />
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full' />
            </div>
          </div>
          <Maximize2 />
        </div>
      </footer>
    </div>
  )
}
