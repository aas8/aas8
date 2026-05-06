interface HeadProps {
  name: string;
  email: string;
  phone: string;
  location: string;
}

export default function ResumeHead({ name, email, phone, location }: HeadProps) {
  return (
    <header>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        {name}
      </h1>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
        <span>{email}</span>
        <span>{phone}</span>
        <span>{location}</span>
      </div>
    </header>
  );
}
