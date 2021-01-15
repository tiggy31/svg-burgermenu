
const accessToken = "IGQVJWaFUzVmprdU1NdWVpUE51ak9SVkkzOUptbGtIWDkteDBHeWJlb3NsMG9BbVVrelV3d1NJU0lCU0FoNlB1MEpuZAmxIMHhiWG5RZAFBTNTNJT0E3SUI0VWZAmZA2ZAOTERTRXhJMGpvQmlHYThsMnlDRwZDZD"
const fields = "id,caption,media_type,timestamp,username,media_url,permalink"
const apiurl = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${accessToken}`
const section = document.querySelector("section")
const fetchPosts = async() => {
    try {
  const response = await fetch(apiurl)
  const {data} = await response.json()
  section.innerHTML = ""
    data.forEach(post => {
        let a = document.createElement("a")
           a.href = post.permalink
           a.target = "_blank"
           a.rel = "noreferrer noopener"
    if(post.media_type === "VIDEO") {
        let video = document.createElement("video")
            video.src = post.media_url   
            video.preload = true
            video.autoplay = true
            video.muted = true
            video.loop = true   
            a.appendChild(video)
    } else {

        let img = document.createElement("img")
              img.src = post.media_url
              a.appendChild(img)

         let p = document.createElement("p") 
            p.innerHTML = post.caption   
            a.appendChild(p)
    }
      section.appendChild(a)   
     
    })

    } catch(error) {
        console.log(error)
    }
}




fetchPosts()