const texts = [
  {
      info: "Currently studying Cyber Security at the University in Bergen."
  },
  {
      info: "Member of echo - Webkom."
  },
];

export function AboutMe() {
return (
  <div>
    {texts.map((text) => (
      <p className="pt-8 pb-2 border-gray-400 border-b">{text.info}</p>
    ))}
  </div>
)
}