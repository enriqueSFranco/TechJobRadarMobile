import { User } from "@/shared/types.d";

export async function getUsers (): Promise<User[]> {
  try {
    const { href } = new URL("https://jsonplaceholder.typicode.com/users");
    console.log(href);
    const response = await fetch(href);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: User[] = await response.json();
    if (!Array.isArray(data)) {
      throw new Error(
        `Unexpected data format: expected array, received ${typeof data}`,
      );
    }
    return data;
  } catch (error) {
    if (error instanceof Error) throw new Error(`${error.message}`);
    throw new Error(`Error: ${error}`);
  }
}
