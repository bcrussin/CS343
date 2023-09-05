let img = document.getElementById("image");
if (window.location.href.includes("github.io")) {
	img.src = "https://picsum.photos/id/200/200/300";
	img.alt = "image displayed because ON github pages";
}
