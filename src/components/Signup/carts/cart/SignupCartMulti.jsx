

// ******** brute force approach ********

// import React from "react";
// import SignupCart from "../SignupCart";
// import SignupData from "../SignupData"

// function SignupCartMulti() {
//   return (
//     <div>

//       <SignupCart
//         title={SignupData.first.text}
//         desc={SignupData.first.desc}
//         img={SignupData.first.img}
//       />
//       <SignupCart
//         title={SignupData.second.text}
//         desc={SignupData.second.desc}
//         img={SignupData.second.img}
//       />
//       <SignupCart
//         title={SignupData.third.text}
//         desc={SignupData.third.desc}
//         img={SignupData.third.img}
//       />
//       <SignupCart
//         title={SignupData.four.text}
//         desc={SignupData.four.desc}
//         img={SignupData.four.img}
//       />
//     </div>
//   );
// }

// export default SignupCartMulti;




// ******* updated Code **************

import React from "react";
import SignupCart from "../SignupCart";
import SignupData from "../SignupCartData";

function SignupCartMulti() {
  return (
    <div>
      {SignupData.map((data, index) => (
        <SignupCart
          key={index}
          title={data.text}
          desc={data.desc}
          img={data.img}
        />
      ))}
    </div>
  );
}

export default SignupCartMulti;


