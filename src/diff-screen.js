/**
 * できること
 * before,afterディレクトリに保存されている画像の差分を比較します
 * （双方のディレクトリには同名の画像が保存されていることが前提になっています。）
 *
 * 想定する利用シーン
 * スタイルシートなど環境のアップデート前後でレイアウトの崩れを検出する
 *
 * 使い方
 * 1.beforeとafterに同名の画像を格納
 * 2.node diff-screen.js を実行
 * 3.差分のある画像はコンソールからお知らせ
 * 3.比較結果はresultディレクトリに保存
 *
 */

const PixelDiff = require('pixel-diff');
const fs = require('fs');

const button = document.querySelector('.js-button');

button.addEventListener('click', function (clickEvent) {

  //バリデーション
  if($('#selectedBeforeFolder').val() === ''){
    alert('フォルダを指定してください')
    return false
  }

  if($('#selectedAfterFolder').val() === ''){
    alert('フォルダを指定してください')
    return false
  }

  if($('#selectedSaveFolder').val() === ''){
    alert('フォルダを指定してください')
    return false
  }

  const beforepath = $('#selectedBeforeFolder').val();
  const afterpath = $('#selectedAfterFolder').val();
  const savepath = $('#selectedSaveFolder').val();
  const fileList = fs.readdirSync(beforepath);
  const fileCount = fileList.length

  let $modal;
  $modal = $('#modal');
  $modal.fadeIn(300);
  $modal.find('.refinemodal-wrap').scrollTop(0);

  let count = 1;

  for (let i = 0; i < fileCount; i++) {
    if(fileList[i] === '.DS_Store'){
      continue;
    }

    let imageBeforePath = beforepath + '/' + fileList[i]
    let imageAfterPath = afterpath + '/' + fileList[i]
    let imageOutputPath = savepath + '/diff-' + fileList[i]

    let diff = new PixelDiff({
      imageAPath: imageBeforePath,
      imageBPath: imageAfterPath,
      imageOutputPath: imageOutputPath
    });

    diff.run((error, result) => {
      if (error) {
        throw error;
      } else {
        if (result.differences !== 0) {
          $('.running-info').append(fileList[i] + 'で差分が確認されました。<br>')
          console.log(fileList[i] + 'で差分が確認されました。')
          count++;
        }else{
          count++;
        }
        if( count === fileCount ){
          $('#loadingImage').hide()
          //$('.running-info').hide()
          $('#runningTitle').text('finshed!')
        }
      }
    });

  }

});