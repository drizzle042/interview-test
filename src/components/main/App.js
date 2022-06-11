import './App.css';
import sportifyLogo from '../.././assets/img/logo.efdde25b.png';
import { BrowserRouter } from 'react-router-dom';
import Urls from '../atoms/Urls';

function App() {
  return (
	  <BrowserRouter>
			<div>
				<div className="header-section">
					<div className="container">
						<div className="d-flex flex-column align-items-center">
							<div className="logo">
								<img src={sportifyLogo} alt="" className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
				<Urls />
				<div className="mt-5">
				<p className="text-secondary text-center">Built by <a href="https://www.linkedin.com/in/canon-chukwujiobi-842613225" className="fancy-link">Chukwujiobi Canon</a></p>
				<p className="text-center small"> Credits: <a href="https://www.football-data.org" className="fancy-link">Football data API</a></p>
				</div>
			</div>
	  </BrowserRouter>
  );
}

export default App;
