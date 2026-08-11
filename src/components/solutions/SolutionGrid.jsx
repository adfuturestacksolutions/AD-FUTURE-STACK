import SolutionCard from './SolutionCard.jsx'
import { solutions } from '../../data/solutions.js'

export default function SolutionGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
      {solutions.map((sol) => (
        <SolutionCard key={sol.id} solution={sol} />
      ))}
    </div>
  )
}
