export default function BulletList({ points }: { points: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
          <span className="text-blue-500 mt-1">•</span>
          {point}
        </li>
      ))}
    </ul>
  );
}

