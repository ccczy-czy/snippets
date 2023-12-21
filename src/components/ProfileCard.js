export default function ProfileCard() {
  return (
    <article className="profileCard">
      <header>
        <img
          alt="A cat with illustrated groovy glasses and sparkles/rainbows"
          src="https://sandpack-bundler.vercel.app/img/sparkly-cat.png"
        />

        <h2>Penelope “bric-a-brac” June</h2>
        <p className="joined">Joined January 21st, 2022</p>
      </header>
      <ul className="golden badgeList">
        <li>🏓 Athletic</li>
        <li>📸 Photographer</li>
        <li>🏅 Olympic Medalist</li>
      </ul>
    </article>
  );
}
