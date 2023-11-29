import { Button } from '@nx-shadcnui/shared';

export default async function Index() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-600">
      <h1 className="text-6xl text-white">Hello from docs app</h1>
      <Button variant={'destructive'}>Shared button</Button>
    </div>
  );
}
