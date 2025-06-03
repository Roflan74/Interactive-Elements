const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', onTooltipClick);
    tooltip.addEventListener("mouseout", onTooltipClick);
});

function onTooltipClick (evt) {
    evt.currentTarget.classList.toggle('tooltip-animated');
}