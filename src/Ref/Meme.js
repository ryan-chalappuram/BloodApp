// import React from "react"
// import memedata from "./memedata"

// export default function Meme()
// {   const [meme,setMeme] = React.useState({
//     toptext : "",
//     bottomtext : "",
//     randomImage : ""


//     })

//     const [allMemeImages,setAllMemeImages] = React.useState(memedata)
    
//     function handleClick(){
//         const memeArray = allMemeImages.data.memes
//         const random = Math.floor(Math.random() * memeArray.length)
//         const url = memeArray[random].url
//         setMeme(prevmeme=> ({...prevmeme,randomImage: url}))
//      }

//     return(
//         <div className="form-cont" >
//             <div className="form">
//             <input type="text"></input>
//             <input type="text"></input>
//             <button className="button" onClick={handleClick}>Get new Meme</button>
//             </div>
//             <div className="div-img"><img src={meme.randomImage} className="meme--image" /></div>
//         </div>
//     )
// }