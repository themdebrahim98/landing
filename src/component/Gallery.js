import React, { useState } from 'react';
import './Gallery.css';
import Menu from './Menu';
import { Link } from 'react-router-dom'
import PopUpBox from './PopUpBox/PopUpBox.jsx'
import './PopUpBox/PopUpBox.css'





function Gallery() {
	const [items, setItems] = useState(Menu);
	const [active, setactive] = useState(null);

	const [activecardid, setActivecardid] = useState(null);



	const filterItem = (catItem) => {
		const updatedItems = Menu.filter((curElem) => {
			return curElem.category === catItem;
		});
		setItems(updatedItems);
	}

	const ShowPopUpBox = (id) => {
	
		setActivecardid(id)
		

	}


	return (
		<>





			<div className="gallery">


				<div className="menu-tabs container col-md-12 col-12">
					<div className="menu-tab">
						<button type="button" className="btn btn-outline-success mx-2 my-2 px-3 py-2 text-center" onClick={() => setItems(Menu)}>All</button>
						<button type="button" className="btn btn-outline-danger mx-2 my-2 px-3 py-2 text-center" onClick={() => filterItem('front')}>Front-end</button>
						<button type="button" className="btn btn-outline-danger mx-2 my-2 px-3 py-2 text-center" onClick={() => filterItem('back')}>Back-end</button>
						<button type="button" className="btn btn-outline-danger mx-2 my-2 px-3 py-2 text-center" onClick={() => filterItem('app')}>Web app</button>
						<button type="button" className="btn btn btn-outline-light btn-info mx-3 my-2 px-3 py-2 text-center" onClick={() => filterItem('upcoming')}>Coming</button>
					</div>
				</div>
				{/* Main items section */}
				<div className="menu-items container-fluid mt-5">
					<div className="row">
						<div className="col-11 mx-auto">
							<div className="row my-5">
								{
									items.map((elem) => {
										const { id, image, name, description, date, link } = elem;
										return (
											<div className="item1 col-md-6 col-lg-6 col-lg-6 col-xl-4 my-3">
												<div className="row item-inside">
													{/*images*/}
													<div className="col-12 col-md-12 col-lg-4 img-div">
														<img src={image} alt={name} className="img-fluid" />
													</div>
													{/*discription */}
													<div className="col-12 col-md-12 col-lg-8">
														<div className="main-title pt-4 pb-3">
															<h1>{name}</h1>
															<p>{description}</p>
														</div>
														<div className="menu-price-book">
															<div className="price-book-divide d-flex justify-content-between">
																<h2>Date: {date}</h2>


																<button onClick={() => { ShowPopUpBox(id) }} className="btn btn-primary py-2">Click mee</button>


															</div>

														</div>
													</div>
												</div>

												{
													activecardid === id ? < PopUpBox popupfadingclass="popupfadingclass" name={name} description={description} link={link}/> : null
												}
											</div>
										)
									})
								}

							</div>
						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default Gallery
