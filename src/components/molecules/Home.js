import { Link } from "react-router-dom";
import ball from '../.././assets/img/soccer-ball.png'
import useFetch from "../atoms/FetchData";

const Home = () => {
  
  let resource = `https://api.football-data.org/v2/competitions?areas=2077&plan=TIER_ONE`
  const {data, isLoading, error} = useFetch(resource)

  const competitions = data ? data.competitions : null

  return (
		<div className="container px-0">
      <div className="page-body border-none card py-4">
        <h4><strong>All Competitions</strong></h4>
        <div className="row">
        {isLoading && <div className="moving-ball">
					<img src={ball} alt="" className="ball" />
				</div>}
        {error && <p className="resource-error">{error}</p>}
        {competitions && competitions.map((i) => (
          <div className="col-sm-6 mb-4" key={i.id}>
            <Link to={`competitions/${i.id}`}>
              <div className="px-4 py-4 shadow-lg rounded-sm competition">
                <div className="competition--emblem">
                  <img src={i.emblemUrl} alt={i.name} className="img-fluid" />
                </div>
                <div className="competition--details">
                  <h4 className="h5 mb-1"><strong>{i.name}</strong></h4><span className="small h6">{i.area.name}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Home;