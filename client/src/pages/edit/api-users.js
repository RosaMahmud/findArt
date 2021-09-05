// export const update = async (params, credentials, user) => {
//     try {
//       let response = await fetch('/api/users/' + params.userId, {
//         method: 'PUT',
//         headers: {
//           'Accept': 'application/json'
//         },
//         body: user
//       })
//       return await response.json()
//     } catch(err) {
//       console.log(err)
//     }
//   }
//  export const read = async (params, credentials, signal) => {
//     try {
//       let response = await fetch('/api/users/' + params.userId, {
//         method: 'GET',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'      
//         }
//     })
//       return await response.json()
//     } catch(err) {
//       console.log(err)
//     }
//   }