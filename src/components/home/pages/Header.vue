<template>
    <div class='header'>
        <div class="header-left">
            <span class='iconfont'>
                &#xe685;
            </span>
        </div>
        <div class="header-search">
            <span class='iconfont'>
                &#xe67d;
            </span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            北京<span class="iconfont">
                &#xe688;
            </span>
        </div>
    </div>
</template>
<style scoped lang='stylus'>

@import '~@/assets/css/var.styl'

.header {
    width: 100%;
    line-height: .88rem;
    background: $bgColor;
    color: $textColor;
    font-size: .36rem;
    display: flex;
}

.header-left {
        width: .4rem;
        padding: 0 .2rem;
        text-align: center;
        font-weight: bold;
    }

.header-search {
    flex:1;
    background: #fff;
    height: .6rem;
    margin:.14rem 0;
    border-radius: .1rem;
    color: #e4e7ea;
    line-height: .6rem;
    font-size: .28rem;
    padding-left: .2rem;
}
.header-right {
    font-size: .28rem;
    padding: 0 .2rem;
}

    
</style>
