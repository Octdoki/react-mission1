

const GalleryBig = ( { imgItem,cntId, total }) => {
    const { imgurl , title } = imgItem 
    return (
        <div className="bigimg">
            <img src={imgurl} alt={title} />
            <h2> {title} </h2>
            <p>현재 {cntId +1} / 총개수 {total}</p>
        </div>
    );
};

export default GalleryBig;