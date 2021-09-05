// import formidable from 'formidable'
// import User from '../models/User'

// const update = (req, res) => {
//     let form = new formidable.IncomingForm()
//     form.keepExtensions = true
//     form.parse(req, async (err, fields, files) => {
//       if (err) {
//         return res.status(400).json({
//           error: "Photo could not be uploaded"
//         })
//       }
//       let user = req.profile
//       user = extend(user, fields)
//       user.updated = Date.now()
//       if(files.photo){
//         user.photo.data = fs.readFileSync(files.photo.path)
//         user.photo.contentType = files.photo.type
//       }
//       try {
//         await user.save()
//         user.hashed_password = undefined
//         user.salt = undefined
//         res.json(user)
//       } catch (err) {
//         return res.status(400).json({
//           error: errorHandler.getErrorMessage(err)
//         })
//       }
//     })
//   }

//   const read = (req, res) => {
//     req.profile.hashed_password = undefined
//     req.profile.salt = undefined
//     return res.json(req.profile)
//   }

//   export default{
//       update,
//       read
//   }