var MY = MY || {};

MY.method = (function() {

    var defaultData = {
        score: '请输入成绩...'
    };
    // 所有数据
    var scoreTable = {};


    /*
     * 公共方法 : 类式继承
     */
    var extend = (function () {
        
        var F = function() {};

        return function(C, P){
            F.prototype = P.prototype;
            C.prototype = new F();
            C.constructor = C;
            C._super = P.prototype;
        }
        
    }())


    /*
     * 构造函数 PlaceFieldEditor : 创建成绩输入
     */
    function PlaceFieldEditor($parentEle) {

        // 私有属性 + 方法 , 传入 Dom

        // 传入的 Li dom
        this.$parentEle = $parentEle;

        // 姓名       
        this.name = null;
        // 成绩
        this.score = null;
        // 默认数据

        this.init();
        this.bindEvents();
    };

    PlaceFieldEditor.prototype = {

        constructor: PlaceFieldEditor,

        init: function() {
            // 初始 + 组装 dom 元素

            // 成绩显示 dom
            this.$span_intro = $('<span class="span-intro"><span/>');
            this.$ele_default = this.$span_intro.text(this.score || defaultData.score);

            // 成绩输入 dom
            this.$span_typing = $('<span class="span-typing" />');
            this.$ele_typing = '<input class="input-score" type="text" value="" /> <button class="btn-save" type="button" >保存</button> <button class="btn-cancle" type="button" >取消</button>'
            this.$span_typing.append(this.$ele_typing);

            this.$parentEle.append(this.$span_intro).append(this.$span_typing);

            this.defaultView();

        },

        bindEvents: function() {
            var self = this;

            this.$parentEle.on('click', '.span-intro', function() {
                var _this = this;
                self.modifyScore(_this);
            });
            this.$parentEle.on('click', '.btn-save', function() {
                var _this = this;
                self.saveScore(_this);
            });
        },

        modifyScore: function(_this) {
            $this = $(_this);
            this.$span_intro.hide();
            this.$span_typing.show();
        },

        saveScore: function(_this) {
            $this = $(_this);

            this.score = $this.prev().val();
            this.name = this.$parentEle.attr('id');
            scoreTable[this.name] = this.score;

            this.$span_intro.text(this.score || defaultData.score);
            this.defaultView();

            console.log(scoreTable);
        },

        defaultView: function() {
            this.$span_intro.show();
            this.$span_typing.hide();
        }
    }


    /*
     * 构造函数 PlaceAreaEditor : 继承自 PlaceFieldEditor
     */
    function PlaceAreaEditor () {
        PlaceFieldEditor.apply(this, arguments);
    }

    extend(PlaceAreaEditor, PlaceFieldEditor);

    PlaceAreaEditor.prototype.init = function(){
    // 初始 + 组装 dom 元素

        // 成绩显示 dom
        this.$span_intro = $('<span class="span-intro"><span/>');
        this.$ele_default = this.$span_intro.text(this.score || defaultData.score);

        // 成绩输入 dom
        this.$span_typing = $('<span class="span-typing" />');
        this.$ele_typing = '<textarea class="input-score" type="text" value="" /> <button class="btn-save" type="button" >保存</button> <button class="btn-cancle" type="button" >取消</button>'
        this.$span_typing.append(this.$ele_typing);

        this.$parentEle.append(this.$span_intro).append(this.$span_typing);

        this.defaultView();
    }


    function getScores() {
        return scoreTable;
    }

    var publicApi = {
        extend : extend,
        PlaceFieldEditor: PlaceFieldEditor,
        PlaceAreaEditor : PlaceAreaEditor,
        getScores: getScores
    };

    return publicApi;

}())
