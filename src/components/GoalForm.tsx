import { type FormEvent } from "react";

const inputClasses =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none transition focus:border-zinc-900";
const buttonClasses =
  "cursor-pointer rounded-md px-4 py-2 font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

type GoalFormProps = {
  onAdd: (title: string, duration: number) => void;
};

export function GoalForm({ onAdd }: GoalFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const title = String(data.get("title")).trim();
    const duration = Number(data.get("duration"));

    if (!title || duration <= 0) return;

    onAdd(title, duration);
    form.reset();
    (form.elements.namedItem("title") as HTMLInputElement | null)?.focus();
  }

  return (
    <form
      className="mb-8 overflow-hidden rounded-lg border-2 border-zinc-900 bg-white"
      onSubmit={handleSubmit}
    >
      <div className="retro-header-versus">
        <div className="retro-copy">
          <p className="retro-kicker">CHARACTER SELECT</p>
          <h2 className="retro-title">Choose your next opponent</h2>
        </div>
        <span aria-hidden="true" className="retro-vs">VS</span>
      </div>

      <div className="label-score">
        <div>
          <label className="field-label" htmlFor="title">Goal title</label>
          <input autoComplete="off" className={inputClasses} id="title" name="title" placeholder="e.g. Calculus revision" required />
        </div>
        <div>
          <label className="field-label" htmlFor="duration">Starting health</label>
          <div className="relative">
            <input className={`${inputClasses} pr-16 tabular-nums`} id="duration" min="0.1" name="duration" placeholder="60" required step="0.1" type="number" />
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs font-bold text-zinc-500">MIN</span>
          </div>
        </div>
        <button className={`${buttonClasses} bg-blue-600 text-white hover:bg-blue-700 sm:col-span-2`} type="submit">Add fighter</button>
      </div>
    </form>
  );
}
