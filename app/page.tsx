import Image from "next/image";


export default function Home() {
  return (
    <div className="h-screen overflow-hidden p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-2 gap-8 row-start-2 items-start justify-between w-full h-[calc(100vh-200px)]">
        
        <div className="grid grid-cols-1 gap-2 pl-48 sticky top-20">
          <div className="grid items-center gap-2">
            <a href="?"><h1 className="text-4xl font-bold mb-4 text-gray-100">Dishan Bhattacharya</h1></a>
            <h2 className="text-2xl text-gray-200 mb-2">Computer Science & Economics @ Purdue</h2>
            <p className="text-gray-400">
              I strive to directly tackle issues through data and technology.
              <br></br>
              Check my resume out below.
            </p>
          </div>

    


        </div>

        <div className="flex-1 max-w-xl overflow-y-auto max-h-[calc(100vh-200px)] sticky top-16 pt-20">
          <div className="space-y-16">
            
          

            
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center py-8 mt-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/disbh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="GitHub Icon"
            width={24}
            height={24}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/dishanb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.png"
            alt="LinkedIn Icon"
            width={24}
            height={24}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={20}
            height={20}
          />
          Full Resume
        </a>
      </footer>
    </div>
  );
}


