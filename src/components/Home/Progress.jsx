export default function Progress({ progress }) {
  return (
    <div className="space-y-1">
      <div className="relative flex justify-center items-center w-full">
        <img
          src={"/logo.png"}
          className="object-contain w-44 aspect-square animate-animate absolute"
          alt=""
        />
        <img
          src={"/logo1.png"}
          className="object-contain w-44 aspect-square"
          alt=""
        />
      </div>

      <div className="w-80 bg-gray-200 rounded-full h-1 dark:bg-gray-700">
        <div
          className="bg-primary h-full transition-all duration-300 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <h2 className="text-primary transition-all font-medium duration-300">
        {progress}%
      </h2>
    </div>
  );
}
