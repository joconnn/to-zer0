import { useState, type FormEvent } from "react";

const STORAGE_KEY = "studyGoals";

type Goal = {
  id: string;
  title: string;
  duration: number;
};

function loadGoals(): Goal[] {
  try {
    const storedGoals = localStorage.getItem(STORAGE_KEY);
    return storedGoals ? (JSON.parse(storedGoals) as Goal[]) : [];
  } catch {
    return [];
  }
}

function App() {
  const [goals, setGoals] = useState<Goal[]>(loadGoals);

  function updateGoals(nextGoals: Goal[]) {
    setGoals(nextGoals);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextGoals));
  }

  function addGoal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const title = String(data.get("title")).trim();
    const duration = Number(data.get("duration"));

    if (!title || duration <= 0) return;

    updateGoals([...goals, { id: crypto.randomUUID(), title, duration }]);
    form.reset();
    (form.elements.namedItem("title") as HTMLInputElement | null)?.focus();
  }

  function deductTime(goalId: string, event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const amount = Number(new FormData(form).get("amount"));

    if (amount <= 0) return;

    updateGoals(
      goals.map((goal) =>
        goal.id === goalId
          ? {
              ...goal,
              duration: Number(Math.max(0, goal.duration - amount).toFixed(2)),
            }
          : goal,
      ),
    );
  }

  function deleteGoal(goalId: string) {
    updateGoals(goals.filter((goal) => goal.id !== goalId));
  }

  const inputClasses =
    "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";
  const buttonClasses =
    "cursor-pointer rounded-md px-4 py-2 font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

  return (
    <main className="mx-auto my-10 max-w-3xl rounded-lg bg-white p-6 shadow-sm">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Target to Zero</h1>

      <form className="mb-8 grid gap-3" onSubmit={addGoal}>
        <div>
          <label className="mb-1 block font-bold" htmlFor="title">
            Title
          </label>
          <input className={inputClasses} id="title" name="title" required />
        </div>

        <div>
          <label className="mb-1 block font-bold" htmlFor="duration">
            Duration in minutes
          </label>
          <input
            className={inputClasses}
            id="duration"
            min="0.1"
            name="duration"
            required
            step="0.1"
            type="number"
          />
        </div>

        <button
          className={`${buttonClasses} bg-blue-600 text-white hover:bg-blue-700`}
          type="submit"
        >
          Add study goal
        </button>
      </form>

      <h2 className="mb-4 text-2xl font-bold">Goals</h2>
      {goals.length === 0 ? (
        <p className="text-zinc-500">No goals yet.</p>
      ) : (
        <ul className="grid list-none gap-3 p-0">
          {goals.map((goal) => (
            <li
              className={`rounded-md border p-4 ${
                goal.duration === 0
                  ? "border-green-600 bg-green-50"
                  : "border-zinc-200"
              }`}
              key={goal.id}
            >
              <h3 className="mb-2 text-lg font-bold">{goal.title}</h3>
              <p className="mb-3">
                Remaining: <strong>{goal.duration}</strong> minute(s)
              </p>

              <form
                className="flex gap-2"
                onSubmit={(event) => deductTime(goal.id, event)}
              >
                <input
                  aria-label={`Time completed for ${goal.title}`}
                  className={inputClasses}
                  min="0.1"
                  name="amount"
                  placeholder="Minutes completed"
                  required
                  step="0.1"
                  type="number"
                />
                <button
                  className={`${buttonClasses} bg-zinc-900 text-white hover:bg-zinc-700`}
                  type="submit"
                >
                  Deduct
                </button>
              </form>

              <button
                className={`${buttonClasses} mt-3 w-full border border-red-300 bg-red-50 text-red-800 hover:bg-red-100`}
                onClick={() => deleteGoal(goal.id)}
                type="button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
