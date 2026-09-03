document.addEventListener("DOMContentLoaded", function () {


/* ================= MOBILE SIDEBAR ================= */

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

if (menuBtn) {
    menuBtn.addEventListener("click", function () {
        sidebar.classList.toggle("show");
    });
}


/* Close sidebar when clicking outside */

document.addEventListener("click", function (event) {

    if (
        window.innerWidth <= 768 &&
        sidebar.classList.contains("show") &&
        !sidebar.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {
        sidebar.classList.remove("show");
    }

});


/* ================= ACTIVE MENU ================= */

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".menu-item").forEach(function (item) {

    const itemPage = item.getAttribute("href");

    if (itemPage === currentPage || (currentPage === "" && itemPage === "index.html")) {
        document.querySelectorAll(".menu-item").forEach(el => {
            el.classList.remove("active");
        });

        item.classList.add("active");
    }

});


/* ================= NOTIFICATION ================= */

const notification = document.querySelector(".notification");

if (notification) {

    notification.addEventListener("click", function () {

        alert(
            "You have 2 pending leave requests.\n\n" +
            "• Sick Leave - Awaiting approval\n" +
            "• Casual Leave - Awaiting approval"
        );

    });

}


/* ================= SEARCH ================= */

const searchButton = document.querySelector(".icon-btn");

if (searchButton) {

    searchButton.addEventListener("click", function () {

        const search = prompt("What would you like to search?");

        if (search && search.trim() !== "") {
            alert("Searching for: " + search);
        }

    });

}


/* ================= PROFILE ================= */

const profile = document.querySelector(".profile");

if (profile) {

    profile.addEventListener("click", function () {

        const openProfile = confirm(
            "Employee Profile\n\n" +
            "Name: Sadhana\n" +
            "Role: Employee\n\n" +
            "Open profile page?"
        );

        if (openProfile) {
            window.location.href = "profile.html";
        }

    });

}


/* ================= APPLY BUTTON ================= */

const applyButton = document.querySelector(".apply-btn");

if (applyButton) {

    applyButton.addEventListener("click", function () {

        console.log("Opening leave application form...");

    });

}


/* ================= YEAR SELECT ================= */

const periodSelect = document.querySelector(".period-select");

if (periodSelect) {

    periodSelect.addEventListener("change", function () {

        console.log("Selected year:", this.value);

    });

}


/* ================= QUICK ACTIONS ================= */

document.querySelectorAll(".quick-action").forEach(function (action) {

    action.addEventListener("mouseenter", function () {
        this.style.background = "#fafbff";
    });

    action.addEventListener("mouseleave", function () {
        this.style.background = "transparent";
    });

});


});
