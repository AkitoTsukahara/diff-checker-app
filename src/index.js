const remote = require('electron').remote;
const Dialog = remote.dialog;

$('.js-btn').on('click',function() {
    let result = Dialog.showOpenDialog(null, {
        properties: ['openDirectory'],
        title: 'フォルダを選択',
        defaultPath: '.'
    }, (folderNames) => {
        console.log(folderNames);
    });

    let inputFolderPath = '#selected' + $(this).attr("id") + 'Display'
    let inputFolderDisplayPath = '#selected' + $(this).attr("id")

    result.then(function(value){
        $(inputFolderDisplayPath).val(value['filePaths'])
        $(inputFolderPath).text(value['filePaths'])
    });
});


$('.modal-close, .refinemodal-bottom-close, .refinemodal-bottom-btn').click(function(){
    closeModal();
});

function closeModal() {

    let $modal;
    $modal = $('#modal');

    //イベントリスナーを無効にする
    window.removeEventListener('popstate',null);

    //モーダルを非表示にする
    if($modal && $modal.length > 0){
        $modal.fadeOut(300);
        $modal.remove();
    }
}