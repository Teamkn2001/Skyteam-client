export default function HomeFooter() {
  return (
    <footer className="h-[10rem] mt-5 bg-black/85 text-white content-center text-center">
      <div className="block lg:hidden ">
        <div className="flex flex-col items-center justify-center gap-2 ">
          <div>
            <h1 className="text-md font-bold">Creator of modern living spaces</h1>
          </div>
          <div className="px-4 text-sm">
            <p>we are proud to have built a reputation for excellence in the real estate industry</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
      <div className="flex flex-col items-center justify-center gap-2 ">
          <div>
            <h1 className="text-xl font-bold">Creator of modern living spaces</h1>
          </div>
          <div className="px-4 text-md">
            <p>we are proud to have built a reputation for excellence in the real estate industry</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
