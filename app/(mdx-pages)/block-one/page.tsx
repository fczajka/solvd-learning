import { block_1 } from '@/public/content';
import Link from 'next/link';

export default function BlockOne() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-4 text-3xl'>
      {block_1.map((block) => (
        <Link key={block.name} href={block.href}>
          {block.name}
        </Link>
      ))}
    </div>
  );
}
