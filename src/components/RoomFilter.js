import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';

// get all unique values 
const getUnique = (items,value)=>{
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    // get unique types
    let types = getUnique(rooms,'type');
    // add all
    types = ['all',...types];
    // map to jsx
    types = types.map((item,index)=>{
        return (
           <option value={item} key={index}>
               {item}
            </option>
        );
    });
    // refaire la meme chose pour guests
    let people = getUnique(rooms,'capacity');
    people = people.map((item,index)=>{
        return (
           <option value={item} key={index}>
               {item}
            </option>
        );
    });
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                      name="type"
                      id="type"
                      value={type}  /*declaré dans const*/
                      className="form-control"
                      onChange={handleChange}  /*declaré dans const*/
                    >
                        {types}
                    </select>
                </div>
                {/*end select type*/}
                {/* guests */}
                <div className="form-group">
                    <label htmlFor="type">Guests</label>
                    <select 
                      name="capacity"
                      id="capacity"
                      value={capacity}  /*declaré dans const*/
                      className="form-control"
                      onChange={handleChange}  /*declaré dans const*/
                    >
                        {people}
                    </select>
                </div>
                {/*end guests */}
                {/*room price */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input
                      type="range" 
                      name="price"
                      id="price"
                      min={minPrice}
                      max={maxPrice}
                      value={price}  /*declaré dans const*/
                      className="form-control"
                      onChange={handleChange}  /*declaré dans const*/
                    />
                </div>
                {/*end of room price */}
                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">
                        room size
                    </label>
                    <div className="size-inputs">
                    <input
                      type="number" 
                      name="minSize"
                      id="size"
                      value={minSize}  /*declaré dans const*/
                      className="size-input"
                      onChange={handleChange}  /*declaré dans const*/
                    />
                    <input
                      type="number" 
                      name="maxSize"
                      id="size"
                      value={maxSize}  /*declaré dans const*/
                      className="size-input"
                      onChange={handleChange}  /*declaré dans const*/
                    />
                    </div>
                </div>
                {/*end of size */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                          type="checkbox"
                          name="breakfast"
                          id="breakfast"
                          checked={breakfast}
                          onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                          type="checkbox"
                          name="pets"
                          id="pets"
                          checked={pets}
                          onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}