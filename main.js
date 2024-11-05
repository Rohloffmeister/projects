const linksContainer = document.getElementById("links");
let links = null;

fetch("./links.json").then((response) => {
    if (!response.ok) { throw new Error("Error loading json"); }
    return response.json()
}).then((data) => {
    FillLinks(data);
    return;
})



function FillLinks(data) {
    console.log(data);
    for(const element of data) {
        console.log(element)
        let container = `
                  <div class="link-container">
            <a
              href="`+ element["links"]["livepage"] + `"
              target="_blank"
              ><button class="btn">`+ element["title"] +`</button></a
            ><a
              href="`+ element["links"]["githubrepo"] + `"
              target="_blank"
              ><button class="btn"><img src="assets/github.png" /></button>
            </a>
          </div>
        `
        linksContainer.innerHTML = linksContainer.innerHTML + container;
    };
    return 0;
}






