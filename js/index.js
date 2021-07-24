var app=new Vue({
    el:'#app',
    data:{
        //查询关键字
        keywords:'周杰伦',
        //歌曲数组
        arr:[],
        url:"",
        fengmianurl:"",
        //封面动画
        isShow:false,
        //用户评论
        userarr:[],
        //mvurl地址
        mvUrl:"",
        //显示隐藏mv
        isShowmv:false
    },
    methods:{
        /* 搜索实现  歌曲搜索*/
        getkeywords:function(mvid){
                    var that=this
            //搜索
            axios.get('https://autumnfish.cn/search?keywords='+this.keywords).then(function(response){
                    //console.log(response.data.result.songs)
                    that.arr=response.data.result.songs
            },function(err){
                    console.log(err)
            })
        },
        geturl:function(id){
            //播放
                    var that=this
            axios.get('https://autumnfish.cn/song/url?id='+id).then(function(response){
                    //console.log(response.data.data[0].url)
                    that.url=response.data.data[0].url
            },function(err){
                    console.log(err)
            }),
            //封面
            axios.get('https://autumnfish.cn/song/detail?ids='+id).then(function(response){
                    //console.log(response.data.songs[0].al.picUrl)
                    that.fengmianurl=response.data.songs[0].al.picUrl
            },function(err){
                    console.log(err)
            }),
            //评论
            axios.get('https://autumnfish.cn/comment/hot?type=0&id='+id).then(function(response){
                //console.log(response.data.hotComments)
                that.userarr=response.data.hotComments
        },function(err){
                console.log(err)
        })
            
        },
        //监听音乐 播放
        play:function(){
                this.isShow=true
        },
        //监听音乐 暂停
        pause:function(){
                this.isShow=false
        },
        //mv播放
        getmvUrl:function(mvid){
                //mv
                var that=this
            axios.get('https://autumnfish.cn/mv/url?id='+mvid).then(function(response){
                //console.log(response.data.data.url)
                that.mvUrl=response.data.data.url
                that.isShowmv=true
        },function(err){
                console.log(err)
        })
        },
        //隐藏mv
        hidden:function(){
                this.isShowmv=false
        }
        
           
    }
})
