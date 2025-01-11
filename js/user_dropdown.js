let userDropdowContent = document.getElementById('user-dropdown-content-id')

function openUserDropdown() {
    userDropdowContent.classList.toggle('show')

    window.onclick = function (event) {
        if (!event.target.matches('#user_dropdown_btn') && !event.target.matches('#user_dropdown_btn *')) {
            var dropdowns = document.getElementsByClassName('user-dropdown-content');
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}