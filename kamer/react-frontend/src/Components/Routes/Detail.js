import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getProperties} from "../Property";
import MapBuilder from "../MapBuilder";
import {BASE_URL} from "../../App";

/**
 * Calls the API through a get method
 *
 * @returns a list of a list fetched from the API at a certain page
 */

function Detail() {
    const {externalId} = useParams(); // extracts the externalId from the url
    console.log(externalId);
    /* state for loading : if the api call is still getting processed */
    const [loading, setLoading] = useState(true);
    //properties state
    const [properties, setProperties] = useState([])

    useEffect(async () => {
        setLoading(true);
        const {data} = await getProperties(`${BASE_URL}id/${externalId}/?format=json`);
        setProperties(data);
        setLoading(false);
    }, []);


    /**
     * list of the description of the properties
     * */
    function Desc() {
        return (
            properties.map((prop) => {
                return (
                    <div className='propDiv'>
                        <li key={prop.externalId}>
                            <h2>
                                {prop.externalId}
                            </h2>
                        </li>
                        <ul>
                            <h2>{prop.title}</h2>
                            <img className="center" src={prop.coverImageUrl}/>
                            <li>AreaSqm: {prop.areaSqm} </li>
                            <li>City: {prop.city} </li>
                            <li>Furnish: {prop.furnish} </li>
                            <li>Latitude: {prop.latitude} </li>
                            <li>Longitude: {prop.longitude} </li>
                            <li>PostalCode: {prop.postalCode} </li>
                            <li>PropertyType: {prop.propertyType} </li>
                            <li>Rent: {prop.rent} </li>
                            <li>AdditionalCost: {prop.additionalCost} </li>
                            <li>Deposit: {prop.deposit} </li>
                            <h4>DescriptionTranslated:</h4>
                            <p>{prop.descriptionTranslated} </p>
                            <li>Gender: {prop.gender} </li>
                            <li>IsRoomActive: {prop.isRoomActive} </li>
                            <li>PageDescription: {prop.pageDescription} </li>
                            <li>PageTitle: {prop.pageTitle} </li>
                            <li>Pets: {prop.pets} </li>
                            <li>Roommates: {prop.roommates} </li>
                            <MapBuilder lng = {prop.longitude} lat={prop.latitude}/>

                        </ul>
                    </div>
                );
            })
        );
    }

    return (
        <div className="container">

            {loading ? <h1>Loading...</h1> : null} {/* if loading view loading */}

            <ul>
                <Desc/>
            </ul>
        </div>
    )

}


export default Detail