function roulette(){
    let weapon = ['わかばシューター', 'もみじシューター', 'おちばシューター', 'スプラシューター', 'スプラシューターコラボ', 'スプラシューターベッチュー', 'プロモデラーMG(銀)', 'プロモデラーRG(金)', 'プロモデラーPG(銅)', 'N-ZAP85(黒)', 'N-ZAP89(赤)', 'N-ZAP83', 'プライムシューター', 'プライムシューターコラボ', 'プライムシューターベッチュー', 'ジェットスイーパー', 'ジェットスイーパーカスタム', '.52ガロン', '.52ガロンデコ', '.52ガロンベッチュー', '.96ガロン', '.96ガロンデコ', 'L3リールガン', 'L3リールガンD', 'L3リールガンベッチュー', 'H3リールガン', 'H3リールガンD', 'H3リールガンチェリー', 'シャープマーカー', 'シャープマーカーネオ', 'ボールドマーカー', 'ボールドマーカーネオ', 'ボールドマーカー7', 'ボトルガイザー', 'ボトルガイザーフォイル', 'スプラマニューバー', 'スプラマニューバーコラボ', 'スプラマニューバーベッチュー', 'スパッタリー', 'スパッタリー・ヒュー', 'スパッタリー・クリア', 'デュアルスイーパー', 'デュアルスイーパーカスタム', 'クアッドホッパーホワイト', 'クアッドホッパーブラック', 'ケルビン525', 'ケルビン525デコ', 'ケルビン525ベッチュー', 'ホットブラスター', 'ホットブラスターカスタム', 'ロングブラスター', 'ロングブラスターカスタム', 'ロングブラスターネクロ', 'ラピッドブラスター', 'ラピッドブラスターデコ', 'ラピッドブラスターベッチュー', 'ノヴァブラスター', 'ノヴァブラスターネオ', 'ノヴァブラスターベッチュー', 'Rブラスターエリート', 'Rブラスターエリートデコ', 'クラッシュブラスター', 'クラッシュブラスターネオ', 'パブロ', 'パブロ・ヒュー', 'パーマネント・パブロ', 'ホクサイ', 'ホクサイ・ヒュー', 'ホクサイベッチュー', 'スプラローラー', 'スプラローラーコラボ', 'スプラローラーベッチュー', 'カーボンローラー', 'カーボンローラーデコ', 'ダイナモローラー', 'ダイナモローラーテスラ', 'ダイナモローラーベッチュー', 'ヴァリアブルローラー', 'ヴァリアブルローラーフォイル', 'バケットスロッシャー', 'バケットスロッシャーデコ', 'バケットスロッシャーソーダ', 'ヒッセン', 'ヒッセン・ヒュー', 'スクリュースロッシャー', 'スクリュースロッシャーネオ', 'スクリュースロッシャーベッチュー', 'オーバーフロッシャー', 'オーバーフロッシャーデコ', 'エクスプロッシャー', 'エクスプロッシャーカスタム', 'スパイガジェット', 'スパイガジェットソレーラ', 'スパイガジェットベッチュー', 'パラシェルター', 'パラシェルターソレーラ', 'キャンピングシェルター', 'キャンピングソレーラ', 'キャンピングシェルターカーモ', 'スプラスピナー', 'スプラスピナーコラボ', 'スプラスピナーベッチュー', 'バレルスピナー', 'バレルスピナーデコ', 'バレルスピナーリミックス', 'ハイドラント', 'ハイドラントカスタム', 'クーゲルシュライバー', 'クーゲルシュライバー・ヒュー', 'ノーチラス47', 'ノーチラス79', 'スプラチャージャー', 'スプラチャージャーコラボ', 'スプラチャージャーベッチュー', 'スプラスコープ', 'スプラスコープコラボ', 'スプラスコープベッチュー', 'リッター4K', 'リッター4Kカスタム', '4Kスコープ', '4Kスコープカスタム', 'ソイチューバー', 'ソイチューバーカスタム', 'スクイックリンα', 'スクイックリンβ', 'スクイックリンγ', '十四式竹筒銃・甲', '十四式竹筒銃・乙', '十四式竹筒銃・丙']
    let random1 = Math.floor(Math.random() * weapon.length);
    let random2 = Math.floor(Math.random() * weapon.length);
    let random3 = Math.floor(Math.random() * weapon.length);
    let random4 = Math.floor(Math.random() * weapon.length);
    let random5 = Math.floor(Math.random() * weapon.length);
    let random6 = Math.floor(Math.random() * weapon.length);
    let random7 = Math.floor(Math.random() * weapon.length);
    let random8 = Math.floor(Math.random() * weapon.length);
    
    const roulette_p1 = document.querySelector('#box-weapon1');
    roulette_p1.textContent = weapon[random1];
    const roulette_p2 = document.querySelector('#box-weapon2');
    roulette_p2.textContent = weapon[random2];
    const roulette_p3 = document.querySelector('#box-weapon3');
    roulette_p3.textContent = weapon[random3];
    const roulette_p4 = document.querySelector('#box-weapon4');
    roulette_p4.textContent = weapon[random4];
    const roulette_p5 = document.querySelector('#box-weapon5');
    roulette_p5.textContent = weapon[random5];
    const roulette_p6 = document.querySelector('#box-weapon6');
    roulette_p6.textContent = weapon[random6];
    const roulette_p7 = document.querySelector('#box-weapon7');
    roulette_p7.textContent = weapon[random7];
    const roulette_p8 = document.querySelector('#box-weapon8');
    roulette_p8.textContent = weapon[random8];
    
}






