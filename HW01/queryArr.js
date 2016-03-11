/**
 * Created by Administrator on 2016/3/11.
 */
/*
 * ����ģ�庯��
 */
var template = function (queryArr) {
    var count = 0;
    for (var i = 0; i < queryArr.length; i++) {
        var e = queryArr[i];
        if ($express) {
            count++;
        }
    }
    return count;
}
/*
 * ģ�崴������
 */
var createIntance = function (exp) {
    var fun = template.toString().replace("$express", exp).toString();
    return eval("0," + fun);
}
var testTodo = function () {
    var testArr = [
        { name: "����", age: 20 },
        { name: "����", age: 25 },
        { name: "��������", age: 28 },
        { name: "С��", age: 30 }
    ];
    var func = createIntance("e.age>=25");
    alert(func(testArr));
}
/****************** JS ʵ�� JSON��ѯ **********************/

// ���峣�õĺ���
var len = function (s) { return s.length; }
var left = function (s, n) { return s.substr(0, n); }
var right = function (s, n) { return s.substr(-n); }
var index = function (s, find) { return s.indexOf(find) + 1; }
// ��չԭ�ͷ���
var _proto = Object.prototype;
// ����,������ٲ���
var _cache = {};
// ��չ�����
var _alias = [
    /@/g, "_e.",
    /AND/gi, "&&",
    /OR/gi, "||",
    /<>/g, "!=",
    /NOT/gi, "!",
    /([^=<>])=([^=]|$)/g, '$1==$2'
];
var _rQuote = /""/g;
var _rQuoteTemp = /!~/g;
// ����
var _complite = function (code) {
    return eval("0," + code);
}
// ����չ����ת���ɱ�׼��JS����
var _interpret = function (exp) {
    exp = exp.replace(_rQuote,"!~");
    var arr = exp.split('"');
    var i, n = arr.length;
    var k = _alias.length;
    for (var i = 0; i < n; i += 2) {
        var s = arr[i];
        for (var j = 0; j < k; j += 2) {
            if (index(s, _alias[j]) > -1) {
                s = s.replace(_alias[j], _alias[j + 1]);
            }
        }
        arr[i] = s;
    }
    for (var i = 1; i < n; i += 2) {
        arr[i] = arr[i].replace(_rQuoteTemp, '\\"');
    }
    return arr.join('"');
}
// ����ģ����
var _templ = function (_list) {
    var _ret = [];
    var _i = -1;
    for (var _k in _list) {
        var _e = _list[_k];
        if (_e != _proto[_k]) {
            if ($C) {
                _ret[++_i] = _e;
            }
        }
    }
    return _ret;
} .toString();
// ��չ��ѯ�ķ���
_proto.Query = function (exp) {
    if (!exp) {
        return [];
    }
    var fn = _cache[exp];
    try {
        if (!fn) {
            var code = _interpret(exp);
            code = _templ.replace("$C", code);
            fn = _cache[exp] = _complite(code);
        }
        return fn(this);
    } catch (e) {
        return [];
    }
}
var doTest = function () {
    var heros = [
        // ��============��=====��=======����====����=====����====
        {name: '����Ů��', DP: 38, AP: 1.3, Str: 16, Dex: 16, Int: 21 },
        { name: '��Ĭ��ʿ', DP: 39, AP: 1.1, Str: 17, Dex: 16, Int: 21 },
        { name: '���Ⱥ���', DP: 51, AP: 6.0, Str: 21, Dex: 21, Int: 18 },
        { name: '�ͽ�����', DP: 39, AP: 4.0, Str: 17, Dex: 21, Int: 16 },
        { name: '�綾��ʿ', DP: 45, AP: 3.1, Str: 18, Dex: 22, Int: 15 },
        { name: '��֮����', DP: 38, AP: 1.1, Str: 16, Dex: 15, Int: 22 },
        { name: '������ʿ', DP: 49, AP: 0.6, Str: 25, Dex: 11, Int: 25 }
        //...
    ];
    var match = heros.Query('@Str>20 AND @Dex>20');
    ShowResult(match[0]);

    // ��ѯ����ʿ����β��
    // �������Ĭ��ʿ,�綾��ʿ,������ʿ
    var match = heros.Query('right(@name,1)="ʿ"');
    ShowResult(match[0]);
}
function ShowResult(result) {
    alert(result.name + " " + result.DP + " " + result.AP + " " + result.Str + " " + result.Dex + " " + result.Int);
}