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
    <main className="mx-auto my-10 max-w-3xl rounded-lg bg-white p-6 shadow-sm">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">
        Beat your study goals into submission
      </h1>

      <GoalForm onAdd={addGoal} />

      <h2 className="mb-4 text-2xl font-bold">Goals</h2>
      {goals.length === 0 ? (
        <p className="text-zinc-500">No goals yet.</p>
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
