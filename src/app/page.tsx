import Image from 'next/image';
import { Navigation } from '@/app/ui/components/navigation';

export default function Home() {
  return (
    <div className='w-full h-screen bg-lightBg dark:bg-darkBg'>
      <Navigation />
    </div>
  );
}
