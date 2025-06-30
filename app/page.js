import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-purple-200 "> 
      <section className="md:grid md:grid-cols-2 md:h-90vh h-[93vh] items-center py-10 ">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="md:text-3xl text-2xl font-bold">
            Best URL shortner on the internet
          </p>
          <p className="md:px-56 text-center">
            You are on the only staright forward URL shortner
            NeoLinks is a simple and efficient URL shortener that turns long, complex web addresses into short, easy-to-share links. It’s designed for quick access, clean tracking, and seamless sharing across platforms.
          </p>
              <div className='flex gap-3 text-white justify-start'>
                <Link href='/shorten'><button className='bg-purple-900 rounded-lg p-3 py-2 font-bold shadow-lg'>Try Now</button></Link>
                <Link href='/linkedin'><button className='bg-purple-900 rounded-lg p-3 py-2 font-bold shadow-lg'>Linked In</button></Link>
               </div>
        </div>
        <div className="bg-purple-200 md:h-[60vh] h-[40vh] md:w-4xl flex items-baseline  relative top-20" >
          <Image className="mix-blend-darken " alt="vector image" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
