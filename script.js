// Verifica se o dispositivo é móvel
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Desabilita o scroll em dispositivos móveis
function disableScroll() {
    if (isMobileDevice()) {
        document.body.style.overflow = "hidden";
    }
}

// Chama a função para desabilitar o scroll
disableScroll();

/* Preloader configuration  */
function closepreloader(){
    document.getElementById("preloader").style.display = 'none';
}
window.addEventListener("load",function(){
    setTimeout(closepreloader, 2000);
    
});
