document.addEventListener("DOMContentLoaded", () => {
    fetch("profiles.json")
        .then(response => response.json())
        .then(data => {
            const profileList = document.getElementById("profileList");

            data.profiles.forEach(profile => {
                const avatar = document.createElement("div");
                avatar.classList.add("avatar");

                // Wrap in a link if 'link' exists
                if (profile.link) {
                    const link = document.createElement("a");
                    link.href = profile.link;
                    link.appendChild(avatar);
                    profileList.appendChild(link);
                } else {
                    profileList.appendChild(avatar);
                }

                // Add profile picture and name
                avatar.innerHTML = `
                    <div class="avatar-img">
                        <img src="${profile.img}" alt="${profile.name}">
                    </div>
                    <p>${profile.name}</p>
                `;
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});
