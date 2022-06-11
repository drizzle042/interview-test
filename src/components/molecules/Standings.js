const Standings = ({data}) => {
    return ( 
        <div className="standings">
        {
            data && data.standings.map((i, index) => {
                return(
                    <div className="standings--group" key={index}>
                        <h5 className="mb-0 group-name"><strong>{i.group}</strong></h5>
                        <div className="standings-table">
                            <div className="standing-row standing-header text-muted">
                                <div className="position"></div>
                                <div className="team-name">Team</div>
                                <div className="mp">MP</div>
                                <div className="win">W</div>
                                <div className="draw">D</div>
                                <div className="lose">L</div>
                                <div className="gd">GD</div>
                                <div className="gf">GF</div>
                                <div className="ga">GA</div>
                                <div className="points">Pts</div>
                            </div>
                            {
                                i.table.map((n, index) => {
                                    return (
                                        <div className="standing-row" key={index}>
                                            <div className="position">{n.position}</div>
                                            <div className="team-name">
                                                <div className="emblem">
                                                    <img src={n.team.crestUrl} alt="" className="img-fluid" />
                                                </div> {n.team.name} 
                                            </div>
                                            <div className="mp">{n.playedGames}</div>
                                            <div className="win">{n.won}</div>
                                            <div className="draw">{n.draw}</div>
                                            <div className="lose">{n.lost}</div>
                                            <div className="gd">{n.goalDifference}</div>
                                            <div className="gf">{n.goalsFor}</div>
                                            <div className="ga">{n.goalsAgainst}</div>
                                            <div className="points">{n.points}</div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                );
            })
        }
        </div>
    );
}
 
export default Standings;