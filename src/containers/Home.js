import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {get_sightings, get_more_sightings} from "../actions/sightings"
import { Paginate } from "../components/common/Pagination/Paginate";
import { SightingList } from "./SightingList";
import {useParams} from 'react-router-dom'
import { useMemo } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SightingDetail from "./Sighting/SightingDetail";
const Home = React.memo(({
    get_sightings,
    get_more_sightings,
    sightings,
    state
}) => {
    let history = useHistory();
    const {id} = useParams()

    const {sightingPageParams} = useParams()
    const query = new URLSearchParams(window.location.search);

    const [page, setPage] = useState(id ? Number(id) : 1)
    const [newPage, setNewPage] = useState( 1)
    const [sightingPage, setSightingPage] = useState()
    // const [hasPrevPage, setHasPrevPage] = useState(Boolean(localStorage.getItem('prev')) === true ? true : false)
    // const [hasNextPage, setHasNextPage] = useState(Boolean(localStorage.getItem('next')) === true ? true : false)
    // const [totalPages, setTotalPages] = useState(typeof Number(localStorage.getItem('totalPages')) == 'number'  ? Number(localStorage.getItem('totalPages')) : 0)
    // const [sightingPage, setSightingPage] = useState()
    const [hasPrevPage, setHasPrevPage] = useState( false)
    const [hasNextPage, setHasNextPage] = useState(false)
    const [totalPages, setTotalPages] = useState( 0)
    const [docs, setDocs] = useState()

    const [varr, setVarr] = useState(1)

    const [queryPage, setQueryPage] = useState(query.get('page'))
    
    console.log(query.get('page'))

    useEffect(()=>{
        setQueryPage(query.get('page'))
        query.set('page', 1)
    }, [queryPage])



    if(query.get('page')){
        console.log('existe')
    }else{
        console.log('no existe')    
    }

    useEffect(()=>{
        // if(sightings[id]){
        //     setDocs(sightingPage[page])
        // }
    }, [])

    ///mejorar usando useMemo
    useEffect(() => {
        
        if(sightings[page]){
            setSightingPage(sightings[page])
        }else{
            get_sightings(page);
        }
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

        /// history.ush <chang
        history.push(`/${page}`)
    }
    //if there is a sightingPage to which there is no page it loads more sightings with the page
    useEffect(()=>{
        if(!sightings[page]){
            get_more_sightings(page)
        }

        // chang id
    }, [page])

    // it set sightingPage to the current page sightings
    useEffect(()=>{
        setSightingPage(sightings[page])
        console.log('page1')

        // <change id
    }, [sightings,page])
    
    //instatiate the pagination elements
    useEffect(() =>{
        if(sightingPage){
            console.log(sightingPage)
            setHasNextPage(sightingPage.hasNext)
            setHasPrevPage(sightingPage.hasPrev)
            setTotalPages(sightingPage.totalPages)
            setDocs(sightingPage.results)
            localStorage.setItem('next', JSON.stringify(sightingPage.hasNext));
            localStorage.setItem('prev', JSON.stringify(sightingPage.hasPrev));
            localStorage.setItem('totalPages', JSON.stringify(sightingPage.totalPages));
            localStorage.setItem('docs', JSON.stringify(sightingPage.results))
        }

        //added page <chang, id
    }, [sightingPage])
    return (<>
        <h2 className="center-text">Last sightings in our records</h2>
        
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