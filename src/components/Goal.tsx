import { type FormEvent } from "react";

const inputClasses =
  "w-full border-2 border-violet-400 bg-[#0b0714] px-3 py-2 text-white outline-none transition placeholder:text-violet-200 focus:border-yellow-300 disabled:cursor-not-allowed disabled:border-violet-900 disabled:text-violet-400";
const buttonClasses =
  "pixel-font cursor-pointer px-4 py-3 text-[8px] transition active:translate-y-px motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300";

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
      className={`overflow-hidden border-2 bg-[#24153f] text-white transition-colors ${
        complete ? "border-green-400 bg-[#102b22]" : "border-violet-400"
      }`}
    >
      <div className="flex items-start justify-between gap-4 border-b-2 border-fuchsia-400 bg-[#0b0714] px-4 py-3 text-white">
        <div className="min-w-0">
          <span className="pixel-font text-[8px] text-yellow-300">PLAYER 1</span>
          <h3 className="arcade-heading truncate text-xl font-black uppercase">{goal.title}</h3>
        </div>
        <span className="pixel-font shrink-0 border border-fuchsia-400 bg-[#24153f] px-2 py-2 text-[8px] text-yellow-300 tabular-nums">
          {complete ? "KO" : `${goal.duration} MIN`}
        </span>
      </div>

      <div className="px-4 pt-4">
        <div className="pixel-font mb-2 flex items-center justify-between text-[8px] text-violet-100">
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
          className="h-6 overflow-hidden border-2 border-yellow-300 bg-[#0b0714] p-0.5"
          role="progressbar"
        >
          <div
            className={`h-full transition-[width] duration-300 ease-out motion-reduce:transition-none ${
              complete ? "bg-green-400" : "bg-fuchsia-500"
            }`}
            style={{ width: `${health}%` }}
          />
        </div>
      </div>

      <div className="p-4">
        <p className="mb-3 text-sm text-violet-200">
          Remaining: <strong className="text-yellow-300">{goal.duration}</strong> minute(s)
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
            className={`${buttonClasses} shrink-0 bg-fuchsia-500 text-[#08050e] hover:bg-fuchsia-400 disabled:cursor-not-allowed disabled:bg-violet-900 disabled:text-violet-400`}
            disabled={complete}
            type="submit"
          >
            Deduct health
          </button>
        </form>

        <button
          className={`${buttonClasses} mt-3 w-full border border-violet-400 bg-transparent text-violet-200 hover:bg-violet-900`}
          onClick={() => onDelete(goal.id)}
          type="button"
        >
          Delete goal
        </button>
      </div>
    </li>
  );
}
