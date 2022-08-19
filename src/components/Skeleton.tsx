import { CircleIcon } from "./Icon";

export function NoteCardSkeleton() {
  return (
    <div className="blogs-content flex lg:gap-x-6 animate-pulse">
      <div className="w-2/12 hidden lg:block">
        <div className="min-w-[6.688rem] min-h-[1.5rem] bg-gray-300 dark:bg-gray-700 rounded-md" />
      </div>
      <div className="hidden lg:flex flex-col items-center">
        <CircleIcon stroke="stroke-white" />
        <span className="bg-gray-300 dark:bg-gray-700 h-full w-px" />
        <CircleIcon stroke="stroke-white" /> 
      </div>
      <div className="w-full sm:w-11/12">
        <div className="md:pl-4 mb-12">
          <div className="block lg:hidden -mt-0.5 mb-2 bg-gray-300 dark:bg-gray-700 max-w-[3.75rem] min-h-[0.875rem] rounded-[4px]" />
          <div className="mb-2 bg-gray-300 dark:bg-gray-700 max-w-[16rem] min-h-[1.5rem] rounded-md" />
          <div className="mb-3 bg-gray-300 dark:bg-gray-700 max-w-[30rem] min-h-[3.25rem] rounded-md" />
          <div className="mt-2 bg-gray-300 dark:bg-gray-700 max-w-[6rem] min-h-[1.5rem] rounded-md" />
        </div>
      </div>
    </div>
  );
}
