import React, { useEffect, useState } from 'react';
import { JewelleryData } from '../api/jewelleryapi';


const Allproduct = () => {
const [data, setData]= useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
      const result = await JewelleryData();
      console.log("fetch jewellery", result)

      setData(result.jewellery || []);
    }

    fetchData();
  },[])
  return (
    <div>
      {/* <section className="shop_section layout_padding-t">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Latest Products</h2>
          </div>
          <div className="row">
            {data.length > 0 ? (
              data.map((jewellery) => (
                <div
                  className="col-sm-6 col-md-4 col-lg-3"
                  key={jewellery.id || jewellery._id} 
                >
                  <div className="box">
                    <a href={`/single?id=${jewellery.id}`} className="text-decorastion">
                      <div className="img-box">
                        <img
                          src={jewellery.image || "assets/images/p8.png"} 
                          alt={jewellery.fullName}
                        />
                      </div>
                      <div className="detail-box">
                        <h6>{jewellery.jewellery_name}</h6>
                        <h6>
                          Price <span>${jewellery.price || "N/A"}</span>
                        </h6>
                      </div>
                      {jewellery.isNew && (
                        <div className="new">
                          <span>New</span>
                        </div>
                      )}
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No jewellerys available</p>
            )}
          </div>
          <div className="btn-box">
            <a href="/" className="text-decorastion">View All Products</a>
          </div>
        </div>
      </section> */}



        <section className="shop_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Latest Products
        </h2>
      </div>
      <div className="row">
        {Array.isArray(data)&& data.length>0 ?(
          data.map((jewellery, id)=>(

          
        <div className="col-sm-6 col-md-4 col-lg-3" >
          <div className="box">
            <a href="/" className='text-decorastion'>
              <div className="img-box">
              <img
  src={
    jewellery.image
      ? `/${jewellery.image}`
      : "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg"
  }
  alt="images"
/>

              </div>
              <div className="detail-box">
                <h6 key={id}>
                  {jewellery.jewelleryname}
                </h6>
                <h6>
                  Price
                  <span>
                    ${jewellery.price}
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>

))
):(
  <p>no data found</p>
)}
  
      </div>
      <div className="btn-box ">
        <a href="/allproduct" className='text-decorastion'>
          View All Products
        </a>
      </div>
    </div>
  </section>
    </div>
  );
};

export default Allproduct;
