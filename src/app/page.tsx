import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className='flex flex-col items-center justify-center w-full h-full relative'>
        <div className='px-4 md:px-0 flex flex-col h-[70vh] lg:h-[100vh] z-10 items-center justify-center'>
          <h1 className='text-4xl lg:text-7xl text-white font-bold uppercase leading-normal'>
            Jovens que confiam, <br /> planos que se estabelecem
          </h1>
        </div>
        <video src="/umadeb.mp4" autoPlay loop muted className="w-full absolute top-0 h-[70vh] lg:h-[100vh] object-cover" />
        <div className='backdrop bg-blue-900 bg-opacity-60 h-[70vh] lg:h-[100vh] w-full z-5 absolute top-0' />
      </div>
      <section className='px-4 flex flex-col items-center justify-center w-full h-full text-white bg-[#02005a] py-16'>
        <h2 className='text-2xl lg:text-5xl text-white font-bold uppercase leading-normal mb-8'>
          Confira nossa loja
        </h2>
        <div className='w-full h-[100vh] '>
          <iframe src='https://www.agathosconfeccoes.com.br/categoria/4767250/umadeb/' className='w-full lg:w-[80%] m-auto h-full'  />
        </div>
      </section>
    </main>
  )
}
