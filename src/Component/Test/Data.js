import { React, useState, useEffect } from 'react';

const Data = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
            .then(r => r.json())
            .then((r) => { setdata(r) })
    }, []);
    return (
        <div>

            <table>
                <thead>
                    <th>
                        idDrink
                    </th>
                    <th>
                        strDrink
                    </th>
                    <th>
                        strDrinkAlternate
                    </th>
                    <th>strTags</th>
                    <th>strVideo</th>
                    <th>strCategory</th>
                    <th>strIBA</th>
                    <th>strAlcoholic</th>
                    <th>strGlass</th>
                    <th>strInstructions</th>
                    <th>strInstructionsES</th>
                    <th>strInstructionsDE</th>
                    <th>strInstructionsFR</th>
                    <th>strInstructionsIT</th>


                </thead>
                <tbody>
                    {data?.drinks?.map((val, index) => {
                        return (
                            <tr>
                                <td>{val.idDrink}</td>
                                <td>{val.strDrink}</td>
                                <td>{val.strDrinkAlternate}</td>
                                <td>{val.strTags}</td>
                                <td>{val.strVideo}</td>
                                <td>{val.strCategory}</td>
                                <td>{val.strIBA}</td>
                                <td>{val.strAlcoholic}</td>
                                <td>{val.strGlass}</td>
                                <td>{val.strInstructions}</td>
                                <td>{val.strInstructionsES}</td>
                                <td>{val.strInstructionsDE}</td>
                                <td>{val.strInstructionsFR}</td>
                                <td>{val.strInstructionsIT}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    );
}

export default Data;
