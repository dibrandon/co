export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <header className="w-full fixed top-0 bg-black bg-opacity-80 shadow">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-xl font-bold text-neon">Dreamy</div>
          <ul className="flex space-x-8">
            <li>
              <a href="#about" className="hover:text-neon">About Us</a>
            </li>
            <li>
              <a href="#products" className="hover:text-neon">Products</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-neon">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center mt-20">
        <section id="hero" className="h-screen bg-cyberpunk-gradient flex items-center justify-center">
          <div>
            <h1 className="text-5xl font-bold text-neon">Revolutionizing Home Textiles</h1>
            <p className="mt-4 text-lg text-gray-300">Quality and elegance in every thread.</p>
            <a href="#products" className="mt-8 inline-block border-neon text-neon border-2 px-6 py-3 rounded hover-bg-neon">
              Discover Our Products
            </a>
          </div>
        </section>

        <section id="about" className="py-20 bg-black bg-opacity-90">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-neon mb-6">About Us</h2>
            <p className="text-lg text-gray-300">
              At Dreamy, we are committed to offering high-quality textile products that combine functionality and elegant design.
            </p>
          </div>
        </section>

        <section id="products" className="py-20 bg-black bg-opacity-80">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-neon mb-6">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cyberpunk-gradient shadow rounded p-4 border-neon border-2">
                <h3 className="text-2xl font-bold text-neon mb-2">Hair Towel Turban</h3>
                <p className="text-gray-300">
                  Ultra-soft and absorbent, perfect for quick and comfortable drying.
                </p>
              </div>
              <div className="bg-cyberpunk-gradient shadow rounded p-4 border-neon border-2">
                <h3 className="text-2xl font-bold text-neon mb-2">More Products Coming Soon</h3>
                <p className="text-gray-300">
                  We are developing new textile products for your home. Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-black bg-opacity-90">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-neon mb-6">Contact</h2>
            <form className="flex flex-col space-y-4 max-w-md mx-auto">
              <input type="text" placeholder="Name" className="p-3 border-neon border-2 bg-black text-white rounded"/>
              <input type="email" placeholder="Email" className="p-3 border-neon border-2 bg-black text-white rounded"/>
              <textarea placeholder="Message" className="p-3 border-neon border-2 bg-black text-white rounded h-32"></textarea>
              <button className="bg-neon text-black px-6 py-3 rounded hover-bg-neon" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="w-full bg-black bg-opacity-80 py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">© 2024 Dreamy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
