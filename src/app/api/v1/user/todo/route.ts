import { NextRequest, NextResponse } from "next/server";

const todos = [
  { title: "Buy groceries", completed: false },
  { title: "Walk the dog", completed: true },
  { title: "Finish homework", completed: false },
  { title: "Call mom", completed: true },
  { title: "Clean the kitchen", completed: false },
  { title: "Read 10 pages of a book", completed: true },
  { title: "Water the plants", completed: false },
  { title: "Pay electricity bill", completed: true },
  { title: "Workout for 30 minutes", completed: false },
  { title: "Reply to emails", completed: true },
];
export function GET() {
  return NextResponse.json(todos);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, completed } = body;
  const newTodo = { title, completed };
  todos.push(newTodo);
  return NextResponse.json({ message: "Todo added", todo: newTodo });
}

export function PUT() {
  return NextResponse.json({
    message:"Put method called"
  });
}

export function DELETE() {
  return NextResponse.json({
    message:"Delete method called"
  });
}