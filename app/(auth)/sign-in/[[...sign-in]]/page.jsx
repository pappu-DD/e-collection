import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center mt-6">
      <SignIn>
        <h1>coustom</h1>
      </SignIn>
    </div>
  );
}
