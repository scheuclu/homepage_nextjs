import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      {/* <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" /> */}

      <p className="text-5xl font-bold  dark:text-blue-200 text-center">{name}</p>
      <p className="text-xl dark:text-white text-center">{"Freelance Software Engineer"}</p>

      {/* 
      <div class="flex h-screen w-full bg-blue-400 justify-center items-center">
        <img src="/images/profile_quadratic.jpg">
      </div> */}

      <img className="center align-center mt-4 rounded-lg backdrop-blur-lg h-60 sm:ml-16" src="/images/profile_quadratic.jpg" alt="" />
      {/* <div class="image-blurred-edge shadow-2xl shadow-inner shadow-green-800 h-80"></div> */}

    </header>

  );
}

