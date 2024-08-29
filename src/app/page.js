export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cozy text-gray-800">
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center mt-20">
        <section id="hero" className="h-screen flex items-center justify-center">
          <div>
            <h1 className="text-5xl font-bold text-primary">Cozy Comfort for Your Home</h1>
            <p className="mt-4 text-lg text-secondary">Experience the warmth and softness in every thread.</p>
            <a href="https://www.amazon.com/dp/YOUR_PRODUCT_ID" className="mt-8 inline-block bg-button text-white px-6 py-3 rounded hover-bg-button">
              Shop on Amazon
            </a>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">About Us</h2>
            <p className="text-lg text-secondary">
              At Dreamy Environments, our mission is to bring warmth and comfort into every home with our carefully crafted products.
            </p>
          </div>
        </section>

        <section id="products" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow rounded p-4 border-2">
                <h3 className="text-2xl font-bold text-secondary mb-2">Hair Towel Turban</h3>
                <p className="text-secondary">
                  Ultra-soft and absorbent, perfect for quick and comfortable drying. Available now on Amazon.
                </p>
                <a href="https://www.amazon.com/dp/YOUR_PRODUCT_ID" className="mt-4 inline-block bg-button text-white px-4 py-2 rounded hover-bg-button">
                  Buy on Amazon
                </a>
              </div>
              <div className="bg-white shadow rounded p-4 border-2">
                <h3 className="text-2xl font-bold text-secondary mb-2">More Products Coming Soon</h3>
                <p className="text-secondary">
                  Stay tuned for our upcoming range of cozy home textiles.
                </p>
                <a href="#contact" className="mt-4 inline-block bg-button text-white px-4 py-2 rounded hover-bg-button">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">Contact Us</h2>
            <form className="flex flex-col space-y-4 max-w-md mx-auto">
              <input type="text" placeholder="Name" className="p-3 border-cozy border-2 bg-white text-gray-800 rounded"/>
              <input type="email" placeholder="Email" className="p-3 border-cozy border-2 bg-white text-gray-800 rounded"/>
              <textarea placeholder="Message" className="p-3 border-cozy border-2 bg-white text-gray-800 rounded h-32"></textarea>
              <button className="bg-button text-white px-6 py-3 rounded hover-bg-button" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="w-full bg-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">© 2024 Dreamy Environments. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}