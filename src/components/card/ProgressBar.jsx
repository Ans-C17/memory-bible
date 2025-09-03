function ProgressBar({ progress }) {
  return (
    <div className="w-full h-2.5 bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className="bg-emerald-200 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
