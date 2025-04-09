import Image from 'next/image'
import Link from 'next/link'
import Search from './search'
import { ShoppingCart } from 'lucide-react'


export default function Navbar() {

  const linksToNavigate = [
    {id: 1, href: '#', title: 'About us'},
    {id: 2, href: '#', title: 'Our Product'},
    {id: 3, href: '#', title: 'Delivery'}
  ]

  return (
    <header className='fixed top-0 w-full'>
      <nav className='max-w-[1440px] w-full flex justify-between mx-auto p-4 items-center'>
        <div>
          <Image
            src='/logo.svg'
            alt='Logo Cafe Street'
            width={150}
            height={30}
            priority/>
        </div>
        <div className='flex gap-4'>
          {linksToNavigate.map((link) => (
            <Link
            href={link.href}
            key={link.id}
            className='text-md cursor-pointer hover:text-primary'>
              {link.title}
            </Link>
          ))}
        </div>
        <div className='flex gap-3 items-center'>
          <Search/>
          <button><ShoppingCart/></button>
        </div>
      </nav>
    </header>
  )
}
