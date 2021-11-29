$(document).ready(function () {
	const prevBtn = document.querySelector(".products-carousel__btn--left");
	const nextBtn = document.querySelector(".products-carousel__btn--right");
	const app = document.querySelector("html");
	console.log(app.lang);

	$(".products-carousel__products").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: prevBtn,
		nextArrow: nextBtn,
		rtl: app.lang === "ar",
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 890,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
});
