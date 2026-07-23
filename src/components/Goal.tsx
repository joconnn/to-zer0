import { type FormEvent } from "react";

const inputClasses =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none transition placeholder:text-zinc-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-600";
const buttonClasses =
  "cursor-pointer rounded-md px-4 py-2 font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

export type GoalData = {
  id: string;
  title: string;
  duration: number;
  maxDuration?: number;
};

type GoalProps = {
  goal: GoalData;
  onDeduct: (goalId: string, amount: number) => void;
  onDelete: (goalId: string) => void;
};

export function Goal({ goal, onDeduct, onDelete }: GoalProps) {
  function handleDeduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const amount = Number(new FormData(event.currentTarget).get("amount"));

    if (amount <= 0) return;
    onDeduct(goal.id, amount);
  }

  const maxDuration = Math.max(goal.maxDuration ?? goal.duration, goal.duration);
  const health = maxDuration === 0 ? 0 : (goal.duration / maxDuration) * 100;
  const complete = goal.duration === 0;

  return (
    <li
      className={`overflow-hidden rounded-md border bg-white transition-colors ${
        complete ? "border-green-600 bg-green-50" : "border-zinc-200"
      }`}
    >
      <div className="flex items-start justify-between gap-4 bg-zinc-900 px-4 py-3 text-white">
        <div className="min-w-0">
          <span className="text-xs font-bold text-blue-300">PLAYER</span>
          <h3 className="truncate text-xl font-black tracking-tight">{goal.title}</h3>
        </div>
        <span className="shrink-0 border border-white/20 bg-white/10 px-2 py-1 text-sm font-bold tabular-nums">
          {complete ? "KO" : `${goal.duration} MIN`}
        </span>
      </div>

      <div className="px-4 pt-4">
        <div className="mb-1 flex items-center justify-between text-xs font-bold">
          <span>STUDY HEALTH</span>
          <span className="tabular-nums" aria-hidden="true">
            {Math.round(health)}%
          </span>
        </div>
        <div
          aria-label={`${goal.title} has ${goal.duration} of ${maxDuration} minutes remaining`}
          aria-valuemax={maxDuration}
          aria-valuemin={0}
          aria-valuenow={goal.duration}
          className="h-5 overflow-hidden border-2 border-zinc-900 bg-zinc-200 p-0.5"
          role="progressbar"
        >
          <div
            className={`h-full transition-[width] duration-300 ease-out ${
              complete ? "bg-green-600" : "bg-blue-600"
            }`}
            style={{ width: `${health}%` }}
          />
        </div>
      </div>

      <div className="p-4">
        <p className="mb-3 text-sm text-zinc-600">
          Remaining: <strong className="text-zinc-900">{goal.duration}</strong> minute(s)
        </p>

        <form className="flex flex-col gap-2 sm:flex-row" onSubmit={handleDeduct}>
          <input
            aria-label={`Minutes completed for ${goal.title}`}
            className={inputClasses}
            disabled={complete}
            min="0.1"
            name="amount"
            placeholder={complete ? "Goal complete" : "Minutes completed"}
            required
            step="0.1"
            type="number"
          />
          <button
            className={`${buttonClasses} shrink-0 bg-zinc-900 text-white hover:bg-zinc-700 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-600`}
            disabled={complete}
            type="submit"
          >
            Deduct health
          </button>
        </form>

        <button
          className={`${buttonClasses} mt-3 w-full border border-red-300 bg-red-50 text-red-800 hover:bg-red-100`}
          onClick={() => onDelete(goal.id)}
          type="button"
        >
          Delete goal
        </button>
      </div>
    </li>
  );
}
