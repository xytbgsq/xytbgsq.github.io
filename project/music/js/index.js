var app = new Vue({
    el: '#app',
    data: {
        keywords: '周杰伦',
        arr: [],
        url: "",
        fengmianurl: "./img/show.png",
        isShow: false,
        isShowfm: false,
        userarr: [],
        mvUrl: "",
        isShowmv: false
    },
    methods: {
        getkeywords: function(mvid) {
            var that = this
            axios.get('https://autumnfish.cn/search?keywords=' + this.keywords).then(function(response) {
                //console.log(response.data.result.songs)
                that.arr = response.data.result.songs
            }, function(err) {
                console.log(err)
            })
        },
        geturl: function(id) {
            var that = this
            axios.get('https://autumnfish.cn/song/url?id=' + id).then(function(response) {
                    //console.log(response.data.data[0].url)
                    that.url = response.data.data[0].url
                }, function(err) {
                    console.log(err)
                }),
                axios.get('https://autumnfish.cn/song/detail?ids=' + id).then(function(response) {
                    //console.log(response.data.songs[0].al.picUrl)
                    that.fengmianurl = response.data.songs[0].al.picUrl
                }, function(err) {
                    console.log(err)
                }),
                axios.get('https://autumnfish.cn/comment/hot?type=0&id=' + id).then(function(response) {
                    //console.log(response.data.hotComments)
                    that.userarr = response.data.hotComments
                }, function(err) {
                    console.log(err)
                })

        },
        play: function() {
            this.isShow = true
            this.isShowfm = true
        },
        pause: function() {
            this.isShow = false
        },
        getmvUrl: function(mvid) {
            var that = this
            axios.get('https://autumnfish.cn/mv/url?id=' + mvid).then(function(response) {
                //console.log(response.data.data.url)
                that.mvUrl = response.data.data.url
                that.isShowmv = true
            }, function(err) {
                console.log(err)
            })
        },
        hidden: function() {
            this.isShowmv = false
        }


    }
})