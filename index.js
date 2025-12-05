let menu = document.querySelector('#menu-icon');
            let navlist = document.querySelector('.navlist');

            menu.onclick = () => {
                menu.classList.toggle('bx-x');
                navlist.classList.toggle('open');
            }
















const dropdown = document.querySelector('.mobile-dropdown > a');
            const dropdownLi = document.querySelector('.mobile-dropdown');

            dropdown.addEventListener('click', function(e){
                e.preventDefault(); // prepreči redirect
                dropdownLi.classList.toggle('open');
            });
