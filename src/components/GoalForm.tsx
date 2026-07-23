import { type FormEvent } from "react";

const inputClasses =
  "w-full border-2 border-violet-400 bg-[#0b0714] px-3 py-2 text-white outline-none transition placeholder:text-violet-200 focus:border-yellow-300";
const buttonClasses =
  "pixel-font cursor-pointer px-4 py-3 text-[8px] transition active:translate-y-px motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300";

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
      className="mb-8 overflow-hidden border-2 border-fuchsia-400 bg-[#24153f]"
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
            <span className="pixel-font pointer-events-none absolute inset-y-0 right-3 flex items-center text-[8px] text-yellow-300">MIN</span>
          </div>
        </div>
        <button className={`${buttonClasses} bg-fuchsia-500 text-[#08050e] hover:bg-fuchsia-400 sm:col-span-2`} type="submit">Add fighter</button>
      </div>
    </form>
  );
}
