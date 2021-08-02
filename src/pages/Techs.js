import React, { useEffect } from "react";
import SideNav from "../components/layout/SideNav";
import MobileNav from "../components/layout/MobileNav";
import { connect } from "react-redux";
import { getTechs } from "../redux/actions/techActions";

const Techs = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <>
      <div>
        <SideNav />
        <MobileNav />
        {
        <div >
          <h4 className="center">Techs list</h4>
           <div style={{display:'grid'}}>
              {(!loading && techs === null) || techs.length === 0 ? (
              <p className="center">No techs to show..</p>
             ) : (
                techs.map((tech) => (
                 <div
                className="card"
                   style={{ width: 350, margin: "auto",marginTop:15,marginBottom:15 }}
                >
                   <div
                    className="card-image waves-effect waves-block waves-light"
                    style={{
                       margin: "auto",
                        top: "15px",
                       width: "200px",
                       height: "200px",
                       border: "2px solid",
                       borderRadius: "50%",
                      }}
                   >
                     <img  src={
                         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw92ToLJnjnUmsEbTRFStNtKCD-PJBRbnqYg&usqp=CAU"
                      }
                     alt="ProfilePic"
                    />
                   </div>
                   <div className="card-content">
                     <ul className="collection">
                        <li className="collection-item">
                          Name : {tech.firstName}{" "} {tech.lastName}
                       </li>
                        <li className="collection-item">
                          Department : {tech !== null && tech.department}
                       </li>
                       <li className="collection-item">
                          Working since : {tech !== null && tech.date}
                        </li>
                    </ul>
                  </div>
                  </div>
                ))
             )}
          
          </div>
          </div>
     }
        
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(Techs);


// <div class="row">

// <div class="col s12 m4 l3"> 

//     <SideNav />
// </div>

// <div class="col s12 m8 l9"> 
// {
//           <div >
//             <h4 className="center">Techs list</h4>
//             <ul className="collection" style={{display:'grid'}}>
//               {(!loading && techs === null) || techs.length === 0 ? (
//                 <p className="center">No techs to show..</p>
//               ) : (
//                 techs.map((tech) => (
//                   <div
//                     className="card center"
//                     style={{ width: 300, margin: "auto" }}
//                   >
//                     <div
//                       className="card-image waves-effect waves-block waves-light"
//                       style={{
//                         margin: "auto",
//                         top: "15px",
//                         width: "200px",
//                         height: "200px",
//                         border: "2px solid",
//                         borderRadius: "50%",
//                       }}
//                     >
//                       <img
//                         src={
//                           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw92ToLJnjnUmsEbTRFStNtKCD-PJBRbnqYg&usqp=CAU"
//                         }
//                         className="activator"
//                         alt="ProfilePic"
//                       />
//                     </div>
//                     <div className="card-content">
//                       <ul className="collection">
//                         <li className="collection-item">
//                           Name : {tech !== null && tech.firstName}{" "}
//                           {tech == null && tech.lastName}
//                         </li>
//                         <li className="collection-item">
//                           Department : {tech !== null && tech.department}
//                         </li>
//                         <li className="collection-item">
//                           Working since : {tech !== null && tech.date}
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </ul>
//           </div>
//         }

// </div>

// </div>