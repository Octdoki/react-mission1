import { BsChevronLeft,  BsChevronRight } from "react-icons/bs";


const GalleryArrow = ({next, prev}) => {
    return (
        <p className="arrow">
           <i className="first" onClick={()=>prev()}>  <BsChevronLeft /></i>
           <i className="last" onClick={()=> next()}> <BsChevronRight /></i>
           {/* <BsChevronLeft /> */}
           {/* <BsChevronRight /> */}
        </p>
    );
};

export default GalleryArrow;