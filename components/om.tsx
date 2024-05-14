const texts = [
  {
    info: "Studerer Informatikk: Datasikkerhet ved Universitetet i Bergen",
  },
  {
    info: "Født i Tyskland, flyttet til Norge i 2007",
  },
  {
    info: "Gikk på Nordahl Grieg videregående skole",
  },
];

export function AboutMe() {
  return (
    <div>
      {texts.map((text) => (
        <p className="pt-8 pb-2 border-border border-b md:w-1/2" key={text.info}>
          {text.info}
        </p>
      ))}
    </div>
  );
};
  