import { greet } from '@curb/curb';

export function taskGreet(name: string): string {
  return greet(name) + ' from curb-tasks';
} 