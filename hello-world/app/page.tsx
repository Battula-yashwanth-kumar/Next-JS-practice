import Link from 'next/link';

export default function Home() {
  return (
    <div>
      Hello
      <Link href='/blog'>Blog</Link>
      <Link href='/dynmaicproduct'>Products</Link>
    </div>
  )
}
