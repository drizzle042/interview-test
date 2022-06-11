import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../atoms/FetchData";
import ball from '../.././assets/img/soccer-ball.png'
import Match from "./Matches";

const Matches = () => {
    const { id } = useParams();
    
    const resource = `https://api.football-data.org/v2/competitions/${id}/matches?season=2021&matchday=38`

    const {data, isLoading, error} = useFetch(resource)
    console.log(data);

    return ( 
        <div className="container px-0">
            <div className="page-body border-none card py-4">
                <div className="breadcrumbs py-2 mb-3">
                    <Link to={"/"} className="fancy-link router-link-active">All Competitions</Link><span className="mx-2">/</span>
                    {data && <span className="text-muted">{data.competition.name}</span>}
                </div>
                {data && <h4 className="text-primary"><strong>{data.competition.name}</strong></h4>}
                <div className="row tabs">
                    <div className="col-6 d-flex">
                        <Link to={`/competitions/${id}`} style={{"color": "#fff"}}>
                            <div className="tab active">
                                <span className="header">Standings</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6 d-flex">
                        <Link to={`competitions/${id}/matches`} style={{"color": "#fff"}}>
                            <div className="tab active">
                                <span className="header">MATCHES</span>
                            </div>
                        </Link>
                    </div>
                </div>
                {isLoading && <div className="moving-ball">
					<img src={ball} alt="" className="ball" />
				</div>}
                {error && <p className="resource-error">{error}</p>}
                <div className="tab-body-holder">
                    {data && <Match data={data} />}
                </div>
            </div>
        </div>
     );
}
 
export default Matches;