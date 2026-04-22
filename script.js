const dateInput = document.getElementById("date");
const timeSelect = document.getElementById("time");
const form = document.getElementById("bookingForm");
const status = document.getElementById("status");

// Edit these anytime
const unavailableDates = ["2026-04-25"];
const bookedSlots = {
    "2026-04-26": ["10:00"]
};

const times = ["09:00", "10:00", "11:00", "13:00", "14:00"];

// Update time slots
dateInput.addEventListener("change", () => {
    const date = dateInput.value;
    timeSelect.innerHTML = "";

    if (unavailableDates.includes(date)) {
        status.textContent = "❌ Not available this day";
        return;
    }

    status.textContent = "";

    const taken = bookedSlots[date] || [];

    times.forEach(t => {
        if (!taken.includes(t)) {
            const option = document.createElement("option");
            option.value = t;
            option.textContent = t;
            timeSelect.appendChild(option);
        }
    });

    if (timeSelect.innerHTML === "") {
        status.textContent = "⚠️ No time slots available";
    }
});

// Save booking locally (demo)
// ================= GALLERY SYSTEM =================

// Get event name from URL
const params = new URLSearchParams(window.location.search);
const eventName = params.get("event");

// Event data (EDIT THIS)
const eventData = {
    wedding1: {
        password: "1234",
        images: ["1.jpg", "2.jpg"]
    },
    birthday1: {
        password: "abcd",
        images: ["1.jpg", "2.jpg"]
    }
};

let unlocked = false;

// Load images
function loadImages() {
    const gallery = document.getElementById("gallery");
    if (!gallery) return;

    const event = eventData[eventName];
    if (!event) return;

    event.images.forEach(img => {
        const div = document.createElement("div");

        div.innerHTML = `
            <img src="images/${eventName}/${img}">
            <button onclick="downloadImage('${img}')">Download</button>
        `;

        gallery.appendChild(div);
    });
}

// ================= EVENT GALLERY =================

const params = new URLSearchParams(window.location.search);
const eventName = params.get("event");

const eventData = {
    Birthdayalex: ["1.jpg", "2.jpg"]
};

function loadImages() {
    const gallery = document.getElementById("gallery");
    if (!gallery) return;

    const images = eventData[eventName];
    if (!images) return;

    images.forEach(img => {
        const div = document.createElement("div");

        div.innerHTML = `
            <img src="Birthdayalex/${img}">
            <button onclick="downloadImage('${eventName}', '${img}')">Download</button>
        `;

        gallery.appendChild(div);
    });
}

function downloadImage(folder, img) {
    const link = document.createElement("a");
    link.href = `${folder}/${img}`;
    link.download = img;
    link.click();
}

loadImages();
