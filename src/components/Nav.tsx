

export const Nav = () => {
  return (
   <div className="flex min-h-screen static ">
  
  {/* Sidebar */}
  <nav className="w-64 bg-pink-100 p-6">
    
    <h1 className="mb-10 text-2xl font-bold text-pink-700">
      🌸 Daily Tracker
    </h1>

    <div className="flex flex-col gap-3">
      <button className="rounded-xl p-3 text-left hover:bg-pink-200">
        🏠 Home
      </button>

      <button className="rounded-xl p-3 text-left hover:bg-pink-200">
        ❤️ Health
      </button>

      <button className="rounded-xl p-3 text-left hover:bg-pink-200">
        🎨 Hobbies
      </button>

      <button className="rounded-xl p-3 text-left hover:bg-pink-200">
        👗 Wardrobe
      </button>
    </div>

    <button className="mt-10 w-full rounded-xl p-3 text-left hover:bg-pink-200">
      ⚙️ Settings
    </button>

  </nav>


  {/* Main content */}
  <main className="flex-1 p-6">
    {/* Your search + cards go here */}
  </main>

</div>
   
  );
}

export default Nav;