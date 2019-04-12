(function ($) {
    //「保存」ボタンのイベントを定義
    var target_deny = document.getElementById('bk_save');
    target_deny.addEventListener('click', saveclick, false);

    //「行追加」ボタンのイベントを定義
    var target_deny = document.getElementById('bk_ins');
    target_deny.addEventListener('click', insclick, false);

    function saveclick() {
        var data = [];
        var tr = $("table tbody tr"); //全行を取得
        for (var i = 0, l = tr.length; i < l; i++) {
            var cells = tr.eq(i).children(); //1行目から順にth、td問わず列を取得
            for (var j = 0, m = cells.length; j < m; j++) {
                if (typeof data[i] == "undefined")
                    data[i] = [];
                data[i][j] = cells.eq(j).text(); //i行目j列の文字列を取得
            }
        }

        localStorage.setItem('bk_store', JSON.stringify(data));
    }

    function insclick() {
        var tr = $("table tbody tr"); //全行を取得
        var new_row = tr.length + 1;
        $('tbody').append('<tr><td>' + new_row + '</td><td contenteditable></td><td contenteditable></td><td contenteditable></td></tr>');
    }


    $(function () {
        var tr = $("table tbody tr"); //全行を取得
        var new_row = tr.length;

        var data = localStorage.getItem('bk_store');
        data = JSON.parse(data);

        for (var i = 0; i < data.length; i++) {
            new_row++;
            $('tbody').append('<tr><td>' + new_row + '</td><td contenteditable>'+ data[i][1] +'</td><td contenteditable>'+ data[i][2] +'</td><td contenteditable>'+ data[i][3] +'</td></tr>');
        }
    });

})(jQuery);