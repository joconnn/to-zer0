const goalForm = document.querySelector("#goal-form");
const titleInput = document.querySelector("#title");
const durationInput = document.querySelector("#duration");
const goalList = document.querySelector("#goal-list");

const STORAGE_KEY = "studyGoals";

let goals = loadGoals();

renderGoals();

goalForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  const duration = Number(durationInput.value);

  if (!title || duration <= 0) {
    return;
  }

  const goal = {
    id: crypto.randomUUID(),
    title: title,
    duration: duration,
  };

  goals.push(goal);

  saveGoals();
  renderGoals();

  goalForm.reset();
  titleInput.focus();
});

function renderGoals() {
  goalList.innerHTML = "";

  goals.forEach(function (goal) {
    const li = document.createElement("li");
    li.className = "goal-item";

    if (goal.duration === 0) {
      li.classList.add("complete");
    }

    li.innerHTML = `
      <h3>${goal.title}</h3>
      <p>Remaining: <strong>${goal.duration}</strong> hour(s)</p>

      <form class="deduct-form" data-id="${goal.id}">
        <input
          type="number"
          min="0.1"
          step="0.1"
          placeholder="Hours completed"
          required
        />
        <button type="submit">Deduct</button>
      </form>

      <button class="delete-button" data-id="${goal.id}">
        Delete
      </button>
    `;

    goalList.appendChild(li);
  });
}

goalList.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!event.target.classList.contains("deduct-form")) {
    return;
  }

  const form = event.target;
  const goalId = form.dataset.id;
  const input = form.querySelector("input");
  const amountToDeduct = Number(input.value);

  if (amountToDeduct <= 0) {
    return;
  }

  const goal = goals.find(function (goal) {
    return goal.id === goalId;
  });

  if (!goal) {
    return;
  }

  goal.duration = Math.max(0, goal.duration - amountToDeduct);
  goal.duration = Number(goal.duration.toFixed(2));

  saveGoals();
  renderGoals();
});

goalList.addEventListener("click", function (event) {
  if (!event.target.classList.contains("delete-button")) {
    return;
  }

  const goalId = event.target.dataset.id;

  goals = goals.filter(function (goal) {
    return goal.id !== goalId;
  });

  saveGoals();
  renderGoals();
});

function saveGoals() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
}

function loadGoals() {
  const storedGoals = localStorage.getItem(STORAGE_KEY);

  if (!storedGoals) {
    return [];
  }

  return JSON.parse(storedGoals);
}
