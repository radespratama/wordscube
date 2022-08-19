export function CircleIcon({ stroke }: { stroke: string }) {
  return (
    <svg
      width={14}
      height={14}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={stroke}
        strokeWidth={4}
        className="stroke-gray-600 dark:stroke-gray-700"
      />
    </svg>
  );
}
