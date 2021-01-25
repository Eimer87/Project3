import React, { Fragment,useEffect } from 'react';
import '../css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ResturantCard from '../components/ResturantCard';
import {connect} from "react-redux";
import {getResturant,FilterResturant,setResturant} from "../actions/ResturantAction";
const Home = ({Resturant:{
  ResturantList,
  filterResturant
}, getResturant,FilterResturant,setResturant}) => {
  useEffect(() => {
    getResturant();
    setResturant({
      name:"filterResturant",
      value:[]
    })
  }, []);
  const onChange = e =>{
    FilterResturant(e.target.value)
  }
  return (
    <Fragment>
      <section className='hero_section'>
        {/* <div className="hero"> </div> */}
        <img src={require('../assets/hero.jpg')} className='heroImage' />
        <div className='hero_overlay'></div>
        <div className='HeroContent'>
          <div className='HeroFirst'>
            It's the <em>food</em>
          </div>
          <div className='HeroSecond'>you love, delivered</div>
          <div className='SearchContainer'>
            <div className='SearchIcon'>
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <input type='text' className='HeroSearch'
            placeholder="Enter Resturant Name"
            onChange={onChange}
            />
            <div className='SearchButtonContainer'>
              <button className='btn SearchButton'>Search</button>
            </div>
          </div>
        </div>
      </section>
      <section className='Resturant_Section'>
        <div className='container'>
          <div className='row '>
            {
              filterResturant.length<=0?
              ResturantList.map((resturantItem)=>{
            return  <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
                <ResturantCard resturantItem={resturantItem} />
              </div>
              }):   filterResturant.map((resturantItem)=>{
                return  <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
                    <ResturantCard resturantItem={resturantItem} />
                  </div>
                  })
            }
            
           

         </div>
       </div>
      </section>
    </Fragment>
  );
};
const MapStateToProps =state=>({
  Resturant:state.Resturant
});
export default connect(MapStateToProps,{getResturant,FilterResturant,setResturant})( Home);
