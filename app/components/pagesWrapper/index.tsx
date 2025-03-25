import Link from 'next/link';
import { PagesWrapperProps } from './interface';

export default function PagesWrapper({ blocks }: PagesWrapperProps) {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-4 text-3xl'>
      {blocks.map((block) => (
        <Link key={block.name} href={block.href}>
          {block.name}
        </Link>
      ))}
    </div>
  );
}
