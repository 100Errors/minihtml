var init = () => {
    var open_info_modal = document.getElementById('open_info_modal');
    var info_modal_div = document.getElementById('info_modal');
    open_info_modal.addEventListener('click', () => {
        info_modal_div.style.display = 'block'; // transition?
    });
    var info_modal_close = document.getElementById('info_modal_close');
    info_modal_close.addEventListener('click', () => {
        info_modal_div.style.display = 'none';
    });
}
export default {init}