import React, { useEffect ,useState} from 'react';
import '../styles/bookingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';


function BookingPage() {

    const [data,setData] = useState(
        {
            adult:0,
            child:0,
            adultPrice:2500,
            childPrice:1750,
            adultTotalPrice:0,
            childTotalPrice:0,
            total:0
        }   
    )

    useEffect(() => {
        $('.input-daterange').datepicker({
          format: 'dd-mm-yyyy',
          todayHighlight: true,
          startDate: '0d'
        });
      }, []);
 
  return (
    <div className="booking-page-main">
      <div className="bookingpage-cover">
        <div className="priceribbon">
          <p><FontAwesomeIcon icon={faIndianRupeeSign}/> 2500 (child -1500)</p>
        </div>
        <form className="inputfields" autoComplete="off">
            <div className="input-group input-daterange">
              <input type="text" className="date1input form-control" placeholder="Check-in " readOnly />
              <input type="text" className="date2input form-control" placeholder="Check-out" readOnly />
            </div>
         <div className='countersec'>
         <div className='counters  '>
            <p>Adult</p>
              <div className='d-flex justify-content-center '>
                   <span className='border-box' onClick={() => { const newData = { ...data };
                                                                 newData.adult = Math.max(newData.adult - 1, 0);
                                                                 newData.adultTotalPrice = newData.adultPrice * newData.adult;
                                                                 setData(newData);
                   }}><FontAwesomeIcon icon={faMinus}  /></span> 
                   <span className='value-box'> {data.adult} </span>
                   <span className='border-box' onClick={() => { const newData = { ...data };
                                                                 newData.adult = Math.max(newData.adult + 1, 0);
                                                                 newData.adultTotalPrice = newData.adultPrice * newData.adult;
                                                                 setData(newData);
                   }}><FontAwesomeIcon icon={faPlus} /></span>
              </div>
                  
           </div>
           <div className='counters'>
            <p>Child (Above 6 Yrs)</p>
              <div className='d-flex justify-content-center '>
                   <span className='border-box' onClick={() => { const newData = { ...data };
                                                                 newData.child = Math.max(newData.child - 1, 0);
                                                                 newData.childTotalPrice = newData.childPrice * newData.child;
                                                                 setData(newData);
                   }}   ><FontAwesomeIcon icon={faMinus}  /></span> 
                   <span className='value-box'> {data.child} </span>
                   <span className='border-box' onClick={() => { const newData = { ...data };
                                                                 newData.child = Math.max(newData.child + 1, 0);
                                                                 newData.childTotalPrice = newData.childPrice * newData.child;
                                                                 setData(newData);
                   }}><FontAwesomeIcon icon={faPlus}  /></span>
              </div>
                  
           </div>
              
         </div>
         <div className="mobile">
                       
                         <input type="number" className='number' placeholder='Mobile Number' />
               </div>
      </form>
       <div className='totalsection'>
               <p className='total text-start w-100'>Total</p>
               <div className='valuesection'>
                 <p>Adult</p>
                 <p><FontAwesomeIcon icon={faIndianRupeeSign} /> {data.adultTotalPrice}</p>
               </div>
               <div className='valuesection'>
                 <p>Child</p>
                 <p> <FontAwesomeIcon icon={faIndianRupeeSign} /> {data.childTotalPrice}</p>
               </div><div className='borderline'></div>
               <div className="btnsec">
                   <p><FontAwesomeIcon icon={faIndianRupeeSign} /> {data.adultTotalPrice+data.childTotalPrice}</p>
                   <button className='bookbtn'>Book Now</button>
               </div>
       </div>
       
      </div>
    </div>
  );
}

export default BookingPage;
