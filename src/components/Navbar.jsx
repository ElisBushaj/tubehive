export default function Navbar() {
  return (
    <nav className="flex w-full">
      <div className="select-none w-40 relative flex">
        <a href="/">
          <div className="cursor-pointer p-1 m-4">
            <img
              src={"/nav.png"}
              className="object-contain w-28 animate-animate absolute"
              alt=""
            />
            <img src={"/nav1.png"} className="object-contain w-28" alt="" />
          </div>
        </a>
      </div>
    </nav>
  );
}
