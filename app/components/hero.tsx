import Navbar from '@/app/components/ui/navbar'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
export default function Hero() {
  return (
    <main className='h-screen flex items-center justify-center'>
      <Navbar/>
      <Image 
        src='/coffee-beans.svg'
        alt='coffee beans picture'
        width={550}
        height={300}
        className='absolute -top-0 -right-0 -z-10'/>

      <section className='flex justify-between gap-4 flex-1 p-4 mx-auto max-w-[1440px]'>
        <div className='flex flex-col justify-center items-start gap-7'>
          <h1 className='text-5xl/20 font-[600] text-brown max-w-[620px]'>Enjoy your <span className='text-orange'>coffee</span> before your activity</h1>
          <p className='text-gray-500 text-lg max-w-[70%]'>Boost your productivity and build your mood with a glass of coffee in the morning </p>
          <Button className='bg-brown rounded-4xl cursor-pointer hover:bg-brown'>
            Order now
            <div className='bg-orange p-1 rounded-full'>
              <ShoppingCart className='w-6 h-6'/>
            </div>
            
          </Button>
        </div>

        <div className=''>
          <Image 
          src='/img-hero.png'
          alt='Hero Picture'
          width={530}
          height={420}
          className='w-full h-auto'/>
        </div>
      </section>  
    </main>
  )
}
