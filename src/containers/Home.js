import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {get_sightings, get_more_sightings} from "../actions/sightings"
import { Paginate } from "../components/common/Pagination/Paginate";
import { SightingList } from "./SightingList";
import {useParams} from 'react-router-dom'
import { useMemo } from "react";
const Home = React.memo(({
    get_sightings,
    get_more_sightings,
    sightings,
    state
}) => {

    const {sightingPageParams} = useParams()

    const [page, setPage] = useState(1)
    const [newPage, setNewPage] = useState( 1)
    const [sightingPage, setSightingPage] = useState()
    const [hasPrevPage, setHasPrevPage] = useState(false)
    const [hasNextPage, setHasNextPage] = useState(false)
    const [prevPage, setPrevPage] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [totalPages, setTotalPages] = useState(0)
    const [docs, setDocs] = useState()
    

    const query = new URLSearchParams(window.location.search);
    console.log(query.get('page'))

    ///mejorar usando useMemo
    useEffect(() => {
        get_sightings(page);
        
      }, []);

    //   useEffect(()=>{
    //     if(!sightings[page]){
    //         get_sightings(page)
    //     }
    // })

    //   useMemo(()=> get_sightings() , [page])
      

      if(sightings[1]){
          console.log(sightings[1])
        //   setSightingPage(sightings[1])
          console.log(sightingPage)
      }

    console.log(sightings)
    async function clickNext(){
        // setPage((state) => {return state+1})
        // await get_more_sightings(page)
        setNewPage(page+1)
        setPage(page+1)
    }
    async function clickPrev(){
        setPage(page-1)
    }

    async function handlePageClick(page){
        setPage(page)
    }
    //if there is a sightingPage to which there is no page it loads more sightings with the page
    useEffect(()=>{
        if(!sightings[page]){
            get_more_sightings(page)
        }
    }, [page])

    // it set sightingPage to the current page sightings
    useEffect(()=>{
        setSightingPage(sightings[page])
        console.log('page1')
    }, [sightings,page])
    
    //instatiate the pagination elements
    useEffect(() =>{
        if(sightingPage){
            console.log(sightingPage)
            setHasNextPage(sightingPage.hasNext)
            setHasPrevPage(sightingPage.hasPrev)
            setTotalPages(sightingPage.totalPages)
            setDocs(sightingPage.results)
            console.log('page2')
        }
    }, [sightingPage])
    return (<>
        <div>page {page}</div>
        {query.page}
        <Link to="/dashboard"> dashboard </Link>
        
        <SightingList 
            sightingPage={docs}
        />

        <Paginate
            page={page}
            hasPrevPage={hasPrevPage}
            hasNextPage={hasNextPage}
            totalPages={totalPages}
            onNextClick={clickNext}
            onPrevClick={clickPrev}
            onPageClick={handlePageClick}
        />
        </>)
})

const mapStateToProps = (state) => ({
    // sighting,
    state: state,
    // orders: state.orders.orders,
    user: state.auth.user,
    // profile: state.profile.profile,
    sightings: state.sightings
  });
  

export default connect(mapStateToProps, {
    get_sightings,
    get_more_sightings
  })(Home);