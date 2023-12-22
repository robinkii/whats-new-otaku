import Image from 'next/image';
import { Navigation } from '@/app/ui/components/navigation';

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <Navigation />
    </div>
  );
}
