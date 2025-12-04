document.addEventListener("DOMContentLoaded", () => {
                document.querySelectorAll(".bg-image").forEach(el => {
                    // izvleči URL iz background-image (ignora linear-gradient)
                    const bg = window.getComputedStyle(el).backgroundImage;
                    const urlMatch = bg.match(/url\(["']?(.*?)["']?\)/);

                    if (urlMatch && urlMatch[1]) {
                        const img = new Image();
                        img.src = urlMatch[1];
                        img.onload = () => el.classList.remove("no-bg");  // slika naložena → prikaže se background
                        img.onerror = () => el.classList.add("no-bg");    // slika ni naložena → pokaži <img>
                    } else {
                        el.classList.add("no-bg"); // ni slike → pokaži <img>
                    }
                });
            });