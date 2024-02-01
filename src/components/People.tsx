import { useQuery } from 'react-query'
import { fetchPlanets } from './Planets'

export const People = () => {
  const { data, status } = useQuery('planets', fetchPlanets)

  console.log(data)
  return (
    <div>
      <h2>Planets</h2>
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'success' && (
        <div>
          {data?.results?.map((planet: any) => (
            <p>{planet.name}</p>
          ))}
        </div>
      )}
    </div>
  )
}
