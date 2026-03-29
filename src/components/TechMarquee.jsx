const techs = [
  'React.js', 'TypeScript', 'Node.js', 'MongoDB', 'Firebase',
  'React Native', 'Express.js', 'Azure', 'Socket.IO', 'Tailwind CSS',
  'JavaScript', 'Python', 'Vite', 'Git', 'Postman', 'Agile/Scrum',
]

const all = [...techs, ...techs]

export default function TechMarquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {all.map((t, i) => (
          <div key={i} className="marquee-item">
            {t}
            <span className="marquee-sep" />
          </div>
        ))}
      </div>
    </div>
  )
}
