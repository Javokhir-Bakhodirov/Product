var elLight = document.querySelector(".light");
var elLightMode = document.querySelector(".light-mode");
var elDark = document.querySelector(".dark");
var elDarkMode = document.querySelector(".dark-mode");
var elBody = document.querySelector("body");

elLight.addEventListener("click", function () {
	elBody.classList.toggle("mode");
	elLight.classList.toggle("deg");
	// elLightMode.classList.toggle("hidden");
	elDark.classList.toggle("show");
	elDarkMode.classList.toggle("show");
});

elDark.addEventListener("click", function () {
	elBody.classList.toggle("mode");
	elLight.classList.toggle("show");
	elLightMode.classList.toggle("deg");
	// elDark.classList.toggle("");
	elDarkMode.classList.toggle("hidden");
});
