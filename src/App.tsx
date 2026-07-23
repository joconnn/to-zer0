import { useState } from "react";
import { Goal, type GoalData } from "./components/Goal";
import { GoalForm } from "./components/GoalForm";

const STORAGE_KEY = "studyGoals";

function loadGoals(): GoalData[] {
  try {
    const storedGoals = localStorage.getItem(STORAGE_KEY);
    const goals = storedGoals ? (JSON.parse(storedGoals) as GoalData[]) : [];
    return goals.map((goal) => ({
      ...goal,
      maxDuration: goal.maxDuration ?? goal.duration,
    }));
  } catch {
    return [];
  }
}

function App() {
  const [goals, setGoals] = useState<GoalData[]>(loadGoals);

  function updateGoals(nextGoals: GoalData[]) {
    setGoals(nextGoals);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextGoals));
  }

  function addGoal(title: string, duration: number) {
    updateGoals([
      ...goals,
      { id: crypto.randomUUID(), title, duration, maxDuration: duration },
    ]);
  }

  function deductTime(goalId: string, amount: number) {
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

  return (
    <main className="arcade-shell mx-auto my-6 max-w-3xl overflow-hidden border-2 border-fuchsia-400 bg-[#160d27] p-5 text-white sm:my-10 sm:p-6">
      <header className="mb-8 border-b-2 border-fuchsia-400 pb-5">
        <p className="pixel-font mb-3 text-[8px] text-yellow-300">INSERT FOCUS · PRESS START</p>
        <h1 className="arcade-heading text-3xl font-black uppercase sm:text-4xl">
          Beat your study goals into submission
        </h1>
      </header>

      <GoalForm onAdd={addGoal} />

      <h2 className="pixel-font mb-4 text-sm text-yellow-300">FIGHTER ROSTER</h2>
      {goals.length === 0 ? (
        <p className="border border-dashed border-fuchsia-400/60 bg-[#0b0714] p-6 text-center text-violet-200">No challengers yet. Choose your first opponent.</p>
      ) : (
        <ul className="grid list-none gap-3 p-0">
          {goals.map((goal) => (
            <Goal
              goal={goal}
              key={goal.id}
              onDeduct={deductTime}
              onDelete={deleteGoal}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
