document.addEventListener("DOMContentLoaded", () => {
    fetch("profiles.json")
        .then(response => response.json())
        .then(data => {
            const profileList = document.getElementById("profileList");

            // Iterate over each category in the profiles object
            Object.keys(data.profiles).forEach(category => {
                // Create a subheading for the category
                const subheading = document.createElement("div");
                subheading.classList.add("category-heading");
                subheading.textContent = category;
                profileList.appendChild(subheading);

                // Iterate over profiles in the current category
                data.profiles[category].forEach(profile => {
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
            });
        });
});