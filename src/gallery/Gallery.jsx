import { useState } from "react";
import galleryData from "../assets/api/galleryData";
import './style.scss'
import GalleryBig from "./GalleryBig";
import GalleryList from "./GalleryList";
import GalleryArrow from "./GalleryArrow";
import { useEffect } from "react";
import { useRef } from "react";

const Gallery = () => {
    const [ data , setData ] = useState( galleryData )
    const [ imgItem , setImgItem ] = useState( data[0] )
    const [cntId, setCntId] =useState(0)
    const total = data.length 
    const idRef =useRef()

    const onView = ( id )  => {    
        setImgItem( data.find( item => item.id === id ) )

        setData( data.map( item => item.id === id ? 
           {...item, isClass:true } : {...item, isClass:false } ))
           setCntId(id-1)
    }

 

    const next =()=>{

        if(cntId < total-1) {
            // console.log(cntId)
            setCntId(cntId+1)
            }else{
                setCntId(0)
                setImgItem(data[0])
            }
    }

    const prev =()=>{
        if(cntId<1){
            setCntId(total-1)
            setImgItem(data[total-1])
        }else{
            setCntId(cntId-1)
        }
    }

    useEffect(() => {
        setImgItem(data[cntId])
        setData( data.map( item => item.id === cntId+1 ? {...item, isClass:true } : {...item, isClass:false } ))
        const timer = setTimeout( ()=>  {
            next()
        },4000)
        return()=>{
            clearTimeout(timer)
        } 
        console.log(imgItem)
    },[cntId])
    return (
        <div className="wrap">
            <h1> React Gallery </h1>
            <GalleryBig imgItem={imgItem} cntId={cntId} total={total} />
            <GalleryList data={data} onView={onView} />
            <GalleryArrow next={next} prev={prev} /> 
        </div>
    );
};

export default Gallery;