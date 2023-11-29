const texts = [
  {
    info: "Currently studying Cyber Security at the University in Bergen.",
  },
  {
    info: "Member of echo - Webkom.",
  },
];

export function AboutMe() {
  return (
    <div>
      {texts.map((text) => (
        <p className="pt-8 pb-2 border-border border-b" key={text.info}>
          {text.info}
        </p>
      ))}
    </div>
  );
};
  