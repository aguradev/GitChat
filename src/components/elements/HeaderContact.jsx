import ContactProfile from "./ContactProfile";

export default function HeaderContact() {
  return (
    <header className="w-full border-b bg-zinc-900">
      <ContactProfile
        contacts={{
          firstName: "Budi",
          lastName: "Anggara",
          profile: "https://placehold.co/100x100",
        }}
      />
    </header>
  );
}
