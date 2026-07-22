// Class with type-safe properties
class Todo {
    id: number;
    title: string;
    completed: boolean;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.completed = false;
    }

    markComplete(): void {
        this.completed = true;
    }
}

// Array of typed objects
const todos: Todo[] = [
    new Todo(1, "Learn TypeScript"),
    new Todo(2, "Build URL Shortener"),
    new Todo(3, "Practice Zod validation"),
];

todos[0]?.markComplete();

// Generic function - kono type er array niye kaj korte pare
function findById<T extends { id: number }>(items: T[], id: number): T | undefined {
    return items.find((item) => item.id === id);
}

const found = findById(todos, 2);
console.log("Found todo:", found);

// Union type + optional property
type Status = "pending" | "in-progress" | "done";

interface Task {
    name: string;
    status: Status;
    assignee?: string; // optional
}

const task: Task = { name: "Deploy backend", status: "in-progress" };

console.log(`Task "${task.name}" is ${task.status}`);

// Filter + map with proper typing
const completedTitles: string[] = todos
    .filter((t) => t.completed)
    .map((t) => t.title);

console.log("Completed todos:", completedTitles);