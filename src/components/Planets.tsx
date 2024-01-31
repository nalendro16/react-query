import { useQuery } from 'react-query'
interface resultProps {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: string[]
  films: string[]
  created: string
  edited: string
  url: string
}

const fetchPlanets = async () => {
  const res = await fetch('https://swapi.dev/api/planets/')
  return res.json()
}

export const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets)

  console.log(data)
  return (
    <div>
      <h2>Planets</h2>
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'success' && (
        <div>
          {data?.results?.map((planet: resultProps) => (
            <p>{planet.name}</p>
          ))}
        </div>
      )}
    </div>
  )
}
