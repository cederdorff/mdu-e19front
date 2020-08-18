"use strict"; // to enable strict mode and modern JavaScript functionality

async function fetchInstagramPosts(){
  let response = await fetch("https://instagram.com/cederdorff/?__a=1");
  let data = await response.json();
  console.log(data);
  let posts = data.graphql.user.edge_owner_to_timeline_media.edges;
  console.log(posts);
  appendPosts(posts);
}

function appendPosts(posts){
  let htmlTemplate = "";
  for (const post of posts) {
    let imageUrl = post.node.thumbnail_src;
    console.log(imageUrl);
    htmlTemplate += /*html*/ `
        <img src="${imageUrl}">
    `;
  }
  document.querySelector("#instagram-posts").innerHTML = htmlTemplate;
}

fetchInstagramPosts();