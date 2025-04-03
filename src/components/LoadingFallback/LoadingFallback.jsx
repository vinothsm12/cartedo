const LoadingFallback = ({ text }) => (
  <div className="flex justify-center items-center p-8">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    <p className="ml-4">{text}</p>
  </div>
);
export default LoadingFallback;
