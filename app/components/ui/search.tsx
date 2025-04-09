import { SearchIcon } from 'lucide-react'

export default function Search() {
  return (
    <form className='relative'>
      <SearchIcon
      className='absolute top-1/2 -translate-1/2 left-4 cursor-pointer'/>
      <input
      type='search'
      name='search'
      placeholder='cappucino'
      className='bg-white pl-9 pr-2 py-1 rounded-2xl outline-none max-w-[220px]'
      />
    </form>
  )
}
