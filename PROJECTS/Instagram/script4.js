const images = [
    {
        profilePic:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
    },
    {
        profilePic:
            "https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        story: "https://plus.unsplash.com/premium_photo-1669824376679-268d3739acf3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
    },
    {
        profilePic:
            "https://images.unsplash.com/photo-1516195851888-6f1a981a862e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmxzfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1516522973472-f009f23bba59?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHN8ZW58MHx8MHx8fDA%3D",
    },
    {
        profilePic:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story: "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    },
    {
        profilePic:
            "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww",
    },
];

let clutter = "";

images.forEach(function (ele, idx) {
    clutter += `<div class="story">
                <img id="${idx}" src="${ele.profilePic}" alt="">
            </div>`;
});

document.querySelector("#storiya").innerHTML = clutter;

console.log("1 point ");

document.querySelector("#storiya").addEventListener("click", function (dets) {
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${
        images[dets.target.id].story
    })`;

    setTimeout(() => {
        document.querySelector("#full-screen").style.display = "none";
    }, 1000);
});
