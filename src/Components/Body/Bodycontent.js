import './Bodycontent.css';
import { data } from '../../Database/Data';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Bodycontent() {

    const [location, setLocation] = useState("New York, USA");
    const [priceRange, setPriceRange] = useState("$500 - $2500");
    const [ppType, setPptype] = useState("Houses");
    const [startDate, setStartDate] = useState(new Date());

    const [filteredData, setFilteredData] = useState(data)

    const handleSearch = () => {
        location.value ? console.log(location.value) : console.log(location);
        priceRange.value ? console.log(priceRange.value) : console.log(priceRange);
        ppType.value ? console.log(ppType.value) : console.log(ppType);

        const newfilteredData = data.filter((item) => {
            return (
                (item.location === location.value || item.location === location) && 
                (item.pricerange === priceRange.value || item.pricerange === priceRange) &&
                (item.type === ppType.value || item.type === ppType)
            )
        })
        setFilteredData(newfilteredData);
    }

    return (
        <div className="main-area">
            <div className="search-title">
                <h3>Search properties to rent</h3>
                <input type="text" placeholder='Search with Search Bar' />
            </div>
            <div className="filter-area">
                <div className="location">
                    <p className='label'>Location</p>
                    <select name="" id="" className='filter-drop' onChange={(e) => setLocation(e.target)} >
                        <option value="New York, USA" >New York,USA</option>
                        <option value="London, UK" >London, UK</option>
                        <option value="Banglore, IN" >Banglore, IN</option>
                    </select>
                </div>
                <div className="vr">&nbsp;</div>
                <div className="when">
                    <p className='label'>When</p>
                    <input type="text" className='filter-drop' placeholder='Select Move-in time'
                        onClick={() => {

                            return (
                                <DatePicker selected={startDate} onClick={(date) => setStartDate(date)} />
                            );
                        }} />
                </div>
                <div className="vr">&nbsp;</div>
                <div className="price">
                    <p className='label'>Price</p>
                    <select name="" id="" className='filter-drop' onChange={(e) => setPriceRange(e.target)}>
                        <option value="$500 - $2500">$500 - $2500</option>
                        <option value="$2500 - $5000">$2500 - $5000</option>
                        <option value="$5000 - $10000">$5000 - $10000</option>
                    </select>
                </div>
                <div className="vr">&nbsp;</div>
                <div className="pptype">
                    <p className='label'>Property Type</p>
                    <select name="" id="" className='filter-drop' onChange={(e) => setPptype(e.target)}>
                        <option value="House">Houses</option>
                        <option value="Flat">Flats</option>
                        <option value="Room">Single Room</option>
                    </select>
                </div>
                <div className="vr">&nbsp;</div>
                <div className="btSearch">
                    <button className='searchBt' onClick={handleSearch}>Search</button>
                </div>
            </div>

            <div className="view-area">
                <div className="cards">
                    {

                        filteredData.map((item) => {

                            return (

                                <div className="card">
                                    <div className="card-image">
                                        <img className='main-image' src={item.image} alt="" />
                                        <img src="" alt="" className="label-image" />
                                    </div>
                                    <div className="card-description">
                                        <div className='price-section'><span className='item-price'>${item.price}</span>/month</div>
                                        <div className="item-name">{item.name}</div>
                                        <div className="item-address">{item.address}&nbsp;{item.location}</div>
                                    </div>
                                    <div className='line-break'><hr /></div>
                                    <div className="item-particulars">
                                        <div><span><i className="fa-solid fa-bed"></i> 3 Beds </span></div>
                                        <div><span><i className="fa-solid fa-bath"></i> 2 Bathrooms </span></div>
                                        <div><span><i className="fa-solid fa-ruler-combined"></i> 5x7 m<sup>2</sup></span></div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Bodycontent