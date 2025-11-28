
import './App.css'
import foto_perfil from "./assets/foto-perfil-pablo.webp";


function App() {



  return (
    <>
      <header className="
        w-full min-h-screen
  grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2.5fr_1fr] lg:grid-rows-1
  items-center px-4 gap-x-10 gap-y-10
      ">
        {/* <header className="w-full min-h-screen grid grid-cols-[1fr_2.5fr_1fr] items-center px-4 gap-x-10"> */}
        {/* Sección izquierda: foto y cuadros */}
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="flex flex-col gap-4 mt-24">
            <div className="w-10 h-10 bg-warhol-banana" />
            <div className="w-10 h-10 bg-warhol-cyan" />
          </div>
          <img
            src={foto_perfil}
            alt="Foto de Pablo"
  className="w-48 h-48 lg:w-60 lg:h-60 object-cover shadow-lg"

          />

        </div>

        {/* Sección central: título */}
        <div className='text-left'>
          <h1 className="text-warhol-tomato text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Pablo Riverio
          </h1>
          <h2 className=' text-base sm:text-lg lg:text-xl pb-5'>Desarrollo Web / Comunicación / Creatividad</h2>
          <div className='flex flex-row place-items-center'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />
            <a href="#acercaDeMi">
              <h3 className='text-2xl font-bold leading-tight'>Acerca de mi</h3>
            </a>
          </div>
        </div>

        {/* Sección derecha: menú vertical */}
        <nav
          className="
      w-full
      grid grid-cols-2 gap-4 justify-items-end
      lg:flex lg:flex-col lg:items-end
      text-warhol-ink text-sm
  "
        >
          <div className="w-full flex flex-row gap-2 items-center justify-end">
            <a href="#comunicacion" className="hover:text-warhol-electric">Comunicación</a>
            <div className="w-10 h-10 bg-black" />
          </div>
          <div className="w-full flex flex-row gap-2 items-center justify-end">
            <a href="#desarrollo" className="hover:text-warhol-electric">Desarrollo Web</a>
            <div className="w-10 h-10 bg-warhol-cyan" />
          </div>
          <div className="w-full flex flex-row gap-2 items-center justify-end">
            <a href="#creatividad" className="hover:text-warhol-electric">Creatividad</a>
            <div className="w-10 h-10 bg-warhol-banana" />
          </div>
          <div className="w-full flex flex-row gap-2 items-center justify-end">
            <a href="#humor" className="hover:text-warhol-electric">Humor</a>
            <div className="w-10 h-10 bg-warhol-pink" />
          </div>
        </nav>
      </header>

      <main>
        <section id='acercaDeMi' className='flex flex-col bg-white text-warhol-ink w-full px-20 place-items-center py-24 mb-12'>
          <div className='flex flex-row place-items-center w-full'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />
              <h3 className='text-4xl text-warhol-ink font-bold leading-tight'>Acerca de mi</h3>
     
          </div>
          <div className='text-m mt-6 text-justify'>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet adipisci voluptas cupiditate quod unde deserunt sint delectus laboriosam atque qui repellendus reprehenderit deleniti sit cumque quos, similique dolorum blanditiis ut! Vero eligendi modi ad deleniti maiores non alias tempora suscipit, consequuntur fugit similique numquam a pariatur inventore nihil, quis optio saepe ipsum hic error asperiores. Eum sequi aliquid dicta temporibus non impedit ducimus laudantium omnis rerum eos hic, facilis maxime quod!!</p>
          </div>
        </section>
        <section id='comunicacion' className='flex flex-col bg-white text-warhol-ink w-full px-20 place-items-center py-24 mb-12'>
          <div className='flex flex-row place-items-center w-full'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />
                  <h3 className='text-4xl text-warhol-ink font-bold leading-tight'>Comunicación</h3>
              </div>
          <div className='text-m mt-6 text-justify'>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet adipisci voluptas cupiditate quod unde deserunt sint delectus laboriosam atque qui repellendus reprehenderit deleniti sit cumque quos, similique dolorum blanditiis ut! Vero eligendi modi ad deleniti maiores non alias tempora suscipit, consequuntur fugit similique numquam a pariatur inventore nihil, quis optio saepe ipsum hic error asperiores. Eum sequi aliquid dicta temporibus non impedit ducimus laudantium omnis rerum eos hic, facilis maxime quod!!</p>
          </div>
        </section>
        <section id='desarrollo' className='flex flex-col bg-white text-warhol-ink w-full px-20 place-items-center py-24 mb-12'>
          <div className='flex flex-row place-items-center w-full'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />
               <h3 className='text-4xl text-warhol-ink font-bold leading-tight'>Desarrollo Web</h3>

          </div>
          <div className='text-m mt-6 text-justify'>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet adipisci voluptas cupiditate quod unde deserunt sint delectus laboriosam atque qui repellendus reprehenderit deleniti sit cumque quos, similique dolorum blanditiis ut! Vero eligendi modi ad deleniti maiores non alias tempora suscipit, consequuntur fugit similique numquam a pariatur inventore nihil, quis optio saepe ipsum hic error asperiores. Eum sequi aliquid dicta temporibus non impedit ducimus laudantium omnis rerum eos hic, facilis maxime quod!!</p>
          </div>
        </section>
        <section id='creatividad' className='flex flex-col bg-white text-warhol-ink w-full px-20 place-items-center py-24  mb-12'>
          <div className='flex flex-row place-items-center w-full'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />


              <h3 className='text-4xl text-warhol-ink font-bold leading-tight'>Creatividad</h3>

          </div>
          <div className='text-m mt-6 text-justify'>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet adipisci voluptas cupiditate quod unde deserunt sint delectus laboriosam atque qui repellendus reprehenderit deleniti sit cumque quos, similique dolorum blanditiis ut! Vero eligendi modi ad deleniti maiores non alias tempora suscipit, consequuntur fugit similique numquam a pariatur inventore nihil, quis optio saepe ipsum hic error asperiores. Eum sequi aliquid dicta temporibus non impedit ducimus laudantium omnis rerum eos hic, facilis maxime quod!!</p>
          </div>
        </section>
        <section id='humor' className='flex flex-col bg-white text-warhol-ink w-full px-20 place-items-center py-24  mb-12'>
          <div className='flex flex-row place-items-center w-full'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />
              <h3 className='text-4xl text-warhol-ink font-bold leading-tight'>Humor</h3>

          </div>
          <div className='text-m mt-6 text-justify'>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet adipisci voluptas cupiditate quod unde deserunt sint delectus laboriosam atque qui repellendus reprehenderit deleniti sit cumque quos, similique dolorum blanditiis ut! Vero eligendi modi ad deleniti maiores non alias tempora suscipit, consequuntur fugit similique numquam a pariatur inventore nihil, quis optio saepe ipsum hic error asperiores. Eum sequi aliquid dicta temporibus non impedit ducimus laudantium omnis rerum eos hic, facilis maxime quod!!</p>
          </div>
        </section>

      </main>
      <footer>

      </footer>



    </>
  )
}

export default App
